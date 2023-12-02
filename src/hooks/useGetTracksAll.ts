import {useQuery} from "@tanstack/react-query";
import apiClient from "../services/apiClient";

export const useGetTracksAll = () =>
    useQuery({
        queryKey: ['getTracksAll'],
        queryFn: () => apiClient.catalogController.catalogTrackAllList()
    })