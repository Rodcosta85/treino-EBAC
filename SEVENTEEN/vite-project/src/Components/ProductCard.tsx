interface Product {
  id: number,
  first: string,
  price: string,
  message: string
}

interface CardProps {
    products: Product[]
}

const ProductCard: React.FC<CardProps> = ({ products }) => {
    return (
        <>
            {products.length === 0 ? <p className='col-span-2 text-center'>Essa lista está vazia. Por favor utilize o form para adicionar items a ela.</p> :
                products.map((product: any, id: number) => (
                    <div
                        key={id}
                        className='p-3 rounded-3xl border-4 border-blue-400 flex flex-col justify-start gap-4'>
                        <h2>{product.first}</h2>
                        <p>R${product.price}</p>
                        <p>{product.message}</p>
                    </div>
                ))
            }
        </>
    )
}

export default ProductCard