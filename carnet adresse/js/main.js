"use strict";

/************ VARIABLES ************/
let FORM;

/************ FONCTIONS ************/
function loadDatas() {
  let datas = JSON.parse(localStorage.getItem("notebook"));
  if (datas === null) datas = [];
  return datas;
}

function saveData() {}

function showForm() {
  FORM.removeClass("hide").data("data-mode", "add");
}

function hideForm() {
  FORM.addClass("hide");
}

function saveContact() {
  let notebook = loadDatas();
  let contact = {
    title: $("#title").val(),
    lastname: $("#lastName").val().trim(),
    firstname: $("#firstName").val().trim(),
    phone: $("#phone").val().trim(),
  };

  if (FORM.data("data-mode") === "add") {
    notebook.push(contact);
  } else {
    let index = $("#contact-details a").data("index");
    notebook[index] = contact;
  }

  let notebookJSON = JSON.stringify(notebook);
  localStorage.setItem("notebook", notebookJSON);

  displayNotebook();
  FORM[0].reset();
  FORM.addClass("hide");
}

function displayNotebook() {
  let notebook = loadDatas();

  $("#address-book").html("<ul></ul>");
  notebook.forEach((line, index) => {
    $("#address-book ul").append(
      `<li><a data-index="${index}">${line.firstname} ${line.lastname}</a><i class="fa fa-trash-o" data-index="${index}"></i></li>`
    );
  });
}

function displayContact() {
  let notebook = loadDatas();
  let index = this.dataset.index;
  let contact = notebook[index];

  $("#contact-details").toggleClass("hide");

  $("#contact-details h3").text(
    `${displayTitle(contact.title)} ${contact.firstname} ${contact.lastname}`
  );
  $("#contact-details p").text(contact.phone);

  $("#contact-details a").attr("data-index", index);
}

function displayTitle(title) {
  let textTitle = "";
  switch (title) {
    case "1":
      textTitle = "Mme.";
      break;
    case "2":
      textTitle = "Mlle.";
      break;
    case "3":
      textTitle = "Mr.";
      break;
  }
  return textTitle;
}

function editContact() {
  let notebook = loadDatas();
  let index = $("#contact-details a").data("index");
  let contact = notebook[index];
  console.log(contact);

  FORM.removeClass("hide").data("data-mode", "edit");
  // $("#contact-form").attr("data-mode", "edit");

  $("#title").val(contact.title);
  $("#lastName").val(contact.lastname);
  $("#firstName").val(contact.firstname);
  $("#phone").val(contact.phone);
}

function deleteAll() {
  localStorage.clear();
  displayNotebook();
}

function deleteOne() {
  let notebook = loadDatas();
  let index = this.dataset.index;
  notebook.splice(index, 1);
  saveDatas(list);
  displayNotebook();
}

/************ CODE PRINCIPAL ************/
$(document).ready(function () {
  displayNotebook();
  FORM = $("#contact-form");

  $("#add-contact").on("click", showForm);

  $("#save-contact").on("click", saveContact);

  $("#address-book").on("click", "li a", displayContact);

  $("#contact-details a").on("click", editContact);

  $("#clear-address-book").on("click", deleteAll);

  $("#address-book").on("click", "li i", deleteOne);
});
