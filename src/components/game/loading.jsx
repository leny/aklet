/* leny/aklèt
 *
 * /src/components/game/loading.js - Game Component: loading
 *
 * coded by leny
 * started at 11/02/2021
 */

import classnames from "classnames";
import PropTypes from "prop-types";

import Loading from "components/commons/loading";

const GameLoading = ({children}) => (
    <div className={classnames("columns", "is-centered")}>
        <div className={classnames("column", "is-two-thirds", "section")}>
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
                        )}>
                        {"Chargement…"}
                    </span>
                </header>
                <div
                    className={classnames(
                        "card-content",
                        "py-5",
                        "has-text-centered",
                    )}>
                    <Loading variant={"info"} size={"large"} />
                    {children}
                </div>
            </div>
        </div>
    </div>
);

GameLoading.propTypes={
    message: PropTypes.string,
}

export default GameLoading;
