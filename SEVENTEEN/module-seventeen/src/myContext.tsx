import { useState, useEffect, createContext, useContext } from "react";
import type { ReactNode } from "react";
import activities from './activities.json'
import type { activityTypes } from "./types";

interface MyContextType {
    allActivities: activityTypes[],
    checkbox: boolean,
    deletedCount: number,
    inputVal: string
    setInputVal: (e: string) => void,
    addEntry: (newEntry: activityTypes) => void,
    removeEntry: (id: number) => void,
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleCheckbox: () => void,
    resetData: () => void,
}

export const MyDataContext = createContext<MyContextType | undefined>(undefined);

export const MyContextStates = ({ children }: { children: ReactNode }) => {
    const [allActivities, setAllActivities] = useState<activityTypes[]>(() => {
        const saved = localStorage.getItem("my_activities");
        return saved ? JSON.parse(saved) : activities;
    });
    const [inputVal, setInputVal] = useState<string>("");
    const [checkbox, setCheckbox] = useState<boolean>(false);
    const [deletedCount, setDeletedCount] = useState<number>(() => {
        const savedCount = localStorage.getItem("deleted_count");
        return savedCount ? parseInt(savedCount) : 0;
    });

    useEffect(() => {
        localStorage.setItem("my_activities", JSON.stringify(allActivities));
    }, [allActivities]);

    useEffect(() => {
        localStorage.setItem("deleted_count", deletedCount.toString());
    }, [deletedCount]);

    const handleCheckbox = () => {
        setCheckbox(prevState => !prevState);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputVal(e.target.value);
    };

    const addEntry = (newEntry: activityTypes) => {
        // 2. This updates the SAME list that the UI is mapping over
        setAllActivities((prev) => [...prev, newEntry]);
    };

    const removeEntry = (id: number) => {
        setAllActivities((prev) => prev.filter(act => act.id !== id));
        setDeletedCount((prev) => prev + 1);
    };

    const resetData = () => {
        setAllActivities([])
        setDeletedCount(0)
    }

    return (
        <MyDataContext.Provider value={{
            allActivities: allActivities,
            deletedCount: deletedCount,
            checkbox: checkbox,
            inputVal: inputVal,
            setInputVal: setInputVal,
            addEntry: addEntry,
            removeEntry: removeEntry,
            handleInputChange: handleInputChange,
            handleCheckbox: handleCheckbox,
            resetData: resetData,
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