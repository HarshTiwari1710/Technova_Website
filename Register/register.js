const form = document.querySelector("form");
const formItem = document.querySelectorAll(".form-item");

let isAdded = false;
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //   NAME VALIDATIONS
  const name = formItem[0];
  const nameInputValue = name.querySelector("input").value;
  isEmpty(name, nameInputValue);

  //EMAIL VALIDATION
  const email = formItem[1];
  const emailInputValue = email.querySelector("input").value;
  isEmpty(email, emailInputValue);

  //   NUMERIC VALIDATION
  const systemId = formItem[2];
  const systemIdInputValue = systemId.querySelector("input").value;
  isEmpty(systemId, systemIdInputValue);

  //PHONE VALIDATION
  const phoneNo = formItem[3];
  const phoneInputValue = phoneNo.querySelector("input").value;
  const empty = isEmpty(phoneNo, phoneInputValue);
  console.log(empty);
  if ((!empty && phoneInputValue.length !== 10) || isNaN(phoneInputValue))
    phoneNo.classList.add("limit");
  else phoneNo.classList.contains("limit") && phoneNo.classList.remove("limit");
});

function isEmpty(formItem, formInput) {
  if (formInput === "") {
    formItem.classList.add("error");
    return true;
  } else if (formItem.classList.contains("error")) {
    formItem.classList.remove("error");
    return false;
  }
}
