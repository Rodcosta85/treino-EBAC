import type { Product } from '../../../types/typings'

interface CardProps {
    product: Product,
}

const index: React.FC<CardProps> = ({ product }) => {
    return (
        <div
            className='p-3 rounded-3xl border-4 border-blue-400 flex flex-col justify-start gap-4'>
            <h2>{product.first}</h2>
            <p>R${product.price}</p>
            <p>{product.message}</p>
            <img
                src={product.image}
                alt={product.first}
                className="w-full h-48 object-cover rounded-xl"
            />
        </div>
    )
}

export default index