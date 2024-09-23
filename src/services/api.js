
export default async function postData(url, body) {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
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