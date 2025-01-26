// Step 1: Get the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const toValue = urlParams.get("to"); // Get the value of 'to'

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
// Step 2: Display the parameter on the page
if (toValue) {
  document.getElementById(
    "invitation-message"
  ).textContent = `Kepada Yth. ${toValue}, kami mengundangmu di hari spesial kami.`;
} else {
  document.getElementById("invitation-message").textContent =
    "Tidak ada nama yang ditemukan.";
}

document
  .getElementById("open-invitation")
  .addEventListener("click", function () {
    document.getElementById("overlay").style.display = "none"; // Hide the overlay

    var audio = document.getElementById("myAudio");
    audio.play();

    var playVideo = document.getElementById("myVideo");
    myVideo.play();
  });
