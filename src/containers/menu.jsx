/* leny/aklèt
 *
 * /src/containers/menu.jsx - Menu Container
 *
 * coded by leny
 * started at 29/05/2022
 */

import PropTypes from "prop-types";
import classnames from "classnames";
import {useState} from "react";

import {NBSP} from "core/constants";

import {version} from "../../package.json";

import Button from "components/commons/button";

const MenuContainer = () => (
    <div className={classnames("columns", "mt-5")}>
        <div
            className={classnames(
                "column",
                "is-half",
                "is-offset-one-quarter",
            )}>
            <div className={classnames("notification")}>
                <h1 className={"title"}>{"Aklèt"}</h1>
                <h2 className={"subtitle"}>
                    {"Un jeu de devinette sur Wikipédia."}
                </h2>

                <p>
                    {"Votre objectif : découvrir une page sur Wikipédia."}
                    <br />
                    {
                        "Sur base des premiers paragraphes présentés sous forme de texte à trous."
                    }
                </p>

                <p>{"Entrez des mots pour tente de combler ces trous."}</p>

                <div
                    className={classnames(
                        "notification",
                        "is-warning",
                        "mt-2",
                        "px-3",
                        "py-2",
                    )}>
                    <small>
                        <strong>{"NOTE:"}</strong>
                        {NBSP}
                        {"Le jeu est en beta. Il y a peut-être quelques bugs."}
                    </small>
                </div>
            </div>
            <div
                className={classnames(
                    "is-flex",
                    "is-flex-direction-column",
                    "is-justify-content-space-between",
                    "is-align-content-center",
                )}>
                <Button
                    className={"mb-5"}
                    label={"Commencer une partie"}
                    size={"large"}
                    variant={"link"}
                />
            </div>
            <hr />
            <div
                className={classnames(
                    "has-text-centered",
                    "has-text-grey-lighter",
                    "is-family-code",
                )}>
                <a href={"//github.com/leny/aklet"} target={"_new"}>
                    aklèt
                </a>
                {` - v${version}`}
            </div>
        </div>
    </div>
);
MenuContainer.propTypes = {};

export default MenuContainer;
