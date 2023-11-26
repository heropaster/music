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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { CreateUser } from '../model';
// @ts-ignore
import { Login } from '../model';
// @ts-ignore
import { TokenObtainPair } from '../model';
// @ts-ignore
import { TokenRefresh } from '../model';
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {Login} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userLoginCreate: async (data: Login, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'data' is not null or undefined
            assertParamExists('userLoginCreate', 'data', data)
            const localVarPath = `/user/login/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(data, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {CreateUser} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userSignupCreate: async (data: CreateUser, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'data' is not null or undefined
            assertParamExists('userSignupCreate', 'data', data)
            const localVarPath = `/user/signup/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(data, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
         * @param {TokenObtainPair} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userTokenCreate: async (data: TokenObtainPair, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'data' is not null or undefined
            assertParamExists('userTokenCreate', 'data', data)
            const localVarPath = `/user/token/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(data, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.
         * @param {TokenRefresh} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userTokenRefreshCreate: async (data: TokenRefresh, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'data' is not null or undefined
            assertParamExists('userTokenRefreshCreate', 'data', data)
            const localVarPath = `/user/token/refresh/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Basic required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(data, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {Login} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userLoginCreate(data: Login, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Login>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userLoginCreate(data, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['UserApi.userLoginCreate']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * 
         * @param {CreateUser} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userSignupCreate(data: CreateUser, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userSignupCreate(data, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['UserApi.userSignupCreate']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
         * @param {TokenObtainPair} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userTokenCreate(data: TokenObtainPair, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TokenObtainPair>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userTokenCreate(data, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['UserApi.userTokenCreate']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.
         * @param {TokenRefresh} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userTokenRefreshCreate(data: TokenRefresh, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TokenRefresh>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userTokenRefreshCreate(data, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['UserApi.userTokenRefreshCreate']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserApiFp(configuration)
    return {
        /**
         * 
         * @param {Login} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userLoginCreate(data: Login, options?: any): AxiosPromise<Login> {
            return localVarFp.userLoginCreate(data, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CreateUser} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userSignupCreate(data: CreateUser, options?: any): AxiosPromise<CreateUser> {
            return localVarFp.userSignupCreate(data, options).then((request) => request(axios, basePath));
        },
        /**
         * Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
         * @param {TokenObtainPair} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userTokenCreate(data: TokenObtainPair, options?: any): AxiosPromise<TokenObtainPair> {
            return localVarFp.userTokenCreate(data, options).then((request) => request(axios, basePath));
        },
        /**
         * Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.
         * @param {TokenRefresh} data 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userTokenRefreshCreate(data: TokenRefresh, options?: any): AxiosPromise<TokenRefresh> {
            return localVarFp.userTokenRefreshCreate(data, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
    /**
     * 
     * @param {Login} data 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public userLoginCreate(data: Login, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).userLoginCreate(data, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CreateUser} data 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public userSignupCreate(data: CreateUser, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).userSignupCreate(data, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
     * @param {TokenObtainPair} data 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public userTokenCreate(data: TokenObtainPair, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).userTokenCreate(data, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.
     * @param {TokenRefresh} data 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public userTokenRefreshCreate(data: TokenRefresh, options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).userTokenRefreshCreate(data, options).then((request) => request(this.axios, this.basePath));
    }
}

