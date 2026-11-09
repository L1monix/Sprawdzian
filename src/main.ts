import { validateItem } from "./validation";
import ShoppingItem from "./ShoppingItem";
import ShoppingList from "./ShoppingList";

const nameInput = document.querySelector<HTMLInputElement>("#nameInput");
const quantityInput = document.querySelector<HTMLInputElement>("#quantityInput");
const addButton = document.querySelector<HTMLButtonElement>("#addButton");
const errorMessage = document.querySelector<HTMLDivElement>("#errorMessage");
const filterSelect = document.querySelector<HTMLSelectElement>("#filterSelect");
const listContainer = document.querySelector<HTMLDivElement>("#listContainer")!;
const counter = document.querySelector<HTMLDivElement>("#counter");
const clearBoughtButton = document.querySelector<HTMLButtonElement>("#clearBoughtButton");

const shoppingList = new ShoppingList();
let idCounter = 1;

function updateCounter(): void {
    if (!counter) return;
    const total = shoppingList.getItems("all").length;
    const bought = shoppingList.getItems("bought").length;
    counter.textContent = `Wszystkie: ${total} | Kupione: ${bought} | Do kupienia: ${total - bought}`;
}

function buildList(): void {
    if (!listContainer || !filterSelect) return;
    const filterValue = filterSelect.value;
    const itemsToDisplay = shoppingList.getItems(filterValue);
    
    listContainer.innerHTML = itemsToDisplay.map(item => item.render()).join("");
    updateCounter();
}

if (nameInput && quantityInput && addButton && errorMessage && listContainer && filterSelect && clearBoughtButton) {
    addButton.addEventListener('click', (e) => {
        e.preventDefault();
        const name = nameInput.value;
        const quantityText = quantityInput.value;

        const error = validateItem(name, quantityText);
        if (error) {
            errorMessage.textContent = error;
            return;
        }

        errorMessage.textContent = "";
        const newItem = new ShoppingItem(idCounter++, name, Number(quantityText));
        shoppingList.addItem(newItem);

        nameInput.value = "";
        quantityInput.value = "";

        buildList();
    });

    listContainer.addEventListener("click", (e) => {
        const target = e.target as HTMLElement;
        const itemDiv = target.closest("[data-id]") as HTMLElement | null;
        if (!itemDiv) return;

        const itemId = Number(itemDiv.dataset.id);
        const item = shoppingList.getItem(itemId);

        if (target.classList.contains("delete-btn")) {
            shoppingList.removeItem(itemId);
            buildList();
        } else if (target.classList.contains("toggle-btn") && item) {
            item.toggle();
            buildList();
        }
    });

    filterSelect.addEventListener("change", () => {
        buildList();
    });

    clearBoughtButton.addEventListener("click", () => {
        shoppingList.clearAll();
        buildList();
    });
}