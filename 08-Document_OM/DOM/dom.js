const contentEdit = document.querySelectorAll("p");

contentEdit.forEach((item) => {
  if (item.textContent.includes("error")) {
    item.classList.add("error");
  }
  if (item.innerText.includes("success")) {
    item.classList.add("success");
  }
});
