// let compareList = [];

// function addToCompare(button) {
//   const card = button.closest('.phone-card');
//   const phoneId = card.dataset.id;

//   Kiểm tra trùng lặp
//   if (compareList.some(p => p.id === phoneId)) {
//     alert("Điện thoại này đã được thêm vào bảng so sánh!");
//     return;
//   }

//   if (compareList.length >= 3) {
//     alert("Chỉ được so sánh tối đa 3 sản phẩm.");
//     return;
//   }

//   const phone = {
//     id: phoneId,
//     name: card.dataset.name,
//     screen: card.dataset.screen,
//     camera: card.dataset.camera,
//     battery: card.dataset.battery,
//     price: card.dataset.price,
//     image: card.dataset.image
//   };

//   compareList.push(phone);
//   renderCompareTable();
// }

// function renderCompareTable() {
//   const container = document.getElementById('compare-table');

//   if (compareList.length < 2) {
//     container.innerHTML = "<p>Hãy chọn ít nhất 2 điện thoại để so sánh.</p>";
//     return;
//   }

//   const rows = [
//     ["Ảnh", ...compareList.map(p => `<img src="${p.image}" alt="${p.name}" class="compare-img">`)],
//     ["Tên", ...compareList.map(p => p.name)],
//     ["Màn hình", ...compareList.map(p => p.screen)],
//     ["Camera", ...compareList.map(p => p.camera)],
//     ["Pin", ...compareList.map(p => p.battery)],
//     ["Giá", ...compareList.map(p => p.price)]
//   ];

//   let html = "<table>";
//   for (let row of rows) {
//     html += "<tr>";
//     for (let cell of row) {
//       html += `<td>${cell}</td>`;
//     }
//     html += "</tr>";
//   }
//   html += "</table>";

//   container.innerHTML = html;
// }
// // Quay về trang chủ
// function goBackHome() {
//   window.location.href = "../index.html";
// } 

document.addEventListener('DOMContentLoaded', () => {
    const products = [ 
        {
            id: "iphone16",
            name: "iPhone 16 Series",
            image: "image/phone1.jpg",
            price: "19.999.000₫",
            originalPrice: "22.390.000₫",
            gift: "Nhận ngay quà 500.000₫",
            specs: {
                "Màn hình": "OLED 6.1 inch, Super Retina XDR",
                "Camera sau": "Chính 48MP & Phụ 12MP",
                "Camera trước": "12MP",
                "CPU": "Apple A18 Bionic (dự kiến)",
                "RAM": "8GB (dự kiến)",
                "Bộ nhớ trong": "128GB/256GB/512GB",
                "Pin": "Khoảng 3500 mAh",
                "Hệ điều hành": "iOS 18 (dự kiến)"
            }
        },
        {
            id: "samsungS25Ultra",
            name: "Samsung Galaxy S25 Ultra",
            image: "image/phone2.jpg",
            price: "28.990.000₫",
            originalPrice: "31.500.000₫",
            gift: "Tai nghe Galaxy Buds Pro",
            specs: {
                "Màn hình": "Dynamic AMOLED 2X 6.8 inch, QHD+",
                "Camera sau": "Chính 200MP, Siêu rộng 12MP, Tele 10MP (3x), Tele 50MP (5x)",
                "Camera trước": "40MP",
                "CPU": "Snapdragon 8 Gen 4 for Galaxy (dự kiến)",
                "RAM": "12GB/16GB",
                "Bộ nhớ trong": "256GB/512GB/1TB",
                "Pin": "5000 mAh, Sạc nhanh 45W",
                "Hệ điều hành": "Android 15 with One UI 7 (dự kiến)"
            }
        },
        {
            id: "oppoReno12Pro",
            name: "Oppo Reno12 Pro",
            image: "image/phone3.png",
            price: "14.990.000₫",
            originalPrice: "16.000.000₫",
            gift: "Sạc dự phòng 10.000mAh",
            specs: {
                "Màn hình": "AMOLED 6.7 inch, FHD+",
                "Camera sau": "Chính 50MP, Siêu rộng 8MP, Tele 32MP",
                "Camera trước": "32MP",
                "CPU": "MediaTek Dimensity 9200+ (dự kiến)",
                "RAM": "12GB",
                "Bộ nhớ trong": "256GB/512GB",
                "Pin": "4800 mAh, Sạc nhanh 80W",
                "Hệ điều hành": "Android 15 with ColorOS 15 (dự kiến)"
            }
        },
        {
            id: "xiaomi15",
            name: "Xiaomi 15",
            image: "image/phone4.jpg",
            price: "18.500.000₫",
            originalPrice: "20.000.000₫",
            gift: "Voucher 300.000đ",
            specs: {
                "Màn hình": "LTPO AMOLED 6.36 inch",
                "Camera sau": "Chính 50MP (Leica), Siêu rộng 50MP, Tele 50MP",
                "Camera trước": "32MP",
                "CPU": "Snapdragon 8 Gen 4 (dự kiến)",
                "RAM": "12GB",
                "Bộ nhớ trong": "256GB/512GB",
                "Pin": "4700 mAh, Sạc nhanh 90W",
                "Hệ điều hành": "Android 15 with HyperOS (dự kiến)"
            }
        },
        {
            id: "googlePixel9Pro",
            name: "Google Pixel 9 Pro",
            image: "image/phone5.jpg", 
            price: "24.500.000₫",
            originalPrice: "26.000.000₫",
            gift: "Ốp lưng chính hãng",
            specs: {
                "Màn hình": "LTPO OLED 6.7 inch, QHD+",
                "Camera sau": "Chính 50MP, Siêu rộng 48MP, Tele 48MP (5x optical zoom)",
                "Camera trước": "10.8MP",
                "CPU": "Google Tensor G4 (dự kiến)",
                "RAM": "12GB/16GB",
                "Bộ nhớ trong": "128GB/256GB/512GB",
                "Pin": "5050 mAh, Sạc nhanh có dây và không dây",
                "Hệ điều hành": "Android 15",
                "Tính năng đặc biệt": "AI Camera, Magic Eraser, Titan Security Chip"
            }
        },
        {
            id: "samsungGalaxyA56",
            name: "Samsung Galaxy A56 5G",
            image: "image/phone6.jpg", 
            price: "9.890.000₫",
            originalPrice: "10.500.000₫",
            gift: "Tai nghe không dây",
            specs: {
                "Màn hình": "Super AMOLED 6.5 inch, FHD+, 120Hz",
                "Camera sau": "Chính 64MP OIS, Siêu rộng 12MP, Macro 5MP",
                "Camera trước": "32MP",
                "CPU": "Exynos 1480 (dự kiến)",
                "RAM": "8GB",
                "Bộ nhớ trong": "128GB/256GB",
                "Pin": "5000 mAh, Sạc nhanh 25W",
                "Hệ điều hành": "Android 15 with One UI 7",
                "Kháng nước/bụi": "IP67"
            }
        },
        {
            id: "xiaomiRedmiNote14Pro",
            name: "Xiaomi Redmi Note 14 Pro",
            image: "image/phone7.jpg", 
            price: "7.490.000₫",
            originalPrice: "8.200.000₫",
            gift: "Củ sạc nhanh 67W",
            specs: {
                "Màn hình": "AMOLED 6.67 inch, 1.5K, 120Hz",
                "Camera sau": "Chính 200MP OIS, Siêu rộng 8MP, Macro 2MP",
                "Camera trước": "16MP",
                "CPU": "Snapdragon 7s Gen 3 (dự kiến)",
                "RAM": "8GB/12GB",
                "Bộ nhớ trong": "256GB/512GB",
                "Pin": "5100 mAh, Sạc nhanh 67W",
                "Hệ điều hành": "Android 15 with HyperOS"
            }
        },
        {
            id: "vivoX100s",
            name: "Vivo X100s",
            image: "image/phone8.jpg", 
            price: "16.990.000₫",
            originalPrice: "18.000.000₫",
            gift: "Bảo hành mở rộng",
            specs: {
                "Màn hình": "AMOLED LTPO 6.78 inch, 120Hz",
                "Camera sau": "Chính 50MP (Zeiss), Siêu rộng 50MP, Tele 64MP (3x optical)",
                "Camera trước": "32MP",
                "CPU": "MediaTek Dimensity 9300+",
                "RAM": "12GB/16GB",
                "Bộ nhớ trong": "256GB/512GB/1TB",
                "Pin": "5100 mAh, Sạc nhanh 100W",
                "Hệ điều hành": "Android 15 with Funtouch OS"
            }
        },
        {
            id: "realmeGT6",
            name: "Realme GT 6",
            image: "image/phone9.jpg", 
            price: "13.500.000₫",
            originalPrice: "14.990.000₫",
            gift: "Phiếu mua hàng 500k",
            specs: {
                "Màn hình": "AMOLED 6.74 inch, 144Hz, FHD+",
                "Camera sau": "Chính 50MP (Sony IMX890 OIS), Siêu rộng 8MP, Macro 2MP",
                "Camera trước": "16MP",
                "CPU": "Snapdragon 8 Gen 3 (phiên bản rút gọn hoặc Gen 2)",
                "RAM": "12GB/16GB",
                "Bộ nhớ trong": "256GB/512GB",
                "Pin": "5500 mAh, Sạc nhanh 120W",
                "Hệ điều hành": "Android 15 with Realme UI"
            }
        },
        {
            id: "iphoneSE4",
            name: "iPhone SE 4 (2025)",
            image: "image/phone10.jpg", 
            price: "12.990.000₫",
            originalPrice: "13.500.000₫",
            gift: "Cáp sạc Type-C",
            specs: {
                "Màn hình": "OLED 6.1 inch (dự kiến, thiết kế giống iPhone 14)",
                "Camera sau": "Đơn 12MP (hoặc 48MP crop)", 
                "Camera trước": "12MP",
                "CPU": "Apple A16 Bionic (dự kiến)",
                "RAM": "6GB (dự kiến)", 
                "Bộ nhớ trong": "128GB/256GB",
                "Pin": "Khoảng 3200 mAh (dự kiến)", 
                "Hệ điều hành": "iOS 18 (dự kiến)",
                "Bảo mật": "Face ID (dự kiến)"
            }
        },
        {
            id: "nothingPhone3",
            name: "Nothing Phone (3)",
            image: "image/phone11.jpg", 
            price: "15.990.000₫",
            originalPrice: "17.000.000₫",
            gift: "Tai nghe Nothing Ear (a)",
            specs: {
                "Màn hình": "Flexible AMOLED 6.7 inch, 120Hz",
                "Camera sau": "Chính 50MP, Siêu rộng 50MP",
                "Camera trước": "32MP",
                "CPU": "Snapdragon 8s Gen 3 (dự kiến)",
                "RAM": "12GB", 
                "Bộ nhớ trong": "256GB/512GB",
                "Pin": "4800 mAh, Sạc nhanh có dây 65W, không dây 15W",
                "Hệ điều hành": "Android 15 with Nothing OS 3.0",
                "Tính năng đặc biệt": "Glyph Interface cải tiến, thiết kế trong suốt"
            }
        },
        {
            id: "asusZenfone12",
            name: "ASUS Zenfone 12",
            image: "image/phone12.jpg", 
            price: "17.500.000₫",
            originalPrice: "18.900.000₫",
            gift: "Đế sạc không dây",
            specs: {
                "Màn hình": "AMOLED 5.9 inch, 144Hz (Compact phone)",
                "Camera sau": "Chính 50MP (Gimbal OIS), Siêu rộng 13MP",
                "Camera trước": "32MP",
                "CPU": "Snapdragon 8 Gen 4 (dự kiến)",
                "RAM": "12GB/16GB",
                "Bộ nhớ trong": "256GB/512GB",
                "Pin": "4500 mAh, Sạc nhanh 67W",
                "Hệ điều hành": "Android 15 with ZenUI"
            }
        },
        {
            id: "honorMagic7",
            name: "Honor Magic7 Ultimate",
            image: "image/phone13.jpg", 
            price: "29.990.000₫",
            originalPrice: "32.000.000₫",
            gift: "Đồng hồ Honor Watch GS 4",
            specs: {
                "Màn hình": "LTPO OLED 6.81 inch, Quad-Curved, 120Hz",
                "Camera sau": "Chính 50MP (cảm biến 1-inch), Siêu rộng 50MP, Tele 180MP Periscope (zoom quang 3.5x, zoom số 100x)",
                "Camera trước": "12MP + 3D Depth Camera",
                "CPU": "Snapdragon 8 Gen 4 (dự kiến)",
                "RAM": "16GB",
                "Bộ nhớ trong": "512GB/1TB",
                "Pin": "5600 mAh (Silicon-carbon), Sạc nhanh 100W có dây, 66W không dây",
                "Hệ điều hành": "Android 15 with MagicOS 9.0"
            }
        },
        {
            id: "sonyXperia1VII",
            name: "Sony Xperia 1 VII",
            image: "image/phone14.jpg", 
            price: "33.000.000₫",
            originalPrice: "35.000.000₫",
            gift: "Tai nghe Sony WH-1000XM6",
            specs: {
                "Màn hình": "4K HDR OLED 6.5 inch, 21:9 CinemaWide, 120Hz",
                "Camera sau": "Chính 48MP (Exmor T), Siêu rộng 12MP, Tele 12MP (zoom quang liên tục 85-170mm)",
                "Camera trước": "12MP",
                "CPU": "Snapdragon 8 Gen 4 (dự kiến)",
                "RAM": "16GB", 
                "Bộ nhớ trong": "256GB/512GB (hỗ trợ thẻ microSD)",
                "Pin": "5000 mAh, Sạc nhanh 30W",
                "Hệ điều hành": "Android 15",
                "Tính năng đặc biệt": "Photography Pro, Cinematography Pro, Cổng cắm tai nghe 3.5mm"
            }
        }
    ];

    const phoneSelectors = [document.getElementById('phone1'), document.getElementById('phone2'), document.getElementById('phone3')];
    const compareBtn = document.getElementById('compareBtn');
    const addPhoneBtn = document.getElementById('addPhoneBtn');
    const resetBtn = document.getElementById('resetBtn');
    const comparisonResultsDiv = document.getElementById('comparison-results');
    const comparisonHeaderRow = document.getElementById('comparison-header-row');
    const comparisonBody = document.getElementById('comparison-body');
    const selectorGroup3 = document.getElementById('selector-group-3');
    
    const recommendationArea = document.getElementById('recommendation-area');
    const recommendationContent = document.getElementById('recommendation-content');

    let numberOfPhonesToCompare = 2;

    function parsePrice(priceString) {
        if (!priceString) return Infinity; 
        return parseInt(priceString.replace(/[.₫]/g, ''));
    }

    function parseBattery(batterySpec) {
        if (!batterySpec) return 0;
        const match = batterySpec.match(/(\d+)\s*mAh/i);
        return match ? parseInt(match[1]) : 0;
    }

    function parseRAM(ramSpec) { 
        if (!ramSpec) return 0;
        const matches = ramSpec.match(/\d+/g); 
        if (matches) {
            return Math.max(...matches.map(num => parseInt(num)));
        }
        return 0;
    }

    function parseMainCameraMP(cameraSpec) {
        if (!cameraSpec) return 0;
        let match = cameraSpec.match(/Chính\s*(\d+)MP/i);
        if (match) return parseInt(match[1]);
        match = cameraSpec.match(/Đơn\s*(\d+)MP/i);
        if (match) return parseInt(match[1]);
        match = cameraSpec.match(/(\d+)MP\s*&\s*Phụ/i)
        if (match) return parseInt(match[1]);
        match = cameraSpec.match(/^(\d+)MP/i); 
        if (match) return parseInt(match[1]);

        return 0; 
    }
    
    function populateSelectors() {
        phoneSelectors.forEach(selector => {
            if (!selector) return;
            while (selector.options.length > 1) {
                selector.remove(1);
            }
            products.forEach(product => {
                const option = document.createElement('option');
                option.value = product.id;
                option.textContent = product.name;
                selector.appendChild(option);
            });
        });
    }

    addPhoneBtn.addEventListener('click', () => {
        if (numberOfPhonesToCompare < 3) {
            numberOfPhonesToCompare++;
            selectorGroup3.style.display = 'block';
            if (numberOfPhonesToCompare === 3) {
                addPhoneBtn.disabled = true;
                addPhoneBtn.textContent = "So sánh tối đa 3 sản phẩm";
            }
        }
    });
    
    resetBtn.addEventListener('click', () => {
        phoneSelectors.forEach(selector => { 
            if(selector) selector.value = "";
        });
        comparisonResultsDiv.style.display = 'none';
        recommendationArea.style.display = 'none'; 
        recommendationContent.innerHTML = ''; 

        comparisonHeaderRow.innerHTML = '<th>Tính năng</th>'; 
        comparisonBody.innerHTML = ''; 
        compareBtn.disabled = false;
        resetBtn.style.display = 'none';

        if (selectorGroup3) selectorGroup3.style.display = 'none';
        numberOfPhonesToCompare = 2;
        addPhoneBtn.disabled = false;
        addPhoneBtn.textContent = "Thêm sản phẩm để so sánh (tối đa 3)";
    });

    compareBtn.addEventListener('click', () => {
        const selectedProductIds = [];
        phoneSelectors.forEach((selector, index) => {
            if (selector && index < numberOfPhonesToCompare && selector.value) {
                selectedProductIds.push(selector.value);
            }
        });

        if (selectedProductIds.length < 2) {
            alert('Vui lòng chọn ít nhất hai sản phẩm để so sánh.');
            return;
        }
        
        const uniqueProductIds = [...new Set(selectedProductIds)];
        if (uniqueProductIds.length !== selectedProductIds.length) {
            alert('Vui lòng chọn các sản phẩm khác nhau để so sánh.');
            return;
        }
        
        const currentSelectedProducts = uniqueProductIds.map(id => products.find(p => p.id === id)).filter(p => p);

        if (currentSelectedProducts.length >= 2) {
            displayComparison(currentSelectedProducts); 
            generateRecommendation(currentSelectedProducts); 
            compareBtn.disabled = true;
            resetBtn.style.display = 'inline-block';
        } else {
            alert('Không đủ thông tin sản phẩm hợp lệ để so sánh.');
            comparisonResultsDiv.style.display = 'none';
            recommendationArea.style.display = 'none';
        }
    });

    function displayComparison(selectedProductsToDisplay) { 
        comparisonResultsDiv.style.display = 'block';
        comparisonHeaderRow.innerHTML = '<th>Tính năng</th>'; 
        comparisonBody.innerHTML = ''; 

        selectedProductsToDisplay.forEach(product => {
            const th = document.createElement('th');
            let headerHTML = product.name;
            if (product.image) {
                headerHTML = `<img src="${product.image}" alt="${product.name}" class="product-image"><br>${product.name}`;
            }
            th.innerHTML = headerHTML;
            comparisonHeaderRow.appendChild(th);
        });

        const allSpecKeys = new Set();
        const predefinedKeys = ["Giá", "Giá gốc", "Quà tặng"];
        predefinedKeys.forEach(key => allSpecKeys.add(key));

        selectedProductsToDisplay.forEach(p => {
            if (p.specs) { 
                 Object.keys(p.specs).forEach(key => allSpecKeys.add(key));
            }
        });
        
        allSpecKeys.forEach(specKey => {
            const tr = document.createElement('tr');
            const tdFeature = document.createElement('td');
            tdFeature.className = 'spec-name'; 
            tdFeature.textContent = specKey;
            tr.appendChild(tdFeature);

            selectedProductsToDisplay.forEach(product => {
                const td = document.createElement('td');
                let value = '-';
                if (product) { 
                    if (predefinedKeys.includes(specKey)) {
                        switch(specKey) {
                            case "Giá": value = product.price || '-'; break;
                            case "Giá gốc": value = product.originalPrice ? `<del>${product.originalPrice}</del>` : '-'; break;
                            case "Quà tặng": value = product.gift || '-'; break;
                        }
                    } else if (product.specs && product.specs[specKey]) { 
                        value = product.specs[specKey];
                    }
                }
                td.innerHTML = value; 
                tr.appendChild(td);
            });
            comparisonBody.appendChild(tr);
        });
        
        comparisonResultsDiv.scrollIntoView({ behavior: 'smooth' });
    }

    function generateRecommendation(selectedProducts) {
        recommendationContent.innerHTML = ''; 
        if (selectedProducts.length < 2) {
            recommendationArea.style.display = 'none';
            return;
        }

        let recommendationsHTML = '<ul>';

        const sortedByPrice = [...selectedProducts].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        if (sortedByPrice.length > 0 && parsePrice(sortedByPrice[0].price) !== Infinity) {
            recommendationsHTML += `<li><strong>Ưu tiên ngân sách:</strong> Nếu bạn tìm kiếm lựa chọn tiết kiệm nhất, <strong>${sortedByPrice[0].name}</strong> với giá ${sortedByPrice[0].price} có vẻ là một khởi đầu tốt.`;
            if (sortedByPrice.length > 1 && parsePrice(sortedByPrice[1].price) !== Infinity && (parsePrice(sortedByPrice[1].price) - parsePrice(sortedByPrice[0].price)) < 2000000) { 
                 recommendationsHTML += ` Tuy nhiên, <strong>${sortedByPrice[1].name}</strong> cũng có mức giá khá cạnh tranh.`;
            }
            recommendationsHTML += `</li>`;
        }

        const sortedByCamera = [...selectedProducts]
            .map(p => ({ ...p, mainMP: parseMainCameraMP(p.specs["Camera sau"]) }))
            .filter(p => p.mainMP > 0) 
            .sort((a, b) => b.mainMP - a.mainMP);
        
        if (sortedByCamera.length > 0) {
            recommendationsHTML += `<li><strong>Chất lượng Camera:</strong> Về camera chính, <strong>${sortedByCamera[0].name}</strong> nổi bật với ${sortedByCamera[0].mainMP}MP.`;
            if (sortedByCamera[0].specs["Camera sau"] && /OIS|Zeiss|Leica/i.test(sortedByCamera[0].specs["Camera sau"])) {
                recommendationsHTML += ` Máy này cũng có vẻ được trang bị công nghệ ổn định hình ảnh hoặc ống kính chất lượng.`;
            }
            if (sortedByCamera.length > 1 && sortedByCamera[1].mainMP > 0 && sortedByCamera[0].mainMP !== sortedByCamera[1].mainMP) {
                recommendationsHTML += ` Tiếp theo có thể kể đến <strong>${sortedByCamera[1].name}</strong> với ${sortedByCamera[1].mainMP}MP.`;
            }
            recommendationsHTML += `</li>`;
        }

        const sortedByBattery = [...selectedProducts]
            .map(p => ({ ...p, batteryLife: parseBattery(p.specs["Pin"]) }))
            .filter(p => p.batteryLife > 0)
            .sort((a, b) => b.batteryLife - a.batteryLife);

        if (sortedByBattery.length > 0) {
            recommendationsHTML += `<li><strong>Thời lượng Pin:</strong> Nếu pin "trâu" là ưu tiên, <strong>${sortedByBattery[0].name}</strong> với ${sortedByBattery[0].specs["Pin"]} có vẻ là lựa chọn hàng đầu.`;
            if (sortedByBattery.length > 1 && sortedByBattery[1].batteryLife > 0 && sortedByBattery[0].batteryLife !== sortedByBattery[1].batteryLife) {
                 recommendationsHTML += ` <strong>${sortedByBattery[1].name}</strong> (${sortedByBattery[1].specs["Pin"]}) cũng cung cấp thời lượng pin tốt.`;
            }
             recommendationsHTML += `</li>`;
        }

        const sortedByRAM = [...selectedProducts]
            .map(p => ({ ...p, ramAmount: parseRAM(p.specs["RAM"]) }))
            .filter(p => p.ramAmount > 0)
            .sort((a, b) => b.ramAmount - a.ramAmount);
        
        if (sortedByRAM.length > 0) {
            recommendationsHTML += `<li><strong>Hiệu năng & Đa nhiệm (RAM):</strong> Cho nhu cầu đa nhiệm và hiệu năng mượt mà, <strong>${sortedByRAM[0].name}</strong> với ${sortedByRAM[0].specs["RAM"]} RAM là một ứng cử viên sáng giá.`;
            if (sortedByRAM.length > 1 && sortedByRAM[1].ramAmount > 0 && sortedByRAM[0].ramAmount !== sortedByRAM[1].ramAmount) {
                recommendationsHTML += ` <strong>${sortedByRAM[1].name}</strong> (${sortedByRAM[1].specs["RAM"]}) cũng cung cấp dung lượng RAM tốt.`;
            }
            recommendationsHTML += `</li>`;
        }
        
        let generalPicks = {};
        [...sortedByPrice.slice(0,1), ...sortedByCamera.slice(0,1), ...sortedByBattery.slice(0,1), ...sortedByRAM.slice(0,1)].forEach(p => {
            if (p) { 
                generalPicks[p.id] = (generalPicks[p.id] || 0) + 1;
            }
        });
        
        const bestOverallCandidates = Object.entries(generalPicks)
            .sort(([,a],[,b]) => b-a)
            .filter(([,count]) => count >=2); 

        if (bestOverallCandidates.length > 0) {
            const overallWinnerId = bestOverallCandidates[0][0];
            const overallWinner = products.find(p => p.id === overallWinnerId);
            if (overallWinner) {
                 recommendationsHTML += `<li><strong>Lựa chọn cân bằng:</strong> <strong>${overallWinner.name}</strong> có vẻ là một lựa chọn khá cân bằng khi xét trên nhiều yếu tố như giá, camera, pin hoặc RAM.</li>`;
            }
        } else if (sortedByPrice.length > 0) { 
            recommendationsHTML += `<li><strong>Cân nhắc chung:</strong> Dựa trên các thông số, <strong>${sortedByPrice[0].name}</strong> có thể là một điểm khởi đầu tốt để bạn xem xét kỹ hơn.</li>`;
        }

        recommendationsHTML += '</ul>';
        recommendationContent.innerHTML = recommendationsHTML;
        recommendationArea.style.display = 'block';
        recommendationArea.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
    
    populateSelectors();
});