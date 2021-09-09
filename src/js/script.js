var list = [];
var storedList = JSON.parse(localStorage.getItem('saveList'));
var storedMode = JSON.parse(localStorage.getItem('darkMode'));
var darkMode = storedMode;

function main() {    

    list = [];        
    let count = storedList.length;

    for (let i = 0; i < count; i++) {
        list.push(storedList[i]);
    }

    if(darkMode == true){
        let body = document.body;
        let input = document.getElementById('item');
        let switchMode = document.getElementById('darkMode-switch');

        body.classList.toggle('dark-mode');
        input.classList.toggle('dark-mode-input');
        switchMode.setAttribute('checked','checked');

    }
    
    saveConfig();
    renderList();
}

function addItem(newItem) {
    list.push(newItem);

    saveConfig()
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
   
    saveConfig();
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

function saveConfig() {      
    localStorage.setItem('saveList', JSON.stringify(list));
    localStorage.setItem('darkMode', darkMode);
}

function changeMode() {    

    if (document.getElementById('darkMode-switch').checked){
        darkMode = true;
    }else {
        darkMode = false;
    }

    let body = document.body;
    let input = document.getElementById('item');
    //let list = document.getElementsByClassName('group');

    body.classList.toggle('dark-mode');
    input.classList.toggle('dark-mode-input');
    //list.classList.toggle('dark-mode-list');

    saveConfig();
 }