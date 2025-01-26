const rsvpApiUrl =
  "https://script.google.com/macros/s/AKfycbxYq2UJeKnadXh_6jep9cFFIl3avGUmUSNvB_9wnMzV6NJwd1joSIr0mwcJ568GOHFo/exec";
//   "https://script.googleusercontent.com/macros/echo?user_content_key=MKYFhLIF5KT78YpCw0LA5gwfumi2M6SVMc00lIRB1N_2CBvK1VnIu-hcvOPDY-3cfHJM25BmcIWASeMF_ITK21VV1v7ZTuhbm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnF4HfrmSi3FEjwrgOUcTDa6q23HYWhq297SP4_32K3psfb_SrVXydYBngE9tg7a20j5V5mUXzdYGfrNCpJ-aw2c_arBQRb7kag&lib=My6S9dlUbpaTOeEZgp3_alssAxIjQUtdv"; // Replace with your deployed web app URL

document
  .getElementById("rsvp-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value;
    const numberOfGuests = document.getElementById("numberOfGuests").value;
    const confirmation = document.getElementById("confirmation").value;

    const data = {
      name: name,
      numberOfGuests: numberOfGuests,
      confirmation: confirmation,
    };
    const response = await fetch(rsvpApiUrl, {
      method: "POST",
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.status === "success") {
      alert("RSVP submitted successfully!");
      document.getElementById("rsvp-form").reset(); // Clear the form
    } else {
      alert("Failed to submit RSVP.");
    }
  });
