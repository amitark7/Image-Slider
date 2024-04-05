const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const bullets = document.querySelectorAll(".bullet");
const images = document.querySelectorAll(".images");
let slide = 0;

//Update Bullet according to Slide image show diffrent color
const updateBullet = () => {
  bullets.forEach((bullet, index) => {
    index === slide
      ? bullet.classList.add("active")
      : bullet.classList.remove("active");
  });
};
updateBullet();

//this function create to button show and hide when slide ===0 then prevButton will be Hide and same do for nextBUtton
const buttonShowandHide = () => {
  slide === 0
    ? (prevButton.style.display = "none")
    : (prevButton.style.display = "block");
  slide === images.length - 1
    ? (nextButton.style.display = "none")
    : (nextButton.style.display = "block");
};
buttonShowandHide();

//To set All images left hide according to their index into percentage like 0%, 100%
images.forEach((img, index) => {
  img.style.left = `${index * 100}%`;
});

//function invoke on bullet click
const slideChangeonClickBullet = (slideValue) => {
  slide = slideValue;
  imgSlide();
};

//Change Slide on click previous button
const prevClick = () => {
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
  buttonShowandHide();
};

//Create Auto Slide function
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

//Run AutoSlide Function
autoSlide();
