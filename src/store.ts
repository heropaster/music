import {create} from 'zustand'
import type {Track} from "./api/openapitools";

interface StoreState {
    currentTrack: Track | null,
    isPending: boolean
}

interface StoreActions {
    changeCurrentTrack: (track: Track) => void,
    changeIsPending: (isPending: boolean) => void
}

export const useDataStore = create<StoreState & StoreActions>((set) => ({
    currentTrack: null,
    isPending: true,
    changeCurrentTrack: (currentTrack: Track) => set({currentTrack}),
    changeIsPending: (isPending: boolean) => set({isPending})
}))