// Função para adicionar produto ao carrinho
const addToCartButtons = document.querySelectorAll('.add-to-cart');
let cart = [];

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.dataset.product;
        const price = parseFloat(button.dataset.price);
        
        // Adicionar produto ao carrinho
        cart.push({ product, price });
        updateCart();
    });
});

// Atualizar conteúdo do carrinho
function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartEmptyMessage = document.getElementById('cart-empty');
    const checkoutButton = document.getElementById('checkout-btn');

    // Limpar itens do carrinho
    cartItemsList.innerHTML = '';
    
    let total = 0;
    
    // Adicionar itens ao carrinho
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - R$ ${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
        total += item.price;
    });
    
    // Mostrar mensagem se o carrinho estiver vazio
    if (cart.length === 0) {
        cartEmptyMessage.style.display = 'block';
        checkoutButton.disabled = true;
    } else {
        cartEmptyMessage.style.display = 'none';
        checkoutButton.disabled = false;
    }
    
    // Atualizar total
    cartTotal.textContent = `R$ ${total.toFixed(2)}`;
}
