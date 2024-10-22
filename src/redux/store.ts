import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { api } from "./api/apiSlice";
import cartReducer from "./features/cart/cartSlice";
import productReducer from "./features/products/productSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // Only persist cart state
};

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  cart: cartReducer,
  product: productReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }).concat(api.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
