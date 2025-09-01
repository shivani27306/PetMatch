// Login/Signup demo (works on all pages)
document.querySelectorAll(".login-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Login / Signup feature coming soon!");
  });
});
// Match Finder Logic (only runs if match form exists on page)
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("matchForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const activity = this.activity.value;
      const space = this.space.value;
      const maintenance = this.maintenance.value;

      let pet = "";
      let image = "";

      // Match logic
      if (activity === "high" && space === "large") {
        pet = "Dog (German Shepherd or Labrador)";
        image = "images/dog2.jpg";
      } else if (activity === "medium" && space !== "small") {
        pet = "Dog (Pug)";
        image = "images/dog3.jpg";
      } else if (space === "small" && maintenance === "yes") {
        pet = "Cat (Persian or Siamese)";
        image = "images/cat1.jpg";
      } else if (activity === "low" && maintenance === "yes") {
        pet = "Rabbit (Holland Lop or Netherland Dwarf)";
        image = "images/rabbit1.jpg";
      } else {
        pet = "Bird (Parrot or Budgerigar)";
        image = "images/bird1.jpg";
      }

      document.getElementById("result").innerHTML = `
        <h3>Your Perfect Match is:</h3>
        <p><strong>${pet}</strong></p>
        <img src="${image}" alt="${pet}" class="match-img">
      `;
    });
  }
});

// Contact Form Handling (only runs if contact form exists)
const contactForm = document.querySelector("form");
if (contactForm && contactForm.closest("section.form-section")) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    // Get form values
    const name = contactForm.querySelector("input[type='text']").value;
    const email = contactForm.querySelector("input[type='email']").value;
    // Show confirmation message
    alert(`Thank you, ${name}! Your message has been sent. We'll reply to ${email} soon.`);
    // Reset the form
    contactForm.reset();
  });
}
// Login Form (if on login.html)
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    alert(`Welcome back, ${email}! (Demo login successful)`);
    loginForm.reset();
  });
  // Fake signup link
  const signupLink = document.getElementById("signupLink");
  signupLink.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Signup feature coming soon!");
  });
}
// Resources Page Modal
function openResource(type) {
  const modal = document.getElementById("resourceModal");
  const title = document.getElementById("modalTitle");
  const content = document.getElementById("modalContent");

  if (type === "feeding") {
    title.innerText = "Feeding Guide";
    content.innerText = "Your pet needs a balanced diet. Dogs need protein, carbs, and healthy fats, while cats require more protein and taurine. Avoid chocolate, onions, and grapes as they are toxic!";
  }
  else if (type === "training") {
    title.innerText = "Training Tips";
    content.innerText = "Start with basic commands like sit, stay, and come. Use positive reinforcement—reward your pet with treats and praise. Consistency and patience are key!";
  }
  else if (type === "health") {
    title.innerText = "Health & Safety";
    content.innerText = "Keep up with vaccinations, regular vet visits, and grooming. Ensure clean drinking water, flea/tick prevention, and safe surroundings.";
  }
  modal.style.display = "flex";
}
function closeModal() {
  document.getElementById("resourceModal").style.display = "none";
}

// Close modal if clicked outside
window.onclick = function(e) {
  const modal = document.getElementById("resourceModal");
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
// ---------------------- PET LISTINGS ----------------------
const pets = [
  { name: "Buddy", type: "dog", breed: "Golden Retriever", age: "2 years", img: "images/dog1.jpg" },
  { name: "Mittens", type: "cat", breed: "Persian Cat", age: "1 year", img: "images/cat1.jpg" },
  { name: "Charlie", type: "dog", breed: "Beagle", age: "3 years", img: "images/dog2.jpg" },
  { name: "Luna", type: "cat", breed: "Siamese", age: "6 months", img: "images/cat2.jpg" },
  { name: "Coco", type: "other", breed: "Parrot", age: "1.5 years", img: "images/parrot.jpg" },
];
function loadPets(filter = "all", search = "") {
  const container = document.getElementById("petsContainer");
  if (!container) return;

  container.innerHTML = "";
  const filteredPets = pets.filter(pet => {
    const matchesType = filter === "all" || pet.type === filter;
    const matchesSearch = pet.name.toLowerCase().includes(search) || pet.breed.toLowerCase().includes(search);
    return matchesType && matchesSearch;
  });
  if (filteredPets.length === 0) {
    container.innerHTML = "<p>No pets found matching your criteria.</p>";
    return;
  }
  filteredPets.forEach(pet => {
    const petCard = document.createElement("div");
    petCard.classList.add("pet-card");

    petCard.innerHTML = `
      <img src="${pet.img}" alt="${pet.name}">
      <h3>${pet.name}</h3>
      <p>Breed: ${pet.breed}</p>
      <p>Age: ${pet.age}</p>
      <button onclick="alert('You showed interest in ${pet.name}! We will contact you soon.')">Adopt Me</button>
    `;

    container.appendChild(petCard);
  });
}
// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  loadPets();

  const searchInput = document.getElementById("searchInput");
  const filterType = document.getElementById("filterType");

  if (searchInput && filterType) {
    searchInput.addEventListener("input", () => {
      loadPets(filterType.value, searchInput.value.toLowerCase());
    });

    filterType.addEventListener("change", () => {
      loadPets(filterType.value, searchInput.value.toLowerCase());
    });
  }
});
// ---------------------- MATCH FINDER ----------------------
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("matchForm");
  const resultBox = document.getElementById("matchResult");

  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const size = form.size.value;
      const activity = form.activity.value;
      const time = form.time.value;
      const home = form.home.value;

      let match = "";

      // Simple logic for matching
      if (size === "small" && home === "apartment" && time === "low") {
        match = "🐱 A Cat! Independent and perfect for smaller spaces.";
      } else if (size === "medium" && activity === "medium") {
        match = "🐶 A Beagle! Friendly, playful, and loves walks.";
      } else if (size === "large" && activity === "high" && time === "high") {
        match = "🐕 A Golden Retriever or Labrador! Loyal and full of energy.";
      } else if (time === "low") {
        match = "🐦 A Bird! Low maintenance and cheerful.";
      } else {
        match = "🐾 A mixed-breed pet could be your best companion!";
      }
      resultBox.innerHTML = `<p>Your perfect match is: <br> <strong>${match}</strong></p>`;
    });
  }
});
