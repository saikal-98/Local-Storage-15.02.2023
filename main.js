let name = document.querySelector(".name");
let post = document.querySelector(".post");
let image = document.querySelector(".image");
let number = document.querySelector(".number");
let btn = document.querySelector(".btn");
let list = document.querySelector(".list");
let btn2 = document.querySelector(".btn-visual");
btn.addEventListener("click", () => {
  if (
    !name.value.trim() ||
    !post.value.trim() ||
    !image.value.trim() ||
    !number.value.trim()
  ) {
    alert("Заполните поля!");
    return;
  }
  let obj = {
    name: name.value,
    post: post.value,
    image: image.value,
    number: number.value,
  };
  createElement(obj);
  displayElement();
});
function createElement(contact) {
  if (!localStorage.getItem("info")) {
    localStorage.setItem("info", "[]");
  }
  let data = JSON.parse(localStorage.getItem("info"));
  data.push(contact);

  localStorage.setItem("info", JSON.stringify(data));
  console.log(data);
}
function displayElement() {
  if (!localStorage.getItem("info")) {
    localStorage.setItem("info", "[]");
  }
  let newData = JSON.parse(localStorage.getItem("info"));
  list.innerHTML = "";
  newData.forEach((element, index) => {
    list.innerHTML += `<div class='block2'><h3>${element.name}</h3> <p>${element.post}</p> <p>${element.number}</p> <img style = "width: 100px; border-radius: 25%;" src = '${element.image}'></img><button class='btn-edit' id=${index}>Edit</button> <button class='btn-delete' id=${index}>Delete</button></div> `;
    const btnEdit = document.querySelectorAll(".btn-edit");

    const btnDelete = document.querySelectorAll(".btn-delete");
    btnDelete.forEach((item) => {
      item.addEventListener("click", (e) => {
        const index = e.target.id;
        deleteElement(index);
      });
    });
    btnEdit.forEach((item) => {
      item.addEventListener("click", (e) => {
        const index = e.target.id;
        editElement(index);
      });
    });
  });
}
displayElement();

function deleteElement(index) {
  let data = JSON.parse(localStorage.getItem("info"));
  data.splice(index, 1);
  localStorage.setItem("info", JSON.stringify(data));
  displayElement();
}

let mainModal = document.querySelector(".main-modal");
let inpEditName = document.querySelector(".inp-edit-name");
let inpEditPost = document.querySelector(".inp-edit-post");
let inpEditUrl = document.querySelector(".inp-edit-url");
let inpEditNumber = document.querySelector(".inp-edit-number");
let btnCloser = document.querySelector(".btn-closer");
let btnSave = document.querySelector(".btn-save");

function editElement(index) {
  console.log("zxc");

  mainModal.style.display = "block";
  let data = JSON.parse(localStorage.getItem("info"));
  data.forEach((item) => {
    console.log(item);
    inpEditName.value = item.name;
    inpEditPost.value = item.post;
    inpEditUrl.value = item.image;
    inpEditNumber.value = item.number;
    inpEditName.setAttribute("id", index);
  });
  // inpEditName.value = data[index].contact;
  // inpEditName.setAttribute("id", index);
}
btnCloser.addEventListener("click", () => {
  mainModal.style.display = "none";
});

btnSave.addEventListener("click", () => {
  let data = JSON.parse(localStorage.getItem("info"));
  let index = inpEditName.id;
  if (
    !inpEditName.value.trim() ||
    !inpEditPost.value.trim() ||
    !inpEditUrl.value.trim() ||
    !inpEditNumber.value.trim()
  ) {
    alert("заполните поле");
    return;
  }
  let editedInformation = {
    name: inpEditName.value,
    post: inpEditPost.value,
    image: inpEditUrl.value,
    number: inpEditNumber.value,
  };
  data.splice(index, 1, editedInformation);
  localStorage.setItem("info", JSON.stringify(data));
  mainModal.style.display = "none ";
  displayElement();
});
let flag = true;

let block = document.querySelector(".block");
btn2.addEventListener("click", () => {
  flag = !flag;
  if (flag) {
    block.style.display = "block";
  } else {
    block.style.display = "none";
  }
});
