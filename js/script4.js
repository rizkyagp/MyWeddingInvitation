document.addEventListener("DOMContentLoaded", function () {
  const commentsList = document.getElementById("comments-list");
  const commentForm = document.getElementById("comment-form");
  const apiUrl =
    "https://script.google.com/macros/s/AKfycbzaIUW36LJfqaT5-P_qRkLqg56FPRcRP_7nlrzCZC3dQL8QXpT9SCY8xdBT0zdSj8lP/exec";
  const images = [
    "assets/img/comment1.png", // Replace with your image URLs
    "assets/img/comment2.png",
    "assets/img/comment3.png",
    "assets/img/comment4.png",
  ];
  // Fetch data from the API
  fetch(
    // "https://script.google.com/macros/s/AKfycbxXNx51K9HfQT1F6iS2V54YQ9hhgcVQilPrC2jv2aqzZHGZenHilWo4C6W6LPW7euwg/exec"
    // "https://script.google.com/macros/s/AKfycbxXNx51K9HfQT1F6iS2V54YQ9hhgcVQilPrC2jv2aqzZHGZ"
    // "https://script.google.com/macros/s/AKfycbxL4GY311oHqwxIb8ejDr_MOOB0WOlFrxpYtyRamGLoZ9XoPK33CGtBbFz8PxBB8T82/exec"
    apiUrl
  )
    .then((response) => response.json())
    .then((data) => {
      // Access only the data from "Sheet1"
      const comments = data.Sheet1;

      // Loop through the comments and create HTML elements
      comments.forEach((comment) => {
        addCommentToDOM(comment);
      });
    })
    .catch((error) => {
      console.error("Error fetching comments:", error);
      commentsList.innerHTML = "<p>Failed to load comments.</p>";
    });

  commentForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const randomNumber = Math.floor(Math.random() * 4) + 1;
    const name = document.getElementById("name").value;
    const commentText = document.getElementById("comment").value;
    // avanum
    // Send data to the Google Apps Script
    fetch(
      //   "https://script.google.com/macros/s/AKfycby7SvT6NxISzEqqQd2sYm63Bo7us8KtxqOm8Y7UsnireV_KQGn3D4kXCkhGYmI_sY4/",
      //   "https://script.google.com/macros/s/AKfycby7SvT6NxISzEqqQd2sYm63Bo7us8KtxqOm8Y7UsnireV_KQGn3D4kXCkhGYmI_sY4/",
      //   "https://script.google.com/macros/s/AKfycbw04TYxszyf5t2tXdv2FXzr-MxEhvolvhFkHlrkN0MRgrDjWwa5AgRI_6suDXw5eIfA/",
      //   "https://script.google.com/macros/s/AKfycbxL4GY311oHqwxIb8ejDr_MOOB0WOlFrxpYtyRamGLoZ9XoPK33CGtBbFz8PxBB8T82/exec",
      apiUrl,
      {
        method: "POST",
        body: JSON.stringify({
          avanum: randomNumber,
          name: name,
          comment: commentText,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Add the new comment to the DOM
        addCommentToDOM({
          avanum: randomNumber,
          name: name,
          Comment: commentText,
        });
        // Clear the form fields
        commentForm.reset();
      })
      .catch((error) => {
        console.error("Error submitting comment:", error);
      });
  });

  function addCommentToDOM(comment) {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    // Assuming your Sheet1 has "Name" and "Email" columns
    commentDiv.innerHTML = `
                    <img src="${
                      images[comment.Avatar - 1]
                    }" alt="User Image" class="comment-image">
                    <div class="comment-content">
                        <h4>${comment.Nama}</h4>                        
                        <p>${comment.Comment}</p>
                    </div>
                `;

    commentsList.appendChild(commentDiv);
    // Scroll to the bottom of the comments list
    commentsList.scrollTop = commentsList.scrollHeight;
  }
});
