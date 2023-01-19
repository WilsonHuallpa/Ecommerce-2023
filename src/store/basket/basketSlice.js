import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
   name: 'basket',
   initialState: {
      isSaving: false,
      messageSaved: '',
      product: [],
      active: null,
   },
   reducers: {
      savingNewProduct: (state) =>{
         state.isSaving = true;
      },
      addNewEmptyPoduct: (state, action) => {
         state.product.push( action.payload );
         state.isSaving = false;
      },
      deleteProductById: (state, action) => {
         const index = state.product.findIndex((item => item.id === action.payload));
         let newProducts = [...state.product];
         if(index >= 0){
            newProducts.splice(index,1);
         }else { console.log("cant remove product")}
         state.product = newProducts;
      }
   }
});
// Action creators are generated for each case reducer function
export const { 
   savingNewProduct, 
   addNewEmptyPoduct,
   deleteProductById,
} = basketSlice.actions;