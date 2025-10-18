import { useQuery } from "@tanstack/react-query";
import { products, type Product } from "../assets/assets";
import useProductQueryStore from "../store/productQueryStore";

const useProducts = () => 
{
const productQuery = useProductQueryStore(s => s.productQuery)
return  useQuery<Product[], Error>({
   
queryKey: ['products', productQuery],
queryFn: async (): Promise<Product[]> => {
    let filteredProducts = products;

    if(productQuery.category && productQuery.category.length > 0) {
        filteredProducts = filteredProducts.filter(p => productQuery.category?.includes(p.category));
    }

    if(productQuery.type && productQuery.type.length > 0) {
      filteredProducts = filteredProducts.filter(p => productQuery.type?.includes(p.subCategory));
    }

     if(productQuery.sortOrder){
      if(productQuery.sortOrder === 'low-high'){
        filteredProducts = filteredProducts.sort((a,b) => a.price - b.price);
     }
     else if(productQuery.sortOrder === 'high-low'){
       filteredProducts = filteredProducts.sort((a,b) => b.price - a.price);
     }
} 

if(productQuery.searchText && productQuery.searchText !== ''){
  filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(productQuery.searchText!.toLowerCase() ));
}

 return filteredProducts;
},
});
}
export default useProducts;