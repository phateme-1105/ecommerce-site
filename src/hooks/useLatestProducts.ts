import { useQuery } from "@tanstack/react-query";
import { getLatestProducts, type Product } from "../assets/assets";

const useLatestProducts = () => useQuery<Product[], Error>({
    queryKey:['products'],
    queryFn: getLatestProducts
})

export default useLatestProducts;