/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClient, ServiceClientOptions, ServiceCallback, HttpOperationResponse } from 'ms-rest';
import * as models from "./models";

export default class Deviceinventory extends ServiceClient {
  /**
   * @class
   * Initializes a new instance of the Deviceinventory class.
   * @constructor
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   */
  constructor(baseUri?: string, options?: ServiceClientOptions);


  /**
   * @summary List devices
   *
   * Returns a paged collection of devices and their attributes.
   * Accepts optional search and sort parameters.
   *
   * **Searching**
   * Searching by attributes values is accomplished by appending attribute
   * name/value pairs to the query string, e.g.:
   *
   * ```
   * GET /devices?attr_name_1=foo&
   * attr_name_2=100&
   * ...
   * ```
   *
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {number} [options.page] Starting page.
   *
   * @param {number} [options.perPage] Number of results per page.
   *
   * @param {string} [options.sort] Supports sorting the device list by attribute
   * values.
   *
   * The parameter is formatted as a list of attribute names and sort directions,
   * e.g.:
   *
   * '?sort=attr1:asc, attr2:desc'
   *
   * will sort by 'attr1' ascending, and then by 'attr2' descending. 'desc' is
   * the default
   * sort direction, and can be omitted.
   *
   *
   * @param {boolean} [options.hasGroup] If present, limits the results only to
   * devices assigned/not assigned to a group.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getDevicesWithHttpOperationResponse(options?: { page? : number, perPage? : number, sort? : string, hasGroup? : boolean, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary List devices
   *
   * Returns a paged collection of devices and their attributes.
   * Accepts optional search and sort parameters.
   *
   * **Searching**
   * Searching by attributes values is accomplished by appending attribute
   * name/value pairs to the query string, e.g.:
   *
   * ```
   * GET /devices?attr_name_1=foo&
   * attr_name_2=100&
   * ...
   * ```
   *
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {number} [options.page] Starting page.
   *
   * @param {number} [options.perPage] Number of results per page.
   *
   * @param {string} [options.sort] Supports sorting the device list by attribute
   * values.
   *
   * The parameter is formatted as a list of attribute names and sort directions,
   * e.g.:
   *
   * '?sort=attr1:asc, attr2:desc'
   *
   * will sort by 'attr1' ascending, and then by 'attr2' descending. 'desc' is
   * the default
   * sort direction, and can be omitted.
   *
   *
   * @param {boolean} [options.hasGroup] If present, limits the results only to
   * devices assigned/not assigned to a group.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getDevices(options?: { page? : number, perPage? : number, sort? : string, hasGroup? : boolean, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getDevices(callback: ServiceCallback<any>): void;
  getDevices(options: { page? : number, perPage? : number, sort? : string, hasGroup? : boolean, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Get a selected device
   *
   * Returns the details of the selected devices, including its attributes.
   *
   * @param {string} id Device identifier.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getDevices1WithHttpOperationResponse(id: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Get a selected device
   *
   * Returns the details of the selected devices, including its attributes.
   *
   * @param {string} id Device identifier.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getDevices1(id: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getDevices1(id: string, callback: ServiceCallback<any>): void;
  getDevices1(id: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Remove selected device
   *
   * Deletes all information concerning the device, including its attributes.
   *
   * @param {string} id Device identifier.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ErrorModel>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  removeDeviceWithHttpOperationResponse(id: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ErrorModel>>;

  /**
   * @summary Remove selected device
   *
   * Deletes all information concerning the device, including its attributes.
   *
   * @param {string} id Device identifier.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ErrorModel} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ErrorModel} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ErrorModel} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  removeDevice(id: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.ErrorModel>;
  removeDevice(id: string, callback: ServiceCallback<models.ErrorModel>): void;
  removeDevice(id: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ErrorModel>): void;


  /**
   * @summary Get a selected device's group
   *
   * @param {string} id Device identifier.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getGroupWithHttpOperationResponse(id: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary Get a selected device's group
   *
   * @param {string} id Device identifier.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getGroup(id: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getGroup(id: string, callback: ServiceCallback<any>): void;
  getGroup(id: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary Add a device to a group
   *
   * Adds a device to a group.
   *
   * Note that a given device can belong to at most one group.
   * If a device already belongs to some group, it will be moved
   * to the selected one.
   *
   *
   * @param {string} id Device identifier.
   *
   * @param {object} group Group descriptor.
   *
   * @param {string} group.group
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ErrorModel>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  addGroupDeviceWithHttpOperationResponse(id: string, group: models.Group, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ErrorModel>>;

  /**
   * @summary Add a device to a group
   *
   * Adds a device to a group.
   *
   * Note that a given device can belong to at most one group.
   * If a device already belongs to some group, it will be moved
   * to the selected one.
   *
   *
   * @param {string} id Device identifier.
   *
   * @param {object} group Group descriptor.
   *
   * @param {string} group.group
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ErrorModel} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ErrorModel} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ErrorModel} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  addGroupDevice(id: string, group: models.Group, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.ErrorModel>;
  addGroupDevice(id: string, group: models.Group, callback: ServiceCallback<models.ErrorModel>): void;
  addGroupDevice(id: string, group: models.Group, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ErrorModel>): void;


  /**
   * @summary Remove a device from a group
   *
   * Removes the device with identifier 'id' from the group 'group'.
   *
   *
   * @param {string} id Device identifier.
   *
   * @param {string} name Group name.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<ErrorModel>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  removeGroupDeviceWithHttpOperationResponse(id: string, name: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.ErrorModel>>;

  /**
   * @summary Remove a device from a group
   *
   * Removes the device with identifier 'id' from the group 'group'.
   *
   *
   * @param {string} id Device identifier.
   *
   * @param {string} name Group name.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {ErrorModel} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {ErrorModel} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link ErrorModel} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  removeGroupDevice(id: string, name: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.ErrorModel>;
  removeGroupDevice(id: string, name: string, callback: ServiceCallback<models.ErrorModel>): void;
  removeGroupDevice(id: string, name: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ErrorModel>): void;


  /**
   * @summary List groups
   *
   * Returns a collection of all defined device groups.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getGroupsWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary List groups
   *
   * Returns a collection of all defined device groups.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getGroups(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getGroups(callback: ServiceCallback<any>): void;
  getGroups(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;


  /**
   * @summary List the devices belonging to a given group
   *
   * Returns a paged collection of device IDs.
   *
   *
   * @param {string} name Group name.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {number} [options.page] Starting page.
   *
   * @param {number} [options.perPage] Number of results per page.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  getGroupDevicesWithHttpOperationResponse(name: string, options?: { page? : number, perPage? : number, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<any>>;

  /**
   * @summary List the devices belonging to a given group
   *
   * Returns a paged collection of device IDs.
   *
   *
   * @param {string} name Group name.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {number} [options.page] Starting page.
   *
   * @param {number} [options.perPage] Number of results per page.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  getGroupDevices(name: string, options?: { page? : number, perPage? : number, customHeaders? : { [headerName: string]: string; } }): Promise<any>;
  getGroupDevices(name: string, callback: ServiceCallback<any>): void;
  getGroupDevices(name: string, options: { page? : number, perPage? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<any>): void;
}

export { Deviceinventory, models as DeviceinventoryModels };
