document.addEventListener("DOMContentLoaded", function() {
    const areas = document.querySelectorAll('area');
    const infoBox = document.getElementById('info-box-boat');
  
    areas.forEach(area => {
      area.addEventListener('click', function() {
        const info = this.dataset.info;
        infoBox.textContent = info;
        infoBox.style.display = 'block';
      });
    });
  
    document.getElementById('image-boat').addEventListener('click', function(event) {
      // Hide info box if clicked outside of area
      if (event.target.tagName !== 'AREA') {
        infoBox.textContent = "Select a white box above.";
        infoBox.style.display = 'block';
      }
    });
  });