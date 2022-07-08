const contentEdit = document.querySelectorAll("p");

contentEdit.forEach((p) => {
  if (p.textContent.includes("error")) {
    p.classList.add("error");
  }
  if (p.innerText.includes("success")) {
    p.classList.add("success");
  }
});
