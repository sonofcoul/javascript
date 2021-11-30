"use strict";

let FORM;
let notebook = new Array();

function displayForm() {
  FORM.removeClass("hide");
}

function rmvForm() {
  FORM.addClass("hide");
}

function saveContact() {
  let contact = {
    title: $("#title").val(),
    lastname: $("#lastName").val().trim(),
    firstname: $("#firstName").val().trim(),
    phone: $("#phone").val().trim(),
  };
  notebook.push(contact);
  console.log(notebook);
}

let notebookJSON = JSON.stringify(notebook);
localStorage.setItem("notebook", notebookJSON);

let test = localStorage.getItem("notebook");
console.log(test);

$(document).ready(function () {
  FORM = $("#contact-form");

  $("#add-contact").on("click", displayForm);

  $("#save-contact").on("click", saveContact);
});
