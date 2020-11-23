﻿"use strict";

//IMPORTANT NOTE:
//PLEASE BE AWARE THAT THERE IS AN INVISIBLE OBJECT ON THE SCREEN ALL THE TIME. THE OBJECT IS THE CLIPBOARD TEXT INPUT. IT IS THE LAST ELEMENT IN THE index.html file. ALSO LOCATED AT THE VERY BOTTOM OF THE APP SCREEN ON THE LEFT HAND SIDE.

// Clear localstorage entirely
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function nullLocalStorage() {
  // Clr LS - OK
  console.log(`I am the function nullLocalStorage()`);

  window.localStorage.clear();
  console.log(`Done!!\nAll data was deLeted from local storage.`);

  // Display message for 4 seconds
  const message = `null to LS. Reload browser tab if needed.`;
  showANotification(message, timeVisible);
}
const nullLocalStorageBtn = document.getElementById("empty-localstorage");
nullLocalStorageBtn.addEventListener("click", nullLocalStorage);

//writeToLocalstorage will load an empty credentials array in localstorage
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function loadEmptyCredentialsArrayToLocalStorage() {
  // OK - [] to LS
  console.log(`I am the function loadEmptyCredentialsArrayToLocalStorage(). 
  "I will load an empty credentials array in localstorage`);
  console.log(`1st step :  Deleting EVERYTHING from local storage.`);
  window.localStorage.clear();
  console.log(
    `2nd step :  Saving an empty credentials array to local storage.`
  );
  let credentials = [];
  window.localStorage.setItem("credentials", JSON.stringify(credentials));
  console.log(
    `3rd step :  Syncronizing credentialsRetrieved to mirror localstorage contents.`
  );
  credentialsRetrieved = [];

  // Display message for 4 seconds
  const message = `[] to LS  Reload browser tab if needed.`;
  showANotification(message, timeVisible);
}
const writeToLocalstorageBtn = document.getElementById("write-to-localstorage");
writeToLocalstorageBtn.addEventListener(
  "click",
  loadEmptyCredentialsArrayToLocalStorage
);
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function does_credentialsArrayExistsInLocalstorage() {
  // OK - LS null?
  console.log(`I am the function does_credentialsArrayExistsInLocalstorage().`);

  console.log(
    `1st step: Reload the credentialsRetrieved localstorage mirror variable.`
  );
  // Reload the credentialsRetrieved localstorage mirror variable
  let credentialsRetrieved = JSON.parse(
    window.localStorage.getItem("credentials")
  );
  console.log(`Retrieved object:`);
  console.log(credentialsRetrieved);

  let isLSCleared;
  let credentialsArrayIsPresentInLocalstorage;
  if (credentialsRetrieved === null) {
    credentialsArrayIsPresentInLocalstorage = false;
    isLSCleared = true;
  } else {
    credentialsArrayIsPresentInLocalstorage = true;
    isLSCleared = false;
  }

  console.log(
    `credentialsArrayIsPresentInLocalstorage: ${credentialsArrayIsPresentInLocalstorage}`
  );

  // Display message for 4 seconds
  const message = `LS = null? ${isLSCleared}.`;
  showANotification(message, timeVisible);
  return credentialsArrayIsPresentInLocalstorage;
}
const localstorageInUseBtn = document.getElementById("is-localstorage-empty");
localstorageInUseBtn.addEventListener(
  "click",
  does_credentialsArrayExistsInLocalstorage
);

// Write dummy credential to credentialsArray
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function WriteToArray() {
  // OK - {} to []
  console.log(`I am the function "WriteToArray()". 

  "WriteToArray()" will load an "pregnant" credentials array into localstorage`);
  console.log(`1st step:\nDeleting EVERYTHING from local storage.`);
  window.localStorage.clear();

  console.log(
    `2nd step:\nSaving a "pregnant" credentials array to local storage.`
  );
  let credentials = [
    {
      email: "dummy1@domain.com",
      name: "ExampleCredential",
      password: "open1234",
      pin: "4221",
      recoveryEmail: "dummy2@otherdomain.com",
      secretImage: "ironning Board",
      secretQAs: [
        {
          secretQ: "First pet?",
          secretA: "Gold fish",
        },
        {
          secretQ: "Name of first pet?",
          secretA: "Bubbles",
        },
        {
          secretQ: "Favorite veggie?",
          secretA: "Cucumber",
        },
        {
          secretQ: "Favorite fruit?",
          secretA: "Red zapote",
        },
        {
          secretQ: "Favorite color?",
          secretA: "Purple",
        },
        {
          secretQ: "Your city of birth?",
          secretA: "Puerto Plata",
        },
        {
          secretQ: "Best man name?",
          secretA: "Roberto",
        },
        {
          secretQ: "Favorite place?",
          secretA: "Ultimo trolley",
        },
        {
          secretQ: "Your artistic name?",
          secretA: "GoldenNerd",
        },
        {
          secretQ: "Your favorite movie?",
          secretA: "The Last Samuray",
        },
      ],
      username: "exampleusername",
      website: "www.dummysite.com",
    },
  ];
  window.localStorage.setItem("credentials", JSON.stringify(credentials));

  console.log(
    `3rd step:\nSynchronizing the credentialsRetrieved variable,/nwhich mirrors the localstorage contents.`
  );
  credentialsRetrieved = credentials.slice();
  console.log(`Synchronized variable:`);
  console.log(credentialsRetrieved);

  // Display message for 4 seconds
  const message = `{} to []  Reload browser tab if needed.`;
  showANotification(message, timeVisible);
}
const WriteToArrayBtn = document.getElementById("write-to-array");
WriteToArrayBtn.addEventListener("click", WriteToArray);

// Is there data in credentials array? Including verify if credentials array is present before checking it for data content.
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
let askingFromDevDashboard;
function does_credentialsArrayContainsData() {
  // OK - {} in []?
  console.log(`I am the function does_credentialsArrayContainsData().`);
  console.log(`Current credentialsRetrieved array:`);
  console.log(credentialsRetrieved);
  let credentialsArrayisNull;
  let credentialsArrayisEmpty;
  let credentialsArrayContainsData;

  //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  function isCredentialArrayNull() {
    console.log(`I am the function isCredentialArrayNull()`);
    if (credentialsRetrieved == null) {
      credentialsArrayisNull = true;
      credentialsArrayContainsData = false;
    } else {
      credentialsArrayisNull = false;
    }
    return credentialsArrayContainsData;
  }

  //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  function isCredentialArrayEmpty() {
    console.log(`I am the function isCredentialArrayEmpty()`);
    if (credentialsRetrieved.length == 0) {
      credentialsArrayisEmpty = true;
      credentialsArrayContainsData = false;
    } else {
      credentialsArrayisEmpty = false;
    }
    return credentialsArrayContainsData;
  }

  //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  function isCredentialArrayPregnant() {
    console.log(`I am the function isCredentialArrayPregnant()`);
    if (credentialsRetrieved.length > 0) {
      credentialsArrayContainsData = true;
      credentialsArrayContainsData = true;
    } else {
      console.log("Unexpected localstorage fault");
      alert("Unexpected localstorage fault");
    }
    return credentialsArrayContainsData;
  }

  isCredentialArrayNull();

  if (credentialsArrayisNull == false) {
    isCredentialArrayEmpty();
    if (credentialsArrayisEmpty == false) {
      isCredentialArrayPregnant();
    }
  }
  console.log(
    `does_credentialsArrayContainsData() returns\ncredentialsArrayContainsData: ${credentialsArrayContainsData}`
  );

  if (askingFromDevDashboard == undefined || askingFromDevDashboard == true) {
    // Display message for 4 seconds
    const message = `{} in [] ${credentialsArrayContainsData}. Passwords Stash ready.`;
    showANotification(message, timeVisible);
    askingFromDevDashboard = true;
  }

  return credentialsArrayContainsData;
}
const isArrayEmptyBtn = document.getElementById("is-array-empty");
isArrayEmptyBtn.addEventListener("click", does_credentialsArrayContainsData);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Place in the body of this functin the function to test. Use DEBUG button to exercise the function to test.
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function testAFunction() {
  // OK - DEBUG
  console.log(`I am the function tester()`);
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
}
const testAFunctionBtn = document.getElementById("test-a-function");
testAFunctionBtn.addEventListener("click", testAFunction);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// ######################
// FETCHING CREDENTIALS FROM STORAGE
// ######################

// Reload the credentialsRetrieved localstorage mirror variable when App Starts
let credentialsRetrieved;
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function retrieveCredentialsFromLocalStorage() {
  console.log(`I am the function retrieveCredentialsFromLocalStorage()`);
  // OK - Reload the credentialsRetrieved localstorage mirror variable
  credentialsRetrieved = JSON.parse(window.localStorage.getItem("credentials"));
  console.log(`retrieveCredentialsFromLocalStorage return output:`);
  console.log(credentialsRetrieved);
  return credentialsRetrieved;
}
retrieveCredentialsFromLocalStorage(); // Reload the credentialsRetrieved localstorage mirror variable

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function copyToClipboard(e) {
  console.log(`I am the function copyToClipboard();`);
  const textOnViewModeScreen = e.target.previousElementSibling.innerHTML;
  let notVisibleClipboard = document.getElementById("clipboard");
  notVisibleClipboard.value = textOnViewModeScreen;
  notVisibleClipboard.select();
  notVisibleClipboard.setSelectionRange(0, 99999);
  document.execCommand("copy");

  const message = `"${textOnViewModeScreen}"\nCopied to clipboard`;
  showANotification(message, timeVisible);
}
const usualValuesContainer_ul = document.querySelector("#view-usual-values");
const qs_and_asContainer_ul = document.querySelector("#view-qs-and-as");
usualValuesContainer_ul.addEventListener("click", copyToClipboard);
qs_and_asContainer_ul.addEventListener("click", copyToClipboard);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function infoConcealer0() {
  /* 
  // The credentials array is the single object that contains all the App data.
  // The credentials array contains credential objects.
  // Each credential object is the unique set of atributes associated to a distinct website.
  // Also, a credential object contains a secretQAs array. 
  // This secretQAs array contains objects. Each object is a separate pair of a question and its corresponding answer. 
  // A website may require an undetermined amount of Q/A sets, or none at all.
  // Threfore the secretQAs array could contain several objects. 
  // If no Q/A sets are required, the secretQAs array will still be present. However, with no values
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
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function infoConcealer1() {
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

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function infoConcealer2() {
  // MAIN PURPOSE OF THIS APP:
  // This App will be used as a searchable reference of website credentials. It can be useful when a user forgets the necessary credentials to access a website of interest.
  // The user of this App will have the option of providing the value component of all these credentials, and save them permanently. At a latter time, user may search, and retrieve credentials for viewing, modification, or deletion.
  // EXPLANATION OF WHAT IS A CREDENTIAL, AND ITS PURPOSE:
  // A credential (in this App's context) is an object that contains a fixed amount of properties. Each property is defined as consisting of a "designator", an its corresponding value.
  // There will be a unique credential for each website, as defined by combining its 8 usual properties, and its array of ten Question/Answer pairs.// Inside this credential, properties are classified into two distinct categories, namely; "usual properties", and "question/answer pairs".
  // Out of the 8 usual properties, only one (the "Name" designator) is mandatory. All other are optional.
  //Ther will 10 Q-A pairs. None of them mandatory. All of them are optional.
  // Each Q-A pair resides inside an object. Therefore, every one of these 10 objects consist of two properties. ALL these Q-A pair objects will be ordered inside an array. An example Q-A pair object could look like this:
  // {secretQ0: "secretQ", secretA0: "secretA"}.
  // The WebsiteUsualProperties class constructor is defined elsewere in this program. The WebsiteUsualProperties class constructor is used to build the "usual properties" of a credential.
  // Also lsewere in this program, a ASecretQA class is defined, and subsequently used to build an array that hold ten questions and answer pairs.
}

// The WebsiteUsualProperties class constructor is used to build the collection of "usual properties" of a credential.
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
class WebsiteUsualProperties {
  // OK - Instantiate the set of usual properties of a credential
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
// let valuesOfKeys = ["Places", "www.places.com", "jim@domain.com", "jim", "Me&I100%", "7777", "jimrec@domain2.//com", "fork"];
// let newWebsiteUsualProperties1 = new WebsiteUsualProperties(valuesOfKeys);
// console.log(`newWebsiteUsualProperties1:`);
// console.log(newWebsiteUsualProperties1);

// The ASecretQA (secret question and its corresponding answer) class

// The purpose of the ASecretQA class is to build a single Q-A pair object.
// Elsewere in this program, a function will use this class inside a loop to assemble the array that will contain a set of ten objects (10 questions and their corresponding answers).
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
class ASecretQA {
  // Instantiate a Q-A pair object
  constructor([secretQ, secretA]) {
    const namesOfSecretQAKeys = ["secretQ", "secretA"]; // namesOfSecretQAKeys in this scope, defines the two designator components of the two correspondent properties.
    `[{
${namesOfSecretQAKeys[0]}: "${(this.secretQ = secretQ)}",
${namesOfSecretQAKeys[1]}: "${(this.secretA = secretA)}"
}]`;
  }
}
// Testing the ASecretQA (secret question and its corresponding answer) class
// let valuesOfQA = ["Favorite veggie?", "cucumber"];
// let secretQA1 = new ASecretQA(valuesOfQA);
// console.log(`secretQA1:`);
// console.log(SecretQA1);

//  ########
//  APP FUNCTIONALITY STARTS HERE!!
//  ########

//Display a notification for 4 seconds
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const timeVisible = 4000;
function showANotification(message, timeVisible) {
  console.log(`I am the function showANotification()`);

  let writtingArea = document.getElementById("notifications");
  writtingArea.innerHTML = message;
  setTimeout(() => {
    writtingArea.innerHTML = "";
  }, timeVisible);
}

// Create credential object of a new website (newCredential object) and then append new credential object
// to existing credentials object

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function saveCredentialsToLocalStorage(credentials) {
  console.log(`I am the function saveCredentialsToLocalStorage().`);

  console.log(`credentials array I will save is: `);
  console.log(credentials);

  console.log(`Saving to localstorage.`);
  window.localStorage.setItem("credentials", JSON.stringify(credentials));

  console.log(`Synchronizing credentialsRetrieved; locastorage mirror`);
  credentialsRetrieved = credentials.slice();

  //console.log(`saveCredentialsToLocalStorage calling initializeApp();`);
  //initializeApp();

  console.log(
    `Showing notification.\ncredentials array saved to localstorage.`
  );
  // alert(`Congrats!! credentials array was saved to localstorage.`);
  //Display notification for 4 seconds
  const message = `Credentials saved to My Password Stash.`;
  showANotification(message, timeVisible);
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function append_newlyCreatedCredentialTo_credentialsRetrieved(
  newlyCreatedCredential
) {
  console.log(
    `I am the function  append_newlyCreatedCredentialTo_credentialsRetrieved().`
  );
  console.log(`The newlyCreatedCredential I will append is:`);
  console.log(newlyCreatedCredential);

  // STEP 3 - combine all credential objects into a single credentials array:
  // Append the newly created credential object to the credentials array
  console.log(`Now appending`);
  let credentials = credentialsRetrieved.slice();
  credentials.push(newlyCreatedCredential);
  //console.log(`credentials:`);
  //console.log(credentials);
  // improove: refactor to relocate saveCredentialsToLocalStorage() out of here.
  console.log(
    `append_newlyCreatedCredentialTo_credentialsRetrieved() calling saveCredentialsToLocalStorage()`
  );
  saveCredentialsToLocalStorage(credentials);
  console.log(`My return output is:`);
  console.log(credentials);
  return credentials;
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function makeANewCredential() {
  console.log(`I am the function makeANewCredential().`);
  // save credential adding as a new credential
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
  console.log(`makeANewCredential() calling addXtraQA()`);
  let secretQAsArray2 = addXtraQA();
  console.log(`This is the secretQAsArray2`);
  console.log(secretQAsArray2);

  let { ...newCredentialBeingBuilt } = new WebsiteUsualProperties(
    newWebsiteUsualValues
  );
  console.log(`newCredentialBeingBuilt:`);
  console.log(`New Usual Values object:`);
  console.log(newCredentialBeingBuilt);

  if (secretQAsArray2Ready) {
    newCredentialBeingBuilt["secretQAs"] = secretQAsArray2;
    console.log(`Resetting the secretQAsArray2Ready flag.:`);
    secretQAsArray2Ready = false;
    console.log(`secretQAsArray2Ready: ${secretQAsArray2Ready}`);
  }

  // Rename/reset newCredentialBeingBuilt object to credential object
  let { ...newlyCreatedCredential } = newCredentialBeingBuilt;
  console.log(`My returned output is "newlyCreatedCredential":`);
  console.log(newlyCreatedCredential);
  console.log(`Fabrication complete.`);

  return newlyCreatedCredential;
}

//      NOT USED:
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
/* Improove: Add this functionality
function deblanker(undeblankedName) {
  console.log(`I am the function deblanker().`);
  let deblankedName = undeblankedName.trim();
  console.log(`deblankedName`);
  console.log(deblankedName);
  return deblankedName;
}
*/

//##########################################
// COMPLETE FUNCTIONALITY FOR THE GREEN CHECKMARK BUTTON:
//##########################################

// A new credential could come from either Create Mode Screen, or Edit Mode Screen
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function didUserInputTheSiteName() {
  // OK - boolean variable: userProvidedASiteName
  console.log(`I am the function didUserInputTheSiteName().`);

  let userProvidedASiteName;
  let nameValue = document.querySelector("#name").value;
  if (nameValue == "") {
    userProvidedASiteName = false;
    // error message "No name provided".
    console.log(
      `⚠  Sorry. Website name required.\nType the site name and try again.\nThanks for using this App!!`
    );
    // Display message for 4 seconds
    const message = `⚠  Sorry. Website name required.`;
    showANotification(message, timeVisible);
  } else {
    userProvidedASiteName = true;
  }
  return userProvidedASiteName;
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function whoRequestedANewCredential() {
  // A new credential could come from either Create Mode Screen, or Edit Mode Screen
  console.log(`I am the function whoRequestedANewCredential().`);

  let credentialWasRequestedBy = "";

  // Request comming from Add Mode?
  const addModeIndicatorStyle = document.querySelector("#add-indicator").style;
  if (addModeIndicatorStyle.backgroundColor == "green") {
    // Yes. Requested from Add Mode
    credentialWasRequestedBy = "AddMode";
    console.log(`The request is comming from: ${credentialWasRequestedBy}`);
  } else {
    // Request is comming from EDIT MODE!!
    const editModeIndicatorStyle = document.querySelector("#edit-indicator")
      .style;
    if (editModeIndicatorStyle.backgroundColor == "green") {
      credentialWasRequestedBy = "EditMode";
      console.log(`The request is comming from: ${credentialWasRequestedBy}`);
    }
  }
  return credentialWasRequestedBy;
}
// Determine if some website name is already present in the stash
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function isWebsiteNameAlreadyInCredentials() {
  // Determine if some website name is already present in the stash
  console.log(`I am the function isWebsiteNameAlreadyInCredentials();`);

  const siteNameToQuery = document.getElementById("name").value;
  // Improove:
  // let siteNameToSearch = document.getElementById("name").value;
  // IndexOfNameOwner = whatIsThe_indexOfTheCredentialThatOwnsTheName();
  // IndexOfSuccessfulQuery = IndexOfNameOwner;
  queryACredentialBySiteName(siteNameToQuery);
  let IndexOfSuccessfulQuery = JSON.parse(
    window.sessionStorage.getItem("IndexOfSuccessfulQuery")
  );
  console.log(`IndexOfSuccessfulQuery: ${IndexOfSuccessfulQuery}`);
  console.log(`credentialsRetrieved.length: ${credentialsRetrieved.length}`);

  let websiteNameIsInCredentials;
  if (IndexOfSuccessfulQuery == credentialsRetrieved.length) {
    websiteNameIsInCredentials = false;
    console.log(`websiteNameIsInCredentials: ${websiteNameIsInCredentials}`);
  } else {
    websiteNameIsInCredentials = true;
    console.log(`websiteNameIsInCredentials: ${websiteNameIsInCredentials}`);
  }
  window.sessionStorage.clear();
  return websiteNameIsInCredentials;
}
// Discriminate if request for creation for new credential should proceed
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function isRequestForNewCredentialAcceptable() {
  // Discriminate if request for creation for new credential should proceed
  console.log(`I am the function isRequestForNewCredentialAcceptable();`);

  let requestorForANewCredential;
  requestorForANewCredential = whoRequestedANewCredential();
  let websiteNameIsAlreadyInCredentials = isWebsiteNameAlreadyInCredentials();

  let requestForNewCredentialWasAccepted;
  if (
    requestorForANewCredential == "AddMode" &&
    websiteNameIsAlreadyInCredentials == false
  ) {
    requestForNewCredentialWasAccepted = true;
    // This is a request to create from Add Mode
  } else {
    if (
      requestorForANewCredential == "EditMode" &&
      websiteNameIsAlreadyInCredentials == false
    ) {
      requestForNewCredentialWasAccepted = true;
      // This is a request to create from Edit Mode
    }
  }
  if (
    requestorForANewCredential == "AddMode" &&
    websiteNameIsAlreadyInCredentials == true
  ) {
    requestForNewCredentialWasAccepted = false;
    // To create an existing name not allowed
  } else {
    if (
      requestorForANewCredential == "EditMode" &&
      websiteNameIsAlreadyInCredentials == true
    ) {
      requestForNewCredentialWasAccepted = false;
      // This is a request to edit
    }
  }
  return requestForNewCredentialWasAccepted;
}
//  function credentialArchitect() is the entry point for all green checkmark button.
// On approoval of new creations, it direct the system to create a new credential using the data on screen that was entered by the user.
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function credentialArchitect() {
  // Direct the system to create a new credential using the data on screen that was entered by the user
  console.log(`I am the function credentialArchitect();`);

  //Test for no name
  let userProvidedASiteName = didUserInputTheSiteName();
  if (userProvidedASiteName) {
    let requestForNewCredentialWasAccepted = isRequestForNewCredentialAcceptable();
    if (requestForNewCredentialWasAccepted) {
      // alert(`Congrats! Request for new credential accepted.\nWe will create the new credential.`);
      console.log(
        `Congrats! Request for new credential accepted.\n\nWe will create the new credential.\ncredentialArchitect() calling makeANewCredential();`
      );
      const newlyCreatedCredential = makeANewCredential();

      console.log(
        `credentialArchitect() calling append_newlyCreatedCredentialTo_credentialsRetrieved`
      );
      append_newlyCreatedCredentialTo_credentialsRetrieved(
        newlyCreatedCredential
      );
      //Display notification for 4 seconds
      const message = `Success. Saved to My Passwords Stash`;
      showANotification(message, timeVisible);
      clearAllData();
      // Once a credential is saved the stash is no longer empty. Therefore the empty stash warning is not applicable.
      const firstUsageWarningStyle = document.getElementById(
        "first-usage-warning"
      ).style;
      if (firstUsageWarningStyle.display == "block") {
        location.reload();
      }
    } else {
      //Request not for Arquitect, let Updater give it a try.
      console.log(
        `Request not for Arquitect, let Updater give it a try.\ncredentialArchitect() calling credentialUpdater()`
      );
      credentialUpdater();
    }
  }
}
//#################################
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function isRequestToModifyCredentialAcceptable() {
  // Discriminate if request for modification should proceed
  console.log(`I am the function isRequestToModifyCredentialAcceptable();`);

  let requestForModCredentialWasAccepted;
  let requestorForModCredential;
  requestorForModCredential = whoRequestedANewCredential();
  let websiteNameIsAlreadyInCredentials = isWebsiteNameAlreadyInCredentials();

  if (
    requestorForModCredential == "AddMode" &&
    websiteNameIsAlreadyInCredentials == false
  ) {
    requestForModCredentialWasAccepted = false;
    // This is a request to create a new credential
  }

  if (
    requestorForModCredential == "EditMode" &&
    websiteNameIsAlreadyInCredentials == false
  ) {
    requestForModCredentialWasAccepted = false;
    // This is a request to create a new credential
  }

  if (
    requestorForModCredential == "AddMode" &&
    websiteNameIsAlreadyInCredentials == true
  ) {
    requestForModCredentialWasAccepted = false;
    // Duplicate names not allowed
  }

  if (
    requestorForModCredential == "EditMode" &&
    websiteNameIsAlreadyInCredentials == true
  ) {
    requestForModCredentialWasAccepted = true;
    // This is a request to modify
  }
  return requestForModCredentialWasAccepted;
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function deleteCredential() {
  console.log(`I am the function deleteCredential()`);
  // OK - It is deleting fine
  const nameOfSiteToBeDeleted = document.getElementById("name").value;
  // console.log(`userSelectedSiteName:`);
  // console.log(userSelectedSiteName);
  // credentialsRetrieved.length
  for (let index = 0; index < credentialsRetrieved.length; index++) {
    const aCredential = credentialsRetrieved[index];
    if (nameOfSiteToBeDeleted == aCredential.name) {
      console.log(`Name of website to be deleted:`);
      console.log(aCredential.name);

      //DELETE INDEXED CREDENTIAL:
      console.log(`Index of website to delete: ${index}`);
      // Clone credentialsRetrieved
      console.log(`Array before trim:`);
      let arrayBefore = credentialsRetrieved.slice();
      console.log(arrayBefore);
      // Clone again
      let arrayBeingTrimed = arrayBefore.slice();
      // Trim the array
      console.log(`Array after trim:`);
      arrayBeingTrimed.splice(index, 1);
      let arrayAfterTrim = arrayBeingTrimed.slice();
      console.log(arrayAfterTrim);
      // Save credentials to localstorage
      const credentials = arrayAfterTrim.slice();
      saveCredentialsToLocalStorage(credentials);
      // Syncronize the localstorage mirror (global variable)
      credentialsRetrieved = credentials.slice();

      askingFromDevDashboard = false;
      let credentialsArrayContainsData = does_credentialsArrayContainsData();
      if (credentialsArrayContainsData) {
        //Display notification for 4 seconds
        const message = `Success. Credentials deleted.`;
        showANotification(message, timeVisible);
      } else {
        console.log(`⚠ Your Passwords Stash is now empty!!`);
        //alert("⚠ Your Passwords Stash is now empty!!");
        //Display notification for 4 seconds
        const message = `⚠ Your Passwords Stash is now empty!!`;
        showANotification(message, timeVisible);
        // If deleting results in an empty stash, reload to display the pertinent search screen with all correct messages appropriate to the stash state.
        location.reload();
      }

      console.log(`NOT Initializing App!!`); //`Reloading browser tab!!`
      //Initialize App
      //initializeApp();
      //location.reload();
    }
  }
  //}
}
//  function credentialUpdater() only handles the modification requests.
// Direct the system to edit an existing credential using the data on screen that was entered by the user
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function credentialUpdater() {
  console.log(`I am the function credentialUpdater();`);

  //Note: Test for no name already done by credentialArquitect()
  // let userProvidedASiteName = didUserInputTheSiteName();
  // if (userProvidedASiteName) {
  let requestToModifyCredentialWasAccepted = isRequestToModifyCredentialAcceptable();
  if (requestToModifyCredentialWasAccepted) {
    // Modify the credential
    //alert(`Congrats! Request to edit existing credential accepted.\nWe will edit the existing credential.`);
    console.log(
      `Congrats! Request to edit existing credential accepted.\nWe will edit the existing credential..\ncredentialUpdater() calling deleteCredential();`
    );
    // call deleteCredential() to delete old credential
    deleteCredential();
    // call credentialArchitect() to create the new (replacement) credential
    const requestForNewCredentialWasAccepted = true; // To fullfil requirement of credentialArchitect()
    credentialArchitect();
  } else {
    //Request not for Arquitect, let Updater give it a try.
    console.log(
      `Request not for Updater, let exeption Handler give it a try.\ncredentialUpdater() calling forbidenRequestHandler()`
    );
    forbidenRequestHandler();
  }
}
//  function forbidenRequestHandler() only handles the illegal requests.
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function forbidenRequestHandler() {
  console.log(`I am the function forbidenRequestHandler();`);

  //Test for no name
  let userProvidedASiteName = didUserInputTheSiteName();
  if (userProvidedASiteName) {
    let requestForNewCredentialWasAccepted;
    const requestorForANewCredential = whoRequestedANewCredential();
    const websiteNameIsAlreadyInCredentials = isWebsiteNameAlreadyInCredentials();
    if (requestForNewCredentialWasAccepted) {
      // Do nothing
    }
    if (
      requestorForANewCredential == "AddMode" &&
      websiteNameIsAlreadyInCredentials == true
    ) {
      // Error: To create an existing name not allowed
      /*
      alert(
        `⚠ Sorry. Your request to create a new credential was rejected.\nThe website name already exists in Your Password Stash.\nDuplicate names are not allowed.`
      );
      */
      console.log(
        `⚠ Sorry. Your request to create a new credential was rejected.\nThe website name already exists in Your Password Stash.\nDuplicate names are not allowed.`
      );
      //Display notification for 4 seconds
      const message = `⚠ Duplicate names are not allowed!!`;
      showANotification(message, timeVisible);
    }
  }
}
const saveNewOrEditedCredentialBtn = document.querySelector(
  "#save-new-or-edited"
);
saveNewOrEditedCredentialBtn.addEventListener("click", credentialArchitect);
//##########################################
// END OF GREEN CHECKMARK BUTTON FUNCTIONALITY
//##########################################

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Build the secretQAsArray2 by adding 10 instances of the secretQA object to an empty secretQAsArray2 array
let secretQAsArray2;
let secretQAsArray2Ready = false;
function addXtraQA() {
  // OK - Add a new instance of the secretQA object to the secretQAsArray2 array
  console.log(`I am the function addXtraQA()`);

  secretQAsArray2 = [];
  for (let index = 0; index < 10; index++) {
    const questioni = `#question${index}`;
    const answeri = `#answer${index}`;
    // const secretXtraQ = document.querySelectorAll("#question0")[0].value;
    // const secretXtraA = document.querySelectorAll("#answer0")[0].value;
    const secretXtraQ = document.querySelector(questioni).value;
    const secretXtraA = document.querySelector(answeri).value;
    const newWebsiteXtraQAValues = [secretXtraQ, secretXtraA];
    //console.log(`newWebsiteXtraQAValues:`);
    //console.log(newWebsiteXtraQAValues);

    // Create object containing a new secret question and its corresponding answer (newWebsiteQAProperties object)
    let { ...newWebsiteXtraQAProperties } = new ASecretQA(
      newWebsiteXtraQAValues
    );
    console.log(`newWebsiteXtraQAProperties:`);
    console.log(newWebsiteXtraQAProperties);

    // Append new secretQA object to existing secretQAs array
    secretQAsArray2.push(newWebsiteXtraQAProperties);
  }
  secretQAsArray2Ready = true;
  console.log(`My returned output is secretQAsArray2:`);
  console.log(secretQAsArray2);
  console.log(`I turned on the secretQAsArray2Ready flag.:`);
  console.log(secretQAsArray2Ready);

  return secretQAsArray2;
}
// ######################
// FETCHING CREDENTIALS FROM STORAGE
// ######################

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
let userSelectedSiteName;
function selectBestSite() {
  console.log(`I am the function selectBestSite()`);

  userSelectedSiteName = document.getElementById("best-match-site").innerHTML;
  console.log(`userSelectedSiteName for function selectBestSite():`);
  console.log(userSelectedSiteName);
  if (userSelectedSiteName == "") {
    //alert(`"⚠  Nothing to display.\nA website "Name" is required.`);
    //Display notification for 4 seconds
    const message = `⚠ Nothing to display.\nA website "Name" is required.`;
    showANotification(message, timeVisible);
  } else {
    // console.log(`stored best userSelectedSiteName:`);
    // console.log(userSelectedSiteName);
    spoolToDisplay();
  }
}
const bestSiteBtn = document.getElementById("best-eyes-button");
bestSiteBtn.addEventListener("focus", selectBestSite);
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function selectMiddleSite() {
  console.log(`I am the function selectMiddleSite()`);

  userSelectedSiteName = document.getElementById("middle-match-site").innerHTML;
  if (userSelectedSiteName == "") {
    //alert(`"⚠  Nothing to display. Name" required.`);
    //Display notification for 4 seconds
    const message = `⚠ Nothing to display.\nA website "Name" is required.`;
    showANotification(message, timeVisible);
  } else {
    // console.log(`stored middle userSelectedSiteName:`);
    // console.log(userSelectedSiteName);
    spoolToDisplay();
  }
}
const middleSiteBtn = document.getElementById("middle-eyes-button");
middleSiteBtn.addEventListener("focus", selectMiddleSite);
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function selectLowestSite() {
  console.log(`I am the function selectLowestSite()`);

  userSelectedSiteName = document.getElementById("lowest-match-site").innerHTML;
  if (userSelectedSiteName == "") {
    //alert(`"⚠  Nothing to display. Name" required.`);
    //Display notification for 4 seconds
    const message = `⚠ Nothing to display.\nA website "Name" is required.`;
    showANotification(message, timeVisible);
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

// Improove: Split this function in two functions
//function whatIsThe_indexOfTheCredentialThatOwnsTheName(){

//};
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function queryACredentialBySiteName(siteNameToQuery) {
  console.log(`I am the function queryACredentialBySiteName(siteNameToQuery)`);

  // Is credentials array ready?
  console.log(`Calling does_credentialsArrayContainsData()`);
  askingFromDevDashboard = false;
  let credentialsArrayContainsData = does_credentialsArrayContainsData();
  // Note: credentialsRetrieved is a global variable that is refreshed by
  //the function retrieveCredentialsFromLocalStorage().

  let siteNameToQueryFound;
  let aCredential = {};
  let credentialNeeded;
  if (credentialsArrayContainsData) {
    console.log(`siteNameToQuery:`);
    console.log(siteNameToQuery);
    credentialsRetrieved.length;
    let index;
    for (let index = 0; index < credentialsRetrieved.length; index++) {
      aCredential = credentialsRetrieved[index];
      if (aCredential.name == siteNameToQuery) {
        siteNameToQueryFound = true;
        credentialNeeded = aCredential;
        console.log(`credentialNeeded.name:`);
        console.log(credentialNeeded.name);
        // save index to session storage
        window.sessionStorage.setItem(
          "IndexOfSuccessfulQuery",
          JSON.stringify(index)
        );
      }
    }
    if (siteNameToQueryFound) {
      // Do nothing
    } else {
      siteNameToQueryFound = false;
      console.log(
        `The "${siteNameToQuery}" website name, \ndoes not exist in My Passwords Stash.`
      );
      //alert(`The "${siteNameToQuery}" website name, \ndoes not exist in My Passwords Stash.`);
      // save index to session storage
      console.log(
        `Saving credentialsRetrieved.length = ${credentialsRetrieved.length} to sessionstorage`
      );
      window.sessionStorage.setItem(
        "IndexOfSuccessfulQuery",
        JSON.stringify(credentialsRetrieved.length)
      );
      clearSearches();
    }
  } else {
    console.log(`There was an anomally with the localstorage content.`);
    credentialNeeded = null;
    window.sessionStorage.setItem(
      "IndexOfSuccessfulQuery",
      JSON.stringify(credentialsRetrieved.length)
    );
    const firstUsageWarningStyle = document.getElementById(
      "first-usage-warning"
    ).style;
    firstUsageWarningStyle.backgroundColor = "#00243f";
    switchToCreateModeScreen();
    updateModeIndicatorColors();
    createModeAnouncementStyle.display = "block";
  }
  return credentialNeeded;
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function spoolToDisplay() {
  console.log(`I am the function spoolToDisplay()`);

  let siteNameToQuery = userSelectedSiteName;
  let credentialNeeded = queryACredentialBySiteName(siteNameToQuery);
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

  //############## values for view mode: #############################
  document.getElementById("view-name").innerHTML = credentialNeeded.name;
  document.getElementById("view-website").innerHTML = credentialNeeded.website;
  document.getElementById("view-email").innerHTML = credentialNeeded.email;
  document.getElementById("view-username").innerHTML =
    credentialNeeded.username;
  document.getElementById("view-password").innerHTML =
    credentialNeeded.password;
  document.getElementById("view-pin").innerHTML = credentialNeeded.pin;
  document.getElementById("view-recovery-email").innerHTML =
    credentialNeeded.recoveryEmail;
  document.getElementById("view-secret-image").innerHTML =
    credentialNeeded.secretImage;

  document.getElementById("view-question0").innerHTML =
    credentialNeeded.secretQAs[0].secretQ;
  document.getElementById("view-answer0").innerHTML =
    credentialNeeded.secretQAs[0].secretA;

  document.getElementById("view-question1").innerHTML =
    credentialNeeded.secretQAs[1].secretQ;
  document.getElementById("view-answer1").innerHTML =
    credentialNeeded.secretQAs[1].secretA;

  document.getElementById("view-question2").innerHTML =
    credentialNeeded.secretQAs[2].secretQ;
  document.getElementById("view-answer2").innerHTML =
    credentialNeeded.secretQAs[2].secretA;

  document.getElementById("view-question3").innerHTML =
    credentialNeeded.secretQAs[3].secretQ;
  document.getElementById("view-answer3").innerHTML =
    credentialNeeded.secretQAs[3].secretA;

  document.getElementById("view-question4").innerHTML =
    credentialNeeded.secretQAs[4].secretQ;
  document.getElementById("view-answer4").innerHTML =
    credentialNeeded.secretQAs[4].secretA;

  document.getElementById("view-question5").innerHTML =
    credentialNeeded.secretQAs[5].secretQ;
  document.getElementById("view-answer5").innerHTML =
    credentialNeeded.secretQAs[5].secretA;

  document.getElementById("view-question6").innerHTML =
    credentialNeeded.secretQAs[6].secretQ;
  document.getElementById("view-answer6").innerHTML =
    credentialNeeded.secretQAs[6].secretA;

  document.getElementById("view-question7").innerHTML =
    credentialNeeded.secretQAs[7].secretQ;
  document.getElementById("view-answer7").innerHTML =
    credentialNeeded.secretQAs[7].secretA;

  document.getElementById("view-question8").innerHTML =
    credentialNeeded.secretQAs[8].secretQ;
  document.getElementById("view-answer8").innerHTML =
    credentialNeeded.secretQAs[8].secretA;

  document.getElementById("view-question9").innerHTML =
    credentialNeeded.secretQAs[9].secretQ;
  document.getElementById("view-answer9").innerHTML =
    credentialNeeded.secretQAs[9].secretA;
}
//######################
// Search Bar behaviour:
//######################

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function isCredentialsSearchable() {
  console.log(`I am the function isCredentialsSearchable()`);

  if (credentialsRetrieved == null || credentialsRetrieved.length == 0) {
    // NO. credentials is not searchable
    switchToCreateModeScreen();
  } else {
    // YES. credentials is searchable
    switchToSearchModeScreen();
    clearSearches();
    findClosestMatches();
  }
}
const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("click", isCredentialsSearchable);
searchBar.addEventListener("keyup", isCredentialsSearchable);
searchBar.addEventListener("focus", isCredentialsSearchable);

// Behaviour of little button inside search bar, that is used to clear the search bar
const clrSearchBarBtn = document.getElementById("clr-search-bar");
clrSearchBarBtn.addEventListener("click", clrSearchBar);
clrSearchBarBtn.addEventListener("click", clearSearches);
clrSearchBarBtn.addEventListener("click", switchToSearchModeScreen);
clrSearchBarBtn.addEventListener("click", hideSearchResults);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Function that handles backspace and delete keystrokes.
searchBar.addEventListener("keydown", function (e) {
  console.log(
    `Ì am the function that handles backspace and delete keystrokes.`
  );

  const keyPressed = e.key;
  const searchTerm = document.getElementById("search-bar").value;
  console.log(`What is the search term?\nIt is:`);
  console.log(searchTerm);
  if (
    (keyPressed === "Backspace" || keyPressed === "Delete") &&
    searchTerm == ""
  ) {
    console.log(`Will clear searches now.`);
    clearSearches();
    console.log(`Finished with backspace/delete handler.`);
  } else {
    //do nothing
  }
});

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function findClosestMatches() {
  console.log(`I am the function function findClosest Matches()`);
  // This whole function is executed once for every keystroke

  // Grab search term on every keystroke and...
  let searchTerm = document.getElementById("search-bar").value.toLowerCase();
  console.log(`searchTerm:`);
  console.log(searchTerm);
  if (searchTerm == "") {
    clearSearches();
    hideSearchResults();
  } else {
    showSearchResults();
    // clone credentials array
    let credentials = credentialsRetrieved.slice();

    // Grab all site names in credentials array
    let allWebsiteNamesInCredentials = [];
    for (let index = 0; index < credentials.length; index++) {
      const aCredential = credentials[index];
      allWebsiteNamesInCredentials.push(aCredential.name);
    }
    // * console.log(`allWebsiteNamesInCredentials:`);
    // * console.log(allWebsiteNamesInCredentials);

    // convert to lower case every single character typed in search bar
    let allSitesLowercased = [];
    for (let index = 0; index < allWebsiteNamesInCredentials.length; index++) {
      const element = allWebsiteNamesInCredentials[index].toLowerCase();
      allSitesLowercased.push(element);
    }
    // * console.log(`allWebsiteNamesInCredentials lowercased:`);
    // * console.log(allSitesLowercased);

    // select names that contain cumulative characters cluster (searchTerm)
    let matchedSiteNames = [];
    for (let index = 0; index < allSitesLowercased.length; index++) {
      const aLoweredcasedSiteName = allSitesLowercased[index];
      if (aLoweredcasedSiteName.indexOf(searchTerm) !== -1) {
        matchedSiteNames.push(allWebsiteNamesInCredentials[index]);
      }
    }
    // Greb the first three matches
    for (let index = 0; index < 3; index++) {
      const element = matchedSiteNames[index];
      if (element == undefined) {
        matchedSiteNames.push(" - empty - ");
      }
    }
    console.log(`matchedSiteNames w/ original casing:`);
    console.log(matchedSiteNames);

    if (matchedSiteNames[0] == " - empty - ") {
      hideBestMatchResult();
    } else {
      document.getElementById(
        "best-match-site"
      ).innerHTML = `${matchedSiteNames[0]}`;
      showBestMatchResult();
    }

    if (matchedSiteNames[1] == " - empty - ") {
      hidemiddleMatchResult();
    } else {
      document.getElementById(
        "middle-match-site"
      ).innerHTML = `${matchedSiteNames[1]}`;
      showmiddleMatchResult();
    }

    if (matchedSiteNames[2] == " - empty - ") {
      hidelowestMatchResult();
    } else {
      document.getElementById(
        "lowest-match-site"
      ).innerHTML = `${matchedSiteNames[2]}`;
      showlowestMatchResult();
    }
  }
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function dummyConcealer6() {
  function clrSearchesOnBarEmpty() {
    console.log(`I am the function clrSearchesOnBarEmpty()`);

    // search bar should not get focus by clicking outside search bar, if credentials array is empty
    if (credentialsRetrieved == null || credentialsRetrieved.length == 0) {
      console.log(`credentialsRetrieved == null?`);
      console.log(credentialsRetrieved == null);
      console.log(`credentialsRetrieved.length:`);
      console.log(credentialsRetrieved.length);
      // Do nothing
    } else {
      const searchBox = document.getElementById("search-bar");
      searchBox.value = "";
      searchBox.focus();
      //clearSearches();
    }
  }
  const appMainWrapperClicked = document.getElementById("main-wrapper");
  appMainWrapperClicked.addEventListener("click", clrSearchesOnBarEmpty);
}
// Clear search results if click on empty search bar
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function clrSearchResults() {
  console.log(`I am the function clrSearchResults()`);

  const searchTerm = document.getElementById("search-bar").value;
  if (searchTerm == "") {
    clearSearches();
  }
}
searchBar.addEventListener("click", clrSearchResults);

// Relocated function:
/*
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function isCredentialsSearchable() {
  if (credentialsRetrieved == null || credentialsRetrieved.length == 0) {
    // NO. credentials is not searchable
    switchToCreateModeScreen();
  } else {
    // YES. credentials is searchable
    switchToSearchModeScreen();
    clearSearches();
    findClosestMatches();
  }
}

*/
//###########################################################
//###########################################################

// View Mode
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function switchToViewModeScreen() {
  console.log(`I am the function switchToViewModeScreen()`);

  editToolbarStyle.display = "flex";
  searchModeAnouncementStyle.display = "none";
  viewModeAnouncementStyle.display = "block";
  editModeAnouncementStyle.display = "none";
  createModeAnouncementStyle.display = "none";
  const cancelChangesBtnStyle = document.getElementById("cancel-changes").style;
  cancelChangesBtnStyle.display = "none";
  const deleteACredentialBtnStyle = document.getElementById("delete-credential")
    .style;
  deleteACredentialBtnStyle.display = "none";
  const saveNewOrEditedCredentialBtnStyle = document.getElementById(
    "save-new-or-edited"
  ).style;
  saveNewOrEditedCredentialBtnStyle.display = "none";
  hideSearchBox();
  blurSearchBar();
  hideSearchResults();
  clearSearches();
  quitEditMode();
  quitAddMode();
  showBoxboxes();
  doNotDisplayEmptyValues();
  hideAllDataFields();
  showAllViewDataFields();
  updateModeIndicatorColors();

  if (document.querySelector("#search-div").style.display == "flex") {
    document.querySelector("#search-mode-toggle").style.color = "green";
    searchDivState = true;
  } else {
    document.querySelector("#search-mode-toggle").style.color = "red";
    searchDivState = false;
  }

  let eyesIconsArray = [];
  const eyesIconsCollection = document.getElementsByClassName("eyes-icon");
  eyesIconsArray = Array.from(eyesIconsCollection);

  if (bestMatchFlag) {
    const bestMatchBtnStyle = document.getElementById("best-eyes-button").style;
    const eyesIcon0Style = eyesIconsArray[0].style;
    bestMatchBtnStyle.backgroundColor = "white"; //#dddda4
    eyesIcon0Style.backgroundColor = "white"; // #dddda4
    eyesIcon0Style.color = "#00243f";
    bestMatchFlag = false;
  }

  if (middleMatchFlag) {
    const middleMatchBtnStyle = document.getElementById("middle-eyes-button")
      .style;
    const eyesIcon1Style = eyesIconsArray[1].style;
    middleMatchBtnStyle.backgroundColor = "white";
    eyesIcon1Style.backgroundColor = "white";
    eyesIcon1Style.color = "#00243f";
    middleMatchFlag = false;
  }

  if (lowestMatchFlag) {
    const lowestMatchBtnStyle = document.getElementById("lowest-eyes-button")
      .style;
    const eyesIcon2Style = eyesIconsArray[2].style;
    lowestMatchBtnStyle.backgroundColor = "white";
    eyesIcon2Style.backgroundColor = "white";
    eyesIcon2Style.color = "#00243f";
    lowestMatchFlag = false;
  }
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function turnOffBestEyes() {
  console.log(`I am the function turnOffBestEyes()`);

  let eyesIconsArray = [];
  const eyesIconsCollection = document.getElementsByClassName("eyes-icon");
  eyesIconsArray = Array.from(eyesIconsCollection);

  const bestMatchBtnStyle = document.getElementById("best-eyes-button").style;
  const eyesIcon0Style = eyesIconsArray[0].style;
  bestMatchBtnStyle.border = "1px solid #00243f";
  bestMatchBtnStyle.backgroundColor = "#a3acb1"; //#dddda4
  eyesIcon0Style.backgroundColor = "#a3acb1"; // #dddda4
  eyesIcon0Style.color = "#00243f";
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function turnOffMiddleEyes() {
  console.log(`I am the function turnOffMiddleEyes()`);

  let eyesIconsArray = [];
  const eyesIconsCollection = document.getElementsByClassName("eyes-icon");
  eyesIconsArray = Array.from(eyesIconsCollection);

  const middleMatchBtnStyle = document.getElementById("middle-eyes-button")
    .style;
  const eyesIcon1Style = eyesIconsArray[1].style;
  middleMatchBtnStyle.border = "1px solid #00243f";
  middleMatchBtnStyle.backgroundColor = "#a3acb1"; //#dddda4
  eyesIcon1Style.backgroundColor = "#a3acb1"; // #dddda4
  eyesIcon1Style.color = "#00243f";
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function turnOffLowestEyes() {
  console.log(`I am the function turnOffLowestEyes()`);

  let eyesIconsArray = [];
  const eyesIconsCollection = document.getElementsByClassName("eyes-icon");
  eyesIconsArray = Array.from(eyesIconsCollection);

  const lowestMatchBtnStyle = document.getElementById("lowest-eyes-button")
    .style;
  const eyesIcon2Style = eyesIconsArray[2].style;
  lowestMatchBtnStyle.border = "1px solid #00243f";
  lowestMatchBtnStyle.backgroundColor = "#a3acb1"; //#dddda4
  eyesIcon2Style.backgroundColor = "#a3acb1"; // #dddda4
  eyesIcon2Style.color = "#00243f";
}
// #########################################################

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
let bestMatchFlag;
let middleMatchFlag;
let lowestMatchFlag;

function viewBestMatch() {
  console.log(`I am the function viewBestMatch()`);

  console.log(`credentialsRetrieved for function viewBestMatch():`);
  console.log(credentialsRetrieved);
  if (credentialsRetrieved == null) {
    switchToCreateModeScreen();
    updateModeIndicatorColors();
  } else {
    if (credentialsRetrieved.length == 0) {
      switchToCreateModeScreen();
      updateModeIndicatorColors();
    }
    bestMatchFlag = true;
    turnOffMiddleEyes();
    turnOffLowestEyes();
    switchToViewModeScreen();
    updateModeIndicatorColors();
  }
}
const bestMatchBtn = document.getElementById("best-eyes-button");
bestMatchBtn.addEventListener("click", viewBestMatch);
// **********************************************************
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function viewMiddleMatch() {
  console.log(`I am the function viewMiddleMatch()`);

  if (credentialsRetrieved == null) {
    switchToCreateModeScreen();
    updateModeIndicatorColors();
  } else {
    if (credentialsRetrieved.length == 0) {
      switchToCreateModeScreen();
      updateModeIndicatorColors();
    }
    middleMatchFlag = true;
    turnOffBestEyes();
    turnOffLowestEyes();
    switchToViewModeScreen();
    updateModeIndicatorColors();
  }
}
const middleMatchBtn = document.getElementById("middle-eyes-button");
middleMatchBtn.addEventListener("click", viewMiddleMatch);
// **********************************************************
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function viewLowestMatch() {
  console.log(`I am the function viewLowestMatch()`);

  if (credentialsRetrieved == null) {
    switchToCreateModeScreen();
    updateModeIndicatorColors();
  } else {
    if (credentialsRetrieved.length == 0) {
      switchToCreateModeScreen();
      updateModeIndicatorColors();
    }
    lowestMatchFlag = true;
    turnOffBestEyes();
    turnOffMiddleEyes();
    switchToViewModeScreen();
    updateModeIndicatorColors();
  }
}
const lowestMatchBtn = document.getElementById("lowest-eyes-button");
lowestMatchBtn.addEventListener("click", viewLowestMatch);
// #########################################################

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
let devState = false;
function toggleDevDashboar() {
  console.log(`Iam the function toggleDevDashboar()`);

  const devToolbarStyle = document.getElementById("debug-buttons").style;
  const devStatusPanelStyle = document.getElementById("mode-indicators").style;
  const toggleDevDashboardBtnStyle = document.getElementById("dev-mode-toggle")
    .style;
  if (devState) {
    // Hide Developer dashboard
    devToolbarStyle.display = "none";
    devStatusPanelStyle.display = "none";
    toggleDevDashboardBtnStyle.color = "red";
    devState = false;
    console.log(`devState: ${devState}`);
  } else {
    // Show developer dashboard
    devToolbarStyle.display = "flex";
    devStatusPanelStyle.display = "flex";
    toggleDevDashboardBtnStyle.color = "green";
    devState = true;
    console.log(`devState: ${devState}`);
  }
}
const toggleDevDashboardBtn = document.getElementById("dev-mode-toggle");
toggleDevDashboardBtn.addEventListener("click", toggleDevDashboar);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
let searchModeAnouncementStyle = document.getElementById(
  "search-mode-anouncement"
).style;
let viewModeAnouncementStyle = document.getElementById("view-mode-anouncement")
  .style;
let editModeAnouncementStyle = document.getElementById("edit-mode-anouncement")
  .style;
let createModeAnouncementStyle = document.getElementById(
  "create-mode-anouncement"
).style;
let editToolbarStyle = document.getElementById("edit-toolbar").style;

function updateModeIndicatorColors() {
  console.log(`I am the function updateModeIndicatorColors()`);

  const searchModeIndicatorStyle = document.querySelector("#search-indicator")
    .style;
  const viewModeIndicatorStyle = document.querySelector("#view-indicator")
    .style;
  const addModeIndicatorStyle = document.querySelector("#add-indicator").style;
  const editModeIndicatorStyle = document.querySelector("#edit-indicator")
    .style;

  if (searchModeAnouncementStyle.display == "block") {
    searchModeIndicatorStyle.backgroundColor = "green";
    searchModeIndicatorStyle.color = "white";
  } else {
    searchModeIndicatorStyle.backgroundColor = "red";
    searchModeIndicatorStyle.color = "black";
  }

  if (viewModeAnouncementStyle.display == "block") {
    viewModeIndicatorStyle.backgroundColor = "green";
    viewModeIndicatorStyle.color = "white";
  } else {
    viewModeIndicatorStyle.backgroundColor = "red";
    viewModeIndicatorStyle.color = "black";
  }

  if (createModeAnouncementStyle.display == "block") {
    addModeIndicatorStyle.backgroundColor = "green";
    addModeIndicatorStyle.color = "white";
  } else {
    addModeIndicatorStyle.backgroundColor = "red";
    addModeIndicatorStyle.color = "black";
  }

  if (editModeAnouncementStyle.display == "block") {
    editModeIndicatorStyle.backgroundColor = "green";
    editModeIndicatorStyle.color = "white";
  } else {
    editModeIndicatorStyle.backgroundColor = "red";
    editModeIndicatorStyle.color = "black";
  }
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function initializeApp() {
  console.log(`I am the function initializeApp();`);

  const firstUsageWarningStyle = document.getElementById("first-usage-warning")
    .style;
  const searchBox = document.querySelector("#search-bar");

  if (credentialsRetrieved == null || credentialsRetrieved.length == 0) {
    clearSearches();
    clearAllData();
    hideSearchResults();
    searchModeAnouncementStyle.display = "none";
    viewModeAnouncementStyle.display = "none";
    editModeAnouncementStyle.display = "none";
    createModeAnouncementStyle.display = "block";
    firstUsageWarningStyle.display = "block";
    updateModeIndicatorColors();

    switchToCreateModeScreen();
    searchBox.blur();
  } else {
    quitAddMode();
    clearSearches();
    clearAllData();
    firstUsageWarningStyle.display = "none";
    searchModeAnouncementStyle.display = "block";
    viewModeAnouncementStyle.display = "none";
    editModeAnouncementStyle.display = "none";
    createModeAnouncementStyle.display = "none";
    searchBox.value = "";
    updateModeIndicatorColors();
    switchToSearchModeScreen();
    searchBox.focus();
    hideSearchResults();
  }
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
window.onload = function () {
  console.log(`I am the function window.onload()`);

  initializeApp();
};
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function clrSearchBar() {
  console.log(`I am the function clrSearchBar()`);

  const searchBox = document.getElementById("search-bar");
  searchBox.value = "";
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function hideSearchBox() {
  console.log(`I am the function hideSearchBox()`);

  const searchBoxStyle = document.getElementById("search-div").style;
  searchBoxStyle.display = "none";
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function showSearchBox() {
  console.log(`I am the function showSearchBox()`);

  const searchBoxStyle = document.getElementById("search-div").style;
  searchBoxStyle.display = "flex";
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function hideBestMatchResult() {
  console.log(`I am the function hideBestMatchResult()`);

  const bestMatchResultStyle = document.getElementById("best-match-site")
    .parentElement.style;
  bestMatchResultStyle.display = "none";
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function hidemiddleMatchResult() {
  console.log(`I am the function hidemiddleMatchResult()`);

  const middleMatchResultStyle = document.getElementById("middle-match-site")
    .parentElement.style;
  middleMatchResultStyle.display = "none";
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function hidelowestMatchResult() {
  console.log(`I am the function hidelowestMatchResult()`);

  const lowestMatchResultStyle = document.getElementById("lowest-match-site")
    .parentElement.style;
  lowestMatchResultStyle.display = "none";
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function showBestMatchResult() {
  console.log(`I am the function showBestMatchResult()`);

  const bestMatchResultStyle = document.getElementById("best-match-site")
    .parentElement.style;
  bestMatchResultStyle.display = "flex";
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function showmiddleMatchResult() {
  console.log(`I am the function showmiddleMatchResult()`);

  const middleMatchResultStyle = document.getElementById("middle-match-site")
    .parentElement.style;
  middleMatchResultStyle.display = "flex";
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function showlowestMatchResult() {
  console.log(`I am the function showlowestMatchResult()`);

  const lowestMatchResultStyle = document.getElementById("lowest-match-site")
    .parentElement.style;
  lowestMatchResultStyle.display = "flex";
}
// The following two functions to hide or show the searchs results display region
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function hideSearchResults() {
  console.log(`I am the function hideSearchResults()`);

  const searchMatchesStyle = document.getElementById("matches").style;
  searchMatchesStyle.display = "none";
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function showSearchResults() {
  console.log(`I am the function showSearchResults()`);

  const searchMatchesStyle = document.getElementById("matches").style;
  searchMatchesStyle.display = "block";
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function hideAllDataFields() {
  console.log(`I am the function hideAllDataFields()`);

  // OK
  const allDataFieldsParent = document.getElementById("details");
  const allQAsParent = document.getElementById("qs-and-as");
  const h5Tag = document.getElementById("qa-hether").style;
  //const allDataFieldsArray = Array.from(allDataFieldsCollection);
  allDataFieldsParent.style.display = "none";
  allQAsParent.style.display = "none";
  h5Tag.display = "none";
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function hideAllViewDataFields() {
  console.log(`I am the function hideAllViewDataFields()`);

  // OK
  const allViewDataFieldsParent = document.getElementById("view-usual-values");
  const allViewQAsParent = document.getElementById("view-qs-and-as");
  const h5Tag = document.getElementById("qa-hether").style;
  //const allDataFieldsArray = Array.from(allDataFieldsCollection);
  allViewDataFieldsParent.style.display = "none";
  allViewQAsParent.style.display = "none";
  h5Tag.display = "none";
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function showAllDataFields() {
  console.log(`I am the function showAllDataFields()`);

  // OK
  const allDataFieldsParent = document.getElementById("details");
  const allQAsParent = document.getElementById("qs-and-as");
  const h5Tag = document.getElementById("qa-hether").style;
  allDataFieldsParent.style.display = "block";
  allQAsParent.style.display = "block";
  h5Tag.display = "block";
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function showAllViewDataFields() {
  // OK
  console.log(`I am the function showAllViewDataFields()`);

  const allViewDataFieldsParent = document.getElementById("view-usual-values");
  const allViewQAsParent = document.getElementById("view-qs-and-as");
  const h5Tag = document.getElementById("qa-hether").style;
  //const allDataFieldsArray = Array.from(allDataFieldsCollection);
  allViewDataFieldsParent.style.display = "block";
  allViewQAsParent.style.display = "block";
  h5Tag.display = "block";
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function switchToSearchModeScreen() {
  console.log(`I am the function switchToSearchModeScreen()`);

  const searchBarStyle = document.getElementById("search-bar").style;
  editToolbarStyle.display = "none";
  searchBarStyle.outline = "none";
  document.getElementById("search-bar").focus();

  searchModeAnouncementStyle.display = "block";
  viewModeAnouncementStyle.display = "none";
  editModeAnouncementStyle.display = "none";
  createModeAnouncementStyle.display = "none";

  showSearchResults();
  turnOffBestEyes();
  turnOffMiddleEyes();
  turnOffLowestEyes();
  quitEditMode();
  quitAddMode();
  hideBoxboxes();
  quit_innerHTMLdata();
  hideAllDataFields();
  hideAllViewDataFields();
  showSearchBox();
  updateModeIndicatorColors();
  if (searchDivState) {
    // Do nothing
  } else {
    toggleSearchDiv();
  }
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
let searchDivState;
function toggleSearchDiv() {
  console.log(`Iam the function toggleSearchDiv()`);

  if (searchModeAnouncementStyle.display == "block") {
    // Do nothing
  } else if (
    document.getElementById("first-usage-warning").style.display == "block"
  ) {
    // Do nothing
  } else {
    const searchDivStyle = document.getElementById("search-div").style;
    const toggleSearchDivBtnStyle = document.getElementById(
      "search-mode-toggle"
    ).style;
    if (searchDivState) {
      // Hide search device
      searchDivStyle.display = "none";
      toggleSearchDivBtnStyle.color = "red";
      searchDivState = false;
      console.log(`searchDivState: ${searchDivState}`);
    } else {
      // Show search device
      searchDivStyle.display = "flex";
      toggleSearchDivBtnStyle.color = "green";
      searchDivState = true;
      document.getElementById("search-bar").focus();
      console.log(`searchDivState: ${searchDivState}`);
    }
  }
  // If stash is empty App wont switch to search mode. it must assert creation mode focussing the name field
  const firstUsageWarningStyle = document.getElementById("first-usage-warning")
    .style;
  if (firstUsageWarningStyle.display == "block") {
    document.querySelector("#name").focus();
  }
}
const toggleSearchDivBtn = document.getElementById("search-mode-toggle");
toggleSearchDivBtn.addEventListener("click", toggleSearchDiv);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function blurSearchBar() {
  console.log(`I am the function blurSearchBar()`);

  document.getElementById("search-bar").blur();
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function switchToEditModeScreen() {
  console.log(`I am the function switchToEditModeScreen()`);

  if (
    document.querySelector("#edit-indicator").style.backgroundColor !== "green"
  ) {
    // Not green = not in search mode. Therefore, switch to search mode screen.
    editToolbarStyle.display = "flex";
    const pencilIconStyle = document.getElementById("pencil-icon").style;
    const pencilBtnStyle = document.getElementById("editCredential").style;
    pencilIconStyle.color = "#00243f";
    pencilBtnStyle.border = "1px solid white";
    pencilIconStyle.backgroundColor = "white";
    pencilBtnStyle.backgroundColor = "white";
    pencilBtnStyle.outline = "none";

    searchModeAnouncementStyle.display = "none";
    viewModeAnouncementStyle.display = "none";
    editModeAnouncementStyle.display = "block";
    createModeAnouncementStyle.display = "none";
    const cancelChangesBtnStyle = document.getElementById("cancel-changes")
      .style;
    cancelChangesBtnStyle.display = "block";
    const deleteACredentialBtnStyle = document.getElementById(
      "delete-credential"
    ).style;
    deleteACredentialBtnStyle.display = "block";
    const saveNewOrEditedCredentialBtnStyle = document.getElementById(
      "save-new-or-edited"
    ).style;
    saveNewOrEditedCredentialBtnStyle.display = "block";

    let nameInputField = document.querySelector("#name");
    nameInputField.focus();
    blurSearchBar();
    hideSearchBox();
    hideSearchResults();
    clearSearches();
    quitAddMode();
    showAllDataFields();
    hideBoxboxes();
    quit_innerHTMLdata();
    updateModeIndicatorColors();

    if (document.getElementById("search-div").style.display == "flex") {
      document.querySelector("#search-mode-toggle").style.color = "green";
      searchDivState = true;
      document.getElementById("search-bar").focus();
    } else {
      document.querySelector("#search-mode-toggle").style.color = "red";
      searchDivState = false;
    }
  } else {
    // Is green = already in search mode. Do nothing, and remain in search mode screen
  }
}
const edit = document.getElementById("editCredential");
edit.addEventListener("click", switchToEditModeScreen);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function quitEditMode() {
  console.log(`I am the function quitEditMode()`);

  const pencilIconStyle = document.getElementById("pencil-icon").style;
  const pencilBtnStyle = document.getElementById("editCredential").style;
  pencilIconStyle.color = "#00243f";
  pencilBtnStyle.border = "1px solid #00243f";
  pencilIconStyle.backgroundColor = "#a3acb1";
  pencilBtnStyle.backgroundColor = "#a3acb1";
  updateModeIndicatorColors();
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const boxboxBtnsCollection = document.getElementsByClassName("a-boxbox-button");
const boxboxBtnsArray = Array.from(boxboxBtnsCollection);
function hideBoxboxes() {
  console.log(`I am the function hideBoxboxes()`);

  for (let index = 0; index < boxboxBtnsArray.length; index++) {
    const boxboxBtn = boxboxBtnsArray[index];
    boxboxBtn.style.display = "none";
  }
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function doNotDisplayEmptyValues() {
  console.log(`I am the function doNotDisplayEmptyValues()`);

  // Grab all span elements used as property values containers. They all share the 'value-container-span' class
  let collectionOfAllValueContainer_spans = document.getElementsByClassName(
    "value-container-span"
  );

  for (
    let index = 0;
    index < collectionOfAllValueContainer_spans.length;
    index++
  ) {
    // Fetch all these span value containers one at a time
    const a_spanElement = collectionOfAllValueContainer_spans[index];
    // Extract the atributes (unique names) of the id's one at a time
    const the_spanUniqueIdValue = a_spanElement.id;
    // Use id so obtained to determine it's parent element, and prepare a variable to apply a style to the parent
    const spanParentStyle = document.getElementById(the_spanUniqueIdValue)
      .parentElement.style;
    // Also grab text in container span
    const spanTextContent = document.getElementById(the_spanUniqueIdValue)
      .innerHTML;
    //console.log(the_spanUniqueIdValue);
    // Spans with no text wont show on screen. Spans with content will show on screen.
    if (spanTextContent == "") {
      spanParentStyle.display = "none";
    } else {
      spanParentStyle.display = "flex";
    }
  }
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function quit_innerHTMLdata() {
  console.log(`I am the function quit_innerHTMLdata()`);

  let viewUsualDataStyle = document.querySelector("#view-usual-values").style;
  viewUsualDataStyle.display = "none";
  let viewQAataStyle = document.querySelector("#view-qs-and-as").style;
  viewQAataStyle.display = "none";
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function showBoxboxes() {
  console.log(`I am the function showBoxboxes()`);

  for (let index = 0; index < boxboxBtnsArray.length; index++) {
    const boxboxBtn = boxboxBtnsArray[index];
    boxboxBtn.style.display = "block";
  }
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function switchToCreateModeScreen() {
  console.log(`I am the function switchToCreateModeScreen()`);

  // Show Buttons Toolbar
  editToolbarStyle.display = "flex";

  // Focus on the Create Button
  const plusIconStyle = document.getElementById("plus-icon").style;
  const plusBtnStyle = document.getElementById("addCredential").style;
  plusIconStyle.color = "#00243f";
  plusIconStyle.backgroundColor = "white";
  plusBtnStyle.backgroundColor = "white";
  plusBtnStyle.outline = "none";

  // Show The App Operating Mode Tittle and suppress all other tittles
  searchModeAnouncementStyle.display = "none";
  viewModeAnouncementStyle.display = "none";
  editModeAnouncementStyle.display = "none";
  createModeAnouncementStyle.display = "block";

  const cancelChangesBtnStyle = document.getElementById("cancel-changes").style;
  cancelChangesBtnStyle.display = "block";
  // Hide the delete button on the Buttons Toolbar. Toolbar only shows Revert and Create buttons
  const deleteACredentialBtnStyle = document.getElementById("delete-credential")
    .style;
  deleteACredentialBtnStyle.display = "none";
  const saveNewOrEditedCredentialBtnStyle = document.getElementById(
    "save-new-or-edited"
  ).style;
  saveNewOrEditedCredentialBtnStyle.display = "block";

  let nameInputField = document.querySelector("#name");
  nameInputField.focus();
  blurSearchBar();
  hideSearchBox();
  hideSearchResults();
  clearSearches();
  quitEditMode();
  showAllDataFields();
  hideBoxboxes();
  quit_innerHTMLdata();
  updateModeIndicatorColors();
  if (searchDivState) {
    toggleSearchDiv();
  } else {
    // Do nothing
  }
  if (document.getElementById("search-div").style.display == "flex") {
    document.getElementById("search-mode-toggle").style.color = "green";
    searchDivState = true;
  } else {
    document.getElementById("search-mode-toggle").style.color = "red";
    searchDivState = false;
  }
}
const add = document.getElementById("addCredential");
add.addEventListener("focus", switchToCreateModeScreen);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function quitAddMode() {
  console.log(`I am the function quitAddMode()`);

  const plusIconStyle = document.getElementById("plus-icon").style;
  const plusBtnStyle = document.getElementById("addCredential").style;
  plusIconStyle.color = "#00243f";
  plusBtnStyle.border = "1px solid #00243f";
  plusIconStyle.backgroundColor = "#a3acb1";
  plusBtnStyle.backgroundColor = "#a3acb1";
  // switchToSearchModeScreen();
  updateModeIndicatorColors();
}

// ######################################

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function clearSearches() {
  console.log(`I am the function clearSearches()`);
  // OK
  document.getElementById("best-match-site").innerHTML = " - empty - ";
  document.getElementById("middle-match-site").innerHTML = " - empty - ";
  document.getElementById("lowest-match-site").innerHTML = " - empty - ";
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function clearAllData() {
  console.log(`I am the function clearAllData()`);
  // OK
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
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function cancelChangesBtnService() {
  console.log(`I am the function cancelChangesBtnService()`);
  // OK
  clearSearches();
  clearAllData();
  // Display a notification for 4 seconds
  const message = `Data cleared, but Passwords Stash unchanged.`;
  showANotification(message, timeVisible);
  document.getElementById("name").focus();
}
const cancelChangesBtn = document.getElementById("cancel-changes");
cancelChangesBtn.addEventListener("click", cancelChangesBtnService);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function deleteACredentialBtnService() {
  console.log(`I am the function deleteACredentialBtnService()`);
  // OK

  const nameOfSiteToBeDeleted = document.getElementById("name").value;
  if (nameOfSiteToBeDeleted == "") {
    console.log(`⚠ Nothing to delete.\nWebsite "Name" required.`);
    //alert(`⚠ Nothing to delete.\nWebsite "Name" required.`);

    //Display a notification for 4 seconds
    const message = `⚠ Sorry! Website "Name" required.`;
    showANotification(message, timeVisible);
  } else {
    let txt;
    if (confirm("Deletions can not be undone. Proceed?")) {
      deleteCredential();
      switchToSearchModeScreen();
      clrSearchBar();
      document.getElementById("search-bar").focus();
      txt = "Website's credentials were succesfully removed.";
      //Display notification for 4 seconds
      const message = `Credentials succesfully deleted.`;
      showANotification(message, timeVisible);
      clearAllData();
    } else {
      // Do nothing
      txt = "Nothing was changed. Continue.";
      //Display notification for 4 seconds
      const message = `Nothing was changed. Continue.`;
      showANotification(message, timeVisible);
    }
  }
}
const deleteACredential = document.getElementById("delete-credential");
deleteACredential.addEventListener("click", deleteACredentialBtnService);
