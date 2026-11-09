class ShoppingItem {
    id;
    name;
    quantity;
    isBought;
    constructor(id, name, quantity, isBought = false) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.isBought = isBought;
    }
    toggle() {
        this.isBought = !this.isBought;
    }
    render() {
        return `
        <div data-id="${this.id}">
            <p>${this.id}</p>
            <h3>${this.name}</h3>
            <p>${this.quantity}</p>
            <button class="toggle-btn">${this.isBought ? 'Do kupienia' : 'Kupione'}</button>
            <button class="delete-btn">Usuń</button>
        </div>`;
    }
}
export default ShoppingItem;
