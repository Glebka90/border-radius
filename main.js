function fun1() {
  let brInUpLeft = document.querySelector(".br__input-range_up-left").value;
  let brTxtUpLeft = document.querySelector(".br__input-text_up-left");

  let brInUpRigth = document.querySelector(".br__input-range_up-rigth").value;
  let brTxtUpRigth = document.querySelector(".br__input-text_up-rigth");

  let brInDoRigth = document.querySelector(".br__input-range_down-rigth").value;
  let brTxtDoRigth = document.querySelector(".br__input-text_down-rigth");

  let brInDoLeft = document.querySelector(".br__input-range_down-left").value;
  let brTxtDoLeft = document.querySelector(".br__input-text_down-left");

  let brBlock = document.querySelector(".content-br__block");

  brTxtUpLeft.value = brInUpLeft;
  brTxtUpRigth.value = brInUpRigth;
  brTxtDoRigth.value = brInDoRigth;
  brTxtDoLeft.value = brInDoLeft;

  brBlock.style.borderRadius =
    brInUpLeft +
    "px " +
    brInUpRigth +
    "px " +
    brInDoRigth +
    "px " +
    brInDoLeft +
    "px ";
}
console.log(fun1);
