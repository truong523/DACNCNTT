// Đóng/mở form địa chỉ
const adressbtn = document.querySelector('#adress-from');
const adressclose = document.querySelector('#adress-close');

adressbtn.addEventListener("click", function () {
  document.querySelector('.adress-from').style.display = "flex";
});

adressclose.addEventListener("click", function () {
  document.querySelector('.adress-from').style.display = "none";
});

// ========== SLIDER CHÍNH (banner) ==========
const rightbtn = document.querySelector('.slider-main-right');
const leftbtn = document.querySelector('.slider-main-left');
const imgNumber = document.querySelectorAll('.slider-content-left-top img');
const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li');
const sliderWrapper = document.querySelector('.slider-content-left-top');

let indexMain = 0;

function showSlide(index) {
  sliderWrapper.style.right = index * 100 + "%";
  updateActiveLi(index);
}

function updateActiveLi(activeIndex) {
  imgNumberLi.forEach((li, i) => {
    li.classList.toggle('active', i === activeIndex);
  });
}

rightbtn.addEventListener("click", function () {
  indexMain++;
  if (indexMain > imgNumber.length - 1) {
    indexMain = 0;
  }
  showSlide(indexMain);
});

leftbtn.addEventListener("click", function () {
  indexMain--;
  if (indexMain < 0) {
    indexMain = imgNumber.length - 1;
  }
  showSlide(indexMain);
});

imgNumberLi.forEach(function (image, liIndex) {
  image.addEventListener("click", function () {
    indexMain = liIndex;
    showSlide(indexMain);
  });
});

setInterval(function () {
  indexMain++;
  if (indexMain > imgNumber.length - 1) {
    indexMain = 0;
  }
  showSlide(indexMain);
}, 3000);

// ========== Tính % giảm giá ==========
document.querySelectorAll('.slider-product-one-content-item').forEach(item => {
  const originalEl = item.querySelector('.original-price');
  const currentEl = item.querySelector('.current-price');
  const discountEl = item.querySelector('.discount-percent');

  if (originalEl && currentEl && discountEl) {
    const originalText = originalEl.textContent.replace(/[₫,.]/g, '').trim();
    const currentText = currentEl.textContent.replace(/[₫,.]/g, '').trim();

    const original = parseFloat(originalText);
    const current = parseFloat(currentText);

    if (!isNaN(original) && !isNaN(current) && original > current) {
      const discount = Math.round(((original - current) / original) * 100);
      discountEl.textContent = `Giảm ${discount}%`;
    } else {
      discountEl.textContent = "";
    }
  }
});

// Thời gian kết thúc (ví dụ: 23h59 phút hôm nay)
const endTime = new Date();
endTime.setHours(23, 59, 59, 0);

function updateCountdown() {
  const now = new Date();
  const distance = endTime - now;

  if (distance <= 0) {
    document.getElementById("time").innerHTML = "00:00:00";
    clearInterval(timer);
    return;
  }

  const hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, '0');
  const minutes = String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, '0');
  const seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, '0');

  document.getElementById("time").innerHTML = `${hours}:${minutes}:${seconds}`;
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown(); // Gọi ngay khi load
 
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slider = document.querySelector('.product-gallery-two-content-left-bottom');

// Nút cuộn
prevBtn.addEventListener('click', () => {
  slider.scrollBy({ left: -220, behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  slider.scrollBy({ left: 220, behavior: 'smooth' });
});

// Auto slide
setInterval(() => {
  if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
    slider.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    slider.scrollBy({ left: 220, behavior: 'smooth' });
  }
}, 1000); 


//Banner Three
let currentIndex = 0;
let autoSlideInterval;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.slide-three');
  const totalSlides = slides.length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  const slider = document.querySelector('.slider-three');
  if (slider) {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
}


// Banner Three

(function () {
  let bannerThreeIndex = 0;
  const bannerThreeSlides = document.querySelectorAll('.slide-three');
  const bannerThreeTotal = bannerThreeSlides.length;
  const bannerThreeVisible = 2;
  const bannerThreeSlider = document.querySelector('.slider-three');
  let bannerThreeInterval;

 
  function updateBannerThreeSlider() {
    const slideWidth = bannerThreeSlides[0].offsetWidth + 20;  
    bannerThreeSlider.style.transform = `translateX(-${bannerThreeIndex * slideWidth}px)`;
  }
 
  function moveBannerThreeSlide(step) {
    bannerThreeIndex += step;

    const maxIndex = bannerThreeTotal - bannerThreeVisible;
    if (bannerThreeIndex > maxIndex) bannerThreeIndex = 0;
    if (bannerThreeIndex < 0) bannerThreeIndex = maxIndex;

    updateBannerThreeSlider();
  }
 
  function startBannerThreeAutoSlide() {
    bannerThreeInterval = setInterval(() => moveBannerThreeSlide(bannerThreeVisible), 5000);
  }
 
  function stopBannerThreeAutoSlide() {
    clearInterval(bannerThreeInterval);
  }
 
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  if (prevBtn && nextBtn && bannerThreeSlider) {
    prevBtn.addEventListener('click', () => {
      moveBannerThreeSlide(-bannerThreeVisible);
      stopBannerThreeAutoSlide(); //  
      setTimeout(startBannerThreeAutoSlide, 3000);  
    });

    nextBtn.addEventListener('click', () => {
      moveBannerThreeSlide(bannerThreeVisible);
      stopBannerThreeAutoSlide();  
      setTimeout(startBannerThreeAutoSlide, 3000);  
    });
 
    window.addEventListener('load', () => {
      bannerThreeSlider.style.transition = 'transform 0.5s ease-in-out';
      startBannerThreeAutoSlide();
    });
  }
})();

// Bo Sung Tab
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

 
