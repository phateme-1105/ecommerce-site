import { create } from "zustand";

interface Item {
    id: string;
    name: string;
    price: number;
    image: string;
    size: string;
    quantity: number;
}

interface cartQueryStore{
    items: Item[];
    increaseItem: (item: Omit<Item,'quantity'>) => void;
    decreaseItem: (id: string, size: string) => void;
    removeItem: (id:string, size: string) => void;
    clearCart: () => void;
    totalCount: number;
    totalPrice: number;
}

const useCartQueryStore = create<cartQueryStore>((set) => ({
    items: [] as Item[],
    totalCount: 0,
    totalPrice: 0,

    increaseItem: (item) => set((store) => {
      const exist = store.items.find(i => i.id === item.id && i.size === item.size);
      const items = exist 
      ? store.items.map(i => i.id === item.id && i.size === item.size ? {...i , quantity: i.quantity +1} :i) 
      : [...store.items, {...item, quantity: 1}];
      const totalCount = items.reduce((s, i) => s + i.quantity, 0);
      const totalPrice = items.reduce((s, i) => s + (i.quantity * i.price), 0);
      return {items, totalCount, totalPrice}
    }),

    decreaseItem: (id, size) => set( store => {
        const exist = store.items.find(i => i.id === id && i.size === size);

        if(!exist) return {items: store.items, totalCount: store.totalCount}

        const items = exist?.quantity>1 
        ? store.items.map(i => i.id === id && i.size === size ?{...i , quantity: i.quantity -1} : i)
        : store.items.filter ( i => !(i.id === id && i.size === size))
        const totalCount = items.reduce((s, i) => s + i.quantity, 0 );
        const totalPrice = items.reduce((s, i) => s+ (i.quantity * i.price),0)

        return {items, totalCount, totalPrice};
    }),

    removeItem: (id, size) => set(store => {
        const items = store.items.filter(i => !(i.id === id && i.size === size));
        const totalCount = items.reduce((s, i) => s + i.quantity , 0);
        const totalPrice = items.reduce ((s, i) => s + (i.quantity * i.price), 0)
        return {items, totalCount, totalPrice}

    }),
    clearCart: () => set(() => ({items: [], totalCount: 0, totalPrice: 0})),

   
}))

export default useCartQueryStore;