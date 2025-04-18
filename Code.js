const API_KEY = 'maCle';

function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate().addMetaTag('viewport', 'width=device-width, initial-scale=1');  
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function loadPartialPage(page){
  const url = 'https://script.google.com/macros/s/AKfycbwv8D-yMyenffuciFf9Od59Y6AeBwyTPJGem0OkglNygeW6U6MeX6qVAJnUDnQIksLs/exec?key=myKey';
  let audits = JSON.parse(UrlFetchApp.fetch(url)).data;
  console.log(audits);
  const template = HtmlService.createTemplateFromFile(page)
  template.audits = audits;
  return template.evaluate().getContent();
}