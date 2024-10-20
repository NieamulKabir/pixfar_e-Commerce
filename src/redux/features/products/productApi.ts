import { api } from "@/redux/api/apiSlice";
import { IProduct } from "@/types/globalTypes";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => "/products",
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
