import {create} from 'zustand'
import type {Track} from "./api/openapitools";

interface StoreState {
    currentTrack: Track | null,
}

interface StoreActions {
    changeCurrentTrack: (track: Track) => void
}

export const useDataStore = create<StoreState & StoreActions>((set) => ({
    currentTrack: null,
    changeCurrentTrack: (currentTrack: Track) => set({currentTrack})
}))