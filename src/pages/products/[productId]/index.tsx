import { useRouter } from "next/router"

const ProductDetailsPage = () => {
    const router = useRouter()
    
    return (
        <h1>Detalhe do Produto {router.query.productId} - Show</h1>
    )
}

export default ProductDetailsPage