var list = [];
var storedList = JSON.parse(localStorage.getItem('saveList'));

function main() {    

    list = [];        
    let count = storedList.length;

    for (let i = 0; i < count; i++) {
        list.push(storedList[i]);
    }   
    
    saveList();
    renderList();
}

function addItem(newItem) {
    list.push(newItem);

    saveList()
    renderList();
}

function deleteItem() {

    let removed = []
    let count = list.length;

    for (let i = 0; i < count; i++) {
        let checkboxs = document.getElementById(`my-${list[i]}`);

        if (checkboxs.checked){
            removed.push(list[i])                
        }
        
    }

    let difference = list.filter(x => !removed.includes(x));
    list = difference;
   
    saveList();
    renderList();            
}

function renderList() { 
    clearFields();
    
    let count = list.length;

    for (let i = 0; i < count; i++) {
        $('#myList').append(`<label class="list-group-item d-flex gap-3"> <input id="my-${list[i]}" class="form-check-input flex-shrink-0" type="checkbox" value="${list[i]}" style="font-size: 1.375em;"> <span class="pt-1 form-checked-content"><strong>${list[i]}.</strong></span></label>`);        
    }    
}

function clearFields() {
    let form = document.getElementById('myForm');
    form.reset();

    $('#myList').html("");
}

function saveList() {    
    localStorage.setItem('saveList', JSON.stringify(list));
    JSON.parse(localStorage.getItem('saveList'));
}