import useBooks from "./useBooks";

export const useActions = () => {

    const { 
        setTitle,
        setAuthor,
        setStatus
    } = useBooks()


    const handleTitleChange = (value: string) => {
        setTitle(value)
    }

    const handleAuthorChange = (value: string) => {
        setAuthor(value)
    }

    return {
        handleTitleChange,
        handleAuthorChange
    }
}