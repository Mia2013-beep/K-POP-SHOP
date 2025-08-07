let phone = document.getElementById("phone");
    let pin = document.getElementById("pin");
    let album = document.getElementById("albums");
    let phoneHelper = document.getElementById("phone-helper");
    let pinHelper = document.getElementById("pin-helper");
    let albumHelper = document.getElementById("album-helper");

    let LogInBtn = document.getElementById("LogInBtn");

    LogInBtn.addEventListener("click", function () {
        if (phone.value == "") {
    phoneHelper.style.display = "block";
  }else{
    pinHelper.style.display = "none";
  }

  if (pin.value == "") {
    pinHelper.style.display = "block";
  }else{
    pinHelper.style.display = "none";
  }
  if (albums.value == "") {
    albumHelper.style.display = "block";
  }else{
    albumHelper.style.display = "none";
  }

  if (phone.value != "" && pin.value !="" && albums.value !="") {
    let userEmail = localStorage.getItem("email");
    let userPassword = localStorage.getItem("password");
    window.open("finish.html", "_self");
  }
}
);
