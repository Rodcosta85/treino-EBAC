import useBooks from "../hooks/useBooks"
import BookItem from './BookItem'

const BookList = () => {

  const { items } = useBooks()

  return (
    <div className="grid grid-cols-1 
    sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 
    gap-4 md:gap-6 lg:gap-8">
      {items.map(item =>(
        <BookItem item={item} />
      ))}
    </div>
  )
}

export default BookList