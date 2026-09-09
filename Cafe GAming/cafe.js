// ==========================================
// PRODUCTOS
// ==========================================

const products = [

    {
        id: 1,

        name: "Cappuccino Vanilla Neon",

        category: "cafeteria",

        categoryName: "Cafetería",

        price: 4500,

        image:
            "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=900&q=85",

        description:
            "Cappuccino cremoso preparado con espresso, leche vaporizada, espuma de leche y un toque de vainilla.",

        ingredients:
            "Espresso doble, leche entera vaporizada, espuma de leche, esencia de vainilla y cacao.",

        tags: [
            "Recomendado Gamer",
            "Contiene lácteos"
        ]

    },


    {
        id: 2,

        name: "Monster Energy Chill",

        category: "bebidas",

        categoryName: "Bebidas & Energizantes",

        price: 3800,

        image:
            "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?auto=format&fit=crop&w=900&q=85",

        description:
            "Bebida energética bien fría para mantenerte despierto durante las partidas más intensas.",

        ingredients:
            "Bebida energética sabor original, hielo y rodajas de limón.",

        tags: [
            "Energizante",
            "Recomendado Gamer"
        ]

    },


    {
        id: 3,

        name: "Burger Cyber-Combo",

        category: "hamburguesas",

        categoryName: "Hamburguesas & Snacks",

        price: 8500,

        image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",

        description:
            "Doble carne smash de 120g, queso cheddar fundido, tocino crocante, salsa secreta Cyber y papas fritas.",

        ingredients:
            "Pan brioche, doble carne smash de 120g, queso cheddar, bacon, lechuga, tomate, salsa Cyber y papas fritas.",

        tags: [
            "Recomendado Gamer",
            "Contiene gluten",
            "Contiene lácteos"
        ]

    },


    {
        id: 4,

        name: "Loaded Fries Gaming",

        category: "hamburguesas",

        categoryName: "Hamburguesas & Snacks",

        price: 6500,

        image:
            "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85",

        description:
            "Papas fritas crocantes cubiertas con cheddar, bacon y salsa especial de la casa.",

        ingredients:
            "Papas, queso cheddar, bacon crocante, cebolla verde y salsa especial.",

        tags: [
            "Para compartir",
            "Contiene lácteos"
        ]

    },


    {
        id: 5,

        name: "Combo Gamer Pro",

        category: "combos",

        categoryName: "Combos Gamer",

        price: 12500,

        image:
            "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=900&q=85",

        description:
            "La combinación perfecta para una sesión larga: burger Cyber, papas y bebida fría.",

        ingredients:
            "Burger Cyber, papas fritas, queso cheddar, bacon, salsa especial y bebida a elección.",

        tags: [
            "Más vendido",
            "Recomendado Gamer"
        ]

    },


    {
        id: 6,

        name: "Iced Latte Cyber",

        category: "cafeteria",

        categoryName: "Cafetería",

        price: 4200,

        image:
            "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85",

        description:
            "Latte frío con espresso, leche cremosa, hielo y un suave toque de caramelo.",

        ingredients:
            "Espresso, leche, hielo y salsa de caramelo.",

        tags: [
            "Contiene lácteos",
            "Recomendado Gamer"
        ]

    },


    {
        id: 7,

        name: "Chicken Crispy Bites",

        category: "hamburguesas",

        categoryName: "Hamburguesas & Snacks",

        price: 6000,

        image:
            "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=85",

        description:
            "Trozos de pollo crocante acompañados de papas y salsa BBQ especial.",

        ingredients:
            "Pollo, rebozado crocante, papas fritas y salsa BBQ.",

        tags: [
            "Recomendado Gamer"
        ]

    },


    {
        id: 8,

        name: "Brownie Respawn",

        category: "postres",

        categoryName: "Postres",

        price: 4200,

        image:
            "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85",

        description:
            "Brownie de chocolate húmedo servido con helado de vainilla y salsa de chocolate.",

        ingredients:
            "Chocolate, cacao, harina de trigo, manteca, azúcar, huevo y helado de vainilla.",

        tags: [
            "Contiene gluten",
            "Contiene lácteos",
            "Contiene huevo"
        ]

    }

];


// ==========================================
// ELEMENTOS
// ==========================================

const productsGrid =
    document.getElementById("productsGrid");

const searchInput =
    document.getElementById("searchInput");

const categoryButtons =
    document.querySelectorAll(".category-button");

const productCounter =
    document.getElementById("productCounter");

const noResults =
    document.getElementById("noResults");


// ==========================================
// ESTADO
// ==========================================

let currentCategory = "todos";

let currentSearch = "";


// ==========================================
// FORMATEAR PRECIO
// ==========================================

function formatPrice(price) {

    return "$" + price.toLocaleString("es-AR");

}


// ==========================================
// CREAR CARD
// ==========================================

function createProductCard(product, index) {

    const card = document.createElement("article");

    card.className = "product-card";

    card.style.animationDelay =
        `${index * 0.05}s`;

    card.innerHTML = `

        <div
            class="product-image"
            data-id="${product.id}"
        >

            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
            >

            <span class="product-badge">
                ${product.tags[0]}
            </span>

        </div>


        <div class="product-body">

            <span class="product-category">
                ${product.categoryName}
            </span>

            <h3 data-id="${product.id}">
                ${product.name}
            </h3>

            <p class="product-description">
                ${product.description}
            </p>


            <div class="product-tags">

                ${product.tags
                    .map(tag => `
                        <span class="tag">
                            ${tag}
                        </span>
                    `)
                    .join("")
                }

            </div>


            <div class="product-bottom">

                <span class="product-price">
                    ${formatPrice(product.price)}
                </span>

                <button
                    class="add-button"
                    data-id="${product.id}"
                >
                    Agregar +
                </button>

            </div>

        </div>

    `;

    return card;
}


// ==========================================
// MOSTRAR PRODUCTOS
// ==========================================

function renderProducts() {

    const filteredProducts =
        products.filter(product => {

            const matchesCategory =
                currentCategory === "todos" ||
                product.category === currentCategory;

            const search =
                currentSearch.toLowerCase();

            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(search) ||

                product.description
                    .toLowerCase()
                    .includes(search);

            return matchesCategory && matchesSearch;

        });


    productsGrid.innerHTML = "";


    filteredProducts.forEach((product, index) => {

        productsGrid.appendChild(
            createProductCard(product, index)
        );

    });


    productCounter.textContent =
        `${filteredProducts.length} ${
            filteredProducts.length === 1
                ? "producto"
                : "productos"
        }`;


    if (filteredProducts.length === 0) {

        noResults.classList.add("show");

    } else {

        noResults.classList.remove("show");

    }

}


// ==========================================
// BUSCADOR
// ==========================================

searchInput.addEventListener(
    "input",
    event => {

        currentSearch =
            event.target.value;

        renderProducts();

    }
);


// ==========================================
// CATEGORÍAS
// ==========================================

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        currentCategory =
            button.dataset.category;

        renderProducts();

    });

});


// ==========================================
// MODAL
// ==========================================

const modal =
    document.getElementById("productModal");

const modalBackground =
    document.getElementById("modalBackground");

const modalClose =
    document.getElementById("modalClose");

const modalImage =
    document.getElementById("modalImage");

const modalCategory =
    document.getElementById("modalCategory");

const modalLabel =
    document.getElementById("modalLabel");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalIngredients =
    document.getElementById("modalIngredients");

const modalBadges =
    document.getElementById("modalBadges");

const modalPrice =
    document.getElementById("modalPrice");


// ==========================================
// MODAL STATE
// ==========================================

let selectedProduct = null;

let quantity = 1;


// ==========================================
// PERSONALIZACIÓN
// ==========================================

const customOptions =
    document.getElementById("customOptions");


let selectedExtras = [];

function getProductExtras(product) {

    const extrasByCategory = {

        cafeteria: [

            {
                name: "Extra shot de espresso",
                price: 800
            },

            {
                name: "Leche vegetal",
                price: 700
            },

            {
                name: "Crema extra",
                price: 600
            }

        ],


        bebidas: [

            {
                name: "Extra hielo",
                price: 300
            },

            {
                name: "Rodajas de limón",
                price: 200
            }

        ],


        hamburguesas: [

            {
                name: "Extra queso cheddar",
                price: 1000
            },

            {
                name: "Extra bacon",
                price: 1500
            },

            {
                name: "Cambiar papas por aros",
                price: 800
            }

        ],


        combos: [

            {
                name: "Extra queso cheddar",
                price: 1000
            },

            {
                name: "Extra bacon",
                price: 1500
            },

            {
                name: "Cambiar bebida",
                price: 500
            }

        ],


        postres: [

            {
                name: "Extra crema",
                price: 600
            },

            {
                name: "Extra salsa de chocolate",
                price: 500
            }

        ]

    };


    return extrasByCategory[
        product.category
    ] || [];

}

function renderCustomOptions() {

    customOptions.innerHTML = "";


    const extras =
        getProductExtras(selectedProduct);


    extras.forEach(extra => {

        const label =
            document.createElement("label");


        label.className =
            "custom-option";


        label.innerHTML = `

            <input
                type="checkbox"
                data-name="${extra.name}"
                data-price="${extra.price}"
            >

            <span>
                ${extra.name}
            </span>

            <strong>
                +${formatPrice(extra.price)}
            </strong>

        `;


        customOptions.appendChild(
            label
        );

    });


    const checkboxes =
        customOptions.querySelectorAll(
            "input"
        );


    checkboxes.forEach(checkbox => {

        checkbox.addEventListener(
            "change",
            () => {

                selectedExtras =
                    Array.from(checkboxes)
                        .filter(
                            checkbox =>
                                checkbox.checked
                        )
                        .map(
                            checkbox => ({
                                name:
                                    checkbox.dataset.name,

                                price:
                                    Number(
                                        checkbox.dataset.price
                                    )
                            })
                        );


                updateModalPrice();

            }
        );

    });

}

// ==========================================
// PRECIO TOTAL
// ==========================================

function calculateTotal() {

    if (!selectedProduct) return 0;


    let unitPrice =
        selectedProduct.price;


    selectedExtras.forEach(extra => {

        unitPrice += extra.price;

    });


    return unitPrice * quantity;

}


// ==========================================
// ACTUALIZAR PRECIO
// ==========================================

function updateModalPrice() {

    modalPrice.textContent =
        formatPrice(calculateTotal());

}


// ==========================================
// ABRIR MODAL
// ==========================================

function openModal(productId) {

    selectedProduct =
        products.find(
            product => product.id === productId
        );


    if (!selectedProduct) return;


quantity = 1;


// Resetear extras

selectedExtras = [];

renderCustomOptions();


    document.getElementById(
        "quantity"
    ).textContent = quantity;


    // Imagen

    modalImage.src =
        selectedProduct.image;

    modalImage.alt =
        selectedProduct.name;


    // Categoría

    modalCategory.textContent =
        selectedProduct.categoryName;


    // Info

    modalLabel.textContent =
        selectedProduct.tags[0];

    modalTitle.textContent =
        selectedProduct.name;

    modalDescription.textContent =
        selectedProduct.description;

    modalIngredients.textContent =
        selectedProduct.ingredients;


    // Badges

    modalBadges.innerHTML =
        selectedProduct.tags
            .map(tag => `
                <span class="tag">
                    ${tag}
                </span>
            `)
            .join("");


    updateModalPrice();


    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}


// ==========================================
// CERRAR MODAL
// ==========================================

function closeModal() {

    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

}


// ==========================================
// CLICK EN PRODUCTOS
// ==========================================

productsGrid.addEventListener(
    "click",
    event => {

        const target =
            event.target.closest(
                "[data-id]"
            );


        if (!target) return;


        const id =
            Number(target.dataset.id);


        openModal(id);

    }
);


// ==========================================
// CERRAR
// ==========================================

modalClose.addEventListener(
    "click",
    closeModal
);

modalBackground.addEventListener(
    "click",
    closeModal
);


// ESC

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {

            closeModal();

        }

    }
);


// ==========================================
// CANTIDAD
// ==========================================

document
    .getElementById("increaseQuantity")
    .addEventListener("click", () => {

        quantity++;

        document.getElementById(
            "quantity"
        ).textContent = quantity;

        updateModalPrice();

    });


document
    .getElementById("decreaseQuantity")
    .addEventListener("click", () => {

        if (quantity <= 1) return;

        quantity--;

        document.getElementById(
            "quantity"
        ).textContent = quantity;

        updateModalPrice();

    });


// ==========================================
// AGREGAR AL PEDIDO
// ==========================================

const addOrderButton =
    document.getElementById(
        "addOrderButton"
    );

const toast =
    document.getElementById("toast");


addOrderButton.addEventListener(
    "click",
    () => {

        if (!selectedProduct) return;


        const cartItem = {

            id: selectedProduct.id,

            name:
                selectedProduct.name,

            image:
                selectedProduct.image,

            quantity:
                quantity,

            extras:
                [...selectedExtras],

            total:
                calculateTotal()

        };


        cart.push(cartItem);


        updateCart();


        showToast(
            `${quantity}x ${selectedProduct.name}`
        );


        closeModal();

    }
);


// ==========================================
// TOAST
// ==========================================

function showToast(message) {

    const toastText =
        toast.querySelector("small");


    toastText.textContent =
        message;


    toast.classList.add("show");


    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}


// ==========================================
// ATAJO "/" PARA BUSCAR
// ==========================================

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "/" &&
            document.activeElement !== searchInput
        ) {

            event.preventDefault();

            searchInput.focus();


    }

}
);


// ==========================================
// INICIALIZAR
// ==========================================

// ==========================================
// CARRITO
// ==========================================

const cart = [];


const cartButton =
    document.getElementById("cartButton");

const cartModal =
    document.getElementById("cartModal");

const cartBackground =
    document.getElementById("cartBackground");

const cartClose =
    document.getElementById("cartClose");

const cartItems =
    document.getElementById("cartItems");

const cartEmpty =
    document.getElementById("cartEmpty");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");

// ==========================================
// RESERVA
// ==========================================

const reserveButton =
    document.getElementById("reserveButton");


const reservationModal =
    document.getElementById(
        "reservationModal"
    );


const reservationBackground =
    document.getElementById(
        "reservationBackground"
    );


const reservationClose =
    document.getElementById(
        "reservationClose"
    );


const reservationDone =
    document.getElementById(
        "reservationDone"
    );


const reservationCode =
    document.getElementById(
        "reservationCode"
    );


const reservationTotal =
    document.getElementById(
        "reservationTotal"
    );

const myReservationButton =
    document.getElementById(
        "myReservationButton"
    );

// ==========================================
// GENERAR CÓDIGO DE RESERVA
// ==========================================

function generateReservationCode() {

    const characters =
        "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";


    let code = "NA-";


    for (let i = 0; i < 5; i++) {

        const randomIndex =
            Math.floor(
                Math.random() *
                characters.length
            );


        code +=
            characters[randomIndex];

    }


    return code;

}

// ==========================================
// CARGAR TODAS LAS RESERVAS
// ==========================================

function loadReservations() {

    const savedReservations =
        localStorage.getItem(
            "neonArenaReservations"
        );


    if (!savedReservations) {

        return [];

    }


    return JSON.parse(
        savedReservations
    );

}


// ==========================================
// GUARDAR TODAS LAS RESERVAS
// ==========================================

function saveReservations(
    reservations
) {

    localStorage.setItem(
        "neonArenaReservations",
        JSON.stringify(reservations)
    );

}

// ==========================================
// CREAR RESERVA
// ==========================================

function createReservation() {

    if (cart.length === 0) {

        showToast(
            "Tu pedido está vacío"
        );

        return;

    }


    let total = 0;


    cart.forEach(item => {

        total += item.total;

    });


    const code =
        generateReservationCode();


    reservationCode.textContent =
        code;


    reservationTotal.textContent =
        formatPrice(total);

    renderReservationProducts(
    cart
);

const reservation = {

    code: code,

    total: total,

    products: [...cart],

    status: "Esperando ser reclamado",

    date: new Date().toLocaleString()

};


// CARGAR RESERVAS EXISTENTES

const reservations =
    loadReservations();


// AGREGAR NUEVA RESERVA

reservations.push(
    reservation
);


// GUARDAR TODAS

saveReservations(
    reservations
);


    // CERRAR CARRITO

    closeCart();


    // ABRIR RESERVA

    reservationModal.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";


    // VACIAR CARRITO

    cart.length = 0;


    updateCart();

}

// ==========================================
// BOTÓN RESERVAR
// ==========================================

reserveButton.addEventListener(
    "click",
    createReservation
);

// ==========================================
// CERRAR RESERVA
// ==========================================

function closeReservation() {

    reservationModal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}
reservationClose.addEventListener(
    "click",
    closeReservation
);


reservationDone.addEventListener(
    "click",
    closeReservation
);


reservationBackground.addEventListener(
    "click",
    closeReservation
);


// ==========================================
// ABRIR CARRITO
// ==========================================

function openCart() {

    cartModal.classList.add("active");

    document.body.style.overflow =
        "hidden";
}


// ==========================================
// CERRAR CARRITO
// ==========================================

function closeCart() {

    cartModal.classList.remove("active");

    document.body.style.overflow =
        "";
}


// ==========================================
// EVENTOS CARRITO
// ==========================================

cartButton.addEventListener(
    "click",
    openCart
);


cartClose.addEventListener(
    "click",
    closeCart
);


cartBackground.addEventListener(
    "click",
    closeCart
);


// ==========================================
// ACTUALIZAR CARRITO
// ==========================================

function updateCart() {

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartEmpty.style.display =
            "flex";

    } else {

        cartEmpty.style.display =
            "none";

    }


    let total = 0;

    let totalItems = 0;


    cart.forEach((item, index) => {

        total += item.total;

        totalItems += item.quantity;


        const options =
    item.extras
        ? item.extras.map(
            extra => extra.name
        )
        : [];


        const cartItem =
            document.createElement("div");


        cartItem.className =
            "cart-item";


        cartItem.innerHTML = `

            <div class="cart-item-image">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >

            </div>


            <div class="cart-item-info">

                <strong class="cart-item-title">

                    ${item.name}

                </strong>


                <span class="cart-item-options">

                    ${item.quantity} unidad${
                        item.quantity > 1
                            ? "es"
                            : ""
                    }

                    ${
                        options.length > 0
                            ? " • " +
                            options.join(", ")
                            : ""
                    }

                </span>


                <div class="cart-item-bottom">

                    <span class="cart-item-price">

                        ${formatPrice(
                            item.total
                        )}

                    </span>


                    <button
                        class="cart-remove"
                        data-index="${index}"
                    >

                        ELIMINAR

                    </button>

                </div>

            </div>

        `;


        cartItems.appendChild(
            cartItem
        );

    });


    cartCount.textContent =
        totalItems;


    cartTotal.textContent =
        formatPrice(total);

}

// ==========================================
// ELIMINAR DEL CARRITO
// ==========================================

cartItems.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                ".cart-remove"
            );


        if (!button) return;


        const index =
            Number(
                button.dataset.index
            );


        cart.splice(
            index,
            1
        );


        updateCart();

    }
);

const reservationProducts =
    document.getElementById(
        "reservationProducts"
    );

// ==========================================
// MOSTRAR PRODUCTOS DE RESERVA
// ==========================================

function renderReservationProducts(
    products
) {

    reservationProducts.innerHTML = "";


    products.forEach(product => {

        const item =
            document.createElement("div");


        item.className =
            "reservation-product";


        item.innerHTML = `

            <div>

                <div
                    class="reservation-product-name"
                >

                    ${product.name}

                </div>


                <div
                    class="reservation-product-quantity"
                >

                    ${product.quantity} unidad${
                        product.quantity > 1
                            ? "es"
                            : ""
                    }

                </div>

            </div>


            <span
                class="reservation-product-price"
            >

                ${formatPrice(
                    product.total
                )}

            </span>

        `;


        reservationProducts.appendChild(
            item
        );

    });

}

// ==========================================
// MIS RESERVAS
// ==========================================

const reservationsModal =
    document.getElementById(
        "reservationsModal"
    );


const reservationsBackground =
    document.getElementById(
        "reservationsBackground"
    );


const reservationsClose =
    document.getElementById(
        "reservationsClose"
    );


const reservationsList =
    document.getElementById(
        "reservationsList"
    );


const reservationsEmpty =
    document.getElementById(
        "reservationsEmpty"
    );

myReservationButton.addEventListener(
    "click",
    () => {

        renderReservations();


        reservationsModal.classList.add(
            "active"
        );


        document.body.style.overflow =
            "hidden";

    }
);

function closeReservations() {

    reservationsModal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}

reservationsClose.addEventListener(
    "click",
    closeReservations
);


reservationsBackground.addEventListener(
    "click",
    closeReservations
);

// ==========================================
// MOSTRAR LISTA DE RESERVAS
// ==========================================

function renderReservations() {

    const reservations =
        loadReservations();


    reservationsList.innerHTML = "";


    if (reservations.length === 0) {

        reservationsEmpty.style.display =
            "block";

        return;

    }


    reservationsEmpty.style.display =
        "none";


    reservations.forEach(
        reservation => {

            const card =
                document.createElement("div");


            card.className =
                "reservation-card";


            const productCount =
                reservation.products.length;


            card.innerHTML = `

                <div>

                    <strong
                        class="reservation-card-code"
                    >

                        ${reservation.code}

                    </strong>


                    <div
                        class="reservation-card-info"
                    >

                        ${productCount}
                        producto${
                            productCount !== 1
                                ? "s"
                                : ""
                        }

                        • ${reservation.status}

                    </div>

                </div>


                <div
                    class="reservation-card-total"
                >

                    <span>
                        TOTAL
                    </span>

                    <strong>

                        ${formatPrice(
                            reservation.total
                        )}

                    </strong>

                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    openReservationDetails(
                        reservation
                    );

                }
            );


            reservationsList.appendChild(
                card
            );

        }
    );

}

// ==========================================
// ABRIR DETALLES DE RESERVA
// ==========================================

function openReservationDetails(
    reservation
) {

    reservationCode.textContent =
        reservation.code;


    reservationTotal.textContent =
        formatPrice(
            reservation.total
        );


    renderReservationProducts(
        reservation.products
    );


    reservationsModal.classList.remove(
        "active"
    );


    reservationModal.classList.add(
        "active"
    );

}

renderProducts();