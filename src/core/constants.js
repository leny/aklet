/* leny/aklèt
 *
 * /src/core/constants.js - Constants
 *
 * coded by leny
 * started at 29/05/2022
 */

export const DEBUG = process.env.NODE_ENV !== "production";

export const SERVER_ROOT = DEBUG ? "http://localhost:3000" : "/";
