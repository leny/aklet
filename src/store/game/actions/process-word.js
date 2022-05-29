/* leny/aklèt
 *
 * /src/store/game/actions/process-word.js - Game Store Action: process word
 *
 * coded by leny
 * started at 29/05/2022
 */

import {ACTION_SUBMIT_WORD, ACTION_PROCESS_WORD} from "store/game/types";

export default (word, tit, ext) => dispatch => {
    dispatch({type: ACTION_SUBMIT_WORD, word});

    const title = tit.map(w => ({
        ...w,
        isGuessed: w.isGuessed || word === w.value.compare,
    }));
    const extract = ext.map(w => ({
        ...w,
        isGuessed: w.isGuessed || word === w.value.compare,
    }));

    // TODO: check for whole title isGuessed -> game is won

    dispatch({
        type: ACTION_PROCESS_WORD,
        title,
        extract,
    });
};
