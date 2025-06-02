
interface IRequest{
    method : "GET" | "POST" | "DELETE" | "PUT"
    url : string,
    body? : any,
    queryParams : Record<string, string>,
    headers : Record<string, string>,
    withCredentials : boolean
}
export const  request = async <T>({body, headers, method, queryParams, url, withCredentials} : IRequest) => {
    let finalUrl = url;
    if (queryParams){
        const search = new URLSearchParams(queryParams).toString();
        finalUrl += "?" + search;
    }
    const response = await fetch(finalUrl, {
        method,
        body : (method === "POST" || method === "PUT") ? body : undefined,
        headers : headers,
        credentials : withCredentials ? "include" : "same-origin"
    })
    if (!response.ok){
        const errorData = await response.json().catch(() => {});
        console.log(errorData);
        throw errorData;
    }
    const data:T = await response.json();
    return data;
}