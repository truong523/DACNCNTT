let products = JSON.parse(localStorage.getItem("products")) || [];
let selectedIndex = -1;

function renderProducts() {
  const listDiv = document.getElementById("admin-product-list");
  listDiv.innerHTML = "";

  products.forEach((p, i) => {
    const div = document.createElement("div");
    div.className = "admin-product";
    div.innerHTML = `
      <img class="product-image" src="${p.image}" alt="${p.name}">
      <h4>${p.name}</h4>
      <p>Giá: ${p.price.toLocaleString()}₫</p>
      <p>Giảm giá: ${p.discount || 0}%</p>
      <p>${p.description}</p>
      <button onclick="editProduct(${i})">✏️ Sửa</button>
      <button class="delete-btn" onclick="deleteProduct(${i})">🗑️ Xóa</button>
      <button onclick="addToShop(${i})">➕ Add vào Shop</button>
    `;
    listDiv.appendChild(div);
  });
}


function addToShop(index) {
  let shopProducts = JSON.parse(localStorage.getItem("shopProducts")) || [];
  const productToAdd = products[index];

  // Kiểm tra xem sản phẩm đã có trong shop chưa để tránh trùng lặp
  const exists = shopProducts.find(p => p.name === productToAdd.name);
  if (exists) {
    alert("Sản phẩm đã có trong Shop!");
    return;
  }

  shopProducts.push(productToAdd);
  localStorage.setItem("shopProducts", JSON.stringify(shopProducts));
  alert(`Đã thêm "${productToAdd.name}" vào Shop!`);
}


function editProduct(index) {
  const product = products[index];
  document.getElementById("product-name").value = product.name;
  document.getElementById("product-price").value = product.price;
  document.getElementById("product-description").value = product.description;
  document.getElementById("product-discount").value = product.discount;
  selectedIndex = index;

  document.getElementById("add-button").style.display = "none";
  document.getElementById("update-button").style.display = "inline-block";
}

function updateProduct() {
  const name = document.getElementById("product-name").value;
  const price = +document.getElementById("product-price").value;
  const imageInput = document.getElementById("product-image");
  const description = document.getElementById("product-description").value;
  const discount = +document.getElementById("product-discount").value;

  if (!name || !price) {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  }

  if (imageInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const image = e.target.result;
      products[selectedIndex] = { name, price, image, description, discount };
      localStorage.setItem("products", JSON.stringify(products));
      renderProducts();
      resetForm();
    };
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    products[selectedIndex] = {
      ...products[selectedIndex],
      name,
      price,
      description,
      discount
    };
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts();
    resetForm();
  }
}

function deleteProduct(index) {
  if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts();
  }
}

function resetForm() {
  document.getElementById("product-name").value = "";
  document.getElementById("product-price").value = "";
  document.getElementById("product-image").value = "";
  document.getElementById("product-description").value = "";
  document.getElementById("product-discount").value = "";
  document.getElementById("add-button").style.display = "inline-block";
  document.getElementById("update-button").style.display = "none";
  selectedIndex = -1;
}

function renderShopProducts() {
  const shopListDiv = document.getElementById("shop-product-list");
  const shopProducts = JSON.parse(localStorage.getItem("shopProducts")) || [];

  shopListDiv.innerHTML = "";

  if (shopProducts.length === 0) {
    shopListDiv.innerHTML = "<p>Chưa có sản phẩm nào trong Shop.</p>";
    return;
  }

  shopProducts.forEach(p => {
    const div = document.createElement("div");
    div.className = "shop-product";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" width="150" />
      <h3>${p.name}</h3>
      <p>Giá: ${p.price.toLocaleString()}₫</p>
      <p>Giảm giá: ${p.discount || 0}%</p>
      <p>${p.description}</p>
    `;
    shopListDiv.appendChild(div);
  });
}

renderShopProducts();



function logout() {
  alert("Bạn đã đăng xuất!");
  // window.location.href = "login.html"; // nếu có trang đăng nhập
}

function goHome() {
  window.location.href = "index.html"; // cập nhật đúng trang chủ của bạn
}

renderProducts();
