class ShoppingItem {
    id: number;
    name: string;
    quantity: number;
    isBought: boolean;

    constructor(id: number, name: string, quantity: number, isBought = false) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.isBought = isBought;
    }

    toggle(): void {
        this.isBought = !this.isBought;
    }

    render(): string {
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