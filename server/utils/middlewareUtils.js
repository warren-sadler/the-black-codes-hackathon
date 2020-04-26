/**
 * buildRequestBodyValidator
 * Given an array of object keys, returns a function
 * which takes a request body an ensures it contains
 * the required keys.
 *
 * @example
 *    const hasEmailAddress = buildRequestBodyValidator(['emailAddress'])
 *    const req = {body: {emailAddress: "some-value"}}
 *    hasEmailAddress(req) === true
 *
 * @param {Array<string>} requiredKeys
 */
function buildRequestBodyValidator(requiredKeys) {
  /**
   *
   * @param {import('express').Request} req
   */
  return function isValidRequestBody(req) {
    return Object.keys(req.body).some((requestBodyKey) =>
      requiredKeys.includes(requestBodyKey)
    );
  };
}

exports.buildRequestBodyValidator = buildRequestBodyValidator;
