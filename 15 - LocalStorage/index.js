const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

addItems.addEventListener('submit', addItem)

function addItem(e) {
    e.preventDefault();
    const text = this.querySelector('[name=item]')
    const item = {
        text: 'Item Name',
        done: false
    }
}