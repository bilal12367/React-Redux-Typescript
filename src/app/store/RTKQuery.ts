import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
    reducerPath:'pokemonApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://dummyjson.com/'}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: (data) => {
                console.log('data',data);
                return `products`
            }
        }),
    }), 
})

export const { useGetAllProductsQuery } = pokemonApi