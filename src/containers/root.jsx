/* leny/aklèt
 *
 * /src/containers/root.jsx - Container: Root
 *
 * coded by leny
 * started at 29/05/2022
 */

import {useState, useEffect} from "react";
import classnames from "classnames";

import "styles/main.scss";
import bcgImage from "url:assets/bcg.jpg?as=webp&width=1920&quality=50";

import {MODE_MENU, MODE_GAME,
    // MODE_RESULTS,
} from "core/constants";

import MenuContainer from "containers/menu";

const RootContainer = () => {
    const [mode]=useState(MODE_MENU);

    useEffect(()=>{
        document.querySelector("html").style.backgroundImage = `url(${bcgImage})`;
    },[]);

    if (mode===MODE_GAME) {
        return (
            <p>{"MODE_GAME"}</p>
        );
    }

    return (
        <MenuContainer />
    );
};

export default RootContainer;
