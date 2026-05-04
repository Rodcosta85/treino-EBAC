import { create } from 'zustand'
import type { BookTypes } from '../types/bookTypes';

interface BookTypeStates {
    // array para guardar os itens
    items: BookTypes[],

    // estados para os inputs/botão do form
    title: string,
    author: string,
    status: boolean

    // funções dos inputs/botão do form
    setTitle: (title: string) => void,
    setAuthor: (author: string) => void,
    setStatus: (status: boolean) => void,
    addBook: (newBook: BookTypes) => void,
}

const useBooks = create<BookTypeStates>((set) => ({
    items: [],
    title: "",
    author: "",
    status: false,

    setTitle: (newValue: string) => set({ title: newValue }),

    setAuthor: (newValue: string) => set({ author: newValue }),

    setStatus: (newValue: boolean) => set(() => ({ status: newValue })),

    addBook: (item: BookTypes) => set((state) => ({
        items: [...state.items, item],
    })),
}))

export default useBooks