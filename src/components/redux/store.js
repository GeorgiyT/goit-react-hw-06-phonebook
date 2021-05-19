// import { createStore } from "@reduxjs/toolkit";
import { configureStore, createReducer } from "@reduxjs/toolkit";
import { v4 as randId } from "uuid";
import * as actions from "./action";

// const initialState = {
//   contacts: [],
//   filter: ""
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "addContact":
//       return { ...state, contacts: [...state.contacts, { id: randId(), ...action.payload }] };

//     case "deleteContact":
//       return { ...state, contacts: state.contacts.filter(el => el.id !== action.payload) };

//     case "addFilter":
//       return { ...state, filter: action.payload };

//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

const contactsReducer = createReducer([], {
  [actions.addContact]: (state, action) => [...state, { id: randId(), ...action.payload }],
  [actions.deleteContact]: (state, action) => state.filter(el => el.id !== action.payload)
});

const filterReducer = createReducer("", {
  [actions.addFilter]: (state, action) => action.payload
});

const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReducer }
});

export default store;
