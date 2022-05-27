/* leny/aklèt
 *
 * /src/server/index.js - Server
 *
 * coded by leny
 * started at 27/05/2022
 */

const axios = require("axios");
const ShortUniqueId = require("short-unique-id");
const uuid = new ShortUniqueId({length: 6});
const fastify = require("fastify");
const spinner = require("ora")();

const WIKI_API_RANDOM_ARTICLE =
    "https://fr.wikipedia.org/api/rest_v1/page/random/summary";
const PORT = 3000;
const app = fastify();

(async () => {
    app.get("/", () => "Hello World!");

    app.get("/start", async (_, reply) => {
        const gameId = uuid();
        const logPrefix = `Starting game(${gameId})`;
        spinner.start(logPrefix);

        spinner.text = `${logPrefix}: fetch random article`;
        const {data: article} = await axios.get(WIKI_API_RANDOM_ARTICLE);

        spinner.succeed(`Started game(${gameId})`);

        console.log("article:", article);

        reply.send({gameId});
    });

    await app.listen(PORT);

    console.log(`Server running at http://localhost:${PORT}`);
})();
