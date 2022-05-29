/* leny/aklèt
 *
 * /src/store/game/actions/start-game.js - Game Store Action: start game
 *
 * coded by leny
 * started at 29/05/2022
 */

import {ACTION_PREPARE_GAME, ACTION_START_GAME} from "store/game/types";
import axios from "axios";
import {
    DEBUG,
    WIKI_API_RANDOM_ARTICLE,
    EXTRACT_MINIMUM_WORD_SIZE,
    TITLE_MINIMUM_WORD_SIZE,
} from "core/constants";
import HashIds from "hashids";
import tokenize from "@stdlib/nlp-tokenize";

const hashid = new HashIds();
const punctuation = ".,;:?+=-_()[]{}".split("");
const whitespace = /\s+/i;

const parser = s =>
    tokenize(s, true).map(w => ({
        size: w.length,
        value: {
            display: w,
            compare: w.toLowerCase(),
        },
        isWhitespace: whitespace.test(w),
        isPunctuation: punctuation.includes(w),
        isGuessed: false,
    }));

export default () => async dispatch => {
    dispatch({type: ACTION_PREPARE_GAME});

    // fetch article
    let article,
        attempt = 0;

    do {
        DEBUG && console.log(`fetch random article (attempt: ${++attempt})`);
        // eslint-disable-next-line no-await-in-loop
        const {data} = await axios.get(WIKI_API_RANDOM_ARTICLE);
        article = data;
    } while (
        parser(article.extract).length < EXTRACT_MINIMUM_WORD_SIZE ||
        parser(article.title).length > TITLE_MINIMUM_WORD_SIZE
    );
    DEBUG && console.log("article(title):", article.title);
    DEBUG && console.log("article(extract):", article.extract);

    // parse & prepare data
    const hash = hashid.encode(article.pageid);
    const url = article.content_urls.desktop.page;
    const rawTitle = article.title;
    const rawExtract = article.extract;
    const parsedTitle = parser(rawTitle);
    const parsedExtract = parser(rawExtract);

    dispatch({
        type: ACTION_START_GAME,
        source: {title: rawTitle, extract: rawExtract, url},
        article: {
            hash,
            title: parsedTitle,
            extract: parsedExtract,
        },
    });
};
