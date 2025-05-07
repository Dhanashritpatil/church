// Alert on button click (Activate/Deactivate)
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
      alert(`${button.textContent.trim()} button clicked`);
    });
  });
  
  // Dropdown toggle (if user icon is meant to expand a menu)
  // document.querySelector('.dropdown-icon')?.addEventListener('click', () => {
  //   alert("Dropdown clicked");
  // });
  
  // // Log search input (dashboard top search)
  // document.querySelector('.search-bar')?.addEventListener('input', (e) => {
  //   console.log("Search:", e.target.value);
  // });
  

  
  function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown-menu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }

  // Optional: Close dropdown on outside click
  document.addEventListener('click', function(event) {
    const userInfo = document.querySelector('.user-info');
    const dropdown = document.querySelector('.dropdown-menu');
    if (!userInfo.contains(event.target)) {
      dropdown.style.display = 'none';
    }
  });

