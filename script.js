
function login() {
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("generator-screen").style.display = "block";
}

function generateID() {
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const address = document.getElementById("address").value;
  const pesel = document.getElementById("pesel").value;
  const photo = document.getElementById("photo").files[0];

  document.getElementById("output").innerText = `Imię: ${fname}\nNazwisko: ${lname}\nAdres: ${address}\nPESEL: ${pesel}`;

  if (photo) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("user-photo").src = e.target.result;
    };
    reader.readAsDataURL(photo);
  }

  document.getElementById("generator-screen").style.display = "none";
  document.getElementById("id-screen").style.display = "block";

  setInterval(() => {
    document.getElementById("time").innerText = new Date().toLocaleTimeString();
  }, 1000);
}
