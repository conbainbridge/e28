export default class TodoCount {
    constructor() {
        let todocount = localStorage.getItem('todocount');
        this.items = (todocount) ? JSON.parse(todocount) : [];
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
        localStorage.setItem('todocount', JSON.stringify(this.items))
    }
    add(slug, quantity = 1) {
        let item = this.getItem(slug)
        if (item) {
            item.quantity += quantity;
        } else {
            this.items.push({
                slug: slug,
                quantity: quantity
            });
        }
        this.update();
    }
    remove(slug) {
        let item = this.getItem(slug);

        let itemIndex = this.items.indexOf(item);

        if (item) {
            this.items.splice(itemIndex, 1);
            this.update();
        }
    }
    getItem(productSlug) {
        return this.items.find(({ slug }) => slug === productSlug) || null;
    }
}