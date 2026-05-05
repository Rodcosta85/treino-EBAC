import useBooks from "./useBooks";

export const useActions = () => {

    const {
        setTitle,
        setAuthor,
        setBgImg,
    } = useBooks()


    const handleTitleChange = (value: string) => {
        setTitle(value)
    }

    const handleAuthorChange = (value: string) => {
        setAuthor(value)
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setBgImg(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return {
        handleTitleChange,
        handleAuthorChange,
        handleImageUpload
    }
}