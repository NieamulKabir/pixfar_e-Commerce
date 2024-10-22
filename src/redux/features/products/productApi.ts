import { api } from "@/redux/api/apiSlice";
import { IProduct } from "@/types/globalTypes";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], number>({
      query: (page = 1) => `/products?limit=${page * 5}`,
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
