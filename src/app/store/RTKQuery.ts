import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
    reducerPath:'pokemonApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://reqres.in/api/'}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: (data) => {
                console.log('data',data);
                return `users`
            }
        }),
        addNewPost: builder.mutation({
            query: (payload) => ({
              url: 'users?page=1',
              method: 'POST',
              body: payload,
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            }),
          }),
    }), 
    
})

export const { useGetAllProductsQuery, useAddNewPostMutation } = pokemonApi