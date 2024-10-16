let EnableEl = document.getElementById("Enable");
let AlreadyDoneEl = document.getElementById("AlreadyDone");
let buttonEl = document.getElementById("buttonEl");
let userPermissionEl = document.getElementById("userPermission");
let camPermissionEl = document.getElementById("camPermission");
let emotionDetectionContainerEl = document.getElementById(
  "emotionDetectionContainer"
);
emotionDetectionContainerEl.style.display = "None";
userPermissionEl.style.display = "None";
let Backbtn = document.getElementById("backbtn");
buttonEl.onclick = function () {
  if (EnableEl.checked === false) {
    alert("Enable cam");
    return;
  } else {
    camPermissionEl.style.display = "None";
    userPermissionEl.style.display = "flex";
    console.log("DONE");
  }
};

let StartBtn = document.getElementById("StartBtn");

StartBtn.onclick = function () {
  userPermissionEl.style.display = "None";
  emotionDetectionContainerEl.style.display = "flex";
};

Backbtn.onclick = function () {
  userPermissionEl.style.display = "flex";
  emotionDetectionContainerEl.style.display = "None";
};
