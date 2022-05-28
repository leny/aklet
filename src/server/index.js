/* leny/aklèt
 *
 * /src/server/index.js - Server
 *
 * coded by leny
 * started at 27/05/2022
 */

/* eslint-disable no-await-in-loop */

const DEBUG = true;

const axios = require("axios");
const ShortUniqueId = require("short-unique-id");
const uuid = new ShortUniqueId({length: 6});
const fastify = require("fastify");
const spinner = require("ora")();
const HashIds = require("hashids");
const hashid = new HashIds();

const WIKI_API_RANDOM_ARTICLE =
    "https://fr.wikipedia.org/api/rest_v1/page/random/summary";
const PORT = 3000;
const EXTRACT_MINIMUM_WORD_SIZE = 50;
const app = fastify();

const games = new Map();

(async () => {
    app.get("/", () => "Hello World!");

    app.get("/start", async (_, reply) => {
        const game = uuid();
        const logPrefix = `Starting game(${game})`;
        spinner.start(logPrefix);

        let article,
            attempt = 0;

        do {
            spinner.text = `${logPrefix}: fetch random article (attempt: ${++attempt})`;
            const {data} = await axios.get(WIKI_API_RANDOM_ARTICLE);
            article = data;
        } while (
            article.extract.split(/\s+/).length < EXTRACT_MINIMUM_WORD_SIZE
        );

        const hash = hashid.encode(article.pageid);
        const url = article.content_urls.desktop.page;
        const rawTitle = article.title;
        const rawExtract = article.extract;
        const parsedTitle = rawTitle.split(/\s+/).map(s => ({size: s.length}));
        const parsedExtract = rawExtract
            .split(/\s+/)
            .map(s => ({size: s.length}));

        spinner.succeed(`Started game(${game})`);

        games.set(game, {
            game,
            hash,
            article: {title: rawTitle, extract: rawExtract, url},
            state: {
                attempts: 0,
                title: parsedTitle,
                extract: parsedExtract,
            },
        });

        DEBUG &&
            console.log("article:", {title: rawTitle, extract: rawExtract});

        reply.send({
            game,
            hash,
            title: parsedTitle,
            extract: parsedExtract,
            attempts: 0,
        });
    });

    await app.listen(PORT);

    console.log(`Server running at http://localhost:${PORT}`);
})();
