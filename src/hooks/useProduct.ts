import { useQuery } from "@tanstack/react-query";
import { getProduct, products, type Product } from "../assets/assets";

const useProduct = (id: string) => useQuery<Product | undefined , Error>({
    queryKey:['product', id],
    queryFn: () => getProduct(id!),
    enabled: !!id

})
export default useProduct;