document.addEventListener("DOMContentLoaded", function() {
    const areas = document.querySelectorAll('area');
    const infoBox = document.getElementById('info-box-boat');
  
    areas.forEach(area => {
      area.addEventListener('click', function() {
        //adds the information to the box
        const info = this.dataset.info;
        infoBox.textContent = info;
        infoBox.style.display = 'block';
      });
    });
  
    document.getElementById('image-boat').addEventListener('click', function(event) {
      //resets the info box
      if (event.target.tagName !== 'AREA') {
        infoBox.textContent = "Select a white box above.";
        infoBox.style.display = 'block';
      }
    });
  });