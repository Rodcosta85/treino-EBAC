import { useState, createContext, useContext } from "react";
import type { ReactNode } from "react";
import activities from './activities.json'
import type { activityTypes } from "./types";

interface MyContextType {
    allActivities: activityTypes[],
    selectedActivity: activityTypes | null;
    inputVal: string
    setSelectedActivity: (activity: activityTypes | null) => void,
    addEntry: (newEntry: activityTypes) => void,
    removeEntry: (entry: activityTypes) => void,
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const MyDataContext = createContext<MyContextType | undefined>(undefined);

export const MyContextStates = ({ children }: { children: ReactNode }) => {
    const [allActivities, setAllActivities] = useState<activityTypes[]>(activities);
    const [selectedActivity, setSelectedActivity] = useState<activityTypes | null>(null);
    const [inputVal, setInputVal] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputVal(e.target.value);
    };

    const addEntry = (newEntry: activityTypes) => {
        // 2. This updates the SAME list that the UI is mapping over
        setAllActivities((prev) => [...prev, newEntry]);
    };

    const removeEntry = (entry: activityTypes) => {
        setAllActivities
    }

    return (
        <MyDataContext.Provider value={{
            allActivities: allActivities,
            selectedActivity: selectedActivity,
            inputVal: inputVal,
            setSelectedActivity: setSelectedActivity,
            addEntry: addEntry,
            removeEntry: removeEntry,
            handleInputChange: handleInputChange
        }}>
            {children}
        </MyDataContext.Provider>
    );
};

export const useActivities = () => {
    const context = useContext(MyDataContext);
    if (!context) throw new Error("Forgot to wrap the Provider!");
    return context;
};