import ProductCard from './ProductCard'

import type { Product } from '../../types/typings'

interface CardProps {
    products: Product[]
}

const MappingCards: React.FC<CardProps> = ({ products }) => {
    return (
        <>
            {products.length === 0 ? <p className='col-span-2 text-center'>Essa lista está vazia. Por favor utilize o form para adicionar items a ela.</p> :
                products.map((product: Product) => (
                    <ProductCard key={product.id} product={product}  />
                ))
            }
        </>
    )
}

export default MappingCards