/* leny/aklèt
 *
 * /src/containers/game.jsx - Game Container
 *
 * coded by leny
 * started at 29/05/2022
 */

import {useEffect, useCallback} from "react";
import PropTypes from "prop-types";
import {useThunkedReducer} from "core/hooks/use-thunked-reducer";

import {DEBUG} from "core/constants";

import {
    STEP_LOADING,
    STEP_PLAY,
    STEP_CHECK,
    // STEP_RESULTS,
} from "store/game/types";
import {initState, reducer, GameStoreContext} from "store/game";

import Loading from "components/game/loading";
import Play from "components/game/play";

import startGame from "store/game/actions/start-game";

const {Provider: GameStoreContextProvider} = GameStoreContext;

const GameContainer = () => {
    const [state, dispatch] = useThunkedReducer(reducer, null, initState);
    DEBUG && console.log("DEBUG:state:", state);

    // launch game
    useEffect(() => {
        dispatch(startGame());
    }, []);

    if ([STEP_PLAY, STEP_CHECK].includes(state.step)) {
        return (
            <GameStoreContextProvider value={{...state, dispatch}}>
                <Play />
            </GameStoreContextProvider>
        );
    }

    // state === STEP_LOADING
    return (
        <GameStoreContextProvider value={{...state, dispatch}}>
            <Loading>
                <p>{"Préparation de la partie…"}</p>
            </Loading>
        </GameStoreContextProvider>
    );
};

GameContainer.propTypes = {};

export default GameContainer;
