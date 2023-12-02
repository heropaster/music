import axiosClient from "./axiosClient";
import {CatalogApi, Configuration, UserApi} from "../api/openapitools";
import {AxiosInstance} from "axios";

type ControllerProps = [
    configuration: Configuration | undefined,
    basePath: string | undefined,
    axiosInstance: AxiosInstance,
]

class ApiClient {
    catalogController
    userController

    constructor(props: ControllerProps) {
        this.catalogController = new CatalogApi(...props)
        this.userController = new UserApi(...props)
    }

}

const apiClient = new ApiClient([
    undefined,
    "https://skypro-music-api.skyeng.tech",
    axiosClient
])
export default apiClient