"use strict";

function displayHTML(htmlDatas) {
  $("#target").html(htmlDatas);
}
function displayhtmlMovies(movies) {
  $("#target").html(movies);
}

function displayContacts(contacts) {
  let html = "<ul>";
  contacts.forEach((contact) => {
    html += `
    <li> <strong>Prénom :</strong> ${contact.firstName}<br>
    <i>Téléphone :</i> ${contact.phone}</li>`;
  });
  html += "</ul>";
  displayHTML(html);

  /********* $("#target").html("<ul></ul>");
  contacts.forEach((contact) => {
    $("#target ul").append(`
    <li> <strong>Prénom :</strong> ${contact.firstName}<br>
    <i>Téléphone :</i> ${contact.phone}`);
  });*********/
}

function displayMovies(movies) {
  let html = "<ul class='movie-list'>";
  movies.forEach((movie) => {
    html += `
    <li> <img src="images/${movie.cover}">
    <p><strong>${movie.title}</strong>
    <em>${movie.duration}</em>
    </p>
    </li>`;
  });
  html += "</ul>";
  displayHTML(html);
}

function onClickExecute() {
  let choice = $("input[name='what']:checked").val();

  switch (choice) {
    case "1":
      $.get("data/1-get-html-article.html", displayHTML);
      break;
    case "2":
      $.getJSON("data/2-get-contacts-list.json", displayContacts);
      break;
    case "3":
      $.get("data/3-get-html-movies.html", displayhtmlMovies);
      break;
    case "4":
      $.get("data/4-get-json-movies.json", displayMovies);
      break;
  }
}

$(document).ready(function () {
  $("#run").on("click", onClickExecute);
});
