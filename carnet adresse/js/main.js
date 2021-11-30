"use strict";

let FORM;

function loadDatas() {
  let datas = JSON.parse(localStorage.getItem("notebook"));
  if (datas === null) datas = [];
  return datas;
}

function showForm() {
  FORM.removeClass("hide");
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

  notebook.push(contact);
  console.log(notebook);

  let notebookJSON = JSON.stringify(notebook);
  localStorage.setItem("notebook", notebookJSON);

  displayNotebook();
  FORM[0].reset();
  FORM.addClass("hide");
}

function displayNotebook() {
  let notebook = loadDatas();

  $("#address-book").html("<ul></ul>");
  notebook.forEach((line) => {
    $("#address-book ul").append(`<li>${line.lastname} ${line.firstname}</li>`);
  });
}

function displayContact() {
  let details = $("#contacts-details");
  details.removeClass("hide");
  console.log("test");
}

$(document).ready(function () {
  FORM = $("#contact-form");

  $("#add-contact").on("click", showForm);

  $("#save-contact").on("click", saveContact);

  displayNotebook();

  $("#contact-details").on("click", displayContact);
});
