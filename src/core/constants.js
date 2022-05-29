/* leny/aklèt
 *
 * /src/core/constants.js - Constants
 *
 * coded by leny
 * started at 29/05/2022
 */

export const DEBUG = process.env.NODE_ENV !== "production";

export const MODE_MENU = "mode.menu";
export const MODE_GAME = "mode.game";
export const MODE_RESULTS = "mode.results";

export const BSP = "\u0020";
export const NBSP = "\u00a0";

export const WIKI_API_RANDOM_ARTICLE =
    "https://fr.wikipedia.org/api/rest_v1/page/random/summary";
export const EXTRACT_MINIMUM_WORD_SIZE = 50;
export const TITLE_MINIMUM_WORD_SIZE = 5;
