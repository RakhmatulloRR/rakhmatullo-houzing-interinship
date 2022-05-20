const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  // element yaratish
  const form = document.createElement("form");
  form.innerHTML = `
  <input type="text" placeholder="firstname...">
  <input type="text" placeholder="lastname...">
  <button>submit</button>
`;
  console.log(form);
  // root ni tanlash
  const root = document.querySelector("#root");

  root.appendChild(form);
});
