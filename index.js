const $div = document.querySelector("div")
const $form = document.querySelector("form")

let inventory = [{
    name: "+5 Dexerity Vest",
    sell_in: 10,
    quality: 20,
    category: "none"
}, {
    name: "Aged Brie",
    sell_in: 2,
    quality: 0,
    category: "Aged Brie"
}, {
    name: "Elixir of the Mongoose",
    sell_in: 5,
    quality: 7,
    category: "none"
}, {
    name: "Sulfuras, Hand of Ragnaros",
    sell_in: 0,
    quality: 80,
    category: "Sulfuras"
}, {
    name: "Backstage passes to a TAFKAL80ETC concert",
    sell_in: 15,
    quality: 20,
    category: "Backstage pass"
}, {
    name: "Conjured Mana Cake",
    sell_in: 3,
    quality: 6,
    category: "Conjured"

}]



addEventListener("submit", event => {
            event.preventDefault()
            const formData = new FormData(event.target)
            const newItem = {
                name: formData.get("item"),
                sell_in: formData.get("sell_in"),
                quality: formData.get("quality")
            }
            let inventory = [...inventory, newItem]
            return items
        }





        function parseCategory(item) {
            if (item.name.includes("Aged Brie")) {
                item.category = "Aged Brie"
            } else if (item.name.includes("Sulfuras")) {
                item.category = "Sulfuras"
            } else if (item.name.includes("Backstage passes")) {
                item.category = "Backstage passes"
            } else if (item.name.includes("Counjured")) {
                item.category = "Conjured"
            }
            return item
        }


        function addItem(item) {

        }

        function updateSellIn() {}

        function updateQuality() {}