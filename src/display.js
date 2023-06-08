import { num } from "./buttons.js";
import { data } from "./data.js";
import { getElement } from "./element.js";

export async function display(){
    let element = getElement('main')
    element.innerHTML=""
    let newNum = num*10
    let data2 =  await data()
    let data3 =data2.slice(newNum,newNum+10)
    console.log(data3)
    data3.map((item, numb)=>{
        if(numb<=10){
        let article = document.createElement('article')
        article.innerHTML=`<img src="${item.image}" alt="">
            <h2>${item.name}</h2>
            <a href="${item.link}"><button>VIEW PROFILE</button></a>`
            element.appendChild(article)
        }else{
            return
        }
    })
}