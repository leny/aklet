/* leny/aklèt
 *
 * /src/store/game/index.js - Store: game
 *
 * coded by leny
 * started at 29/05/2022
 */

import {DEBUG} from "core/constants";
import {
    STEP_LOADING,
    STEP_PLAY,
    STEP_CHECK,
    // STEP_RESULTS,
    ACTION_PREPARE_GAME,
    ACTION_START_GAME,
    ACTION_SUBMIT_WORD,
    ACTION_PROCESS_WORD,
} from "./types";

import {createContext} from "react";

export const GameStoreContext = createContext();

export const initState = () => ({
    game: {
        score: 0, // Number: attempts to find the article's title
        words: new Set(), // Set<String>: submitted words
    },
    source: {
        title: null, // String: real title of the article
        extract: null, // String: real extract of the article
        url: null, // String: url of the article on wikipedia
    },
    article: {
        hash: null, // String: hash of the article to find (to share)
        title: null, // Array<Word>: obfuscated data of the title
        extract: null, // Array<Word>: obfuscated data of the extract
    },
    step: STEP_LOADING,
});

const reducersMap = new Map();

reducersMap.set(ACTION_PREPARE_GAME, initState);

reducersMap.set(ACTION_START_GAME, (state, {source, article}) => ({
    ...state,
    source,
    article,
    step: STEP_PLAY,
}));

reducersMap.set(ACTION_SUBMIT_WORD, (state, {word}) => {
    const words = state.game.words.add(word);

    return {
        ...state,
        game: {
            ...state.game,
            score: words.size,
            words,
        },
        step: STEP_CHECK,
    };
});

reducersMap.set(ACTION_PROCESS_WORD, (state, {title, extract}) => ({
    ...state,
    article: {
        ...state.article,
        title,
        extract,
    },
    step: STEP_PLAY,
}));

export const reducer = (state, {type, ...payload}) => {
    DEBUG && console.log("DEBUG:reducer:", {type, payload});

    return reducersMap.has(type)
        ? reducersMap.get(type)(state, payload)
        : state;
};
