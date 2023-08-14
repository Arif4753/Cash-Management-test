document.getElementById("btn-sub").addEventListener("click", function () {
  const emailFeild = document.getElementById("user-email");
  const email = emailFeild.value;
  const passFeild = document.getElementById("user-pass");
  const pass = passFeild.value;
  console.log(email);
  if (email === "a@a.a" && pass === "a") {
    location.href = "bank.html";
  } else {
    alert("invalid User");
  }
});

