document.getElementById("btn-diposite").addEventListener("click", function () {
  const depositeFeild = document.getElementById("user-deposite");
  let newdeposite = depositeFeild.value;
  let newdepositeamount = parseFloat(newdeposite);

  const depoText = document.getElementById("deposite-text");
  //   let depositeText = parseInt(depoText);
  const previousdepototal = depoText.innerText;
  let predepositeamount = parseFloat(previousdepototal);

  const currentdepo = predepositeamount + newdepositeamount;
  depoText.innerText = currentdepo;
  //   Done

  const balance = document.getElementById("balance-text");
  let prebalace = balance.innerText;
  let previousbalace = parseFloat(prebalace);
  let totalBalance = previousbalace + newdepositeamount;
  balance.innerText = totalBalance;
  console.log(totalBalance);

  depositeFeild.value = "";
});


