let prevButton = document.querySelector(".prev-button");
let nextButton = document.querySelector(".next-button");
let bullets = document.querySelectorAll(".bullet");
let images = document.querySelectorAll(".images");
let slide = 0;

//Update Bullet according to Slide image show diffrent color
const updateBullet = () => {
  bullets.forEach((bullet, index) => {
    if (index === slide) {
      bullet.classList.add("active");
    } else {
      bullet.classList.remove("active");
    }
  });
};
updateBullet();

//To set All images left hide according to percentage like 0%, 100%
images.forEach((img, index) => {
  img.style.left = `${index * 100}%`;
});

const slideChangeonClickBullet = (slideValue) => {
  console.log(slideValue);
};
//Change Slide on click previous button
const prevClick = () => {
  slide--;
  if (slide < 0) {
    slide = images.length - 1;
  }
  imgSlide();
  updateBullet();
};

//Change Slide on Click next Button
const nextClick = () => {
  slide++;
  if (slide > images.length - 1) {
    slide = 0;
  }
  prevButton.style.display = "block";
  imgSlide();
  updateBullet();
};

//Change image transform according to click
const imgSlide = () => {
  images.forEach((image) => {
    image.style.transform = `translateX(-${slide * 100}%)`;
  });
};
