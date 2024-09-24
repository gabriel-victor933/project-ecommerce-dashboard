import { useState } from "react";

export default function usePostData(url){

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const baseUrl = import.meta.env.VITE_BASE_URL

    async function postData(payload, contentType = 'application/json') {
        setLoading(true)
        const response = await fetch(baseUrl + url, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": contentType,
            },
        })
    
        if (!response.ok) {
            const errorMessage = `Erro na requisição: ${response.status} ${response.statusText}`;
            setError(errorMessage)
        } else {

            const result =  await response.json()
            setData(result)
        }
    
        setLoading(false)
    }

    return { loading, data, error, postData }
}