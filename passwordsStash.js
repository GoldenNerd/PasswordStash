"use strict";

window.onload = function () {
  document.getElementById("search-bar").focus();
};

// #########################
//window.localStorage.clear();
// #########################

/* 
// The credentials array is the single object that contains all the App data.
// The credentials array contains credential objects.
// Each credential object is the unique set of atributes associated to a distinct website.
// Also, a credential object contains a secretQAs array. 
// This secretQAs array contains objects. Each object is a separate pair of a question and its corresponding answer. 
// A website may require an undetermined amount of Q/A sets, or none at all.
// Threfore the secretQAs array could contain several objects. 
// If no Q/A sets are required, the secretQAs array will still be present. However, it will contain a single 
// placeholder object with secretQ and secretA null values.
// The following shows a credentials array containing information for a single website. For this example, this 
// particular website requires only one secret question.
let credentialsArray = [{
  name: "Places",
  website: "www.places.com",
  email: "jim@domain.com",
  username: "jim",
  password: "Me&I100%",
  pin: "7777",
  recoveryEmail: "jim.rec@domain2.com",
  secretImage: "fork",
  secretQAs: [{
    secretQ: "Best friend?",
    secretA: "you",
  }, ],
}, ]; 
*/

function appWorkflow() {
  // APP WORKFLOW DESCRIPTION:
  console.log(`/* 
  // APP WORKFLOW DESCRIPTION:
// ADDING A NEW CREDENTIAL:
//Press the add button to enter the ADD MODE
// "DETAIL OF MATCHED ITEM" Changes to "ENTER NEW INFORMATION"
// boxbox icon changes to pencil icon
// Touching either a pencil icon or an atribute field toggles the state of pencil icon to "active". At the same time, a popup window will provide input area to enter new datum.This window will have a tittle indicating the atribute being created. Also will have an "OK" button to save the data.
// ADDING QUESTIONS AND ANSWERS
// Touching either a pencil icon or a question/answer field toggles the state of pencil icon to "active". At the same time, a popup window will provide input area to enter new question, or answer.This window will have a tittle indicating the atribute being created. The question popup window will have a next to switch to the answer popup window. The answer popup window will have an "OK" button to save both; question and answer data.
// After first Q/A, a button will show to allow addition of a new Q/A pair. Info will be entered with same procedure as before.
// EDDITING AN EXISTING CREDENTIAL:
// Enter edit mode by touching edit button.
// Use the search button to find the website information to be edited.
// Touching either a pencil icon or an atribute field toggles the state of pencil icon to "active". At the same time, a popup window will provide input area to modify existing information. This window will have a tittle indicating the atribute being created. Also will have an "OK" button to save the data.
// Once done with all changes, escape the edit mode by touching the "EXIT EDIT" button.

// USING THE APP:
// Enter a search term and touch the search button
// Select among the "CLOSEST MATCHES" by touching either the website name or the eyes icon. This wil bring the credential information on the "DETAILS OF MATCHED ITEM" area.
// To copy any of the entries to the clip board, touch its boxbox icon.
// Paste the datum on any other App or website as needed.

// ADDING A NEW CREDENTIAL:*/ `);
}

// The WebsiteUsualProperties class
class WebsiteUsualProperties {
  constructor([
    name,
    website,
    email,
    username,
    password,
    pin,
    recoveryEmail,
    secretImage,
  ]) {
    // namesOfUsualKeys in this scope, defines a subset of designator names that are part of a credential.
    // There will be a unique credential for each website, as defined by the collective values of
    // these and the secret questions properties.

    const namesOfUsualKeys = [
      "name",
      "website",
      "email",
      "username",
      "password",
      "pin",
      "recoveryEmail",
      "secretImage",
    ];
    `[{
${namesOfUsualKeys[0]}: "${(this.name = name)}",
${namesOfUsualKeys[1]}: "${(this.website = website)}",
${namesOfUsualKeys[2]}: "${(this.email = email)}",
${namesOfUsualKeys[3]}: "${(this.username = username)}",
${namesOfUsualKeys[4]}: "${(this.password = password)}",
${namesOfUsualKeys[5]}: "${(this.pin = pin)}",
${namesOfUsualKeys[6]}: "${(this.recoveryEmail = recoveryEmail)}",
${namesOfUsualKeys[7]}: "${(this.secretImage = secretImage)}"
}]`;
  }
}
// Testing the WebsiteUsualProperties class:
// let valuesOfKeys = ["Places", "www.places.com", "jim@domain.com", "jim", "Me&I100%", "7777", "jimrec@domain2.com", "fork"];
// let newWebsiteUsualProperties1 = new WebsiteUsualProperties(valuesOfKeys);
// console.log(`newWebsiteUsualProperties1:`);
// console.log(newWebsiteUsualProperties1);

// The ASecretQA (secret question and its corresponding answer) class
class ASecretQA {
  constructor([secretQ, secretA]) {
    // namesOfSecretQAKeys in this scope, defines a subset of designator names that are part of a credential.
    // There will be a unique credential for each website, as defined by the collective values of
    // these and the other properties outlined in the WebsiteUsualProperties class constructor.
    const namesOfSecretQAKeys = ["secretQ", "secretA"];
    `[{
${namesOfSecretQAKeys[0]}: "${(this.secretQ = secretQ)}",
${namesOfSecretQAKeys[1]}: "${(this.secretA = secretA)}"
}]`;
  }
}
/* // Testing the ASecretQA (secret question and its corresponding answer) class
// let valuesOfQA = ["Favorite veggie?", "cucumber"];
// let secretQA1 = new ASecretQA(valuesOfQA);
// console.log(`secretQA1:`);
// console.log(SecretQA1);
*/

// ######################
// FETCHING CREDENTIALS FROM STORAGE
// ######################
let retrievedCredentials;

function retrieveFromLocalStorage() {
  retrievedCredentials = JSON.parse(window.localStorage.getItem("credentials"));
  console.log(`This is the retrieved array:`);
  console.log(retrievedCredentials);
}
// const fromStorageBtn = document.getElementById("get-credentials-from-localstorage");
// fromStorageBtn.addEventListener("click", retrieveFromLocalStorage);

//  ########
//  APP FUNCTIONALITY STARTS HERE!!
//  ########

// Create credential object of a new website (newCredential object) and then append new credential object
// to existing credentials object

let credentialsArray = [];

// secretQAsArray.length = 0; // Empty array contents
function makeNewCredentialAndSaveIt() {
  // Fetching of needed values for creation of a new credential
  // STEP 1 - a) User "SAVE CREDENTIALS" button results in the following "Usual" values:
  const name = document.querySelector("#name").value;
  const website = document.querySelector("#website").value;
  const email = document.querySelector("#email").value;
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const pin = document.querySelector("#pin").value;
  const recoveryEmail = document.querySelector("#recovery-email").value;
  const secretImage = document.querySelector("#secret-image").value;
  const newWebsiteUsualValues = [
    name,
    website,
    email,
    username,
    password,
    pin,
    recoveryEmail,
    secretImage,
  ];
  // console.log(`newWebsiteUsualValues:`);
  // console.log(newWebsiteUsualValues);
  addXtraQA();
  /*
  for (let index = 0; index < 1; index++) {
    const questioni = `#question${index}`;
    const answeri = `#answer${index}`;

    // STEP 1 - b) User "SAVE CREDENTIALS" button results in the following "Question-Answer" values:
    const secretQ = document.querySelector(questioni).value;
    const secretA = document.querySelector(answeri).value;
    const newWebsiteQAValues = [secretQ, secretA];
  }
  */
  // console.log(`newWebsiteQAValues:`);
  // console.log(newWebsiteQAValues);

  let { ...newWebsiteUsualProperties } = new WebsiteUsualProperties(
    newWebsiteUsualValues
  );
  // console.log(`newWebsiteUsualProperties:`);
  // console.log(newWebsiteUsualProperties);

  if (secretQAsArray2Ready) {
    newWebsiteUsualProperties["secretQAs"] = secretQAsArray2;
  } else {
    // STEP 1 - b) User "SAVE CREDENTIALS" button results in the following "Question-Answer" values:
    // Create object containing a new secret question and its corresponding answer (newWebsiteQAProperties object)
    // let newWebsiteQAValues = ["Favorite veggie?", "Cucumber."];
    // console.log(`newWebsiteQAValues:`);
    // console.log(newWebsiteQAValues);

    let { ...newWebsiteQAProperties } = new ASecretQA(newWebsiteQAValues);
    // console.log(`newWebsiteQAProperties:`);
    // console.log(newWebsiteQAProperties);

    // Create secretQAs array containing the newWebsiteQAProperties object
    let secretQAsArray = [];
    secretQAsArray.push(newWebsiteQAProperties);
    // console.log(`secretQAsArray:`);
    // console.log(secretQAsArray);

    // STEP 2 - combine all properties into a single credential object:
    // Compose the credential array by appending secretQAs array to newWebsiteUsualProperties object

    newWebsiteUsualProperties["secretQAs"] = secretQAsArray;
  }

  //let secretQAsArray2 = Array.from.secretQAsArray;
  // secretQAsArray2.length = 0;
  // console.log(`newWebsiteUsualProperties["secretQAs"]:`);
  // console.log(newWebsiteUsualProperties);
  // Rename/reset newWebsiteUsualProperties object  to credential object
  let { ...credential } = newWebsiteUsualProperties;
  // console.log(`credential:`);
  // console.log(credential);

  // STEP 3 - combine all credential objects into a single credentials array:
  // Append the newly created credential object to the credentials array

  credentialsArray.push(credential);
  console.log(`credentialsArray:`);
  console.log(credentialsArray);
  secretQAsArray2Ready = false;
  // *  #########
  saveToLocalStorage();
  retrieveFromLocalStorage();
}
const fetchBtn = document.querySelector("#addCredential");
fetchBtn.addEventListener("click", makeNewCredentialAndSaveIt);

// *  #########

// Add a new instance of the secretQA object to the secretQAs array

let secretQAsArray2;
let secretQAsArray2Ready = false;

function addXtraQA() {
  secretQAsArray2 = [];
  for (let index = 0; index < 10; index++) {
    const questioni = `#question${index}`;
    const answeri = `#answer${index}`;
    // const secretXtraQ = document.querySelectorAll("#question0")[0].value;
    // const secretXtraA = document.querySelectorAll("#answer0")[0].value;
    const secretXtraQ = document.querySelector(questioni).value;
    const secretXtraA = document.querySelector(answeri).value;
    const newWebsiteXtraQAValues = [secretXtraQ, secretXtraA];

    // console.log(`newWebsiteXtraQAValues:`);
    // console.log(newWebsiteXtraQAValues);

    // Create object containing a new secret question and its corresponding answer (newWebsiteQAProperties object)
    let { ...newWebsiteXtraQAProperties } = new ASecretQA(
      newWebsiteXtraQAValues
    );
    // console.log(`newWebsiteXtraQAProperties:`);
    // console.log(newWebsiteXtraQAProperties);
    // Append new secretQA object to existing secretQAs array
    secretQAsArray2.push(newWebsiteXtraQAProperties);
  }
  if (secretQAsArray2Ready == false) {
    //  secretQAsArray2 = [];
    secretQAsArray2Ready = true;
  }
  console.log(`secretQAsArray2:`);
  console.log(secretQAsArray2);
}

// const xtraquestionBtn = document.querySelector("#xtraquestion-btn");
//xtraquestionBtn.addEventListener("click", addXtraQA);

// ######################
// SAVING CREDENTIALS TO STORAGE
// ######################
function saveToLocalStorage() {
  window.localStorage.setItem("credentials", JSON.stringify(credentialsArray));
  console.log(`This is the saved array:`);
  console.log(credentialsArray);
}
// const toStorageBtn = document.getElementById("credentials-to-localstorage");
// toStorageBtn.addEventListener("click", saveToLocalStorage);

/*
// ######################
// FETCHING CREDENTIALS FROM STORAGE
// ######################
let retrievedCredentials;

function retrieveFromLocalStorage() {
  retrievedCredentials = JSON.parse(window.localStorage.getItem("credentials"));
  console.log(`This is the retrieved array:`);
  console.log(retrievedCredentials);
}
// const fromStorageBtn = document.getElementById("get-credentials-from-localstorage");
// fromStorageBtn.addEventListener("click", retrieveFromLocalStorage);
*/

let userSelectedSiteName = "";

function selectBestSite() {
  userSelectedSiteName = document.getElementById("best-match-site").value;
  // console.log(`stored best userSelectedSiteName:`);
  // console.log(userSelectedSiteName);
  spoolToDisplay();
}
const bestSiteBtn = document.getElementById("best-eyes");
bestSiteBtn.addEventListener("click", selectBestSite);

function selectMiddleSite() {
  userSelectedSiteName = document.getElementById("middle-match-site").value;
  // console.log(`stored middle userSelectedSiteName:`);
  // console.log(userSelectedSiteName);
  spoolToDisplay();
}
const middleSiteBtn = document.getElementById("middle-eyes");
middleSiteBtn.addEventListener("click", selectMiddleSite);

function selectLowestSite() {
  userSelectedSiteName = document.getElementById("lowest-match-site").value;
  // console.log(`stored lowest userSelectedSiteName:`);
  // console.log(userSelectedSiteName);
  spoolToDisplay();
}
const lowestSiteBtn = document.getElementById("lowest-eyes");
lowestSiteBtn.addEventListener("click", selectLowestSite);

// ######################
// DISPLAYING RETRIEVED DETAILS
// ######################

function spoolToDisplay() {
  let aCredential = {};
  // console.log(`userSelectedSiteName:`);
  // console.log(userSelectedSiteName);
  // retrievedCredentials.length
  for (let index = 0; index < retrievedCredentials.length; index++) {
    aCredential = retrievedCredentials[index];
    if (aCredential.name == userSelectedSiteName) {
      const credentialNeeded = aCredential;
      // console.log(`credentialNeeded.name:`);
      // console.log(credentialNeeded.name);
      window.sessionStorage.clear();
      window.sessionStorage.setItem(
        "credentialNeeded",
        JSON.stringify(credentialNeeded)
      );
    }
  }
  let credentialNeeded = JSON.parse(
    window.sessionStorage.getItem("credentialNeeded")
  );
  document.getElementById("name").value = credentialNeeded.name;
  document.getElementById("website").value = credentialNeeded.website;
  document.getElementById("email").value = credentialNeeded.email;
  document.getElementById("username").value = credentialNeeded.username;
  document.getElementById("password").value = credentialNeeded.password;
  document.getElementById("pin").value = credentialNeeded.pin;
  document.getElementById("recovery-email").value =
    credentialNeeded.recoveryEmail;
  document.getElementById("secret-image").value = credentialNeeded.secretImage;

  document.getElementById("question0").value =
    credentialNeeded.secretQAs[0].secretQ;
  document.getElementById("answer0").value =
    credentialNeeded.secretQAs[0].secretA;

  document.getElementById("question1").value =
    credentialNeeded.secretQAs[1].secretQ;
  document.getElementById("answer1").value =
    credentialNeeded.secretQAs[1].secretA;

  document.getElementById("question2").value =
    credentialNeeded.secretQAs[2].secretQ;
  document.getElementById("answer2").value =
    credentialNeeded.secretQAs[2].secretA;

  document.getElementById("question3").value =
    credentialNeeded.secretQAs[3].secretQ;
  document.getElementById("answer3").value =
    credentialNeeded.secretQAs[3].secretA;

  document.getElementById("question4").value =
    credentialNeeded.secretQAs[4].secretQ;
  document.getElementById("answer4").value =
    credentialNeeded.secretQAs[4].secretA;

  document.getElementById("question5").value =
    credentialNeeded.secretQAs[5].secretQ;
  document.getElementById("answer5").value =
    credentialNeeded.secretQAs[5].secretA;

  document.getElementById("question6").value =
    credentialNeeded.secretQAs[6].secretQ;
  document.getElementById("answer6").value =
    credentialNeeded.secretQAs[6].secretA;

  document.getElementById("question7").value =
    credentialNeeded.secretQAs[7].secretQ;
  document.getElementById("answer7").value =
    credentialNeeded.secretQAs[7].secretA;

  document.getElementById("question8").value =
    credentialNeeded.secretQAs[8].secretQ;
  document.getElementById("answer8").value =
    credentialNeeded.secretQAs[8].secretA;

  document.getElementById("question9").value =
    credentialNeeded.secretQAs[9].secretQ;
  document.getElementById("answer9").value =
    credentialNeeded.secretQAs[9].secretA;
}
// const toDisplayBtn = document.getElementById('to-display-btn');
// toDisplayBtn.addEventListener('click', spoolToDisplay)

/*function postClosestMatches() {
  document.getElementById("best-match-site").value = bestMatchSiteName;
  document.getElementById("middle-match-site").value = middleMatchSiteName;
  document.getElementById("lowest-match-site").value = lowestMatchSiteName;
}

const searchBtn = document.getElementById('search');
searchBtn.addEventListener('keyup', postClosestMatches)
*/

function findClosestMatches() {
  // Grab search term a letter at a time and...
  // convert to lower case
  const searchTerm = document.getElementById("search-bar").value.toLowerCase();
  console.log(`searchTerm:`);
  console.log(searchTerm);

  // Grab all site names
  let credentials = JSON.parse(window.localStorage.getItem("credentials"));

  let allSiteNames = [];
  for (let index = 0; index < credentials.length; index++) {
    const aCredential = credentials[index];
    allSiteNames.push(aCredential.name);
  }
  console.log(`allSiteNames:`);
  console.log(allSiteNames);

  let allSitesLowercased = [];
  for (let index = 0; index < allSiteNames.length; index++) {
    const element = allSiteNames[index].toLowerCase();
    allSitesLowercased.push(element);
  }
  console.log(`allSiteNames lowercased:`);
  console.log(allSitesLowercased);

  let matchedSiteNames = [];
  for (let index = 0; index < allSitesLowercased.length; index++) {
    const aLoweredcasedSiteName = allSitesLowercased[index];
    if (aLoweredcasedSiteName.indexOf(searchTerm) !== -1) {
      matchedSiteNames.push(allSiteNames[index]);
    }
  }

  for (let index = 0; index < 3; index++) {
    const element = matchedSiteNames[index];
    if (element == undefined) {
      matchedSiteNames.push("");
    }
  }

  console.log(`matchedSiteNames w/ original casing:`);
  console.log(matchedSiteNames);

  document.getElementById("best-match-site").value = `${matchedSiteNames[0]}`;
  document.getElementById("middle-match-site").value = `${matchedSiteNames[1]}`;
  document.getElementById("lowest-match-site").value = `${matchedSiteNames[2]}`;
}
const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("keyup", findClosestMatches);
// const searchBtn = document.getElementById("search");
// searchBtn.addEventListener("click", findClosestMatches);

// Mode flags
let viewMode = false;
let editMode = false;
let addMode = false;
let searchMode = true;
let searchIcon = document.getElementById("search-mode").style;
let viewIcon = document.getElementById("view-mode").style;
let editIcon = document.getElementById("edit-mode").style;
let createIcon = document.getElementById("create-mode").style;
searchIcon.display = "block";
viewIcon.display = "none";
editIcon.display = "none";
createIcon.display = "none";

function switchToSearchMode() {
  const searchIconStyle = document.getElementById("search-icon").style;
  const searchBtnStyle = document.getElementById("search").style;
  searchMode = true;
  viewMode = false;
  editMode = false;
  addMode = false;
  searchIconStyle.color = "black";
  searchBtnStyle.border = "2px solid black";
  searchIconStyle.backgroundColor = "white";
  searchBtnStyle.backgroundColor = "white";
  document.querySelector("#search-bar").focus();
  searchIcon.display = "block";
  viewIcon.display = "none";
  editIcon.display = "none";
  createIcon.display = "none";
}
// const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("focus", switchToSearchMode);
const searchBtn = document.getElementById("search");
searchBtn.addEventListener("click", switchToSearchMode);

function quitSearchMode() {
  const searchIconStyle = document.getElementById("search-icon").style;
  const searchBtnStyle = document.getElementById("search").style;
  searchMode = false;
  viewMode = false;
  editMode = false;
  addMode = false;
  searchIconStyle.color = "white";
  searchBtnStyle.border = "1px solid #325c2eed";
  searchIconStyle.backgroundColor = "#608a5dfb";
  searchBtnStyle.backgroundColor = "#608a5dfb";
  // searchIcon.display = "block";
  // viewIcon.display = "none";
  // editIcon.display = "none";
  // createIcon.display = "none";
}
searchBar.addEventListener("blur", quitSearchMode);

function switchToEditMode() {
  searchMode = false;
  viewMode = false;
  editMode = true;
  addMode = false;
  const pencilIconStyle = document.getElementById("pencil-icon").style;
  const pencilBtnStyle = document.getElementById("editCredential").style;
  pencilIconStyle.color = "black";
  pencilBtnStyle.border = "2px solid black";
  pencilIconStyle.backgroundColor = "white";
  pencilBtnStyle.backgroundColor = "white";

  searchIcon.display = "none";
  viewIcon.display = "none";
  editIcon.display = "block";
  createIcon.display = "none";
}
const edit = document.getElementById("editCredential");
edit.addEventListener("focus", switchToEditMode);

function quitEditMode() {
  searchMode = false;
  viewMode = true;
  editMode = false;
  addMode = false;
  const pencilIconStyle = document.getElementById("pencil-icon").style;
  const pencilBtnStyle = document.getElementById("editCredential").style;
  pencilIconStyle.color = "white";
  pencilBtnStyle.border = "1px solid #325c2eed";
  pencilIconStyle.backgroundColor = "#608a5dfb";
  pencilBtnStyle.backgroundColor = "#608a5dfb";
  switchToSearchMode();
}
edit.addEventListener("blur", quitEditMode);

function switchToAddMode() {
  searchMode = false;
  viewMode = false;
  editMode = false;
  addMode = true;
  const plusIconStyle = document.getElementById("plus-icon").style;
  const plusBtnStyle = document.getElementById("addCredential").style;
  plusIconStyle.color = "black";
  plusIconStyle.backgroundColor = "white";
  plusBtnStyle.backgroundColor = "white";

  searchIcon.display = "none";
  viewIcon.display = "none";
  editIcon.display = "none";
  createIcon.display = "block";
}
const add = document.getElementById("addCredential");
add.addEventListener("focus", switchToAddMode);

function quitAddMode() {
  searchMode = true;
  viewMode = false;
  editMode = false;
  addMode = false;
  const plusIconStyle = document.getElementById("plus-icon").style;
  const plusBtnStyle = document.getElementById("addCredential").style;
  plusIconStyle.color = "white";
  plusBtnStyle.border = "1px solid #325c2eed";
  plusIconStyle.backgroundColor = "#608a5dfb";
  plusBtnStyle.backgroundColor = "#608a5dfb";
  switchToSearchMode();
}
add.addEventListener("blur", quitAddMode);

// IN THE WORKS:

function switchToViewMode() {
  searchMode = false;
  viewMode = true;
  editMode = false;
  addMode = false;

  searchIcon.display = "none";
  viewIcon.display = "block";
  editIcon.display = "none";
  createIcon.display = "none";

  let eyesIconsArray = [];
  const eyesIconsCollection = document.getElementsByClassName("eyes-icon");
  eyesIconsArray = Array.from(eyesIconsCollection);

  const bestMatchBtnStyle = document.getElementById("best-eyes").style;
  const eyesIcon0Style = eyesIconsArray[0].style;
  bestMatchBtnStyle.backgroundColor = "white"; //#dddda4
  eyesIcon0Style.backgroundColor = "white"; // #dddda4
  eyesIcon0Style.color = "black";

  const middleMatchBtnStyle = document.getElementById("middle-eyes").style;
  const eyesIcon1Style = eyesIconsArray[1].style;
  middleMatchBtnStyle.backgroundColor = "white";
  eyesIcon1Style.backgroundColor = "white";
  eyesIcon1Style.color = "black";

  const lowestMatchBtnStyle = document.getElementById("lowest-eyes").style;
  const eyesIcon2Style = eyesIconsArray[2].style;
  lowestMatchBtnStyle.backgroundColor = "white";
  eyesIcon2Style.backgroundColor = "white";
  eyesIcon2Style.color = "black";
}
const bestMatchBtn = document.getElementById("best-eyes");
const middleMatchBtn = document.getElementById("middle-eyes");
const lowestMatchBtn = document.getElementById("lowest-eyes");
bestMatchBtn.addEventListener("click", switchToViewMode);
middleMatchBtn.addEventListener("click", switchToViewMode);
lowestMatchBtn.addEventListener("click", switchToViewMode);
