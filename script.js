var cardContainer = document.getElementById('cardContainer');
var addFieldBtn = document.getElementById('addCardBtn');

addFieldBtn.addEventListener('click', function() {
    var text = prompt('Enter the text for the field:');
    if (text) {
    addCard(text);
    }
});

function addCard(text) {
    var card = document.createElement('div');
    card.className = 'card';

    var textField = document.createElement('textarea');
    textField.value = text;
    textField.disabled = true;

    var updateBtn = document.createElement('button');
    updateBtn.textContent = 'Update';
    updateBtn.addEventListener('click', function() {
    textField.disabled = !textField.disabled;
    updateBtn.textContent = textField.disabled ? 'Update' : 'Save';
    });

    var deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
    cardContainer.removeChild(card);
    });

    card.appendChild(textField);
    card.appendChild(updateBtn);
    card.appendChild(deleteBtn);

    cardContainer.appendChild(card);
}