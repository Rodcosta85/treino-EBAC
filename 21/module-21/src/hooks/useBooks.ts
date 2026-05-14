import axios from 'axios';
import { create } from 'zustand'
import type { BookTypes } from '../types/bookTypes';
import BASE_URL from './../services/api'

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
    removeBook: (id: string) => void,

    // botão de acionar o form
    setPopupTrigger: (popupTrigger: boolean) => void,

    fetchBooks: () => Promise<void>
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
    setPopupTrigger: () => set((state) => ({ popupTrigger: !state.popupTrigger })),

    addBook: async (newBook: BookTypes) => {
        try {
            const response = await axios.post<BookTypes>(BASE_URL, newBook, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });

            set((state) => ({
                items: [...state.items, response.data]
            }));
        } catch (error) {
            console.error("Error adding book:", error);
        }
    },

    removeBook: async (id: string) => {
        try {
            await axios.delete<BookTypes>(`${BASE_URL}/${id}`, {
                headers: { 'Content-Type': 'application/json' },
            });

            set((state) => ({
                items: state.items.filter(item => item._id !== id)
            }));
        } catch (error) {
            console.error("Error deleting book:", error);
        }
    },

    fetchBooks: async () => {
        try {
            const response = await axios.get<BookTypes[]>(BASE_URL);
            set({ items: response.data });
        } catch (error) {
            console.error("Axios fetch error:", error);
        }
    },
}))

export default useBooks