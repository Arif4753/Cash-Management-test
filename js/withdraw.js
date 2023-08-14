document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawfleid = document.getElementById("user-withdraw");
  const withdrawamount = withdrawfleid.value;
  let withdrawDisplay = parseFloat(withdrawamount);
  const withdrawText = document.getElementById("withdraw-text");
  const preWithdrawTotal = withdrawText.innerText;
  let previosWithdrawTotal = parseFloat(preWithdrawTotal);
  const currentwithdraw = withdrawDisplay + previosWithdrawTotal;
  withdrawText.innerText = currentwithdraw;
  let preBalance = document.getElementById("balance-text");
  let preBalanceStr = preBalance.innerText;
  let preBalanceNum = parseFloat(preBalanceStr);
  let currentBalance = preBalanceNum - withdrawDisplay;
  preBalance.innerText = currentBalance;
  withdrawfleid.value = "";
});
