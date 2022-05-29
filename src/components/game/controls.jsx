/* leny/aklèt
 *
 * /src/components/game/controls.jsx - Game Component: controls
 *
 * coded by leny
 * started at 29/05/2022
 */

import classnames from "classnames";
import PropTypes from "prop-types";
import {useState, useContext, useCallback} from "react";

import {GameStoreContext} from "store/game";
import Button from "components/commons/button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons";

const Controls = ({onSubmitWord}) => {
    const {
        game: {score, words},
    } = useContext(GameStoreContext);
    const [word, setWord] = useState("");

    const handleWordInput = useCallback(
        e => {
            setWord(e.currentTarget.value);
        },
        [setWord],
    );

    const handleSubmit = useCallback(
        e => {
            e.preventDefault();
            if (word.trim()) {
                onSubmitWord(word.trim().toLowerCase());
                setWord("");
            }
        },
        [word, onSubmitWord],
    );

    let $words = <p>{"Entrez un mot pour commencer la partie."}</p>;

    if (words.size) {
        const aWords = Array.from(words).reverse();

        $words = (
            <ol className={classnames("words")} reversed start={aWords.length}>
                {aWords.slice(0, 5).map((w, i) => (
                    <li key={`word_${i}`}>{w}</li>
                ))}
            </ol>
        );
    }

    return (
        <>
            <form action={"#"} onSubmit={handleSubmit}>
                <div className={classnames("field", "has-addons")}>
                    <div className={classnames("control")}>
                        <input
                            className={classnames("input")}
                            type={"text"}
                            name={"word"}
                            id={"word"}
                            placeholder={"Mot"}
                            value={word}
                            autoFocus
                            autoComplete={"off"}
                            autoCorrect={"off"}
                            autoCapitalize={"none"}
                            onInput={handleWordInput}
                        />
                    </div>
                    <div className={classnames("control")}>
                        <Button type={"submit"} title={"Envoyer"}>
                            <FontAwesomeIcon icon={faRightFromBracket} />
                        </Button>
                    </div>
                </div>
            </form>
            <hr className={classnames("mt-3", "mb-2")} />
            <h4 className={classnames("is-size-6")}>{`Coups: ${score}`}</h4>
            <hr className={classnames("mt-2", "mb-2")} />
            {$words}
        </>
    );
};

Controls.propTypes = {
    onSubmitWord: PropTypes.func.isRequired,
};

export default Controls;
