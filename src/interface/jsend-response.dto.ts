import { ApiProperty } from '@nestjs/swagger';

/**
 * The response model for when all went well, and (usually) some data was returned.
 * @param data
 * Acts as the wrapper for any data returned by the API call. If the call returns no data (as in the last example), data should be set to null.
 * @example
 * ```json
 * {
 *  "data": {
 *    "posts": [
 *      { "id": 1, "title": "A blog post", "body": "Some useful content" },
 *      { "id": 2, "title": "Another blog post", "body": "More content" }
 *    ]
 *  }
 * }
 * ```
 * @see https://github.com/omniti-labs/jsend#success
 */
export class JsendSuccessResponseModel<T> {
  @ApiProperty({})
  status = 'success';

  data: T;

  constructor(data: T) {
    this.data = data;
  }
}

/**
 * The response model for when There was a problem with the data submitted, or some pre-condition of the API call wasn't satisfied.
 * @param data
 * Again, provides the wrapper for the details of why the request failed. If the reasons for failure correspond to POST values, the response object's keys SHOULD correspond to those POST values.
 * @example
 * ```json
 * {
 *  "data": { "title" : "A title is required" }
 * }
 * ```
 * @see https://github.com/omniti-labs/jsend#fail
 */
export class JsendFailureResponseModel<T> {
  status = 'fail';

  data: T;

  constructor(data: T) {
    this.data = data;
  }
}

/**
 * The response model for when There was a problem with the data submitted, or some pre-condition of the API call wasn't satisfied.
 * @param data
 * Again, provides the wrapper for the details of why the request failed. If the reasons for failure correspond to POST values, the response object's keys SHOULD correspond to those POST values.
 * @example
 * ```json
 * {
 *  "data": { "title" : "A title is required" }
 * }
 * ```
 * @see https://github.com/omniti-labs/jsend#fail
 */
export class JsendErrorResponseModel<T> {
  status = 'error';

  message: string;

  data?: T;

  code?: number;

  constructor(message: string, data?: T, code?: number) {
    this.message = message;
    this.data = data;
    this.code = code;
  }
}
