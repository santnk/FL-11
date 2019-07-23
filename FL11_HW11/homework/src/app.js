let rootNode = document.getElementById('root');

let h1 = document.createElement('h1');
h1.className = 'header';
h1.innerHTML = 'TODO Cat List';
rootNode.appendChild(h1);

let divInput = document.createElement('div');
divInput.className = 'div_input';
rootNode.appendChild(divInput);

let input = document.createElement('input');
input.setAttribute('value', 'Add new action');
divInput.appendChild(input);

let addButton = document.createElement('i');
addButton.className = 'material-icons button_add';
divInput.appendChild(addButton);
addButton.innerHTML = 'add_box';
addButton.addEventListener('click', newList);


let hr = document.createElement('hr');
rootNode.appendChild(hr);


let list = document.createElement('div');
rootNode.appendChild(list);

function stopList() {
    let listNum = list.children.length;
    let maxListNum = 9;
    if (listNum > maxListNum || !input.value) {

        let messageP = document.createElement('p');
        messageP.className = 'message';
        messageP.innerHTML = 'Maximum item per list are created!';
        rootNode.appendChild(messageP);
        addButton.removeEventListener('click', newList);
    }
}
function newList() {
    stopList();
    let divCheckBox = document.createElement('div');
    divCheckBox.className = 'div_checkbox';
    divCheckBox.setAttribute('draggable', 'true');
    divCheckBox.addEventListener('dragstart', handleDragStart, false);
    divCheckBox.addEventListener('dragover', handleDragOver, false);
    divCheckBox.addEventListener('drop', handleDragDrop, false);
    list.appendChild(divCheckBox);

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.className = 'checkbox';
    checkbox.setAttribute('onclick', `if(this.checked){ this.setAttribute('disabled', ''); }`);
    divCheckBox.appendChild(checkbox);

    let text = document.createElement('p');
    divCheckBox.appendChild(text);
    text.innerHTML = input.value;

    let checkboxEditIcon = document.createElement('i');
    checkboxEditIcon.className = 'material-icons';
    checkboxEditIcon.innerHTML = 'edit_box';
    divCheckBox.appendChild(checkboxEditIcon);
    checkboxEditIcon.addEventListener('click', editAction);

    let checkboxDeleteIcon = document.createElement('i');
    checkboxDeleteIcon.className = 'material-icons checkbox_icon_delete';
    checkboxDeleteIcon.innerHTML = 'delete_box';
    divCheckBox.appendChild(checkboxDeleteIcon);
    checkboxDeleteIcon.addEventListener('click', del);

    function editAction() {

        let edit = document.createElement('div');
        edit.className = 'edit';
        divCheckBox.style.display = 'none';
        list.insertBefore(edit, divCheckBox);

        let inputEdit = document.createElement('input');
        inputEdit.className = 'input_edit';
        edit.appendChild(inputEdit);

        let editIcon = document.createElement('i');
        editIcon.className = 'edit_icon material-icons';
        editIcon.innerHTML = 'save_box';
        editIcon.addEventListener('click', save);
        edit.appendChild(editIcon);

        function save(event) {
            event.target.parentElement.style.display = 'none';
            divCheckBox.style.display = 'flex';
            text.innerHTML = inputEdit.value;
        }
    }

    function del() {
        divCheckBox.remove();
    }

}
let dragSrcEl = null;

function handleDragStart(event) {
    event.target.style.opacity = '0.4';

    dragSrcEl = event.target;

    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/html', event.target.innerHTML);
}
function handleDragOver(event) {
    if (event.preventDefault) {
        event.preventDefault();
    }
    event.dataTransfer.dropEffect = 'move';
    return false;
}
function handleDragDrop(event) {
    if (event.stopPropagation) {
        event.stopPropagation(); 
    }

    if (dragSrcEl !== true) {
        dragSrcEl.innerHTML = event.target.innerHTML;
        event.target.innerHTML = event.dataTransfer.getData('text/html');
    }
    return false;
}
