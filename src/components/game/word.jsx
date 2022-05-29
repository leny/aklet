/* leny/aklèt
 *
 * /src/components/game/word.jsx - Game Component: word
 *
 * coded by leny
 * started at 29/05/2022
 */

import classnames from "classnames";
import PropTypes from "prop-types";

import {BSP, NBSP} from "core/constants";

const Word = ({size, value: {display, compare}, isWhitespace, isPunctuation, isGuessed}) => {
    if (isGuessed||isPunctuation) {
        return display;
    }

    if (isWhitespace) {
        return BSP;
    }

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
    value: PropTypes.shape({
        display: PropTypes.string,
        compare: PropTypes.string,
    }),
    isWhitespace: PropTypes.bool,
    isPunctuation: PropTypes.bool,
    isGuessed: PropTypes.bool,
};

export default Word;
