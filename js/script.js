// Step 1: Get the URL parameter
const urlParams = new URLSearchParams(window.location.search);
const toValue = urlParams.get('to'); // Get the value of 'to'

// Step 2: Display the parameter on the page
if (toValue) {
    document.getElementById('invitation-message').textContent = `Kepada Yth. ${toValue}, kami mengundangmu di hari spesial kami.`;
} else {
    document.getElementById('invitation-message').textContent = 'Tidak ada nama yang ditemukan.';
}

document.getElementById('open-invitation').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none'; // Hide the overlay
});