import { useQuery } from "@tanstack/react-query";
import { getBestSeller, type Product } from "../assets/assets";

const useBestSeller = () => useQuery<Product[], Error>({
    queryKey: ['bestseller'],
    queryFn: getBestSeller
})

export default useBestSeller