// ==========================
// 1. Khởi tạo dữ liệu
// ==========================
let products = JSON.parse(localStorage.getItem("products")) || [
  { id: 1, name: "iPhone 30", price: 19990000, discount: 0, description: "Điện thoại siêu phẩm", image: "" },
  { id: 2, name: "Galaxy S22", price: 16990000, discount: 0, description: "Điện thoại Samsung", image: "" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let editingIndex = -1;

// ==========================
// 2. Hiển thị sản phẩm cho User
// ==========================
function renderProducts() {
  const list = document.getElementById("product-list");
  if (!list) return;
  list.innerHTML = "";
  products.forEach(p => {
    const finalPrice = p.discount ? p.price * (1 - p.discount / 100) : p.price;
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h4>${p.name}</h4>
      ${p.discount ? `<p><del>${p.price.toLocaleString()} đ</del> <strong>${finalPrice.toLocaleString()} đ</strong> (-${p.discount}%)</p>` : `<p>${p.price.toLocaleString()} đ</p>`}
      <button onclick="addToCart(${p.id})">Thêm vào giỏ</button>
    `;
    list.appendChild(div);
  });
}

// ==========================
// 3. Thêm vào giỏ hàng
// ==========================
function addToCart(id) {
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  showPopup("Đã thêm sản phẩm vào giỏ!", true);
}

// ==========================
// 4. Cập nhật số lượng giỏ hàng hiển thị
// ==========================
function updateCartCount() {
  const el = document.getElementById("cart-count");
  if (el) el.textContent = cart.length;
}

// ==========================
// 5. Đăng nhập
// ==========================
// function login() {
//   const u = document.getElementById("username").value.trim();
//   const p = document.getElementById("password").value.trim();
//   const msg = document.getElementById("loginMessage");

//   if ((u === "admin" && p === "111") || (u === "user" && p === "111")) {
//     localStorage.setItem("user", u);
//     if (msg) msg.textContent = "";
//     showPopup("Đăng nhập thành công!", true);
//     setTimeout(() => {
//       window.location.href = u === "admin" ? "admin.html" : "user.html";
//     }, 1200);
//   } else {
//     if (msg) msg.textContent = "";
//     showPopup("Sai tài khoản hoặc mật khẩu!", false);
//   }
// }

async function login() {
  const u = document.getElementById("username").value.trim();
  const p = document.getElementById("password").value.trim();
  const msg = document.getElementById("loginMessage");

  if (!u || !p) {
    showPopup("Vui lòng nhập tài khoản và mật khẩu!", false);
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: u, password: p }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("user", u);
      if (msg) msg.textContent = "";
      showPopup("Đăng nhập thành công!", true);
      setTimeout(() => {
        window.location.href = u === "admin" ? "admin.html" : "user.html";
      }, 1200);
    } else {
      showPopup(data.message || "Đăng nhập thất bại!", false);
    }
  } catch (err) {
    showPopup("Không thể kết nối đến server!", false);
    console.error(err);
  }
}

// ==========================
// 6. Đăng xuất
// ==========================
function logout() {
  localStorage.removeItem("user");
  showPopup("Bạn đã đăng xuất.", true);
  setTimeout(() => window.location.href = "login.html", 1000);
}

// ==========================
// 7. Hiển thị sản phẩm cho Admin
// ==========================
function renderAdminProducts() {
  const list = document.getElementById("admin-product-list");
  if (!list) return;
  products = JSON.parse(localStorage.getItem("products")) || [];
  list.innerHTML = "";

  products.forEach((p, index) => {
    const finalPrice = p.discount ? p.price * (1 - p.discount / 100) : p.price;
    const div = document.createElement("div");
    div.className = "admin-product";
    div.innerHTML = `
      <div class="product-card">
        <img src="${p.image || 'https://via.placeholder.com/150'}" alt="${p.name}" class="product-image" style="width:150px;height:150px;object-fit:cover;">
        <h4>${p.name}</h4>
        ${p.discount
          ? `<p><del>${p.price.toLocaleString()} đ</del></p>
             <p><strong style="color:red;"></strong> <span style="color:red; font-weight:bold;">${finalPrice.toLocaleString()} đ (-${p.discount}%)</span></p>`
          : `<p><strong></strong> ${p.price.toLocaleString()} đ</p>`}
        <p><strong>Mô tả:</strong> ${p.description}</p>
        <button class="edit-btn" onclick="editProduct(${index})">Sửa</button>
        <button class="delete-btn" onclick="removeProduct(${index})">Xóa</button>
        <button class="add-to-shop-btn" onclick="addToShop(${index})">Thêm vào Shop</button>
      </div>
    `;
    list.appendChild(div);
  });
}

// ==========================
// 8. Thêm sản phẩm
// ==========================
function addProduct() {
  const name = document.getElementById("product-name").value.trim();
  const price = parseInt(document.getElementById("product-price").value);
  const discount = parseInt(document.getElementById("product-discount").value) || 0;
  const description = document.getElementById("product-description").value.trim();
  const imageInput = document.getElementById("product-image");

  if (!name || isNaN(price) || !description || !imageInput.files[0]) {
    showPopup("Vui lòng nhập đầy đủ thông tin và chọn hình ảnh!", false);
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const image = e.target.result;
    const id = Date.now();
    const newProduct = { id, name, price, discount, image, description };

    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));
    renderAdminProducts();
    resetForm();
    showPopup("Đã thêm sản phẩm mới!", true);
  };

  reader.readAsDataURL(imageInput.files[0]);
}

// ==========================
// 9. Cập nhật sản phẩm
// ==========================
function updateProduct() {
  const name = document.getElementById("product-name").value.trim();
  const price = parseInt(document.getElementById("product-price").value);
  const discount = parseInt(document.getElementById("product-discount").value) || 0;
  const description = document.getElementById("product-description").value.trim();
  const imageInput = document.getElementById("product-image");

  if (!name || isNaN(price) || !description) {
    showPopup("Vui lòng nhập đầy đủ thông tin!", false);
    return;
  }

  let product = products[editingIndex];
  product.name = name;
  product.price = price;
  product.discount = discount;
  product.description = description;

  function saveAndRender() {
    products.splice(editingIndex, 1);
    products.unshift(product);
    localStorage.setItem("products", JSON.stringify(products));
    renderAdminProducts();
    resetForm();
    showPopup("Cập nhật sản phẩm thành công!", true);
  }

  if (imageInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      product.image = e.target.result;
      saveAndRender();
    };
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    saveAndRender();
  }
}

// ==========================
// 10. Xóa sản phẩm
// ==========================
function removeProduct(index) {
  if (!confirm("Bạn chắc chắn muốn xóa sản phẩm này?")) return;
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  renderAdminProducts();
  resetForm();
  showPopup("Sản phẩm đã bị xóa.", true);
}

// ==========================
// 11. Sửa sản phẩm
// ==========================
function editProduct(index) {
  const product = products[index];
  if (!product) return;

  document.getElementById("product-name").value = product.name;
  document.getElementById("product-price").value = product.price;
  document.getElementById("product-discount").value = product.discount || 0;
  document.getElementById("product-description").value = product.description;

  editingIndex = index;

  document.getElementById("add-button").style.display = "none";
  document.getElementById("update-button").style.display = "inline-block";
}
//==========================
//11.5 thêm Sản phẩm
//==========================

function addToShop(index) {
  const product = products[index];
  if (!product) {
    showPopup("Sản phẩm không tồn tại!", false);
    return;
  }

  let shopProducts = JSON.parse(localStorage.getItem("shopProducts")) || [];

  // Kiểm tra xem sản phẩm đã tồn tại trong shop chưa (theo id)
  const exists = shopProducts.some(p => p.id === product.id);
  if (exists) {
    showPopup("Sản phẩm đã có trong Shop!", false);
    return;
  }

  shopProducts.push(product);
  localStorage.setItem("shopProducts", JSON.stringify(shopProducts));
  showPopup("Đã thêm sản phẩm vào Shop!", true);
}


// ==========================
// 12. Reset form
// ==========================
function resetForm() {
  document.getElementById("product-name").value = "";
  document.getElementById("product-price").value = "";
  document.getElementById("product-discount").value = "";
  document.getElementById("product-description").value = "";
  document.getElementById("product-image").value = "";

  editingIndex = -1;

  document.getElementById("add-button").style.display = "inline-block";
  document.getElementById("update-button").style.display = "none";
}

// ==========================
// 13. Cập nhật nút đăng nhập/đăng xuất
// ==========================
function updateLoginButton() {
  const loginBtn = document.getElementById("loginButton");
  const user = localStorage.getItem("user");
  if (!loginBtn) return;

  loginBtn.innerHTML = user
    ? `<a href="index.html" onclick="logout()">Đăng xuất (${user})</a>`
    : `<a href="login.html">Đăng Nhập</a>`;d
}

// ==========================
// 14. Hiển thị popup giống Smember
// ==========================
function showPopup(message, isSuccess = true) {
  let popup = document.getElementById("popup");
  if (!popup) {
    popup = document.createElement("div");
    popup.id = "popup";
    popup.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      padding: 15px 25px;
      background: ${isSuccess ? "#d4edda" : "#f8d7da"};
      color: ${isSuccess ? "#155724" : "#721c24"};
      border: 1px solid ${isSuccess ? "#c3e6cb" : "#f5c6cb"};
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
      z-index: 9999;
      display: none;
      font-weight: bold;
    `;
    document.body.appendChild(popup);
  }

  popup.textContent = message;
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 2500);
}

// ==========================
// 15. Khởi tạo trang
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("user");

  if (document.getElementById("product-list")) {
    renderProducts();
    updateCartCount();
  }

  if (document.getElementById("admin-product-list")) {
    if (user !== "admin") {
      alert("Bạn không có quyền truy cập trang này!");
      window.location.href = "login.html";
    } else {
      renderAdminProducts();
    }
  }

  updateLoginButton();
    // 👉 Thêm đoạn này vào đây
  const logoutButton = document.querySelector(".logout-btn");
  if (logoutButton) {
    logoutButton.addEventListener("click", logout);
  }
});

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const msg = document.getElementById("message");

        if (!username || !email || !password || !confirmPassword) {
          msg.textContent = "Vui lòng điền đầy đủ thông tin.";
          msg.style.color = "red";
          return;
        }

        if (password !== confirmPassword) {
          msg.textContent = "Mật khẩu xác nhận không khớp.";
          msg.style.color = "red";
          return;
        }

        const users = JSON.parse(localStorage.getItem("users") || "[]");

        const isExist = users.some(u => u.username === username || u.email === email);
        if (isExist) {
          msg.textContent = "Tên người dùng hoặc email đã tồn tại.";
          msg.style.color = "red";
          return;
        }

        // 🟩 Phân biệt Admin/User đúng cách
        const adminList = ["admin", "superadmin", "manager", "admin2", "admin96"];
        const role = adminList.includes(username.toLowerCase()) ? "admin" : "user";


        // ➕ Thêm user vào danh sách
        users.push({ username, email, password, role });
        localStorage.setItem("users", JSON.stringify(users));

        msg.textContent = "Đăng ký thành công! Bạn có thể đăng nhập.";
        msg.style.color = "green";

        setTimeout(() => window.location.href = "login.html", 1500);
      });
    }
  });
