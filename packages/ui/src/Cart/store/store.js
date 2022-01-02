import create from "zustand";
import { persist, devtools } from "zustand/middleware";

const useStore = create(
  devtools(
    persist(
      (set, get) => ({
        cart: {
          items: [],
          total: 0,
        },
        handleCalculateTotal: () => {
          set(state => ({
            cart: {
              ...state.cart,
              total: get().cart.items.reduce((acc, item) => {
                return acc + item.price * item.quantity;
              }, 0),
            },
          }));
        },
        handleDeleteItem: id => {
          set(state => ({
            ...state,
            cart: {
              ...state.cart,
              items: get().cart.items.filter(item => item.id !== id),
            },
          }));
          get().handleCalculateTotal();
        },
        handleIncrementQty: id => {
          const item = get().cart.items.find(item => item.id === id);

          item.quantity++;
          console.log(item);

          // find the index and set the updated item to that index
          const index = get().cart.items.findIndex(item => item.id === id);

          set(state => ({
            cart: {
              ...state.cart,
              items: [
                ...state.cart.items.slice(0, index),
                item,
                ...state.cart.items.slice(index + 1),
              ],
            },
          }));
          get().handleCalculateTotal();
        },
        handleDecrementQty: id => {
          // update the item quantity
          const item = get().cart.items.find(item => item.id === id);

          item.quantity--;

          // if the item quantity is 0, remove it from the cart
          if (item.quantity === 0) {
            set(state => ({
              cart: {
                ...state.cart,
                items: state.cart.items.filter(item => item.id !== id),
              },
            }));

            get().handleCalculateTotal();

            return;
          }
          const index = get().cart.items.findIndex(item => item.id === id);

          set(state => ({
            cart: {
              ...state.cart,
              items: [
                ...state.cart.items.slice(0, index),
                item,
                ...state.cart.items.slice(index + 1),
              ],
            },
          }));
          get().handleCalculateTotal();
        },

        addToCart: item => {
          if (!item.quantity) return;

          set(state => ({
            // check for excisting item and increase quantity else add new item
            cart: {
              ...state.cart,
              items: state.cart.items.some(i => i.id === item.id)
                ? state.cart.items.map(i => (i.id === item.id ? item : i))
                : [...state.cart.items, item],
            },
          }));
          get().handleCalculateTotal();
        },
        emptyCart: () => {
          set(() => ({
            cart: {
              items: [],
              total: 0,
            },
          }));
        },
      }),
      {
        name: "Cart", // unique name
        getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
      }
    )
  )
);

export default useStore;
