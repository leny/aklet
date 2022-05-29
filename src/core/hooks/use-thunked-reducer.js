/* leny/aklèt
 *
 * /src/core/hooks/use-thunked-reducer.js - Custom hook: useThunkedReducer
 *
 * coded by leny
 * started at 29/05/2022
 */

import {useReducer, useMemo} from "react";

export const useThunkedReducer = (...props) => {
    const [state, dispatch] = useReducer(...props);
    const thunkedDispatch = useMemo(
        () => action => {
            if (typeof action === "function") {
                action(thunkedDispatch);
            } else {
                dispatch(action);
            }
        },
        [dispatch],
    );

    return [state, thunkedDispatch];
};
