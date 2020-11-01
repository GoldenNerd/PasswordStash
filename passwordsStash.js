"use strict";

//Empty LocalStorage
function flushLocalStorage() {
  window.localStorage.clear();
  console.log(`All data was deteted from local storage.`);
  location.reload();
  console.log(`Reloading App . . .  Done!!`);
}
const flushBtn = document.getElementById("flush");
flushBtn.addEventListener("click", flushLocalStorage);

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
    // these and the other properties borderd in the WebsiteUsualProperties class constructor.
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

function retrieveFromLocalStorage() {
  const retrievedCredentials = JSON.parse(
    window.localStorage.getItem("credentials")
  );
  console.log(`This is the retrieved array:`);
  console.log(retrievedCredentials);
  return retrievedCredentials;
}
// const fromStorageBtn = document.getElementById("get-credentials-from-localstorage");
// fromStorageBtn.addEventListener("click", retrieveFromLocalStorage);

const retrievedCredentials = retrieveFromLocalStorage();

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
const fetchBtn = document.querySelector("#save-changes");
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
  const firstUsageWarningStyle = document.getElementById("first-usage-warning")
    .style;
  if (credentialsArray[credentialsArray.length - 1].name == "") {
    console.log(`error message`);
    alert(`Credentials not saved. Missing "Name". Website name is required.`);
    firstUsageWarningStyle.backgroundColor = "black";
  } else {
    window.localStorage.setItem(
      "credentials",
      JSON.stringify(credentialsArray)
    );
    console.log(`This is the saved array:`);
    console.log(credentialsArray);
    firstUsageWarningStyle.display = "none";
  }
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
  if (userSelectedSiteName == "") {
    alert(`"Nothing to display. Name" required.`);
  } else {
    // console.log(`stored best userSelectedSiteName:`);
    // console.log(userSelectedSiteName);
    spoolToDisplay();
  }
}
const bestSiteBtn = document.getElementById("best-eyes-button");
bestSiteBtn.addEventListener("focus", selectBestSite);

function selectMiddleSite() {
  userSelectedSiteName = document.getElementById("middle-match-site").value;
  if (userSelectedSiteName == "") {
    alert(`"Nothing to display. Name" required.`);
  } else {
    // console.log(`stored middle userSelectedSiteName:`);
    // console.log(userSelectedSiteName);
    spoolToDisplay();
  }
}
const middleSiteBtn = document.getElementById("middle-eyes-button");
middleSiteBtn.addEventListener("focus", selectMiddleSite);

function selectLowestSite() {
  userSelectedSiteName = document.getElementById("lowest-match-site").value;
  if (userSelectedSiteName == "") {
    alert(`"Nothing to display. Name" required.`);
  } else {
    // console.log(`stored lowest userSelectedSiteName:`);
    // console.log(userSelectedSiteName);
    spoolToDisplay();
  }
}
const lowestSiteBtn = document.getElementById("lowest-eyes-button");
lowestSiteBtn.addEventListener("focus", selectLowestSite);

// ######################
// DISPLAYING RETRIEVED DETAILS
// ######################

/*
function credentialsArrayExistsInLocalstorage() {
  let arrayFromLocalStorage = JSON.parse(window.localStorage.getItem('credentialsArray'));
  let credentialsArrayIsInLocalstorage;
  console.log(`1) credentialsArrayExistsInLocalstorage()
  arrayFromLocalStorage: ${arrayFromLocalStorage}`);
  if (arrayFromLocalStorage == null) {
    credentialsArrayIsInLocalstorage = false;
    window.sessionStorage.setItem("credentialsArrayIsInLocalstorage", JSON.stringify(credentialsArrayIsInLocalstorage));
  } else {
    credentialsArrayIsInLocalstorage = true;
    window.sessionStorage.setItem("credentialsArrayIsInLocalstorage", JSON.stringify(credentialsArrayIsInLocalstorage));
  }
  return credentialsArrayIsInLocalstorage;
};


function credentialsArrayIsPregnant() {
  console.log(`2) credentialsArrayIsPregnant?`);
  let arrayIsInLocalStorage = credentialsArrayExistsInLocalstorage();
  if (arrayIsInLocalStorage == false) {
    alert('Be adviced that credentialsArray is missing in localstorage.');
    const firstUsageWarningStyle = document.getElementById('first-usage-warning').style;
    firstUsageWarningStyle.backgroundColor = "black";
    switchToAddMode();
  } else {
    let arrayFromLocalStorage = JSON.parse(window.localStorage.getElementsByClassName('credentialsArray'));
    console.log(`arrayFromLocalStorage: 
  ${arrayFromLocalStorage}`);

    let credentialsArrayIsEmpty;
    if (credentialsArray.length == 0) {
      credentialsArrayIsEmpty = true;
    } else {
      credentialsArrayIsEmpty = false;
    };
    console.log(`credentialsArrayIsEmpty?: ${credentialsArrayIsEmpty}`);
  }
};


function queryACredential() {
  let thereIsDataInCredentialsArray = credentialsArrayIsPregnant();
  if (thereIsDataInCredentialsArray) {
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
        window.sessionStorage.setItem("credentialNeeded", JSON.stringify(credentialNeeded));
      }
    }
  } else {
    alert('Be adviced that credentialsArray is present in localstorage, but is empty.');
    const firstUsageWarningStyle = document.getElementById('first-usage-warning').style;
    firstUsageWarningStyle.backgroundColor = "black";
    switchToAddMode();
  }

};
*/

function queryACredential() {
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
}

function spoolToDisplay() {
  queryACredential();

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

// View Mode
function switchToViewMode() {
  searchModeFlag = false;
  viewModeFlag = true;
  editModeFlag = false;
  addModeFlag = false;

  searchModeAnouncement.display = "none";
  viewModeAnouncement.display = "block";
  editModeAnouncement.display = "none";
  createModeAnouncement.display = "none";

  quitSearchMode();
  quitEditMode();
  editBtnsToolbarStyle.display = "none";
  quitAddMode();
  showBoxboxes();
  showAllDataFields();

  let eyesIconsArray = [];
  const eyesIconsCollection = document.getElementsByClassName("eyes-icon");
  eyesIconsArray = Array.from(eyesIconsCollection);

  if (bestMatchFlag) {
    const bestMatchBtnStyle = document.getElementById("best-eyes-button").style;
    const eyesIcon0Style = eyesIconsArray[0].style;
    bestMatchBtnStyle.backgroundColor = "white"; //#dddda4
    eyesIcon0Style.backgroundColor = "white"; // #dddda4
    eyesIcon0Style.color = "black";
    bestMatchFlag = false;
  }

  if (middleMatchFlag) {
    const middleMatchBtnStyle = document.getElementById("middle-eyes-button")
      .style;
    const eyesIcon1Style = eyesIconsArray[1].style;
    middleMatchBtnStyle.backgroundColor = "white";
    eyesIcon1Style.backgroundColor = "white";
    eyesIcon1Style.color = "black";
    middleMatchFlag = false;
  }

  if (lowestMatchFlag) {
    const lowestMatchBtnStyle = document.getElementById("lowest-eyes-button")
      .style;
    const eyesIcon2Style = eyesIconsArray[2].style;
    lowestMatchBtnStyle.backgroundColor = "white";
    eyesIcon2Style.backgroundColor = "white";
    eyesIcon2Style.color = "black";
    lowestMatchFlag = false;
  }
}

function turnOffBestEyes() {
  let eyesIconsArray = [];
  const eyesIconsCollection = document.getElementsByClassName("eyes-icon");
  eyesIconsArray = Array.from(eyesIconsCollection);

  const bestMatchBtnStyle = document.getElementById("best-eyes-button").style;
  const eyesIcon0Style = eyesIconsArray[0].style;
  bestMatchBtnStyle.border = "1px solid black";
  bestMatchBtnStyle.backgroundColor = "#608a5dfb"; //#dddda4
  eyesIcon0Style.backgroundColor = "#608a5dfb"; // #dddda4
  eyesIcon0Style.color = "black";
}

function turnOffMiddleEyes() {
  let eyesIconsArray = [];
  const eyesIconsCollection = document.getElementsByClassName("eyes-icon");
  eyesIconsArray = Array.from(eyesIconsCollection);

  const middleMatchBtnStyle = document.getElementById("middle-eyes-button")
    .style;
  const eyesIcon1Style = eyesIconsArray[1].style;
  middleMatchBtnStyle.border = "1px solid black";
  middleMatchBtnStyle.backgroundColor = "#608a5dfb"; //#dddda4
  eyesIcon1Style.backgroundColor = "#608a5dfb"; // #dddda4
  eyesIcon1Style.color = "black";
}

function turnOffLowestEyes() {
  let eyesIconsArray = [];
  const eyesIconsCollection = document.getElementsByClassName("eyes-icon");
  eyesIconsArray = Array.from(eyesIconsCollection);

  const lowestMatchBtnStyle = document.getElementById("lowest-eyes-button")
    .style;
  const eyesIcon2Style = eyesIconsArray[2].style;
  lowestMatchBtnStyle.border = "1px solid black";
  lowestMatchBtnStyle.backgroundColor = "#608a5dfb"; //#dddda4
  eyesIcon2Style.backgroundColor = "#608a5dfb"; // #dddda4
  eyesIcon2Style.color = "black";
}
// #########################################################
let bestMatchFlag;
let middleMatchFlag;
let lowestMatchFlag;

function viewBestMatch() {
  if (retrievedCredentials == null) {
    switchToAddMode();
  } else {
    bestMatchFlag = true;
    turnOffMiddleEyes();
    turnOffLowestEyes();
    switchToViewMode();
  }
}
const bestMatchBtn = document.getElementById("best-eyes-button");
bestMatchBtn.addEventListener("click", viewBestMatch);
// **********************************************************
function viewMiddleMatch() {
  if (retrievedCredentials == null) {
    switchToAddMode();
  } else {
    middleMatchFlag = true;
    turnOffBestEyes();
    turnOffLowestEyes();
    switchToViewMode();
  }
}
const middleMatchBtn = document.getElementById("middle-eyes-button");
middleMatchBtn.addEventListener("click", viewMiddleMatch);
// **********************************************************
function viewLowestMatch() {
  if (retrievedCredentials == null) {
    switchToAddMode();
  } else {
    lowestMatchFlag = true;
    turnOffBestEyes();
    turnOffMiddleEyes();
    switchToViewMode();
  }
}
const lowestMatchBtn = document.getElementById("lowest-eyes-button");
lowestMatchBtn.addEventListener("click", viewLowestMatch);
// #########################################################

// Mode flags
let viewModeFlag = false;
let editModeFlag = false;
let addModeFlag = false;
let searchModeFlag = true;
let searchModeAnouncement = document.getElementById("search-mode-anouncement")
  .style;
let viewModeAnouncement = document.getElementById("view-mode-anouncement")
  .style;
let editModeAnouncement = document.getElementById("edit-mode-anouncement")
  .style;
let createModeAnouncement = document.getElementById("create-mode-anouncement")
  .style;
let editBtnsToolbarStyle = document.getElementById("edit-toolbar").style;

window.onload = function () {
  const firstUsageWarningStyle = document.getElementById("first-usage-warning")
    .style;
  if (retrievedCredentials == null) {
    document.getElementById("addCredential").focus();
    searchModeAnouncement.display = "none";
    viewModeAnouncement.display = "none";
    editModeAnouncement.display = "none";
    createModeAnouncement.display = "block";
    firstUsageWarningStyle.display = "block";
  } else {
    document.getElementById("search-bar").focus();
    searchModeAnouncement.display = "block";
    viewModeAnouncement.display = "none";
    editModeAnouncement.display = "none";
    createModeAnouncement.display = "none";
    firstUsageWarningStyle.display = "none";
  }
  clearSearches();
  clearAllData();
  document.getElementById("name").style = "";
};

/*
function clearAllData() {
  document.getElementById("name").value = "";
  document.getElementById("website").value = "";
  document.getElementById("email").value = "";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("pin").value = "";
  document.getElementById("recovery-email").value = "";
  document.getElementById("secret-image").value = "";

  document.getElementById("question0").value = "";
  document.getElementById("answer0").value = "";

  document.getElementById("question1").value = "";
  document.getElementById("answer1").value = "";

  document.getElementById("question2").value = "";
  document.getElementById("answer2").value = "";

  document.getElementById("question3").value = "";
  document.getElementById("answer3").value = "";

  document.getElementById("question4").value = "";
  document.getElementById("answer4").value = "";

  document.getElementById("question5").value = "";
  document.getElementById("answer5").value = "";

  document.getElementById("question6").value = "";
  document.getElementById("answer6").value = "";

  document.getElementById("question7").value = "";
  document.getElementById("answer7").value = "";

  document.getElementById("question8").value = "";
  document.getElementById("answer8").value = "";

  document.getElementById("question9").value = "";
  document.getElementById("answer9").value = "";
}

const boxboxBtnsCollection = document.getElementsByClassName("a-boxbox-button");
const boxboxBtnsArray = Array.from(boxboxBtnsCollection);

function showBoxboxes() {
  for (let index = 0; index < boxboxBtnsArray.length; index++) {
    const boxboxBtn = boxboxBtnsArray[index];
    boxboxBtn.style.display = "block";
  }
}
#details,
#qs-and-as,
#answers*/

function hideAllDataFields() {
  const allDataFieldsParent = document.getElementById("details");
  const allQAsParent = document.getElementById("qs-and-as");
  const h5Tag = document.getElementsByTagName("h5")[0];
  //const allDataFieldsArray = Array.from(allDataFieldsCollection);
  allDataFieldsParent.style.display = "none";
  allQAsParent.style.display = "none";
  h5Tag.style.display = "none";
}

function showAllDataFields() {
  const allDataFieldsParent = document.getElementById("details");
  const allQAsParent = document.getElementById("qs-and-as");
  const h5Tag = document.getElementsByTagName("h5")[0];
  //const allDataFieldsArray = Array.from(allDataFieldsCollection);
  allDataFieldsParent.style.display = "block";
  allQAsParent.style.display = "block";
  h5Tag.style.display = "block";
}
/*for (let index = 0; index < allDataFieldsArray.length; index++) {
    const aDataField = allDataFieldsArray[index];
    aDataField.style.display = "none";  }
}
    var value = element.value;
    var style = element.style;
    if (value == "" || value == null) {
      style.display = "none";
    } else {
      style.display = "block";
    }
    */

function switchToSearchMode() {
  const searchBarStyle = document.getElementById("search-bar").style;
  if (retrievedCredentials == null) {
    switchToAddMode();
    document.getElementById("search-bar").blur();
    showAllDataFields();
  } else {
    editBtnsToolbarStyle.display = "none";
    // const searchIconStyle = document.getElementById("search-icon").style;
    // const searchBtnStyle = document.getElementById("search").style;
    searchModeFlag = true;
    viewModeFlag = false;
    editModeFlag = false;
    addModeFlag = false;
    // searchIconStyle.color = "black";
    // searchBtnStyle.border = "1px solid black";
    // searchIconStyle.backgroundColor = "white";
    // searchBtnStyle.backgroundColor = "white";
    searchBarStyle.outline = "none";
    document.getElementById("search-bar").focus();

    searchModeAnouncement.display = "block";
    viewModeAnouncement.display = "none";
    editModeAnouncement.display = "none";
    createModeAnouncement.display = "none";

    turnOffBestEyes();
    turnOffMiddleEyes();
    turnOffLowestEyes();
    quitEditMode();
    quitAddMode();
    hideBoxboxes();
    hideAllDataFields();
  }
}
// const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("focus", switchToSearchMode);
// const searchBtn = document.getElementById("search");
// searchBtn.addEventListener("click", switchToSearchMode);
// searchBtn.addEventListener("click", function () {
//  document.querySelector("#search-bar").focus();
//});

function quitSearchMode() {
  // const searchIconStyle = document.getElementById("search-icon").style;
  // const searchBtnStyle = document.getElementById("search").style;
  searchModeFlag = false;
  document.getElementById("search-bar").blur();
  // viewMode = false;
  // editMode = false;
  // addMode = false;
  // searchIconStyle.color = "white";
  // searchBtnStyle.border = "1px solid 1b3119ed";
  // searchIconStyle.backgroundColor = "#325c2eed";
  // searchBtnStyle.backgroundColor = "#325c2eed";
  // searchModeAnouncement.display = "block";
  // viewModeAnouncement.display = "none";
  // editModeAnouncement.display = "none";
  // createModeAnouncement.display = "none";
}
// searchBar.addEventListener("blur", quitSearchMode);

function switchToEditMode() {
  searchModeFlag = false;
  viewModeFlag = false;
  editModeFlag = true;
  addModeFlag = false;
  editBtnsToolbarStyle.display = "flex";
  const pencilIconStyle = document.getElementById("pencil-icon").style;
  const pencilBtnStyle = document.getElementById("editCredential").style;
  pencilIconStyle.color = "black";
  pencilBtnStyle.border = "1px solid white";
  pencilIconStyle.backgroundColor = "white";
  pencilBtnStyle.backgroundColor = "white";
  pencilBtnStyle.outline = "none";

  searchModeAnouncement.display = "none";
  viewModeAnouncement.display = "none";
  editModeAnouncement.display = "block";
  createModeAnouncement.display = "none";

  //turnOffBestEyes();
  // turnOffMiddleEyes();
  // turnOffLowestEyes();
  quitSearchMode();
  quitAddMode();
  hideBoxboxes();
  showAllDataFields();
}
const edit = document.getElementById("editCredential");
edit.addEventListener("click", switchToEditMode);

function quitEditMode() {
  searchModeFlag = false;
  viewModeFlag = true;
  editModeFlag = false;
  addModeFlag = false;
  //editBtnsToolbarStyle.display = "none";
  const pencilIconStyle = document.getElementById("pencil-icon").style;
  const pencilBtnStyle = document.getElementById("editCredential").style;
  pencilIconStyle.color = "black";
  pencilBtnStyle.border = "1px solid black";
  pencilIconStyle.backgroundColor = "#608a5dfb";
  pencilBtnStyle.backgroundColor = "#608a5dfb";
  //  switchToSearchMode();
  // switchToViewMode();
}
// edit.addEventListener("blur", quitEditMode);

const boxboxBtnsCollection = document.getElementsByClassName("a-boxbox-button");
const boxboxBtnsArray = Array.from(boxboxBtnsCollection);

function hideBoxboxes() {
  for (let index = 0; index < boxboxBtnsArray.length; index++) {
    const boxboxBtn = boxboxBtnsArray[index];
    boxboxBtn.style.display = "none";
  }
}

function showBoxboxes() {
  for (let index = 0; index < boxboxBtnsArray.length; index++) {
    const boxboxBtn = boxboxBtnsArray[index];
    boxboxBtn.style.display = "block";
  }
}

function switchToAddMode() {
  searchModeFlag = false;
  viewModeFlag = false;
  editModeFlag = false;
  addModeFlag = true;
  editBtnsToolbarStyle.display = "flex";
  const plusIconStyle = document.getElementById("plus-icon").style;
  const plusBtnStyle = document.getElementById("addCredential").style;
  plusIconStyle.color = "black";
  plusIconStyle.backgroundColor = "white";
  plusBtnStyle.backgroundColor = "white";
  plusBtnStyle.outline = "none";

  searchModeAnouncement.display = "none";
  viewModeAnouncement.display = "none";
  editModeAnouncement.display = "none";
  createModeAnouncement.display = "block";

  quitSearchMode();
  quitEditMode();
  hideBoxboxes();
  showAllDataFields();
}
const add = document.getElementById("addCredential");
add.addEventListener("focus", switchToAddMode);

function quitAddMode() {
  searchModeFlag = true;
  viewModeFlag = false;
  editModeFlag = false;
  addModeFlag = false;
  // editBtnsToolbarStyle.display = "none";
  const plusIconStyle = document.getElementById("plus-icon").style;
  const plusBtnStyle = document.getElementById("addCredential").style;
  plusIconStyle.color = "black";
  plusBtnStyle.border = "1px solid black";
  plusIconStyle.backgroundColor = "#608a5dfb";
  plusBtnStyle.backgroundColor = "#608a5dfb";
  // switchToSearchMode();
}
// add.addEventListener("blur", quitAddMode);

// Output to console the current App operating mode
/*
const appModeBtn = document.getElementById("mode-button");
appModeBtn.addEventListener("click", function () {
  console.log(`searchMode: ${searchMode} 
viewMode: ${viewMode} 
editMode: ${editMode} 
addMode: ${addMode}`);
});
*/

// ######################################

function clearSearches() {
  document.getElementById("search-bar").value = "";
  document.getElementById("best-match-site").value = "";
  document.getElementById("middle-match-site").value = "";
  document.getElementById("lowest-match-site").value = "";
  document.getElementById("search-bar").focus();
}

function clearAllData() {
  document.getElementById("name").value = "";
  document.getElementById("website").value = "";
  document.getElementById("email").value = "";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("pin").value = "";
  document.getElementById("recovery-email").value = "";
  document.getElementById("secret-image").value = "";

  document.getElementById("question0").value = "";
  document.getElementById("answer0").value = "";

  document.getElementById("question1").value = "";
  document.getElementById("answer1").value = "";

  document.getElementById("question2").value = "";
  document.getElementById("answer2").value = "";

  document.getElementById("question3").value = "";
  document.getElementById("answer3").value = "";

  document.getElementById("question4").value = "";
  document.getElementById("answer4").value = "";

  document.getElementById("question5").value = "";
  document.getElementById("answer5").value = "";

  document.getElementById("question6").value = "";
  document.getElementById("answer6").value = "";

  document.getElementById("question7").value = "";
  document.getElementById("answer7").value = "";

  document.getElementById("question8").value = "";
  document.getElementById("answer8").value = "";

  document.getElementById("question9").value = "";
  document.getElementById("answer9").value = "";
}

function cancelChanges() {
  clearSearches();
  clearAllData();
  switchToSearchMode();
}
const cancelChangesBtn = document.getElementById("cancel-changes");
cancelChangesBtn.addEventListener("click", cancelChanges);

// Delete a credential

function confirmDeletion() {
  let txt;
  if (confirm("Deletions can not be undone. Proceed?")) {
    deleteCredential();
    txt = "Website's credentials were succesfully removed.";
  } else {
    switchToSearchMode();
    txt = "The original credentials remained unchanged.";
  }
}

function deleteCredential() {
  retrieveFromLocalStorage();
  const nameOfSiteToBeDeleted = document.getElementById("name").value;
  if (nameOfSiteToBeDeleted == "") {
    alert(`Nothing to delete. Website "Name" required.`);
  } else {
    // let aCredential = {};
    // console.log(`userSelectedSiteName:`);
    // console.log(userSelectedSiteName);
    // retrievedCredentials.length
    for (let index = 0; index < retrievedCredentials.length; index++) {
      const aCredential = retrievedCredentials[index];
      if (nameOfSiteToBeDeleted == aCredential.name) {
        console.log(`Name of website to be deleted:`);
        console.log(aCredential.name);
        //DELETE INDEXED CREDENTIAL
        console.log(`Index of website to delete: ${index}`);

        console.log(`Array before trim:`);
        let arrayBefore = retrievedCredentials.slice();
        console.log(arrayBefore);

        console.log(`Array after trim:`);
        retrievedCredentials.splice(index, 1);
        let arrayAfterTrim = retrievedCredentials.slice();
        console.log(arrayAfterTrim);

        credentialsArray = retrievedCredentials.slice();
        if (credentialsArray.length !== 0) {
          saveToLocalStorage();
          retrieveFromLocalStorage();
          // console.log(`The trimmed credentials array is:`);
          // console.log(retrievedCredentials);
        } else {
          alert("Your Passwords Stash is now empty!!");
          flushLocalStorage();
        }
      }
    }
  }
}
const deleteACredential = document.getElementById("delete-credential");
deleteACredential.addEventListener("click", confirmDeletion);
