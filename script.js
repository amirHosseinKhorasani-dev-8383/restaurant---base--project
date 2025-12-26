"use strict";
const closeBtn = document.querySelector("#click-close");
const section1Close = document.querySelector("#section-1-close");
const section2Close = document.querySelector("#section-2-close");
const closeBtn2 = document.querySelector("#click-close-2");
const mainDayesSection = document.querySelector("#main-dayes-section");
const bars = document.querySelector("#click-bars");
const sidebar = document.querySelector(".sidebar");
const fullMain = document.querySelector("#fullmain");
const sidebarClose = document.querySelector("#sidebar-close");
const body = document.querySelector("body");
function SideBarClose() {
  sidebar.classList.remove("open");
  fullMain.classList.remove("body");
}
closeBtn.addEventListener("click", function () {
  section1Close.classList.toggle("close");
  section2Close.classList.toggle("close");
  if (closeBtn.classList.contains("fa-arrow-up")) {
    closeBtn.classList.remove("fa-arrow-up");
    closeBtn.classList.add("fa-arrow-down");
  } else {
    closeBtn.classList.remove("fa-arrow-down");
    closeBtn.classList.add("fa-arrow-up");
  }
});

closeBtn2.addEventListener("click", function () {
  mainDayesSection.classList.toggle("open");
  if (closeBtn2.classList.contains("fa-arrow-down")) {
    closeBtn2.classList.remove("fa-arrow-down");
    closeBtn2.classList.add("fa-arrow-up");
  } else {
    closeBtn2.classList.remove("fa-arrow-up");
    closeBtn2.classList.add("fa-arrow-down");
  }
});
bars.addEventListener("click", function () {
  sidebar.classList.toggle("open");
  fullMain.classList.add("body");
});
sidebarClose.addEventListener("click", function () {
  SideBarClose();
});
body.addEventListener("keydown", function () {
  if (sidebar.classList.contains("open")) {
    SideBarClose();
  }
});
