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
    // STEP_CHECK,
    // STEP_RESULTS,
    ACTION_PREPARE_GAME,
    ACTION_START_GAME,
} from "./types";

import {createContext} from "react";

export const GameStoreContext = createContext();

export const initState = () => ({
    game: null, // String: id of your game (personal)
    hash: null, // String: hash of the article to find (to share)
    title: [], // Array of Words
    extract: [], // Array of Words
    attempts: 0, // Number: number of attempts (score)
    words: [], // Array of strings (guessed words)
    step: STEP_LOADING,
});

const reducersMap = new Map();

reducersMap.set(ACTION_PREPARE_GAME, initState);

reducersMap.set(ACTION_START_GAME, (state, {game, hash, title, extract}) => ({
    ...state,
    game,
    hash,
    title,
    extract,
    step: STEP_PLAY,
}));

export const reducer = (state, {type, ...payload}) => {
    DEBUG && console.log("DEBUG:reducer:", {type, payload});

    return reducersMap.has(type)
        ? reducersMap.get(type)(state, payload)
        : state;
};
