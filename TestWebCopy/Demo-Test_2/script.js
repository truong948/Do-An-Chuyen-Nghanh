document.getElementById('upload').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('user-image').src = e.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  });
  