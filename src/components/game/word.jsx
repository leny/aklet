/* leny/aklèt
 *
 * /src/components/game/word.jsx - Game Component: word
 *
 * coded by leny
 * started at 29/05/2022
 */

import classnames from "classnames";
import PropTypes from "prop-types";
import {useContext, useEffect, useRef} from "react";

import {GameStoreContext} from "store/game";
import {NBSP} from "core/constants";

import Button from "components/commons/button";

const Word = ({size}) => {
    const {title, extract} = useContext(GameStoreContext);

    return (
        <span className={classnames("word")}>
            {Array.from(new Array(size).keys()).map((_,i)=>(
                <span key={`letter_${i}`} className={classnames("letter")}>{NBSP}</span>
            ))}
        </span>
    );
};

Word.propTypes = {
    size: PropTypes.number.isRequired,
};

export default Word;
