import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductPropsType {
  product: Product[];
}
const initialState: ProductPropsType = {
  product: [],
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.product.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.product = state.product.filter(
        (item) => item?.id !== action.payload
      );
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
