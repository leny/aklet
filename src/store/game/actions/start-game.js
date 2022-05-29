/* leny/aklèt
 *
 * /src/store/game/actions/start-game.js - Game Store Action: start game
 *
 * coded by leny
 * started at 29/05/2022
 */

import {ACTION_PREPARE_GAME, ACTION_START_GAME} from "store/game/types";
import axios from "axios";
import {SERVER_ROOT} from "core/constants";

export default () => async dispatch => {
    dispatch({type: ACTION_PREPARE_GAME});

    const {data} = await axios.get(`${SERVER_ROOT}/start`);

    const {game, hash, title, extract} = data;

    dispatch({type: ACTION_START_GAME, game, hash, title, extract});
};
