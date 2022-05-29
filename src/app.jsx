/* leny/aklèt
 *
 * /src/app.jsx - App Entrypoint
 *
 * coded by leny
 * started at 29/05/2022
 */

import {createRoot} from "react-dom/client";

import "bulma";

import RootContainer from "containers/root";

createRoot(document.querySelector("#app")).render(<RootContainer />);
