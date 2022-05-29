/* leny/aklèt
 *
 * /src/core/constants.js - Constants
 *
 * coded by leny
 * started at 29/05/2022
 */

export const DEBUG = process.env.NODE_ENV !== "production";

export const SERVER_ROOT = DEBUG ? "http://localhost:3000" : "/";

export const MODE_MENU = "mode.menu";
export const MODE_GAME = "mode.game";
export const MODE_RESULTS = "mode.results";

export const BSP = "\u0020";
export const NBSP = "\u00a0";
