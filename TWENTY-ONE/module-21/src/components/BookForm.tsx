import useBooks from './../hooks/useBooks'
import { useActions } from '../hooks/useActions'

const BookForm = () => {

  const {
    title,
    author,
    status,
    setTitle,
    setAuthor,
    setStatus,
    addBook,
  } = useBooks()

  const {
    handleTitleChange,
    handleAuthorChange,
  } = useActions()

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault()
    addBook({
      id: Date.now(),
      title: title,
      author: author,
      status: status
    })

    setTitle("")
    setAuthor("")
    setStatus(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-8 
      w-[500px] p-4 
      rounded-md 
      bg-blue-200'>
      <input
        type="text"
        name=""
        id=""
        placeholder="Escreva aqui o título do livro"
        value={title}
        onChange={(e) => handleTitleChange(e.target.value)}
        className='border-2 border-black focus:outline-none rounded-md p-2'
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="Escreva aqui o nome do autor"
        value={author}
        onChange={(e) => handleAuthorChange(e.target.value)}
        className='border-2 border-black focus:outline-none rounded-md p-2'
      />
      <div className='flex justify-start items-center gap-5'>
        <h3>Você já leu esse livro?</h3>
        <button>{status ? "Lido" : "Não Lido"}</button>
      </div>
      
      <button 
        type='submit' 
        className='pl-4 pr-4 pt-1.5 pb-1.5
        rounded-md
        bg-green-600   
        text-white font-medium
        transition-all duration-250ms ease-in-out
        cursor-pointer
        hover:-translate-y-1'>
          Adicionar
      </button>
    </form>
  )
}

export default BookForm