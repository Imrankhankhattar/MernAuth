import { apiSlice } from "./api";

const URL = 'api/user'

export const userSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: `${URL}/auth`,
                method: 'POST',
                body: credentials
            })
        })
    })
})

export const { useLoginMutation } = userSlice