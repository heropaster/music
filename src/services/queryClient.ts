import {QueryClient} from '@tanstack/react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 40,
            retry: 1,
            refetchOnWindowFocus: false,
        },
    },
})
export default queryClient