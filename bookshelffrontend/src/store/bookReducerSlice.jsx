import { createSlice } from "@reduxjs/toolkit";


const bookReducerSlice = createSlice({
    name:"book",
    initialState: {isAddBook: false},
    reducers:{
        addBook(state){
            state.isAddBook = true
        },
        closeaddBook(state){
            state.isAddBook = false
        }
    }
})

export const {addBook, closeaddBook} = bookReducerSlice.actions
export default bookReducerSlice