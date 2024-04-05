const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const bullets = document.querySelectorAll(".bullet");
const images = document.querySelectorAll(".images");
let slide = 0;

//Update Bullet according to Slide image show diffrent color
const updateBulletStatus = () => {
  bullets.forEach((bullet, index) => {
    index === slide
      ? bullet.classList.add("active")
      : bullet.classList.remove("active");
  });
};
updateBulletStatus();

//this function create to button show and hide when slide ===0 then prevButton will be Hide and same do for nextBUtton
const buttonShowAndHide = () => {
  slide === 0
    ? (prevButton.style.display = "none")
    : (prevButton.style.display = "block");
  slide === images.length - 1
    ? (nextButton.style.display = "none")
    : (nextButton.style.display = "block");
};
buttonShowAndHide();

//To set All images left hide according to their index into percentage like 0%, 100%
images.forEach((img, index) => {
  img.style.left = `${index * 100}%`;
});

//function invoke on bullet click
const slideChangeOnClickBullet = (slideValue) => {
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
  updateBulletStatus();
  buttonShowAndHide();
};

//Create Auto Slide function
const autoSlide = () => {
  setInterval(() => {
    imgSlide();
    slide++;
    if (slide > images.length - 1) {
      slide = 0;
    }
  }, 5000);
};

//Run AutoSlide Function
autoSlide();
