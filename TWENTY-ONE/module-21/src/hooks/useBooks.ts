import { create } from 'zustand'
import type { BookTypes } from '../types/bookTypes';

type ReadNotRead = 'Lido' | 'Não Lido'

interface BookTypeStates {
    // array para guardar os itens
    items: BookTypes[],

    // estados para os inputs/botão do form
    title: string,
    author: string,
    status: string
    bgImg: string,

    // estado para acionar o popup de formulário
    popupTrigger: boolean

    // funções dos inputs/botão do form
    setTitle: (title: string) => void,
    setAuthor: (author: string) => void,
    setChangeStatus: (type: ReadNotRead) => void,
    setBgImg: (bgImg: string) => void,

    // adicionar item via form
    addBook: (newBook: BookTypes) => void,

    // remover item
    removeBook: (id: number) => void,

    // botão de acionar o form
    setPopupTrigger: (popupTrigger: boolean) => void,


}

const useBooks = create<BookTypeStates>((set) => ({
    items: [],
    title: "",
    author: "",
    status: "Não Lido",
    popupTrigger: false,
    bgImg: "",

    setTitle: (newValue: string) => set({ title: newValue }),
    setAuthor: (newValue: string) => set({ author: newValue }),
    setChangeStatus: (type) => set({ status: type }),
    setBgImg: (newValue: string) => set({ bgImg: newValue }),
    addBook: (item: BookTypes) => set((state) => ({
        items: [...state.items, item],
    })),
    removeBook: (id: number) => set((state) => {
        const itemToDelete = state.items.find((item) => item.id === id);
        if (!itemToDelete) return state;
        const remainingItems = state.items.filter((item) => item.id !== id);
        return {
            items: remainingItems,
        };
    }),
    setPopupTrigger: () => set((state) => ({ popupTrigger: !state.popupTrigger })),

}))

export default useBooks