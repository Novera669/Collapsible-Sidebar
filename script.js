function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

// Highlight selected link
function selectLink(element) {
  const links = document.querySelectorAll(".nav-links li");
  links.forEach(link => link.classList.remove("active"));
  element.classList.add("active");

  // Optional: Change content heading when clicked
  const content = document.getElementById("content");
  content.innerHTML = `<h1>${element.textContent}</h1>
                       <p>You clicked on the ${element.textContent} link.</p>`;
}
