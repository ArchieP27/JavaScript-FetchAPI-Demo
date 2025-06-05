const userContainer = document.getElementById("user");
const errorMessage = document.getElementById("error-message");
const reloadBtn = document.getElementById("reload");

async function fetchUsers() {
  userContainer.innerHTML = "";
  errorMessage.textContent = "";
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const users = await response.json();
    users.forEach((user) => {
      const card = document.createElement("div");
      card.className = "user-card";
      card.innerHTML = `
            <h2>${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
          `;
      userContainer.appendChild(card);
    });
  } catch (error) {
    errorMessage.textContent =
      "Poor Internet Connectivity... Failed to load user data!";
    console.error("Fetch error:", error);
  }
}

reloadBtn.addEventListener("click", fetchUsers);

fetchUsers();
