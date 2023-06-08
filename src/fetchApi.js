const url ='https://api.github.com/users/john-smilga/followers?per_page=100'

export async function fetchApi(){
        try{
            let data1 =await fetch(url)
            let resp  = await data1.json()
            return resp
        }
        catch(erro){
            console.log(erro)
        }
}