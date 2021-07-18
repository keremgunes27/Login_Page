var boolName = false;
var boolSurname = false;
var boolEmail = false;
var boolPass = false;

$("#submit-btn").click(function () {
  if (document.getElementById("name").value != 0) {
    document.getElementById("nameLabel").style.display = "none";
    $("#name").removeClass("eror");
    boolName = true;
  } else {
    $("#name").addClass("eror");
    document.getElementById("nameLabel").style.display = "flex";
  }

  if (document.getElementById("surname").value != 0) {
    $("#surname").removeClass("eror");
    document.getElementById("sureNameLabel").style.display = "none";
    boolSurname = true;
  } else {
    $("#surname").addClass("eror");
    document.getElementById("sureNameLabel").style.display = "flex";
  }

  if (document.getElementById("email").value != 0) {
    $("#email").addClass("eror");
    document.getElementById("emailLabel").style.display = "flex";
    let validate = document.getElementById("email").value;
    if (validate.indexOf("@") != -1) {
      $("#email").removeClass("eror");
      document.getElementById("emailLabel").style.display = "none";
      boolEmail = true;
    }
  } else {
    $("#email").addClass("eror");
    document.getElementById("emailLabel").style.display = "flex";
  }

  if (document.getElementById("pass").value != 0) {
    $("#pass").removeClass("eror");
    document.getElementById("passLabel").style.display = "none";
    boolPass = true;
  } else {
    $("#pass").addClass("eror");
    document.getElementById("passLabel").style.display = "flex";
  }

  if (boolName & boolSurname & boolEmail & boolPass) {
    document.getElementById("form").submit();
  }
});
