let faqContainer = document.querySelector("#faq-container");
let expandAllBtn = document.querySelector("#expand-all");
let collapseAllBtn = document.querySelector("#collapse-all");
let findLocationBtn = document.querySelector("#find-location");
let visibleCountSpan = document.querySelector("#visible-count");
let locationInfo = document.querySelector("#location-info");

let upCount = () => {
  let visible = document.querySelectorAll(".answer.visible").length;
  visibleCountSpan.textContent = `Visible Answers: ${visible}`;
};
faqContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("question")) {
    let answer = e.target.nextElementSibling;
    let parent = e.target.parentElement;
    answer.classList.toggle("visible");
    parent.classList.toggle("active");
    upCount();
  }
});
faqContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("favorite-btn")) {
    e.stopPropagation();
    alert("Favorite");
  }
});
collapseAllBtn.addEventListener("click", () => {
  document.querySelectorAll(".answer").forEach((answer) => {
    answer.classList.remove("visible");
    answer.parentElement.classList.remove("active");
  });
  updateVisibleCount();
});
expandAllBtn.addEventListener("click", () => {
  document.querySelectorAll(".answer").forEach((answer) => {
    answer.classList.add("visible");
    answer.parentElement.classList.add("active");
  });
  upCount();
});

findLocationBtn.addEventListener("click", () => {
  console.log("salom");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        locationInfo.textContent = `Latitude: ${latitude.toFixed(
          6
        )}, Longitude: ${longitude.toFixed(6)}`;
      },
      () => {
        locationInfo.textContent = "Ruxsat etilmadi.";
      }
    );
  } else {
    locationInfo.textContent = "";
  }
});
upCount();
