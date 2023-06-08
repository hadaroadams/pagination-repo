
export function getElement(selection){
    if(selection){
        let element = document.querySelector(selection)
        return element
    }else{
        throw console.log("Not an element")
    }
}