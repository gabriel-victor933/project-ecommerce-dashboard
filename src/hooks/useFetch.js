import useSWR from 'swr'

export default function useFetch(url){

    const baseUrl = import.meta.env.VITE_BASE_URL + url

    const { data , error, isLoading } = useSWR(baseUrl, fetcher) 


    return { data , error, isLoading }
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