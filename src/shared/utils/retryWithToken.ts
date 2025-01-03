import authorize from "../api/authorize"

export default async function retryWithToken(operation : () => any){
    try{
        return await operation()
    }
    catch(e){
        await authorize() 
        return await operation()
    }
}