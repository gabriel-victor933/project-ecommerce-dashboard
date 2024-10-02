import useSWR from 'swr'

export default function useFetch(url, options){

    const baseUrl = import.meta.env.VITE_BASE_URL + url

    const { data , error, isLoading, mutate } = useSWR(baseUrl, fetcher, options) 


    return { data , error, isLoading, mutate }
}   

async function fetcher(url){

    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
        },
    })

    if (!response.ok) {
        const errorMessage = `Erro na requisição: ${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
    }

    return await response.json()
}