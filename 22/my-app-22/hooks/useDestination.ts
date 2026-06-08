import { create } from 'zustand'
import { destinationArr, DestinationTypes} from '../constants/destinations'

interface HookTypes {
    locations: DestinationTypes[]
}

const useDestination = create<HookTypes>((set) => ({
    locations: destinationArr
}))

export default useDestination