class ShoppingList {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
    }
    getItem(id) {
        return this.items.find(item => item.id === id);
    }
    getItems(filter = "all") {
        if (filter === "toBuy") {
            return this.items.filter(item => !item.isBought);
        }
        if (filter === "bought") {
            return this.items.filter(item => item.isBought);
        }
        return this.items;
    }
    clearAll() {
        this.items = [];
    }
}
export default ShoppingList;
