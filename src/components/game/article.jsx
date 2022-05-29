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
    const {title, extract} = useContext(GameStoreContext);

    return (
        <div>
            <h3 className={classnames("title", "mb-2")}>
                {title.map((word, i) => (
                    <Fragment key={`word_${i}`}>
                        <Word {...word} />
                        {BSP}
                    </Fragment>
                ))}
            </h3>
            <p>
                {extract.map((word, i) => (
                    <Fragment key={`word_${i}`}>
                        <Word {...word} />
                        {BSP}
                    </Fragment>
                ))}
            </p>
        </div>
    );
};

Article.propTypes = {};

export default Article;
