import useBooks from './../hooks/useBooks'
import { useActions } from '../hooks/useActions'
import Check from './../assets/check.svg'
import { useEffect } from 'react'

const BookForm = () => {

  const {
    items,
    title,
    author,
    status,
    bgImg,
    setTitle,
    setAuthor,
    setChangeStatus,
    addBook,
  } = useBooks()

  const {
    handleTitleChange,
    handleAuthorChange,
    handleImageUpload
  } = useActions()

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault()
    addBook({
      title,
      author,
      status,
      bgImg,
    } as any);
    setTitle("")
    setAuthor("")
  }

  useEffect(() => {
    console.log(items)
  }, [items])


  return (
    <form
      onSubmit={handleSubmit}
      className='absolute right-0 top-15 z-99999999
      flex flex-col gap-8 
      w-90 p-4 
      rounded-md 
      bg-white
      shadow-2xl shadow-blue-800'>
      <input
        type="text"
        name=""
        id=""
        placeholder="Escreva aqui o título do livro"
        value={title}
        onChange={(e) => handleTitleChange(e.target.value)}
        className='border-b-2 border-black focus:outline-none p-2'
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="Escreva aqui o nome do autor"
        value={author}
        onChange={(e) => handleAuthorChange(e.target.value)}
        className='border-b-2 border-black focus:outline-none p-2'
      />
      <div className='flex justify-center items-center gap-5'>
        <h3>Já leu?</h3>
        <div className='flex items-center gap-2'>
          <button
            type='button'
            onClick={() => setChangeStatus('Lido')}
            className={`flex justify-center items-center
            w-4 h-4
            border border-black 
            rounded-sm 
            cursor-pointer
            ${status === 'Lido' ? "bg-blue-900" : 'bg-transparent'}`}>
            {status === 'Lido' && <img src={Check} className='w-4 h-4' />}
          </button>
          <p className='text-[14px]'>Lido</p>
        </div>
        <div className='flex items-center gap-2'>
          <button
            type='button'
            onClick={() => setChangeStatus('Não Lido')}
            className={`flex justify-center items-center
            w-4 h-4
            border border-black 
            rounded-sm 
            cursor-pointer
            transition-colors 
            duration-250ms
            ease-in-out
            ${status === 'Não Lido' ? "bg-blue-900" : 'bg-transparent'}`}>
            {status === 'Não Lido' && <img src={Check} className='w-4 h-4' />}
          </button>
          <p className='text-[14px]'>Não Lido</p>
        </div>
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />

      <button
        type='submit'
        className='pl-4 pr-4 pt-1.5 pb-1.5
        rounded-md
        bg-blue-900   
        text-white font-medium
        transition-all duration-250ms ease-in-out
        cursor-pointer
        hover:-translate-y-1'>
        Adicionar livro
      </button>
    </form>
  )
}

export default BookForm