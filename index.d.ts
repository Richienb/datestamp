/**
 * Convert a Unix timestamp to a Date object.
 * @param timestamp The Unix timestamp to convert.
 * @example
 * ```
 * const datestamp = require("datestamp");
 *
 * datestamp(1576282111);
 * //=> 2019-12-14T00:08:31.000Z
 * ```
*/
declare function datestamp(timestamp: number): Date;

export = datestamp;
