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

//this function create to button show and hide when slide ===0 then prevButton will be Hide and same do for nextBUtton
const ButtonShowandHide = () => {
  slide === 0
    ? (prevButton.style.display = "none")
    : (prevButton.style.display = "block");
  slide === images.length - 1
    ? (nextButton.style.display = "none")
    : (nextButton.style.display = "block");
};
ButtonShowandHide();

//To set All images left hide according to their index into percentage like 0%, 100%
images.forEach((img, index) => {
  img.style.left = `${index * 100}%`;
});

const slideChangeonClickBullet = (slideValue) => {
  slide = slideValue;
  imgSlide();
};

//Change Slide on click previous button
const prevClick = () => {
  console.log("Backward button");
  slide--;
  if (slide < 0) {
    slide = images.length - 1;
  }
  imgSlide();
};

//Change Slide on Click next Button
const nextClick = () => {
  slide++;
  if (slide > images.length - 1) {
    slide = 0;
  }
  prevButton.style.display = "block";
  imgSlide();
};

//Change image transform according to click
const imgSlide = () => {
  images.forEach((image) => {
    image.style.transform = `translateX(-${slide * 100}%)`;
  });
  updateBullet();
  ButtonShowandHide();
};

//Create Auto Slide
let interValRef;
const autoSlide = () => {
  interValRef = setInterval(() => {
    imgSlide();
    slide++;
    if (slide > images.length - 1) {
      slide = 0;
    }
  }, 5000);
};

//Change Slide after 2 sec
autoSlide();
