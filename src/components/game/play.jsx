/* leny/aklèt
 *
 * /src/components/game/play.js - Game Component: play
 *
 * coded by leny
 * started at 29/05/2022
 */

import "styles/play.scss";

import classnames from "classnames";
import PropTypes from "prop-types";
import {useContext, useCallback} from "react";

import {GameStoreContext} from "store/game";

import Article from "components/game/article";
import Controls from "components/game/controls";

const Play = () => {
    const {
        // dispatch,
        article: {hash},
    } = useContext(GameStoreContext);

    const handleSubmitWord = useCallback(word => {
        console.log("handleSubmitWord(word):", word);
    }, []);

    return (
        <div className={classnames("columns", "is-centered")}>
            <div className={classnames("column", "is-four-fifths", "section")}>
                <div className={"card"}>
                    <header
                        className={classnames(
                            "card-header",
                            "has-background-info",
                        )}>
                        <span
                            className={classnames(
                                "card-header-title",
                                "has-text-white",
                                "is-justify-content-space-between",
                                "is-align-items-center",
                            )}>
                            <span>{"Aklèt"}</span>
                            <small>{hash}</small>
                        </span>
                    </header>
                    <div className={classnames("mx-0", `mt-1`, "mb-0", "p-3")}>
                        <div className={classnames("columns", "is-centered")}>
                            <div
                                className={classnames(
                                    "column",
                                    "is-one-third",
                                )}>
                                <Controls onSubmitWord={handleSubmitWord} />
                            </div>
                            <div className={classnames("column")}>
                                <Article />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Play.propTypes = {
    onRestart: PropTypes.func,
};

export default Play;
