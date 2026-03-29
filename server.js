const express = require('express');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const crypto = require('crypto');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Fake "database" lưu user trong mảng
const users = [];



// Dữ liệu sản phẩm mẫu
const products = [
  { 
    id: 1, 
    name: 'iPhone 14 Pro Max', 
    price: 3000, 
    description: 'Flagship Apple', 
    category: 'phone',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTMEzdRMU6T8moVaQvjUUMBT9UJJ5fpGS7lbFFSfnvLpBDGmbQEYANoM7KWmmCwo4lJos1gQgdgp6YVA2OuqfdZD5Ss3kZl_LvP0uldKTzareGmCt_gdctY2acx1RpibJzPYdcb&usqp=CAc'
  },
  { 
    id: 2, 
    name: 'iPhone 13', 
    price: 2500, 
    description: 'Apple iPhone 13', 
    category: 'phone',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSfhf_qFrEKIvI86oF-Sh8p45MHATQ6C35xyr4tBqQyRai2h9hMJwkojY8X4JMKEuwMkI8vIPy-Cgk0v9HZSEEIcRs4jLG7gA-fDNxeFKPKnCw1JsyxsAeqZ7zFnS0WyrZ1dHyxsko&usqp=CAc'
  },
  { 
    id: 3, 
    name: 'Samsung Galaxy S22', 
    price: 2700, 
    description: 'Samsung flagship', 
    category: 'phone',
    image: 'https://images.samsung.com/is/image/samsung/p6pim/vn/2202/gallery/vn-galaxy-s22-ultra-s908-412964-sm-s908ezkdxv-530677876?$720_576_PNG$'
  },
  { 
    id: 4, 
    name: 'Xiaomi Redmi Note 12', 
    price: 1000, 
    description: 'Giá rẻ chất lượng', 
    category: 'phone',
    image: 'https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note12-series/specs-header.png'
  },
  { 
    id: 5, 
    name: 'iPhone 15 Plus', 
    price: 3200, 
    description: 'Model mới nhất', 
    category: 'phone',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRbjjmD0LSqdUlHLmXu2iFGt-9srivPrUDb58DOJ6ediOrw32nT4WSrPPNJJ53o_y07nnGYEC9gWRlX25hXD6UozMDsHCrzgo0Q8F8gz9tujuPWcPXeIIiY-MvzdBhuE5kQDdMPHQ&usqp=CAc'
  }
];


// ✅ API tìm kiếm sản phẩm
app.get('/search', (req, res) => {
  const query = req.query.q?.toLowerCase();
  if (!query) {
    return res.status(400).json({ count: 0, results: [] });
  }
  const matched = products.filter(p => p.name.toLowerCase().includes(query));
  res.json({ count: matched.length, results: matched });
});

// ✅ API trả về danh sách sản phẩm
app.get('/products', (req, res) => {
  res.json(products);
});

// ✅ Trả về trang login
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// ✅ API đăng ký
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Vui lòng điền đầy đủ thông tin' });
  }

  const existUser = users.find(u => u.email === email || u.username === username);
  if (existUser) {
    return res.status(400).json({ message: 'Email hoặc tên người dùng đã được đăng ký' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, email, password: hashedPassword });
  return res.status(201).json({ message: 'Đăng ký thành công' });
});

// ✅ API đăng nhập
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(401).json({ message: 'Sai tên người dùng hoặc mật khẩu' });

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) return res.status(401).json({ message: 'Sai tên người dùng hoặc mật khẩu' });

  res.status(200).json({ message: 'Đăng nhập thành công', username: user.username });
});

// ✅ API tạo thanh toán MoMo
app.post('/create-payment', async (req, res) => {
  const { amount } = req.body;
  const partnerCode = "MOMO";
  const accessKey = "F8BBA842ECF85";
  const secretKey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
  const orderId = requestId = `${Date.now()}`;
  const orderInfo = "Thanh toán đơn hàng test MoMo";
  const redirectUrl = "http://127.0.0.1:5501/success.html";
  const ipnUrl = "http://localhost:3000/ipn";
  const requestType = "captureWallet";
  const extraData = "";

  const rawSignature = `accessKey=${accessKey}&amount=${amount}&extraData=${extraData}&ipnUrl=${ipnUrl}&orderId=${orderId}&orderInfo=${orderInfo}&partnerCode=${partnerCode}&redirectUrl=${redirectUrl}&requestId=${requestId}&requestType=${requestType}`;
  const signature = crypto.createHmac('sha256', secretKey).update(rawSignature).digest('hex');

  const requestBody = {
    partnerCode,
    accessKey,
    requestId,
    amount: amount.toString(),
    orderId,
    orderInfo,
    redirectUrl,
    ipnUrl,
    extraData,
    requestType,
    signature,
    lang: "vi"
  };

  try {
    const momoRes = await axios.post("https://test-payment.momo.vn/v2/gateway/api/create", requestBody, {
      headers: { 'Content-Type': 'application/json' }
    });
    res.json({ payUrl: momoRes.data.payUrl });
  } catch (err) {
    console.error("Lỗi tạo thanh toán MoMo:", err.response?.data || err.message);
    res.status(500).json({ error: "Không thể tạo thanh toán MoMo" });
  }
});

// ✅ API trả về top sản phẩm bán chạy từ file JSON
app.get('/api/top-products', (req, res) => {
  const n = parseInt(req.query.n) || 10;
  const categoryFilter = req.query.category;
  const startDate = req.query.startDate ? new Date(req.query.startDate) : null;
  const endDate = req.query.endDate ? new Date(req.query.endDate) : null;

  let orderDetails = [];
  let productsData = [];

  try {
    orderDetails = JSON.parse(fs.readFileSync('./data/orderDetail.json', 'utf8'));
    productsData = JSON.parse(fs.readFileSync('./data/products.json', 'utf8'));
  } catch (err) {
    return res.status(500).json({ error: 'Không đọc được file dữ liệu' });
  }

  const productSalesMap = {};

  orderDetails.forEach(order => {
    const orderDate = new Date(order.orderDate || order.date);
    if ((startDate && orderDate < startDate) || (endDate && orderDate > endDate)) return;

    const productId = order.productId;
    const quantity = order.quantity;
    productSalesMap[productId] = (productSalesMap[productId] || 0) + quantity;
  });

  const result = Object.entries(productSalesMap)
    .map(([id, quantity]) => {
      const product = productsData.find(p => p.id === parseInt(id));
      if (!product) return null;
      if (categoryFilter && product.category !== categoryFilter) return null;
      return {
        id: product.id,
        name: product.name,
        category: product.category,
        image: product.image || 'default.jpg',
        quantitySold: quantity
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.quantitySold - a.quantitySold)
    .slice(0, n);

  res.json(result);
});

// ✅ Khởi động server
app.listen(PORT, () => {
  console.log(`✅ Server đang chạy tại http://localhost:${PORT}`);
});
