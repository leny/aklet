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
    title: null, // Array of Words
    extract: null, // Array of Words
    attempts: null, // Number: number of attempts (score)
    step: STEP_LOADING,
});

const reducersMap = new Map();

reducersMap.set(
    ACTION_PREPARE_GAME,
    (state, {game, hash, title, extract, attempts}) => ({
        game,
        hash,
        title,
        extract,
        attempts,
        step: STEP_LOADING,
    }),
);

reducersMap.set(ACTION_START_GAME, state => ({
    ...state,
    step: STEP_PLAY,
}));

export const reducer = (state, {type, ...payload}) => {
    DEBUG && console.log("DEBUG:reducer:", {type, payload});

    return reducersMap.has(type)
        ? reducersMap.get(type)(state, payload)
        : state;
};
