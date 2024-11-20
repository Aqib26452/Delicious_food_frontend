const searchicon = document.querySelector("#searchicon");
const backicon = document.querySelector("#backicon");
const searchiconn = document.querySelector("#searchicon1");
const searchinput = document.querySelector("#searchinput");
const searchinput1 = document.querySelector("#searchinput1");
const crossicon1 = document.querySelector("#crossicon1");
const listt = document.querySelector(".bi-list");
const crossicon = document.querySelector(".bi-x");
const iconnn = document.querySelector("#iconn");
const homeee = document.querySelector("#homee");

searchicon.addEventListener("click", function () {
  searchinput.style.display = "block";
  searchicon.style.display = "none";
  backicon.style.display = "block";
  //   searchiconn.style.display = "none";
});
backicon.addEventListener("click", function () {
  searchinput.style.display = "none";
  searchicon.style.display = "block";
  backicon.style.display = "none";
  //   searchiconn.style.display = "none";
});
searchiconn.addEventListener("click", function () {
  searchinput1.style.display = "block";
  // searchicon1.style.display = "none";
});
listt.addEventListener("click", function () {
  crossicon.style.display = "block";
  iconnn.style.display = "block";

  homeee.style.display = "block";

  listt.style.display = "none";
});
crossicon.addEventListener("click", function () {
  crossicon.style.display = "none";
  iconnn.style.display = "none";
  homeee.style.display = "none";
  listt.style.display = "block";
});
