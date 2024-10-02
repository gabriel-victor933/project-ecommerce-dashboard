
export async function postData(url, payload, contentType = 'application/json') {

    const baseUrl = import.meta.env.VITE_BASE_URL

    const response = await fetch(baseUrl + url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": contentType,
        },
    })
    if (!response.ok) {
        const errorMessage = `Erro na requisição: ${response.status} ${response.statusText}`;
        throw new Error(errorMessage)
    }

    return await response.json()
}

export async function postFormData(url, formData){
    const baseUrl = import.meta.env.VITE_BASE_URL

    const response = await fetch(baseUrl + url, {
        method: 'POST',
        body: formData,
    })
    
    if (!response.ok) {
        const errorMessage = `Erro na requisição: ${response.status} ${response.statusText}`;
        throw new Error(errorMessage)
    }

    return await response.json()
}