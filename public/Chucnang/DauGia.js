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

// Hàm xử lý thời gian từ chuỗi "Hạn: dd/mm/yyyy hh:mm:ss"
function parseDeadline(deadlineText) {
  const match = deadlineText.match(/Hạn:\s*(\d{2})\/(\d{2})\/(\d{4})\s+(\d{2}):(\d{2}):(\d{2})/);
  if (!match) return null;
  const [_, day, month, year, hour, minute, second] = match;
  return new Date(`${month}/${day}/${year} ${hour}:${minute}:${second}`);
}

// Hàm khởi tạo hành động cho các nút đấu giá và mua ngay
function setupAuctionButtons() {
  document.querySelectorAll('.bid-btn').forEach(button => {
    button.onclick = () => {
      const auctionRow = button.closest('.auction-row');
      const deadlineText = auctionRow.querySelector('.deadline')?.innerText;
      const deadline = parseDeadline(deadlineText);
      if (!deadline) {
        alert("Không lấy được thời hạn đấu giá!");
        return;
      }

      const now = new Date();
      if (now > deadline) {
        alert("Bạn không thể tham gia đấu giá vì đã hết hạn.");
        return;
      }

      const priceBox = auctionRow.querySelector('.start-price');
      let currentEl = priceBox.querySelector('.current-value');
      const currentPrice = parseInt(currentEl.innerText.replace(/\D/g, ''));

      const userBid = prompt(`Nhập giá bạn muốn đấu giá (phải lớn hơn ${currentPrice.toLocaleString()}₫):`);
      if (userBid === null) return;

      const bidValue = parseInt(userBid.replace(/\D/g, ''));
      if (isNaN(bidValue)) return alert("Vui lòng nhập số hợp lệ.");

      if (bidValue > currentPrice) {
        currentEl.innerText = `${bidValue.toLocaleString()}₫`;
        alert(`Đấu giá thành công với giá ${bidValue.toLocaleString()}₫!`);
      } else {
        alert(`Giá bạn nhập phải lớn hơn ${currentPrice.toLocaleString()}₫!`);
      }
    };
  });

  document.querySelectorAll('.buy-btn').forEach(button => {
    button.onclick = () => {
      const auctionRow = button.closest('.auction-row');
      const deadlineText = auctionRow.querySelector('.deadline')?.innerText;
      const deadline = parseDeadline(deadlineText);
      const now = new Date();

      const buyoutText = auctionRow.querySelector('.buyout .price').innerText.match(/[\d.]+/);
      const buyoutPrice = buyoutText ? parseInt(buyoutText[0].replace(/\./g, '')) : 0;

      let message = `Bạn có muốn mua ngay với giá ${buyoutPrice.toLocaleString()}₫ không?`;
      if (deadline && now <= deadline) {
        message = `Sản phẩm đang trong thời gian đấu giá.\n${message}`;
      } else {
        message = `Đấu giá đã kết thúc.\n${message}`;
      }

      const confirmBuy = confirm(message);
      if (confirmBuy) {
        alert("Chúc mừng bạn đã mua thành công sản phẩm!");
      }
    };
  });
}

// Hàm đếm ngược
function startCountdown(timerEl, seconds) {
  const update = () => {
    if (seconds <= 0) {
      timerEl.textContent = "Đã hết thời gian!";
      return;
    }
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    timerEl.textContent = `${hrs}:${mins}:${secs}`;
    seconds--;
  };
  update();
  setInterval(update, 1000);
}

// Thêm sản phẩm mới
function addAuctionProduct() {
  const name = document.getElementById("productName").value;
  const img = document.getElementById("productImg").value;
  const start = document.getElementById("startPrice").value;
  const buyout = document.getElementById("buyoutPrice").value;
  const tab = document.getElementById("productTab").value;

  if (!name || !img || !start || !buyout) {
    alert("Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  const deadline = new Date(Date.now() + 3600 * 1000); // +1 giờ
  const deadlineText = `Hạn: ${String(deadline.getDate()).padStart(2, '0')}/${String(deadline.getMonth()+1).padStart(2, '0')}/${deadline.getFullYear()} ${String(deadline.getHours()).padStart(2, '0')}:${String(deadline.getMinutes()).padStart(2, '0')}:${String(deadline.getSeconds()).padStart(2, '0')}`;

  const productHTML = `
    <div class="auction-row">
      <div class="item-img border-right">
        <img src="${img}" alt="${name}" />
      </div>
      <div class="item-info border-right">
        <div class="name">${name}</div>
        <div class="start-price">
          Bắt đầu: <span class="start-value">${Number(start).toLocaleString()}₫</span><br>
          Giá hiện tại: <span class="current-value">${Number(start).toLocaleString()}₫</span>
        </div>
        <button class="bid-btn">Đấu Giá</button>
      </div>
      <div class="buyout border-right">
        <div class="price">Giá Chốt Ngay: <br>${Number(buyout).toLocaleString()}₫</div>
        <button class="buy-btn">Mua Ngay</button>
      </div>
      <div class="time-left">
        <span class="timer" data-time="3600">--:--:--</span>
        <div class="deadline">${deadlineText}</div>
      </div>
    </div>
  `;

  const container = document.getElementById(tab);
  container.insertAdjacentHTML("beforeend", productHTML);

  // Kích hoạt lại sự kiện
  setupAuctionButtons();

  const lastTimer = container.querySelector('.auction-row:last-child .timer');
  startCountdown(lastTimer, 3600);

  // Reset form
  document.getElementById("productName").value = "";
  document.getElementById("productImg").value = "";
  document.getElementById("startPrice").value = "";
  document.getElementById("buyoutPrice").value = "";
}
