import { fetchApi } from "./fetchApi.js";

export async function data(){
    let respons= await fetchApi()
    //console.log(respons)
    let newrespn=[]
    respons.forEach((item,num) => {
        const {login:name,id,html_url,avatar_url}=item
        const obj = {name:name,id:id,link:html_url,image:avatar_url}
        newrespn.push(obj)
    });
    return newrespn
}