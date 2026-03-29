const products = [
  {
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 33000000,
    feature: ["chup-anh-dep", "choi-game", "quay-phim"],
    config: "apple-a",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSI6tEsKg8uANb1mdWeE6N9IJi3B5qM5C9naI6zr7SKaVTaktlNhW52wCIS_nSMFHzipTyfoJkw_i7hq49OM20N-JgwVggBgrs3oF63bqDr8UO0EI4EOaDnoNGORhONCp034q3ZPQ8&usqp=CAc"
  },
    {
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    price: 27000000,
    feature: ["chup-anh-dep", "pin-trau", "bo-nho-lon"],
    config: "snapdragon",
    image: "https://bachlongstore.vn/vnt_upload/product/01_2024/587438.png"
  },
  {
    name: "Xiaomi Redmi Note 13 Pro",
    brand: "Xiaomi",
    price: 9500000,
    feature: ["pin-trau", "bo-nho-lon"],
    config: "mediatek",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcToFaUl3zdN0s26vDf5VEW6aVZ0cqGnGPdNXVJf5kA2TfiWaXHUEQg09ZsjSD503IhnkhNEJKdpuoTk9JiJRUTUGcp8sBhDL3clkwnrY61VeikJXpWl7spSTa4ovcmtdtlK-g0Gl7E64Gc&usqp=CAc  o"
  },
    {
    name: "Realme GT Neo 6",
    brand: "Realme",
    price: 10800000,
    feature: ["choi-game", "pin-trau"],
    config: "snapdragon",
    image: "https://via.placeholder.com/200x150?text=Realme+GT+Neo+6"
  },
  {
    name: "Oppo Find X7",
    brand: "Oppo",
    price: 18900000,
    feature: ["chup-anh-dep", "bo-nho-lon"],
    config: "mediatek",
    image: "https://via.placeholder.com/200x150?text=Oppo+Find+X7"
  },
  {
    name: "Nokia G400",
    brand: "Nokia",
    price: 6000000,
    feature: ["pin-trau"],
    config: "snapdragon",
    image: "https://via.placeholder.com/200x150?text=Nokia+G400"
  },
  {
    name: "Asus ROG Phone 7",
    brand: "Asus",
    price: 29900000,
    feature: ["choi-game", "bo-nho-lon"],
    config: "snapdragon",
    image: "https://via.placeholder.com/200x150?text=ROG+Phone+7"
  },
  {
    name: "OnePlus 12",
    brand: "OnePlus",
    price: 23900000,
    feature: ["chup-anh-dep", "pin-trau"],
    config: "snapdragon",
    image: "https://via.placeholder.com/200x150?text=OnePlus+12"
  },
  {
    name: "Sony Xperia 1 V",
    brand: "Sony",
    price: 24900000,
    feature: ["quay-phim", "chup-anh-dep"],
    config: "snapdragon",
    image: "https://via.placeholder.com/200x150?text=Xperia+1+V"
  },
  {
    name: "iPhone 14",
    brand: "Apple",
    price: 21500000,
    feature: ["chup-anh-dep", "quay-phim"],
    config: "apple-a",
    image: "https://cdn.tgdd.vn/Products/Images/42/240259/iPhone-14-plus-thumb-xanh-600x600.jpg"
  },
  {
    name: "Samsung Galaxy A54",
    brand: "Samsung",
    price: 8500000,
    feature: ["pin-trau", "bo-nho-lon"],
    config: "exynos",
    image: "https://via.placeholder.com/200x150?text=Galaxy+A54"
  },
  {
    name: "Xiaomi 13T Pro",
    brand: "Xiaomi",
    price: 13900000,
    feature: ["chup-anh-dep", "choi-game"],
    config: "mediatek",
    image: "https://via.placeholder.com/200x150?text=Xiaomi+13T+Pro"
  },
  {
    name: "Vsmart Aris",
    brand: "Vsmart",
    price: 4900000,
    feature: ["pin-trau"],
    config: "snapdragon",
    image: "https://via.placeholder.com/200x150?text=Vsmart+Aris"
  },
  {
    name: "Motorola Edge 40",
    brand: "Motorola",
    price: 9900000,
    feature: ["chup-anh-dep", "pin-trau"],
    config: "mediatek",
    image: "https://via.placeholder.com/200x150?text=Edge+40"
  },
  {
    name: "Huawei P60 Pro",
    brand: "Huawei",
    price: 24900000,
    feature: ["chup-anh-dep", "quay-phim"],
    config: "kirin",
    image: "https://via.placeholder.com/200x150?text=Huawei+P60+Pro"
  },
  {
    name: "iPhone SE 2022",
    brand: "Apple",
    price: 10900000,
    feature: ["quay-phim"],
    config: "apple-a",
    image: "https://via.placeholder.com/200x150?text=iPhone+SE+2022"
  },
  {
    name: "Samsung Galaxy Z Flip5",
    brand: "Samsung",
    price: 27900000,
    feature: ["quay-phim", "choi-game"],
    config: "snapdragon",
    image: "https://via.placeholder.com/200x150?text=Z+Flip5"
  },
  {
    name: "Google Pixel 8",
    brand: "Google",
    price: 19900000,
    feature: ["chup-anh-dep", "pin-trau"],
    config: "google-tensor",
    image: "https://via.placeholder.com/200x150?text=Pixel+8"
  },
  {
    name: "Realme Narzo 60",
    brand: "Realme",
    price: 6900000,
    feature: ["bo-nho-lon"],
    config: "mediatek",
    image: "https://via.placeholder.com/200x150?text=Narzo+60"
  },
  {
    name: "Oppo Reno10 Pro",
    brand: "Oppo",
    price: 12500000,
    feature: ["chup-anh-dep"],
    config: "snapdragon",
    image: "https://via.placeholder.com/200x150?text=Reno10+Pro"
  },
  {
    name: "Asus Zenfone 10",
    brand: "Asus",
    price: 18900000,
    feature: ["quay-phim", "choi-game"],
    config: "snapdragon",
    image: "https://via.placeholder.com/200x150?text=Zenfone+10"
  },
  {
    name: "iPhone 13 Mini",
    brand: "Apple",
    price: 16900000,
    feature: ["chup-anh-dep", "pin-trau"],
    config: "apple-a",
    image: "https://cdn.tgdd.vn/Products/Images/42/236780/iphone-13-mini-starlight-1-600x600.jpg"
  },
  {
    name: "Samsung Galaxy M54",
    brand: "Samsung",
    price: 9500000,
    feature: ["pin-trau", "bo-nho-lon"],
    config: "exynos",
    image: "https://via.placeholder.com/200x150?text=Galaxy+M54"
  },
  {
    name: "Xiaomi Poco F5",
    brand: "Xiaomi",
    price: 8900000,
    feature: ["choi-game", "bo-nho-lon"],
    config: "snapdragon",
    image: "https://via.placeholder.com/200x150?text=Poco+F5"
  },
  {
    name: "Vivo X90 Pro",
    brand: "Vivo",
    price: 21900000,
    feature: ["chup-anh-dep", "quay-phim"],
    config: "mediatek",
    image: "https://via.placeholder.com/200x150?text=Vivo+X90+Pro"
  },
  {
    name: "OnePlus Nord CE 3 Lite",
    brand: "OnePlus",
    price: 6990000,
    feature: ["pin-trau", "bo-nho-lon"],
    config: "snapdragon",
    image: "https://via.placeholder.com/200x150?text=Nord+CE+3+Lite"
  },
  {
    name: "Sony Xperia 10 V",
    brand: "Sony",
    price: 12900000,
    feature: ["pin-trau", "quay-phim"],
    config: "snapdragon",
    image: "https://via.placeholder.com/200x150?text=Xperia+10+V"
  },
  {
    name: "Huawei Nova 11i",
    brand: "Huawei",
    price: 7290000,
    feature: ["chup-anh-dep", "pin-trau"],
    config: "kirin",
    image: "https://via.placeholder.com/200x150?text=Nova+11i"
  },
  {
    name: "Google Pixel 7a",
    brand: "Google",
    price: 13900000,
    feature: ["chup-anh-dep", "bo-nho-lon"],
    config: "google-tensor",
    image: "https://via.placeholder.com/200x150?text=Pixel+7a"
  },
  {
    name: "Realme C55",
    brand: "Realme",
    price: 4990000,
    feature: ["pin-trau"],
    config: "mediatek",
    image: "https://via.placeholder.com/200x150?text=Realme+C55"
  },
  {
    name: "Motorola Moto G73",
    brand: "Motorola",
    price: 6790000,
    feature: ["choi-game", "pin-trau"],
    config: "mediatek",
    image: "https://via.placeholder.com/200x150?text=Moto+G73"
  },
  {
    name: "Asus ROG Phone 6",
    brand: "Asus",
    price: 23900000,
    feature: ["choi-game", "bo-nho-lon"],
    config: "snapdragon",
    image: "https://via.placeholder.com/200x150?text=ROG+Phone+6"
  },
  {
    name: "Vsmart Joy 4",
    brand: "Vsmart",
    price: 3290000,
    feature: ["pin-trau"],
    config: "snapdragon",
    image: "https://via.placeholder.com/200x150?text=Joy+4"
  },
  {
    name: "Oppo A98",
    brand: "Oppo",
    price: 7990000,
    feature: ["bo-nho-lon", "pin-trau"],
    config: "snapdragon",
    image: "https://via.placeholder.com/200x150?text=Oppo+A98"
  },
  {
    name: "Samsung Galaxy Z Fold5",
    brand: "Samsung",
    price: 40900000,
    feature: ["quay-phim", "choi-game", "bo-nho-lon"],
    config: "snapdragon",
    image: "https://via.placeholder.com/200x150?text=Z+Fold5"
  },
  {
    name: "Nokia X30",
    brand: "Nokia",
    price: 7990000,
    feature: ["chup-anh-dep"],
    config: "snapdragon",
    image: "https://via.placeholder.com/200x150?text=Nokia+X30"
  },
  {
    name: "iPhone 12",
    brand: "Apple",
    price: 18500000,
    feature: ["quay-phim", "chup-anh-dep"],
    config: "apple-a",
    image: "https://img.tgdd.vn/imgt/old/f_webp,fit_outside,quality_75/https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-200x200.jpg"
  },
  {
    name: "Xiaomi 12T",
    brand: "Xiaomi",
    price: 10900000,
    feature: ["choi-game", "bo-nho-lon"],
    config: "mediatek",
    image: "https://via.placeholder.com/200x150?text=Xiaomi+12T"
  },
  {
    name: "Vivo V27e",
    brand: "Vivo",
    price: 7490000,
    feature: ["chup-anh-dep"],
    config: "mediatek",
    image: "https://via.placeholder.com/200x150?text=Vivo+V27e"
  },
  {
    name: "OnePlus 11R",
    brand: "OnePlus",
    price: 19900000,
    feature: ["choi-game", "quay-phim"],
    config: "snapdragon",
    image: "https://via.placeholder.com/200x150?text=OnePlus+11R"
  },
  {
    name: "Sony Xperia 5 IV",
    brand: "Sony",
    price: 23900000,
    feature: ["quay-phim", "chup-anh-dep"],
    config: "snapdragon",
    image: "https://via.placeholder.com/200x150?text=Xperia+5+IV"
  },
  {
    name: "Huawei Mate 50 Pro",
    brand: "Huawei",
    price: 30900000,
    feature: ["chup-anh-dep", "pin-trau"],
    config: "kirin",
    image: "https://via.placeholder.com/200x150?text=Mate+50+Pro"
  },
  {
    name: "Google Pixel 6",
    brand: "Google",
    price: 10900000,
    feature: ["chup-anh-dep"],
    config: "google-tensor",
    image: "https://via.placeholder.com/200x150?text=Pixel+6"
  },
  {
    name: "Asus Zenfone 9",
    brand: "Asus",
    price: 17900000,
    feature: ["choi-game", "quay-phim"],
    config: "snapdragon",
    image: "https://via.placeholder.com/200x150?text=Zenfone+9"
  },

];
const laptops = [
  { name: "MacBook Pro M2", brand: "Apple", price: 40000000, feature: ["man-hinh-dep", "pin-trau"], config: "apple-m2", image: "https://via.placeholder.com/200x150?text=MacBook+Pro+M2" },
  { name: "Dell XPS 13", brand: "Dell", price: 32000000, feature: ["man-hinh-dep", "van-phong"], config: "intel-i7", image: "https://via.placeholder.com/200x150?text=Dell+XPS+13" },
  { name: "HP Spectre x360", brand: "HP", price: 31000000, feature: ["cam-ung", "van-phong"], config: "intel-i5", image: "https://via.placeholder.com/200x150?text=HP+Spectre+x360" },
  { name: "Asus ROG Strix", brand: "Asus", price: 45000000, feature: ["choi-game", "hieu-nang-cao"], config: "intel-i9", image: "https://via.placeholder.com/200x150?text=Asus+ROG+Strix" },
  { name: "Lenovo ThinkPad X1", brand: "Lenovo", price: 29000000, feature: ["van-phong", "pin-trau"], config: "intel-i7", image: "https://via.placeholder.com/200x150?text=ThinkPad+X1" },
  { name: "Acer Predator Helios", brand: "Acer", price: 36000000, feature: ["choi-game", "hieu-nang-cao"], config: "intel-i7", image: "https://via.placeholder.com/200x150?text=Predator+Helios" },
  { name: "MSI GF63 Thin", brand: "MSI", price: 25000000, feature: ["choi-game"], config: "intel-i5", image: "https://via.placeholder.com/200x150?text=MSI+GF63" },
  { name: "LG Gram 16", brand: "LG", price: 35000000, feature: ["nhe", "pin-trau"], config: "intel-i7", image: "https://via.placeholder.com/200x150?text=LG+Gram+16" },
  { name: "Huawei MateBook X", brand: "Huawei", price: 27000000, feature: ["nhe", "man-hinh-dep"], config: "intel-i5", image: "https://via.placeholder.com/200x150?text=MateBook+X" },
  { name: "Surface Laptop 5", brand: "Microsoft", price: 33000000, feature: ["cam-ung", "van-phong"], config: "intel-i5", image: "https://via.placeholder.com/200x150?text=Surface+Laptop+5" }
];

const ipads = [
  { name: "iPad Pro M2 11 inch", brand: "Apple", price: 28000000, feature: ["cam-ung", "ve", "hoc-tap"], config: "apple-m2", image: "https://via.placeholder.com/200x150?text=iPad+Pro+11" },
  { name: "iPad Pro M2 12.9 inch", brand: "Apple", price: 34000000, feature: ["cam-ung", "ve", "van-phong"], config: "apple-m2", image: "https://via.placeholder.com/200x150?text=iPad+Pro+12.9" },
  { name: "iPad Air 5", brand: "Apple", price: 18000000, feature: ["hoc-tap", "cam-ung"], config: "apple-m1", image: "https://via.placeholder.com/200x150?text=iPad+Air+5" },
  { name: "iPad 10", brand: "Apple", price: 12000000, feature: ["hoc-tap"], config: "apple-a14", image: "https://via.placeholder.com/200x150?text=iPad+10" },
  { name: "iPad Mini 6", brand: "Apple", price: 15000000, feature: ["doc-sach", "cam-ung"], config: "apple-a15", image: "https://via.placeholder.com/200x150?text=iPad+Mini+6" },
  { name: "iPad Pro 2021", brand: "Apple", price: 22000000, feature: ["ve", "van-phong"], config: "apple-m1", image: "https://via.placeholder.com/200x150?text=iPad+Pro+2021" },
  { name: "iPad Air 4", brand: "Apple", price: 16000000, feature: ["hoc-tap"], config: "apple-a14", image: "https://via.placeholder.com/200x150?text=iPad+Air+4" },
  { name: "iPad 9", brand: "Apple", price: 9000000, feature: ["hoc-tap"], config: "apple-a13", image: "https://via.placeholder.com/200x150?text=iPad+9" },
  { name: "iPad Mini 5", brand: "Apple", price: 11000000, feature: ["doc-sach"], config: "apple-a12", image: "https://via.placeholder.com/200x150?text=iPad+Mini+5" },
  { name: "iPad 8", brand: "Apple", price: 8000000, feature: ["hoc-tap"], config: "apple-a12", image: "https://via.placeholder.com/200x150?text=iPad+8" }
];

const watches = [
  { name: "Apple Watch Series 9", brand: "Apple", price: 12000000, feature: ["suc-khoe", "ket-noi"], config: "watchos", image: "https://via.placeholder.com/200x150?text=Apple+Watch+S9" },
  { name: "Apple Watch Ultra", brand: "Apple", price: 22000000, feature: ["the-thao", "dinh-vi"], config: "watchos", image: "https://via.placeholder.com/200x150?text=Apple+Watch+Ultra" },
  { name: "Samsung Galaxy Watch 6", brand: "Samsung", price: 8000000, feature: ["suc-khoe", "nghe-goi"], config: "wearos", image: "https://via.placeholder.com/200x150?text=Galaxy+Watch+6" },
  { name: "Garmin Forerunner 965", brand: "Garmin", price: 18000000, feature: ["the-thao", "gps"], config: "garminos", image: "https://via.placeholder.com/200x150?text=Forerunner+965" },
  { name: "Xiaomi Watch S1", brand: "Xiaomi", price: 5000000, feature: ["suc-khoe"], config: "miui", image: "https://via.placeholder.com/200x150?text=Xiaomi+Watch+S1" },
  { name: "Huawei Watch GT 3", brand: "Huawei", price: 7000000, feature: ["pin-trau", "suc-khoe"], config: "liteos", image: "https://via.placeholder.com/200x150?text=Huawei+Watch+GT+3" },
  { name: "Amazfit GTS 4", brand: "Amazfit", price: 6000000, feature: ["suc-khoe", "the-thao"], config: "zeppos", image: "https://via.placeholder.com/200x150?text=Amazfit+GTS+4" },
  { name: "Oppo Watch 3", brand: "Oppo", price: 6500000, feature: ["nghe-goi", "suc-khoe"], config: "wearos", image: "https://via.placeholder.com/200x150?text=Oppo+Watch+3" },
  { name: "Realme Watch 2 Pro", brand: "Realme", price: 2500000, feature: ["gps", "suc-khoe"], config: "realmeos", image: "https://via.placeholder.com/200x150?text=Realme+Watch+2+Pro" },
  { name: "Fitbit Versa 4", brand: "Fitbit", price: 6000000, feature: ["suc-khoe", "ngu"], config: "fitbitos", image: "https://via.placeholder.com/200x150?text=Fitbit+Versa+4" }
];

const accessories = [
  { name: "AirPods Pro 2", brand: "Apple", price: 6000000, feature: ["chong-on", "bluetooth"], config: "airpods", image: "https://via.placeholder.com/200x150?text=AirPods+Pro+2" },
  { name: "Samsung Galaxy Buds2 Pro", brand: "Samsung", price: 5000000, feature: ["bluetooth", "chong-on"], config: "buds", image: "https://via.placeholder.com/200x150?text=Galaxy+Buds2+Pro" },
  { name: "Xiaomi 10000mAh Power Bank", brand: "Xiaomi", price: 800000, feature: ["sac-du-phong"], config: "10000mah", image: "https://via.placeholder.com/200x150?text=Xiaomi+Power+Bank" },
  { name: "Anker 20W Charger", brand: "Anker", price: 600000, feature: ["sac-nhanh"], config: "20w", image: "https://via.placeholder.com/200x150?text=Anker+20W" },
  { name: "Apple Pencil 2", brand: "Apple", price: 3500000, feature: ["ve", "viet"], config: "pencil2", image: "https://via.placeholder.com/200x150?text=Apple+Pencil+2" },
  { name: "Ugreen USB-C Hub", brand: "Ugreen", price: 1000000, feature: ["mo-rong", "usb-c"], config: "7in1", image: "https://via.placeholder.com/200x150?text=Ugreen+USB+Hub" },
  { name: "Baseus Wireless Charger", brand: "Baseus", price: 700000, feature: ["sac-khong-day"], config: "15w", image: "https://via.placeholder.com/200x150?text=Baseus+Charger" },
  { name: "JBL Go 3", brand: "JBL", price: 1000000, feature: ["bluetooth", "loa"], config: "jbl-go3", image: "https://via.placeholder.com/200x150?text=JBL+Go+3" },
  { name: "Logitech MX Master 3S", brand: "Logitech", price: 2500000, feature: ["chuot-khong-day", "do-hoa"], config: "bluetooth", image: "https://via.placeholder.com/200x150?text=MX+Master+3S" },
  { name: "WD My Passport 1TB", brand: "Western Digital", price: 1800000, feature: ["o-cung", "luu-tru"], config: "1tb", image: "https://via.placeholder.com/200x150?text=WD+1TB" }
];



const allProducts = [
  ...products,
  ...laptops,
  ...ipads,
  ...watches,
  ...accessories
];

function filterProducts() {
  const brand = document.getElementById("brand").value;
  const price = document.getElementById("price").value;
  const feature = document.getElementById("feature").value;
  const config = document.getElementById("config").value;

  console.log("Filtering with:", { brand, price, feature, config });

  const filtered = allProducts.filter(product => {
    return (!brand || product.brand === brand) &&
           (!price || matchPrice(product.price, price)) &&
           (!feature || product.feature.includes(feature)) &&
           (!config || product.config === config);
  });

  showProducts(filtered);
}

function matchPrice(price, selected) {
  switch (selected) {
    case "duoi-3tr":
      return price < 3000000;
    case "3-5tr":
      return price >= 3000000 && price <= 5000000;
    case "5-7tr":
      return price > 5000000 && price <= 7000000;
    case "7-10tr":
      return price > 7000000 && price <= 10000000;
    case "10-20tr":
      return price > 10000000 && price <= 20000000;
    case "20-30tr":
      return price > 20000000 && price <= 30000000;
    case "30-40tr":
      return price > 30000000 && price <= 40000000;
    case "tren-40tr":
      return price > 40000000;
    default:
      return true;
  }
}

function showProducts(products) {
  const list = document.getElementById("product-list");
  list.innerHTML = "";

  if (products.length === 0) {
    list.innerHTML = "<p>Không tìm thấy sản phẩm phù hợp.</p>";
    return;
  }

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>Hãng: ${p.brand}</p>
      <p>Giá: ${p.price.toLocaleString()}đ</p>
    `;
    list.appendChild(card);
  });
}
