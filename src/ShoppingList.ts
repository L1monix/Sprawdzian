import ShoppingItem from "./ShoppingItem";

class ShoppingList {
    private items: ShoppingItem[] = [];

    addItem(item: ShoppingItem): void {
        this.items.push(item);
    }

    removeItem(id: number): void {
        this.items = this.items.filter(item => item.id !== id);
    }

    getItem(id: number): ShoppingItem | undefined {
        return this.items.find(item => item.id === id);
    }

    getItems(filter: string = "all"): ShoppingItem[] {
        if (filter === "toBuy") {
            return this.items.filter(item => !item.isBought);
        }
        if (filter === "bought") {
            return this.items.filter(item => item.isBought);
        }
        return this.items;
    }

    clearAll(): void {
        this.items = [];
    }
}

export default ShoppingList;