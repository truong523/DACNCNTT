// Chuyển tab
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    const id = tab.getAttribute('data-tab');
    document.getElementById(id).classList.add('active');
  });
});

// Quay về trang chủ
function goBackHome() {
  window.location.href = "../index.html";
}

// Đấu giá
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    const id = tab.getAttribute('data-tab');
    document.getElementById(id).classList.add('active');
  });
});

function goBack() {
  window.location.href = "../index.html";
}

function parseDeadline(deadlineText) {
  // Lấy các phần ngày giờ từ chuỗi deadline "Hạn: dd/mm/yyyy hh:mm:ss"
  const match = deadlineText.match(/Hạn:\s*(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})/);
  if (!match) return null;
  const [_, day, month, year, hour, minute, second] = match;
  return new Date(`${month}/${day}/${year} ${hour}:${minute}:${second}`);
}

document.querySelectorAll('.bid-btn').forEach(button => {
  button.addEventListener('click', () => {
    const auctionRow = button.closest('.auction-row');
    const deadlineText = auctionRow.querySelector('.deadline').innerText;
    const deadline = parseDeadline(deadlineText);
    if (!deadline) {
      alert("Không lấy được thời hạn đấu giá!");
      return;
    }
    const now = new Date();
    if (now > deadline) {
      alert("Bạn không thể tham gia đấu giá sản phẩm này vì đã quá hạn.");
      return;
    }

    const priceBox = auctionRow.querySelector('.start-price');
    let currentEl = priceBox.querySelector('.current-value');
    if (!currentEl) {
      // Nếu chưa có giá hiện tại, tạo luôn
      currentEl = document.createElement('div');
      currentEl.classList.add('current-value');
      currentEl.style.fontWeight = "bold";
      priceBox.appendChild(currentEl);
      // Khởi tạo giá hiện tại = giá bắt đầu
      const startPriceText = priceBox.innerText.match(/[\d.]+/);
      const startPrice = startPriceText ? parseInt(startPriceText[0].replace(/\./g, '')) : 0;
      currentEl.innerText = `${startPrice.toLocaleString()}₫`;
    }

    const currentText = currentEl.innerText;
    const currentPrice = parseInt(currentText.replace(/\D/g, ''));

    const userBid = prompt(`Nhập giá bạn muốn đấu giá (phải lớn hơn ${currentPrice.toLocaleString()}₫):`);
    if (userBid === null) return; // Nếu bấm hủy

    const bidValue = parseInt(userBid.replace(/\D/g, ''));

    if (!isNaN(bidValue)) {
      if (bidValue > currentPrice) {
        currentEl.innerText = `${bidValue.toLocaleString()}₫`;
        alert(`Đấu giá thành công với giá ${bidValue.toLocaleString()}₫!`);
      } else {
        alert(`Giá bạn nhập phải lớn hơn ${currentPrice.toLocaleString()}₫!`);
      }
    } else {
      alert("Vui lòng nhập số hợp lệ.");
    }
  });
});

document.querySelectorAll('.buy-btn').forEach(button => {
  button.addEventListener('click', () => {
    const auctionRow = button.closest('.auction-row');
    const deadlineText = auctionRow.querySelector('.deadline').innerText;
    const deadline = parseDeadline(deadlineText);
    if (!deadline) {
      alert("Không lấy được thời hạn mua ngay!");
      return;
    }
    const now = new Date();

    const buyoutPriceText = auctionRow.querySelector('.buyout .price').innerText.match(/[\d.]+/);
    const buyoutPrice = buyoutPriceText ? parseInt(buyoutPriceText[0].replace(/\./g, '')) : 0;

    if (now <= deadline) {
      // Còn hạn đấu giá -> hỏi có mua ngay không (giá chốt)
      const confirmBuyNow = confirm(`Sản phẩm đang trong thời gian đấu giá.\nBạn có muốn mua ngay với giá chốt ${buyoutPrice.toLocaleString()}₫ không?`);
      if (confirmBuyNow) {
        alert("Chúc mừng bạn đã mua thành công sản phẩm!");
      }
    } else {
      // Hết hạn đấu giá -> hỏi mua ngay với giá chốt luôn
      const confirmBuyNow = confirm(`Đấu giá đã kết thúc.\nBạn có muốn mua ngay với giá chốt ${buyoutPrice.toLocaleString()}₫ không?`);
      if (confirmBuyNow) {
        alert("Chúc mừng bạn đã mua thành công sản phẩm!");
      }
    }
  });
});



// Mua ngay
// document.querySelectorAll('.buy-btn').forEach(button => {
//   button.addEventListener('click', () => {
//     const confirmBuy = confirm("Bạn có chắc chắn muốn mua sản phẩm này ngay khi còn thời gian?");
//     if (confirmBuy) {
//       alert("Chúc mừng bạn đã mua thành công!");
//     }
//   });
// });

// Đếm ngược thời gian
document.querySelectorAll('.timer').forEach(timer => {
  let seconds = parseInt(timer.getAttribute('data-time')) || 0;

  const updateTimer = () => {
    if (seconds <= 0) {
      timer.textContent = "Đã hết thời gian!";
      return;
    }

    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    timer.textContent = `${hrs}:${mins}:${secs}`;
    seconds--;
  };

  updateTimer();
  setInterval(updateTimer, 1000);
});


