const buttons =  document.querySelector(".btn");
const input = document.querySelector(".todos");

buttons.addEventListener('submit',(e)  =>{
    e.preventDefault();
    const todo = buttons.add.value;

    if(todo.length != 0){
       newList(todo);
        buttons.reset();
    }else{
        alert("please input task");
    }
});

onclick="document.querySelector('d-flex').innerText = ;"

function newList(todo) {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="fa fa-trash-o delete"></i>
    </li>`;
    input.innerHtml + html;

}

   input.addEventListener('click',(e) =>{
        if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
       } 
})
