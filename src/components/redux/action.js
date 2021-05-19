import { createAction } from "@reduxjs/toolkit";

// export const addContact = payload => ({
//   type: "addContact",
//   payload
// });
// export const deleteContact = payload => ({
//   type: "deleteContact",
//   payload
// });
// export const addFilter = payload => ({
//   type: "addFilter",
//   payload
// });

export const addContact = createAction("addContact");
export const deleteContact = createAction("deleteContact");
export const addFilter = createAction("addFilter");
