const addButton = document.querySelector('.addButton'); 
var input = document.querySelector('.input');
const container = document.querySelector('.data_container');

class item { 
    constructor(itemName){
        this.createDiv(itemName);

    }
      

   //create todo
   createDiv(itemName){

       // create input tag dynimacally
       let input = document.createElement('input');
       input.value = itemName;
       input.disabled = true;
       input.classList.add('item_input');
       input.type = 'text';
       input.style.fontSize = '25px';
       input.style.color = 'black';

        // create item div
        let itemBox = document.createElement('div');
        itemBOX.classList.add('item');

        // create edit button dynamically
        let editButton = document.createElement('button');
        editButton.innerHTML = "edit";
        editButton.classList.add('editButton');

        // create remove button dynamically
        let removeButton = document.createElement('button');
        removeButton.innerHTML = "remove";
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);
        itemBox.append.Child(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);


        editButton.addEventListener('click',()=>
              this.edit(input))

         

        removeButton.addEventListener('click',()=>
             this.remove(itemBox))

         


   } 
   //edit todo
   edit(input){
       input.disabled = !input.disabled;

   }
   //remove todo
   remove(item){
       container.removeChild(item);

   }

} 
function check(){
    if(input.value != '')
    {
      new item(input.value);
      input.value=" ";
    }

}
addButton.eventlistener('click',check);
