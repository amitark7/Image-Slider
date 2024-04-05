const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const bullets = document.querySelectorAll(".bullet");
const images = document.querySelectorAll(".images");
const autoSlideSelected = document.getElementById("autoSlideOnOrOff");
const timerSelected = document.getElementById("timer");
let slide = 0;
let isAutoPlay = "On";
let timer = 2000;

//Get value on Slide mode Selceted on or Off and Run autoSlide function
autoSlideSelected.addEventListener("change", () => {
  isAutoPlay = autoSlideSelected.value;
  autoSlide();
});

//Get Timer value from timerSelcted and call AutoSlide function
timerSelected.addEventListener("change", () => {
  timer = timerSelected.value;
  autoSlide();
});

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
let interValRef;
const autoSlide = () => {
  if (isAutoPlay === "On") {
    //if interval Reference available then we clear interval to start new interval function
    interValRef ? clearInterval(interValRef) : "";
    interValRef = setInterval(() => {
      imgSlide();
      slide++;
      if (slide > images.length - 1) {
        slide = 0;
      }
    }, timer);
  } else {
    //if autoSlide off then clear interval
    clearInterval(interValRef);
  }
};

//Run AutoSlide Function
autoSlide();
