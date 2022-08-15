// Example 1
// localStorage;
// console.log(localStorage);

// Example 2
// Local Storage takes two arguments: the key and the value
// localStorage.setItem("name", "Zion");

// console.log(localStorage);

// Example 3
// To Remove from local storages, we need to use removeItem()
// localStorage.removeItem("name");

// Example 4

// localStorage.setItem("name", "Zion");
// localStorage.setItem("age", "35");
// console.log(localStorage);

// localStorage.setItem("name", "Zion");
// localStorage.setItem("age", "35");
// To access the first you use the key and the index number
// console.log(localStorage.key(1));

// Example 5
const inputKey = document.getElementById("inputKey");
const inputValue = document.getElementById("inputValue");
const btnInsert = document.getElementById("btnInsert");
const isOutput = document.querySelector(".isOutput");

btnInsert.addEventListener("click", () => {
  const key = inputKey.value;
  const value = inputValue.value;

  if (key && value) {
    localStorage.setItem(key, value);
    location.reload();
  }
});

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);

  isOutput.innerHTML += `${key}: ${value} <br />`;
}
