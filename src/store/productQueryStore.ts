 import { create } from "zustand";

interface ProductQuery {
    category?: string[];
    type?: string[];
    sortOrder?: string;
    searchText?: string;
}

interface ProductQueryStore {
    productQuery: ProductQuery;
    toggleCategory: (category: string) => void;
    toggleType: (type: string) => void;
    setSortOrder: (sortOrder: string) => void
    setSearchText: (text: string) => void
}

const useProductQueryStore = create<ProductQueryStore>((set) => ({
    productQuery: {},

    toggleCategory: (category) => set((store) => {
        const exists = store.productQuery.category?.includes(category);
           
        return {productQuery: {...store.productQuery, 
            category: exists 
            ? store.productQuery.category?.filter(c => c !== category) 
            :[...(store.productQuery.category ?? []), category] }
        }
    }),

    toggleType: (type) => set((store) => {
       const exists = store.productQuery.type?.includes(type);
        return{productQuery: {...store.productQuery, 
            type: exists 
            ? store.productQuery.type?.filter(t => t !== type)
            : [...(store.productQuery.type ?? []), type]
        }}}),

    setSortOrder: (sortOrder) => set((store) => ({productQuery: {...store.productQuery, sortOrder}})),

    setSearchText: (text) => set(() => ({productQuery: {searchText: text}}))
}))

export default useProductQueryStore;