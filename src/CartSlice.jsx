import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  addItem: (state, action) => {
  const { name, image, cost } = action.payload;
  const existingItem = state.items.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    state.items.push({ name, image, cost, quantity: 1 });
  state.items = state.items.filter(item => item.name !== action.payload);
    const { name, quantity } = action.payload;
const itemToUpdate = state.items.find(item => item.name === name);
if (itemToUpdate) {
  itemToUpdate.quantity = quantity; 1 
}    
}

},
  reducers: {
    addItem: (state, action) => {
    
    },
    removeItem: (state, action) => {
    },
    updateQuantity: (state, action) => { 
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
