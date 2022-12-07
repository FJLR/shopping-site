const cart = JSON.parse(localStorage.getItem('cart')) || [];

document.getElementById('cart-size').textContent = cart.length;

const items = document.getElementById('items')

const cartItems = cart.map(item => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('item-wrapper')
    const title = document.createElement('div')
    const price = document.createElement('div')
    title.textContent = item.title
    price.textContent = `$${item.price.toFixed(2)}`

    wrapper.append(title)
    wrapper.append(price)
    return wrapper
})

items.append(...cartItems)


const purchase = document.getElementById('purchase')
const info = document.getElementById('info')
const finalized = document.getElementById('finalized')

purchase.addEventListener('click', () =>{
    localStorage.clear('cart')
    info.classList.add('hidden')
    finalized.classList.remove('hidden')

    setTimeout(() => {
        history.back()
    }, 2000)
})

