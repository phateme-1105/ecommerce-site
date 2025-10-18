import { useQuery } from "@tanstack/react-query"
import { getRelatedProducts, type Product } from "../assets/assets"



const useRelatedProducts = (category: string, type: string, id: string) => useQuery<Product[] | undefined, Error>({
    queryKey: ['products', category, type, id],
    queryFn: () => getRelatedProducts(category, type, id)
})

export default useRelatedProducts;