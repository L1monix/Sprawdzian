export function validateItem(name, quantityText) {
    if (!name.trim()) {
        return "Nazwa produktu nie może być pusta.";
    }
    const quantity = Number(quantityText);
    if (isNaN(quantity) || quantity <= 0) {
        return "Ilość musi być liczbą większą od 0.";
    }
    return null;
}
