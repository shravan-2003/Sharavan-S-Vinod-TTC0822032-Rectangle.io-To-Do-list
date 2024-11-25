
document.querySelectorAll('.toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('enabled'); 
    });
  });

  document.querySelectorAll('.menu ul li').forEach(menuItem => {
    menuItem.addEventListener('click', () => {
      alert(`You clicked on: ${menuItem.textContent.trim()}`); 
    });
  });
  