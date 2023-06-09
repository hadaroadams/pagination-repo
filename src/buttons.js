import { display } from "./display.js"

export let num = 0
let btns = document.querySelectorAll('footer button')
export function button(){
    btns.forEach((item)=>{
        let list = item
        item.onclick=(e)=>{
            e.preventDefault()
            console.log(e)
           
            item.classList.add('active')
            console.log(item)
            if(item.id=='prev'){
                if(num == 0){
                    num = 10
                }
                num--
                display()
                item.classList.remove('active')
            }else if(item.id=="next"){
                if(num==9){
                    num=-1
                }
                num++
                console.log(num)
                display()
                item.classList.remove('active')
            }else{
                num = Number(item.id)-1
                console.log(num)
                display()
            }
            button()
        }
        list.classList.remove('active')
    })
    btns.forEach((item)=>{
        item.classList.remove('active')
        if(item.id==`${num+1}`){
            item.classList.add('active')
        }
    })  
}

