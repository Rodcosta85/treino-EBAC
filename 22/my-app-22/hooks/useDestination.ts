import { create } from 'zustand'
import { destinationArr, DestinationTypes} from '../constants/destinations'

interface HookTypes {
    locations: DestinationTypes[]
    toggleHamb: boolean,
    setToggleHamb: () => void
}

const useDestination = create<HookTypes>((set) => ({
    locations: destinationArr,
    toggleHamb: false,
    setToggleHamb: () => set((state) => ({ toggleHamb: !state.toggleHamb })),
}))

export default useDestination