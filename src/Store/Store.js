import { configureStore } from "@reduxjs/toolkit";
import slices1 from "../Feature/Slice";
import SliceModal from '../Modal/ModalSlice'
const store=configureStore({
    reducer:{
        ecommerce:slices1,
        modal:SliceModal,
    }
})

export default store;