/* leny/aklèt
 *
 * /src/components/commons/button.jsx - Common button
 *
 * coded by leny
 * started at 29/05/2022
 */

/* eslint-disable react/button-has-type */

import PropTypes from "prop-types";
import classnames from "classnames";

const Button = ({
    className,
    label,
    children,
    disabled,
    loading = false,
    size = "normal",
    variant = "info",
    type = "button",
    onClick,
}) => (
    <button
        type={type}
        disabled={disabled}
        className={classnames(
            "button",
            `is-${variant}`,
            `is-${size}`,
            loading && "is-loading",
            className,
        )}
        onClick={onClick}>
        {children||label}
    </button>
);

Button.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    children: PropTypes.node,
    variant: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Button;

