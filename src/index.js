const myCart = []
import * as cartService from "./services/cart.js"
import createItem from "./services/item.js"

console.log("Bem-vindo ao seu carrinho da Shopee!")

//criando dois items
const item1 = await createItem("cpmbo carrinhos hotwheels", 20.99, 3)
const item2 = await createItem("livro animado", 25.99, 2)
const item3 = await createItem("capa para celular", 14.99, 1)
const item4 = await createItem("kit ping pong", 29.99, 1)


//adc itens ao carrinho
await cartService.addItem(myCart, item1)
await cartService.addItem(myCart,item2)
await cartService.addItem(myCart,item3)
await cartService.addItem(myCart,item4)

// await cartService.removeItem(myCart, 2) ***
await cartService.removeItem(myCart, item2)
await cartService.removeItem(myCart, item1)

await cartService.displayCart(myCart)

// deletei dois itens ao carrinho
// await cartService.deleteItem(myCart, item2.name)

await cartService.calculateTotal(myCart)