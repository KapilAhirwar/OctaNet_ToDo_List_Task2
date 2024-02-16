const text = document.getElementById("txt");
const btn = document.getElementById("btn");
const list = document.getElementById("addlist");
const add = document.getElementById("add");

console.log(text.value);
text.addEventListener('input',(event)=>{
    console.log(text.value);
})

btn.addEventListener('click',(event)=>{
    let newele = document.createElement('div');
    newele.textContent=text.value;
    newele.style='border:1px solid; height: 3rem; padding-left: 0.6rem; align-items: center; display: flex; width: 100%; margin-bottom:0.5rem; border-radius: 0.5rem; background-color:yellow;';
    add.insertAdjacentElement('afterbegin',newele);
    console.log(text.value);
    
    text.value="";
})

console.log(list.innerText)