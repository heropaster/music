/* tslint:disable */
/* eslint-disable */
/**
 * Music Project API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0.1.0
 * Contact: painassasin@icloud.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface Login
 */
export interface Login {
    /**
     * 
     * @type {number}
     * @memberof Login
     */
    'id'?: number;
    /**
     * Обязательное поле. Не более 150 символов. Только буквы, цифры и символы @/./+/-/_.
     * @type {string}
     * @memberof Login
     */
    'username'?: string;
    /**
     * 
     * @type {string}
     * @memberof Login
     */
    'password': string;
    /**
     * 
     * @type {string}
     * @memberof Login
     */
    'first_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof Login
     */
    'last_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof Login
     */
    'email': string;
}
