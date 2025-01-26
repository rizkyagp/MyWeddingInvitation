import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zkmuusuvktpgcgfeevsy.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchComments() {
  const { data, error } = await supabase
    .from("comments")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching comments:", error);
  } else {
    const commentsList = document.getElementById("comments-list");
    commentsList.innerHTML = ""; // Clear existing comments
    data.forEach((comment) => {
      const commentDiv = document.createElement("div");
      commentDiv.innerHTML = `<strong>${comment.name}</strong>: ${comment.comment}`;
      commentsList.appendChild(commentDiv);
    });
  }
}

// Function to add a comment
document
  .getElementById("comment-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value;
    const commentText = document.getElementById("comment").value;

    const { data, error } = await supabase
      .from("comments")
      .insert([{ name: name, comment: commentText }]);

    if (error) {
      console.error("Error adding comment:", error);
    } else {
      // Clear the form
      document.getElementById("comment-form").reset();
      // Fetch comments again to update the list
      fetchComments();
    }
  });

// Fetch comments on page load
fetchComments();
