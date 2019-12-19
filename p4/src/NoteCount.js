export default class NoteCount {
    constructor() {
        let notecount = localStorage.getItem('notecount');
        this.items = (notecount) ? JSON.parse(notecount) : [];
    }
    getItems() {
        return this.items;
    }
    count() {
        let sum = 0;
        for (let key of Object.keys(this.items)) {
            sum += this.items[key].quantity;
        }
        return sum;
    }
    update() {
        localStorage.setItem('notecount', JSON.stringify(this.items))
    }
    add(title, quantity = 1) {
        let item = this.getItem(title)
        if (item) {
            item.quantity += quantity;
        } else {
            this.items.push({
                title: title,
                quantity: quantity
            });
        }
        this.update();
    }
    remove(title) {
        let item = this.getItem(title);

        let itemIndex = this.items.indexOf(item);

        if (item) {
            this.items.splice(itemIndex, 1);
            this.update();
        }
    }
    getItem(noteTitle) {
        return this.items.find(({ title }) => title === noteTitle) || null;
    }
}