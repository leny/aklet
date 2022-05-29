/* leny/aklèt
 *
 * /src/components/game/article.jsx - Game Component: article
 *
 * coded by leny
 * started at 29/05/2022
 */

import classnames from "classnames";
import PropTypes from "prop-types";
import {useContext, useEffect, useRef, Fragment} from "react";

import {GameStoreContext} from "store/game";
import {BSP} from "core/constants";

import Word from "components/game/word";

const Article = () => {
    const {article:{ title, extract }} = useContext(GameStoreContext);

    return (
        <div>
            <h3 className={classnames("title", "mb-2")}>
                {title.map((word, i) => (
                    <Word key={`word_${i}`} {...word} />
                ))}
            </h3>
            <p className={classnames("is-size-5")}>
                {extract.map((word, i) => (
                    <Word key={`word_${i}`} {...word} />
                ))}
            </p>
        </div>
    );
};

Article.propTypes = {};

export default Article;
