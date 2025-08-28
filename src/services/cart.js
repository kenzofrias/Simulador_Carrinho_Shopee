// Ações do carrinho:
import createItem from "./item.js"

// adc item do carrinho (+1 item) OK
async function addItem(userCart, item) {
    userCart.push(item)
}

// calcular valor total
async function calculateTotal(userCart) {
    console.log("\nSeu total do carrinho shopee é: ")
    
    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0)
    //"total" é o acumulador, "item" o item atual e "0" o valor inicial
    console.log(`Total: ${result}`)
    
}

// deletar item do carrinho (0 item)
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)

    if(index !== -1){
        userCart.splice(index, 1)
        //remove 1 objeto 
    }
}

// remover item do carrinho (-1 item)
async function removeItem(userCart, item){
    /*
    //transforma o indice visual do usuario para o indice do backend
    const deleteIndex = index - 1
    // é maior do que zero e se é menor do que o tamanho do carrinho
    if(index >= 0 && index < userCart.length){
         userCart.splice(deleteIndex, 1)
    }
    */

    //encontrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    //caso não encontre
    if (indexFound == -1){
        console.log("item não encontrado")
        return
    }

    //item > 1, subtrair um item, senão, item = 1, deletar
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1 
    }else{
        userCart.splice(indexFound, 1)
    }
}

async function displayCart(userCart) {
    console.log("\nShopee cart list: ")
    //olhar valor a valor dentro do array: "item" é o item e "index" posição
    userCart.forEach((item, index) => {
        console.log
        (`${index + 1}. ${item.name} - R$${item.price} | ${item.quantity}x | Subtotal = ${item.quantity * item.price}`)
    });
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
}
