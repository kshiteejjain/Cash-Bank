import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { PRODUCT_API } from "../../app/utils/constant";

export const getProducts = createAsyncThunk('products', async () => {
    return fetch(`${PRODUCT_API}`).then((res) =>
    res.json()
    )
})

const productListSlice = createSlice({
    name: 'productList',
    initialState: {
        products: [],
        loading: false,
        selectedProduct: []
    },
    extraReducers:  (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload.products;
        })
        builder.addCase(getProducts.rejected, (state) => {
            state.loading = false
        })
    },
    reducers: {
        selectedProduct: (state, action) => {
            state.selectedProduct.push(action.payload);
          }
      },
});

export const { selectedProduct } = productListSlice.actions

export default productListSlice.reducer