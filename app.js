// دالة لعرض بيانات المنتج
function displayProduct(productId) {
    const product = products[productId];
    if (!product) {
        window.location.href = 'index.html';
        return;
    }

    // تحديث البيانات الأساسية
    document.getElementById('productTitle').textContent = product.title;
    document.getElementById('productPrice').textContent = `${product.price} جنيه/${product.unit}`;
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('unit').textContent = product.unit;

    // تحديث معرض الصور
    const mainImage = document.getElementById('mainImage');
    mainImage.src = product.images[0];
    mainImage.alt = product.title;

    const thumbnailsContainer = document.getElementById('thumbnails');
    thumbnailsContainer.innerHTML = '';
    product.images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail';
        thumbnail.onclick = () => changeImage(image);
        thumbnail.innerHTML = `<img src="${image}" alt="${product.title} - صورة ${index + 1}">`;
        thumbnailsContainer.appendChild(thumbnail);
    });

    // تحديث البيانات الوصفية
    const metaContainer = document.getElementById('productMeta');
    metaContainer.innerHTML = '';
    product.meta.forEach(item => {
        const metaItem = document.createElement('div');
        metaItem.className = 'meta-item';
        metaItem.innerHTML = `
            <div class="meta-icon">
                <i class="${item.icon}"></i>
            </div>
            <div>
                <strong>${item.label}</strong> ${item.value}
            </div>
        `;
        metaContainer.appendChild(metaItem);
    });

    // تحديث رابط واتساب
    updateWhatsappLink(product);

    // عرض المنتجات ذات الصلة
    displayRelatedProducts(product.related);
}

// دالة لعرض المنتجات ذات الصلة
function displayRelatedProducts(relatedIds) {
    const relatedContainer = document.getElementById('relatedProducts');
    relatedContainer.innerHTML = '';

    relatedIds.forEach(productId => {
        const product = products[productId];
        if (product) {
            const productElement = document.createElement('div');
            productElement.className = 'menu-item';
            productElement.setAttribute('data-category', product.category);
            productElement.innerHTML = `
                <div class="menu-item-img">
                    <img src="${product.images[0]}" alt="${product.title}">
                </div>
                <div class="menu-item-content">
                    <h3>${product.title}</h3>
                    <div class="price">${product.price} جنيه/${product.unit}</div>
                    <p>${product.description.substring(0, 60)}...</p>
                    <a href="product.html?id=${product.id}" class="order-btn">عرض التفاصيل</a>
                </div>
            `;
            relatedContainer.appendChild(productElement);
        }
    });
}

// دالة لتحديث رابط واتساب
function updateWhatsappLink(product) {
    const quantity = document.getElementById('quantity').value;
    const whatsappBtn = document.getElementById('whatsappOrder');
    whatsappBtn.href = `https://wa.me/+201067519929?text=أريد طلب ${product.title} - الكمية: ${quantity} ${product.unit}`;
}

// دالة لتغيير الصورة الرئيسية
function changeImage(src) {
    document.getElementById('mainImage').src = src;
}

// دالة لزيادة الكمية
function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
    updateWhatsappLink(products[getProductIdFromUrl()]);
}

// دالة لتقليل الكمية
function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
        updateWhatsappLink(products[getProductIdFromUrl()]);
    }
}

// عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    const productId = getProductIdFromUrl();
    if (productId) {
        displayProduct(productId);
    } else {
        window.location.href = 'index.html';
    }

    // تحديث الرابط عند تغيير الكمية يدويًا
    document.getElementById('quantity').addEventListener('change', () => {
        updateWhatsappLink(products[getProductIdFromUrl()]);
    });
});