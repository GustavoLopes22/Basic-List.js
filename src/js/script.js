var list = [];
var storedList = JSON.parse(localStorage.getItem('saveList'));

function addItem(newItem) {
    list.push(newItem);

    clearFields();
    renderList();
}

function renderList() {
    
    if ($('#myList').is(':empty')){
        getStoredList();
      }

    let count = list.length;

    for (let i = 0; i < count; i++) {
        $('#myList').append(`<label class="list-group-item d-flex gap-3"> <input class="form-check-input flex-shrink-0" type="checkbox" value="" style="font-size: 1.375em;"> <span class="pt-1 form-checked-content"><strong>${list[i]}.</strong></span></label>`);        
    }
    
}

function deleteItem(item) {
    let position = list.indexOf(item);
    list.splice(position, 1);    

    clearFields();
    renderList();
}

function clearFields() {
    let form = document.getElementById('myForm');
    form.reset();

    $('#myList').html("");
}

function saveList() {    
    localStorage.setItem('saveList', JSON.stringify(list));

    alert('Lista salva!');
}

function getStoredList() {
    clearFields();
    
    let count = storedList.length;

    for (let i = 0; i < count; i++) {
        $('#myList').append(`<label class="list-group-item d-flex gap-3"> <input class="form-check-input flex-shrink-0" type="checkbox" value="" style="font-size: 1.375em;"> <span class="pt-1 form-checked-content"><strong>${storedList[i]}.</strong></span></label>`);        
    }
}