const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

addItems.addEventListener('submit', addItem)

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value
    const item = {
        text: 'Item Name',
        done: false
    }

    items.push(item)
    this.reset()

}