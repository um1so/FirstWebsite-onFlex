let header = document.querySelector(".lastname");


fetch("https://reqres.in/api/user/6")
  .then((response) => response.json())
  .then((data) => header.innerHTML = data.data.name.split(' ')[1]);