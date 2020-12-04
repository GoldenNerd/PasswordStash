﻿"use strict";

//IMPORTANT NOTE:
//PLEASE BE AWARE THAT THERE IS AN INVISIBLE OBJECT ON THE SCREEN ALL THE TIME. THE OBJECT IS THE CLIPBOARD TEXT INPUT. IT IS LOCATED IMMEDIATELY UNDER THE "VIEWING CREDENTIALS HETHER".

// Clear localstorage entirely
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function nullLocalStorage() {
  // Clr LS
  console.log(`I am the function nullLocalStorage()`);

  console.log(`I will clear the localstorage entirely.`);
  window.localStorage.clear();
  console.log(`Done!!`);

  // Display message for 3 seconds
  const message = `null to LS done!! Reload browser tab if necessary.`;
  let timeVisible;
  showANotification(message, timeVisible);
}
const nullLocalStorageBtn = document.getElementById("empty-localstorage");
nullLocalStorageBtn.addEventListener("click", nullLocalStorage);

//WriteToLocalstorage will load an empty credentials array in localstorage
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function loadEmptyCredentialsArrayToLocalStorage() {
  // [] to LS
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

  // Display message for 3 seconds
  const message = `[] to LS done!! Reload browser tab if necessary.`;
  let timeVisible;
  showANotification(message, timeVisible);
}
const writeToLocalstorageBtn = document.getElementById("write-to-localstorage");
writeToLocalstorageBtn.addEventListener(
  "click",
  loadEmptyCredentialsArrayToLocalStorage
);

// Find out if there is an array (empty or not) residing in localstorage
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function does_credentialsArrayExistsInLocalstorage() {
  //LS null?
  console.log(`I am the function does_credentialsArrayExistsInLocalstorage().`);

  console.log(
    `1st step: Reload the credentialsRetrieved variable that mirrors the localstorage content.`
  );
  // Reload the credentialsRetrieved localstorage mirror variable
  let credentialsRetrieved = JSON.parse(
    window.localStorage.getItem("credentials")
  );
  console.log(`The retrieved object was:`);
  console.log(credentialsRetrieved);

  let thereIsAnObjectInLocalstorage;
  let isLSCleared;

  if (credentialsRetrieved === null) {
    thereIsAnObjectInLocalstorage = false;
    isLSCleared = true;
  } else {
    thereIsAnObjectInLocalstorage = true;
    isLSCleared = false;
  }

  console.log(
    `thereIsAnObjectInLocalstorage: ${thereIsAnObjectInLocalstorage}`
  );

  // Display message for 3 seconds
  const message = `LS is null? ${isLSCleared}.`;
  let timeVisible;
  showANotification(message, timeVisible);

  return thereIsAnObjectInLocalstorage;
}
const localstorageInUseBtn = document.getElementById("is-localstorage-empty");
localstorageInUseBtn.addEventListener(
  "click",
  does_credentialsArrayExistsInLocalstorage
);

// Write dummy credential to credentialsArray
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function WriteToArray() {
  // {} to []
  console.log(
    `I am the function "WriteToArray()".\n"WriteToArray()" will load a "pregnant" credentials array into localstorage`
  );

  console.log(`1st step:\nDeleting EVERYTHING from local storage.`);
  window.localStorage.clear();

  console.log(
    `2nd step:\nSaving a "pregnant" credentials array to local storage.`
  );
  const credentials = [{
    email: "dummy1@domain.com",
    name: "ExampleCredential",
    password: "open1234",
    pin: "4221",
    recoveryEmail: "dummy2@otherdomain.com",
    secretImage: "ironning Board",
    secretQAs: [{
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
  }, ];
  window.localStorage.setItem("credentials", JSON.stringify(credentials));

  console.log(
    `3rd step:\nSynchronizing the credentialsRetrieved variable,\nwhich mirrors the localstorage contents.`
  );
  credentialsRetrieved = credentials.slice();

  console.log(`The synchronized credentialsRetrieved variable is:`);
  console.log(credentialsRetrieved);

  // Display message for 3 seconds
  const message = `{} to []  Reload browser tab if needed.`;
  let timeVisible;
  showANotification(message, timeVisible);
}
const WriteToArrayBtn = document.getElementById("write-to-array");
WriteToArrayBtn.addEventListener("click", WriteToArray);

// Is there data in credentials array?
// Including verify if credentials array is present before checking it for content.
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
let askingFromDevDashboard; // global variable
function does_credentialsArrayContainsData() {
  // {} in []?
  console.log(`I am the function does_credentialsArrayContainsData().`);

  console.log(`credentialsRetrieved array now is:`);
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
    `does_credentialsArrayContainsData()? ${credentialsArrayContainsData}\nFunction returned variable is credentialsArrayContainsData: ${credentialsArrayContainsData}`
  );

  // Display notification only for interrogations that come from he Developer Dashboard.
  if (askingFromDevDashboard == undefined || askingFromDevDashboard == true) {
    // Display message for 3 seconds
    const message = `{} in [] is ${credentialsArrayContainsData}.`;
    let timeVisible;
    showANotification(message, timeVisible);
    askingFromDevDashboard = true; // Reset flag
  }

  return credentialsArrayContainsData;
}
const isArrayEmptyBtn = document.getElementById("is-array-empty");
isArrayEmptyBtn.addEventListener("click", does_credentialsArrayContainsData);

// Place in the body of this function the function to test. Use DEBUG button to exercise the function to test.
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function testAFunction() {
  // DEBUG
  console.log(`I am the function tester()`);
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  function retrieveCredentialsFromLocalStorage() {
    console.log(`I am the function retrieveCredentialsFromLocalStorage()`);

    // Reload the credentialsRetrieved localstorage mirror variable
    credentialsRetrieved = JSON.parse(
      window.localStorage.getItem("credentials")
    );

    console.log(
      `retrieveCredentialsFromLocalStorage() returns the credentialsRetrieved variable:`
    );
    console.log(credentialsRetrieved);

    return credentialsRetrieved;
  }
  retrieveCredentialsFromLocalStorage();
}
const testAFunctionBtn = document.getElementById("test-a-function");
testAFunctionBtn.addEventListener("click", testAFunction);

// ######################
// FETCHING CREDENTIALS FROM STORAGE
// ######################

// Localstorage must be initialized the very first time App is used
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function firstTimeAppRuns() {
  console.log(`I am the function firstTimeAppRuns()`);

  // Test for credentials container presence in localstorage
  const objectInLocalstorage = JSON.parse(
    window.localStorage.getItem("credentials")
  );
  if (objectInLocalstorage == null) {
    // Yes. First time run. Write an empty array to localstorage. This empty [] will be the recipient to all App data
    let credentials = [];
    window.localStorage.setItem("credentials", JSON.stringify(credentials));
  } else {
    // Container array in Localstorage is ready. Do nothing
  }
}
firstTimeAppRuns();

// Reload the credentialsRetrieved localstorage mirror variable when App Starts
// Note: credentialsRetrieved is a global variable
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
let credentialsRetrieved; // global variable
function retrieveCredentialsFromLocalStorage() {
  console.log(`I am the function retrieveCredentialsFromLocalStorage()`);

  // Reload the credentialsRetrieved localstorage mirror variable
  credentialsRetrieved = JSON.parse(window.localStorage.getItem("credentials"));

  console.log(
    `retrieveCredentialsFromLocalStorage() returns the credentialsRetrieved variable:`
  );
  console.log(credentialsRetrieved);

  return credentialsRetrieved;
}
retrieveCredentialsFromLocalStorage(); // Reload the credentialsRetrieved localstorage mirror variable

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function copyToClipboard(e) {
  console.log(`I am the function copyToClipboard();`);

  const textOnViewModeScreen = e.target.previousElementSibling.innerHTML;
  const notVisibleClipboard = document.getElementById("clipboard");
  notVisibleClipboard.value = textOnViewModeScreen;
  notVisibleClipboard.select();
  notVisibleClipboard.setSelectionRange(0, 99999);
  document.execCommand("copy");

  const message = `"${textOnViewModeScreen}"\nCopied to clipboard`;
  let timeVisible;
  showANotification(message, timeVisible);
}
const usualValuesContainer_ul = document.querySelector(
  "#innerHTML-usual-values"
);
const qs_and_asContainer_ul = document.querySelector("#innerHTML-qs-and-as");
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
  const credentialsArray = [{
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
  // The user of this App will have the option of writing the value component of all these credentials, and save them permanently (create credentials). At a latter time, user may search, and retrieve credentials for viewing, modification, or deletion.
  // The App includes a copy/paste mechanism. From the View Mode Screen, any value can be copied to clipboard and pasted on the website of interest or any other place.
  // EXPLANATION OF WHAT IS A CREDENTIAL, AND ITS PURPOSE:
  // A credential (in this App's context) is an object that contains a fixed amount of properties. Each property is defined as consisting of a "designator", an its corresponding value.
  // Inside this credential, properties are classified into two distinct categories, namely; "usual properties", and "question/answer pairs".
  // There will be a unique credential for each website, as defined by combining its 8 usual properties, and its array of ten Question/Answer pairs.
  // Out of the 8 usual properties, only one (the "Name" designator) is mandatory. All other are optional.
  //There will be 10 Q-A pairs. None of them mandatory. All of them are optional.
  // Each Q-A pair resides inside an object. Therefore, every one of these 10 objects consist of two properties. ALL these Q-A pair objects will be ordered inside an array. An example Q-A pair object could look like this:
  // {secretQ0: "secretQ", secretA0: "secretA"}.
  // The WebsiteUsualProperties class constructor is defined elsewere in this program. The WebsiteUsualProperties class constructor is used to build the "usual properties" of a credential.
  // Also elsewere in this program, a ASecretQA class is defined, and subsequently used to build an array that hold ten questions and answer pairs.
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
// const valuesOfKeys = ["Places", "www.places.com", "jim@domain.com", "jim", "Me&I100%", "7777", "jimrec@domain2.//com", "fork"];
// const newWebsiteUsualProperties1 = new WebsiteUsualProperties(valuesOfKeys);
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
// const valuesOfQA = ["Favorite veggie?", "cucumber"];
// const secretQA1 = new ASecretQA(valuesOfQA);
// console.log(`secretQA1:`);
// console.log(SecretQA1);

//  ########
//  APP FUNCTIONALITY STARTS HERE!!
//  ########

//Display a notification for 3 seconds
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function showANotification(message, timeVisible) {
  console.log(`I am the function showANotification()`);

  if (timeVisible == undefined) {
    timeVisible = 3000;
  }
  const writtingArea = document.getElementById("notifications");
  writtingArea.innerHTML = message;
  setTimeout(() => {
    writtingArea.innerHTML = "";
  }, timeVisible);
}

// Create credential object of a new website (newCredential object)
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function makeANewCredential() {
  console.log(`I am the function makeANewCredential().`);

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

  console.log(`makeANewCredential() calling secretQAsArrayBuilder()`);
  let secretQAsArray = secretQAsArrayBuilder();
  console.log(`This is the secretQAsArray`);
  console.log(secretQAsArray);

  let {
    ...newCredentialBeingBuilt
  } = new WebsiteUsualProperties(
    newWebsiteUsualValues
  );
  console.log(`newCredentialBeingBuilt:`);
  console.log(`New Usual Values object:`);
  console.log(newCredentialBeingBuilt);
  newCredentialBeingBuilt["secretQAs"] = secretQAsArray;

  // Rename/reset newCredentialBeingBuilt object to credential object
  let {
    ...newlyCreatedCredential
  } = newCredentialBeingBuilt;
  console.log(`My returned output is "newlyCreatedCredential":`);
  console.log(newlyCreatedCredential);
  console.log(`Fabrication complete.`);

  return newlyCreatedCredential;
}

// Append newly created credential object to existing credentials object
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function append_newlyCreatedCredentialTo_credentialsRetrieved(
  newlyCreatedCredential
) {
  console.log(
    `I am the function  append_newlyCreatedCredentialTo_credentialsRetrieved().`
  );

  console.log(`The newlyCreatedCredential I will append is:`);
  console.log(newlyCreatedCredential);

  // Append the newly created credential object to the credentials array
  console.log(`Now appending`);
  let credentials = credentialsRetrieved.slice();
  credentials.push(newlyCreatedCredential);

  console.log(`The output I return is:`);
  console.log(credentials);

  return credentials;
}

// Save augmented credentials object to Localstorage
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function saveCredentialsToLocalStorage(credentials) {
  console.log(`I am the function saveCredentialsToLocalStorage().`);

  console.log(`The credentials array I will save is: `);
  console.log(credentials);

  console.log(`Saving to localstorage.`);
  window.localStorage.setItem("credentials", JSON.stringify(credentials));

  console.log(`Synchronizing credentialsRetrieved (locastorage mirror)`);
  credentialsRetrieved = credentials.slice();

  console.log(
    `Showing notification.\ncredentials array saved to localstorage.`
  );

  //Display notification for 3 seconds
  const message = `Credentials saved to My Password Stash.`;
  let timeVisible;
  showANotification(message, timeVisible);
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
  // boolean variable: userProvidedASiteName
  console.log(`I am the function didUserInputTheSiteName().`);

  let userProvidedASiteName;
  const nameValue = document.querySelector("#name").value;
  if (nameValue == "") {
    userProvidedASiteName = false;
    // error message: "No name provided".
    console.log(
      `⚠  Sorry. Website name required.\nType the site name and try again.\nThanks for using this App!!`
    );

    // Display message for 3 seconds
    const message = `⚠  Sorry. Website name required.`;
    let timeVisible;
    showANotification(message, timeVisible);
  } else {
    // OK. Name provided
    userProvidedASiteName = true;
  }
  console.log(
    `The name provided:\n${nameValue}\nThe return variable userProvidedASiteName = ${userProvidedASiteName}`
  );

  return userProvidedASiteName;
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function whoRequestedANewCredential() {
  // Request for a new credential could come from either Create Mode Screen, or Edit Mode Screen
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

  const siteNameToMatch = document.getElementById("name").value;
  const IndexOfCredentialThatOwnsName = whatIsThe_indexOfTheCredentialThatOwnsTheName(
    siteNameToMatch
  );
  console.log(
    `IndexOfCredentialThatOwnsName is: ${IndexOfCredentialThatOwnsName}`
  );
  let websiteNameIsInCredentials;
  if (IndexOfCredentialThatOwnsName == -1) {
    websiteNameIsInCredentials = false;
  } else {
    websiteNameIsInCredentials = true;
  }
  console.log(`websiteNameIsInCredentials: ${websiteNameIsInCredentials}`);

  return websiteNameIsInCredentials;
}

// Discriminate if request for creation for new credential should proceed
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function isRequestForNewCredentialAcceptable() {
  // Discriminate if request for creation of a new credential should proceed
  console.log(`I am the function isRequestForNewCredentialAcceptable();`);

  let requestorForANewCredential;
  requestorForANewCredential = whoRequestedANewCredential();
  let websiteNameIsAlreadyInCredentials = isWebsiteNameAlreadyInCredentials();
  console.log(
    `The data  will use:\nrequestorForANewCredential: ${requestorForANewCredential}\nwebsiteNameIsAlreadyInCredentials: ${websiteNameIsAlreadyInCredentials}`
  );

  let requestForNewCredentialGranted;
  if (
    requestorForANewCredential == "AddMode" &&
    websiteNameIsAlreadyInCredentials == false
  ) {
    // This is a request to create from Add Mode
    requestForNewCredentialGranted = true;
  } else {
    if (
      requestorForANewCredential == "EditMode" &&
      websiteNameIsAlreadyInCredentials == false
    ) {
      // This is a request to create from Edit Mode
      requestForNewCredentialGranted = true;
    }
  }
  if (
    requestorForANewCredential == "AddMode" &&
    websiteNameIsAlreadyInCredentials == true
  ) {
    // Duplication of an existing name not allowed
    requestForNewCredentialGranted = false;
  } else {
    if (
      requestorForANewCredential == "EditMode" &&
      websiteNameIsAlreadyInCredentials == true
    ) {
      // This is a request to edit an existing credential
      requestForNewCredentialGranted = false;
    }
  }
  console.log(
    `My return variable is requestForNewCredentialGranted: ${requestForNewCredentialGranted}`
  );

  return requestForNewCredentialGranted;
}

//  function credentialArchitect() is the entry point for all green checkmark button clicks.
// On approoval of new creations, it direct the system to create a new credential using the on screen data that was entered by the user.
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function credentialArchitect() {
  // Direct the system to create a new credential using the on screen data that was entered by the user
  console.log(`I am the function credentialArchitect();`);

  //Test for no name provided. All new creations require a website name
  let userProvidedASiteName = didUserInputTheSiteName();
  if (userProvidedASiteName) {
    let requestForNewCredentialGranted = isRequestForNewCredentialAcceptable();
    if (requestForNewCredentialGranted) {
      console.log(
        `Congrats! Request for new credential accepted.\nWe will create the new credential.\ncredentialArchitect() calling makeANewCredential();`
      );
      const newlyCreatedCredential = makeANewCredential();

      console.log(
        `credentialArchitect() calling append_newlyCreatedCredentialTo_credentialsRetrieved`
      );
      let credentials = append_newlyCreatedCredentialTo_credentialsRetrieved(
        newlyCreatedCredential
      );

      // Save to local storage the augmented credentials array
      console.log(
        `credentialArchitect() calling saveCredentialsToLocalStorage()`
      );
      saveCredentialsToLocalStorage(credentials);

      //Display notification for 3 seconds
      const message = `Success. Saved to My Passwords Stash`;
      let timeVisible;
      showANotification(message, timeVisible);

      // Clr all on screen data that was already used
      clearAllData();

      // Once a credential is saved the stash is no longer empty. Therefore the empty stash warning is not applicable.
      const firstUsageWarningStyle = document.getElementById(
        "first-usage-warning"
      ).style;
      if (firstUsageWarningStyle.display == "block") {
        location.reload();
      }
    } else {
      //Green checkmark button click did not translate into creation of a new credential. Request is not for Arquitect, let credentialUpdater give it a try.
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

  let requestToModCredentialGranted;
  let requestorForModCredential;
  requestorForModCredential = whoRequestedANewCredential();
  let websiteNameIsAlreadyInCredentials = isWebsiteNameAlreadyInCredentials();

  if (
    requestorForModCredential == "AddMode" &&
    websiteNameIsAlreadyInCredentials == false
  ) {
    // This is a request to create a new credential
    requestToModCredentialGranted = false;
  }

  if (
    requestorForModCredential == "EditMode" &&
    websiteNameIsAlreadyInCredentials == false
  ) {
    // This is a request to create a new credential
    requestToModCredentialGranted = false;
  }

  if (
    requestorForModCredential == "AddMode" &&
    websiteNameIsAlreadyInCredentials == true
  ) {
    // Duplicate names not allowed
    requestToModCredentialGranted = false;
  }

  if (
    requestorForModCredential == "EditMode" &&
    websiteNameIsAlreadyInCredentials == true
  ) {
    // This is a request to modify
    requestToModCredentialGranted = true;
  }
  console.log(
    `My return variable is requestToModCredentialGranted: ${requestToModCredentialGranted}`
  );
  return requestToModCredentialGranted;
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function deleteACredential() {
  console.log(`I am the function deleteACredential()`);

  const nameOfSiteToBeDeleted = document.getElementById("name").value;
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
        //Display notification for 3 seconds
        const message = `Success. Credentials deleted.`;
        let timeVisible;
        showANotification(message, timeVisible);
      } else {
        console.log(`⚠ Your Passwords Stash is now empty!!`);
        //Display notification for 3 seconds
        const message = `⚠ Your Passwords Stash is now empty!!`;
        let timeVisible;
        showANotification(message, timeVisible);
        // If deleting results in an empty stash, reload to display the pertinent search screen with all correct messages appropriate to the stash state.
        location.reload();
      }
    }
  }
}

//  function credentialUpdater() only handles the modification requests.
// Direct the system to edit an existing credential using the data on screen that was entered by the user
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function credentialUpdater() {
  console.log(`I am the function credentialUpdater();`);

  //Note: Test for no website name provided by user was already done by credentialArquitect()
  let requestToModifyCredentialWasAccepted = isRequestToModifyCredentialAcceptable();
  if (requestToModifyCredentialWasAccepted) {
    // Modify the credential
    console.log(
      `Congrats! Request to edit existing credential accepted.\nWe will edit the existing credential..\ncredentialUpdater() calling deleteACredential();`
    );
    // call deleteACredential() to delete old credential
    deleteACredential();
    // call credentialArchitect() to create the new (replacement) credential using on screen values
    //After deleting original credential, credentialArchitect() won't be creating a duplicate credential.
    credentialArchitect();
  } else {
    //Request not for credentialUpdater() either, let forbidenRequestHandler() give it a try.
    console.log(
      `Request not for forbidenRequestHandler() either, let exeption Handler give it a try.\ncredentialUpdater() calling forbidenRequestHandler()`
    );
    forbidenRequestHandler();
  }
}

//  function forbidenRequestHandler() only handles the illegal requests.
// An illegal request happens when user atempts to create a credential from the Create Mode Screen, but website name already exists in The Stash. Duplicate website names are not allowed.
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function forbidenRequestHandler() {
  console.log(`I am the function forbidenRequestHandler();`);

  let requestForNewCredentialGranted;
  const requestorForANewCredential = whoRequestedANewCredential();
  const websiteNameIsAlreadyInCredentials = isWebsiteNameAlreadyInCredentials();
  if (requestForNewCredentialGranted) {
    // System fatal error. This exception is never supposed to happen. The three possible boolean combinations
    // for variables requestorForANewCredential and websiteNameIsAlreadyInCredentials were already handled by credentialArquitect(), and credentialUpdater(). Only one possible combination is left open for service, if it occurs
    //Display notification for 3 seconds
    const message = `☠ Unexpected fatal error!!`;
    let timeVisible;
    showANotification(message, timeVisible);
  }
  if (
    requestorForANewCredential == "AddMode" &&
    websiteNameIsAlreadyInCredentials == true
  ) {
    // Handle illegal request: Duplicate website names are not allowed
    console.log(
      `⚠ Sorry. Your request to create a new credential was rejected.\nThe website name already exists in Your Password Stash.\nDuplicate names are not allowed.`
    );
    //Display notification for 3 seconds
    const message = `⚠ Duplicate website names are not allowed!!`;
    let timeVisible;
    showANotification(message, timeVisible);
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
// Build the secretQAsArray by adding 10 instances of the secretQA object to an empty secretQAsArray
// let secretQAsArray;
function secretQAsArrayBuilder() {
  // OK - Add a new instance of the secretQA object to the secretQAsArray array
  console.log(`I am the function secretQAsArrayBuilder()`);

  let secretQAsArray = [];
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
    let {
      ...newWebsiteXtraQAProperties
    } = new ASecretQA(
      newWebsiteXtraQAValues
    );
    console.log(`newWebsiteXtraQAProperties:`);
    console.log(newWebsiteXtraQAProperties);

    // Append new secretQA object to existing secretQAs array
    secretQAsArray.push(newWebsiteXtraQAProperties);
  }
  console.log(`My returned output is secretQAsArray:`);
  console.log(secretQAsArray);

  return secretQAsArray;
}

// ######################
// FETCHING CREDENTIALS FROM STORAGE
// FOR VIEW MODE
// ######################

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function viewBestSite() {
  console.log(`I am the function viewBestSite()`);

  const siteNameSelectedForViewing = document.getElementById("best-match-site")
    .innerHTML;
  console.log(
    `siteNameSelectedForViewing for function viewBestSite():\n${siteNameSelectedForViewing}`
  );

  spoolToDisplay(siteNameSelectedForViewing);
}
const bestSiteBtn = document.getElementById("best-eyes-button");
bestSiteBtn.addEventListener("focus", viewBestSite);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function viewMiddleSite() {
  console.log(`I am the function viewMiddleSite()`);

  const siteNameSelectedForViewing = document.getElementById(
    "middle-match-site"
  ).innerHTML;

  spoolToDisplay(siteNameSelectedForViewing);
}
const middleSiteBtn = document.getElementById("middle-eyes-button");
middleSiteBtn.addEventListener("focus", viewMiddleSite);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function viewLowestSite() {
  console.log(`I am the function viewLowestSite()`);

  const siteNameSelectedForViewing = document.getElementById(
    "lowest-match-site"
  ).innerHTML;

  spoolToDisplay(siteNameSelectedForViewing);
}
const lowestSiteBtn = document.getElementById("lowest-eyes-button");
lowestSiteBtn.addEventListener("focus", viewLowestSite);

// ######################
// DISPLAYING A RETRIEVED CREDENTIAL
// ######################

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function queryACredentialBySiteName(siteNameSelectedForViewing) {
  console.log(
    `I am the function queryACredentialBySiteName(siteNameSelectedForViewing)`
  );

  // Is credentials array ready?
  console.log(`Calling does_credentialsArrayContainsData()`);
  askingFromDevDashboard = false;
  let credentialsArrayContainsData = does_credentialsArrayContainsData();

  let siteNameToQueryFound;
  let aCredential = {};
  let credentialToShowOnDisplay;
  if (credentialsArrayContainsData) {
    // Yes. Credentials array is ready (contains data).
    console.log(`siteNameSelectedForViewing:`);
    console.log(siteNameSelectedForViewing);

    for (let index = 0; index < credentialsRetrieved.length; index++) {
      aCredential = credentialsRetrieved[index];
      if (aCredential.name == siteNameSelectedForViewing) {
        siteNameToQueryFound = true;
        credentialToShowOnDisplay = aCredential;
        console.log(`credentialToShowOnDisplay.name:`);
        console.log(credentialToShowOnDisplay.name);
      }
    }
    if (siteNameToQueryFound) {
      // Do nothing
    } else {
      siteNameToQueryFound = false;
      console.log(
        `The "${siteNameSelectedForViewing}" website name, \ndoes not exist in My Passwords Stash.`
      );
      clearSearches();
    }
  }
  return credentialToShowOnDisplay;
}
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function whatIsThe_indexOfTheCredentialThatOwnsTheName(siteNameToMatch) {
  console.log(
    `I am the function whatIsThe_indexOfTheCredentialThatOwnsTheName(siteNameToMatch)`
  );

  // Is Stash ready?
  console.log(`Calling does_credentialsArrayContainsData()`);
  askingFromDevDashboard = false;
  let credentialsArrayContainsData = does_credentialsArrayContainsData();
  let IndexOfCredentialThatOwnsName;
  if (credentialsArrayContainsData) {
    // Yes. Stash is ready.
    console.log(`The site Name To Query is: ${siteNameToMatch}`);

    let siteNameToQueryFound;
    let aCredential = {};
    // Determine the index of the credential that owns the name
    for (let index = 0; index < credentialsRetrieved.length; index++) {
      aCredential = credentialsRetrieved[index];
      if (aCredential.name == siteNameToMatch) {
        // Name matched!! Capture index of credential that owns the site name being queried
        IndexOfCredentialThatOwnsName = index;
        siteNameToQueryFound = true;
        console.log(
          `site Name To Query Found: ${siteNameToQueryFound}\nAt credential's index number: ${IndexOfCredentialThatOwnsName}`
        );
      }
    }
    // For Loop completed check if name matched
    if (siteNameToQueryFound) {
      // Yes; its value is "true". Do nothing
    } else {
      // No; its value is "undefined". Site Name To Query not Found
      IndexOfCredentialThatOwnsName = -1; // -1 means not found
    }
    console.log(
      `siteNameToQueryFound? ${siteNameToQueryFound}\nIndexOfCredentialThatOwnsName is: ${IndexOfCredentialThatOwnsName}`
    );
  } else {
    // No. Credentials array is not ready (Does not contain data).
    IndexOfCredentialThatOwnsName = -1; // -1 means not found
  }
  return IndexOfCredentialThatOwnsName;
}

// Improove: Find a more compact form for this function
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function spoolToDisplay(siteNameSelectedForViewing) {
  console.log(`I am the function spoolToDisplay()`);

  let credentialToShowOnDisplay = queryACredentialBySiteName(
    siteNameSelectedForViewing
  );

  document.getElementById("name").value = credentialToShowOnDisplay.name;
  document.getElementById("website").value = credentialToShowOnDisplay.website;
  document.getElementById("email").value = credentialToShowOnDisplay.email;
  document.getElementById("username").value =
    credentialToShowOnDisplay.username;
  document.getElementById("password").value =
    credentialToShowOnDisplay.password;
  document.getElementById("pin").value = credentialToShowOnDisplay.pin;
  document.getElementById("recovery-email").value =
    credentialToShowOnDisplay.recoveryEmail;
  document.getElementById("secret-image").value =
    credentialToShowOnDisplay.secretImage;

  document.getElementById("question0").value =
    credentialToShowOnDisplay.secretQAs[0].secretQ;
  document.getElementById("answer0").value =
    credentialToShowOnDisplay.secretQAs[0].secretA;

  document.getElementById("question1").value =
    credentialToShowOnDisplay.secretQAs[1].secretQ;
  document.getElementById("answer1").value =
    credentialToShowOnDisplay.secretQAs[1].secretA;

  document.getElementById("question2").value =
    credentialToShowOnDisplay.secretQAs[2].secretQ;
  document.getElementById("answer2").value =
    credentialToShowOnDisplay.secretQAs[2].secretA;

  document.getElementById("question3").value =
    credentialToShowOnDisplay.secretQAs[3].secretQ;
  document.getElementById("answer3").value =
    credentialToShowOnDisplay.secretQAs[3].secretA;

  document.getElementById("question4").value =
    credentialToShowOnDisplay.secretQAs[4].secretQ;
  document.getElementById("answer4").value =
    credentialToShowOnDisplay.secretQAs[4].secretA;

  document.getElementById("question5").value =
    credentialToShowOnDisplay.secretQAs[5].secretQ;
  document.getElementById("answer5").value =
    credentialToShowOnDisplay.secretQAs[5].secretA;

  document.getElementById("question6").value =
    credentialToShowOnDisplay.secretQAs[6].secretQ;
  document.getElementById("answer6").value =
    credentialToShowOnDisplay.secretQAs[6].secretA;

  document.getElementById("question7").value =
    credentialToShowOnDisplay.secretQAs[7].secretQ;
  document.getElementById("answer7").value =
    credentialToShowOnDisplay.secretQAs[7].secretA;

  document.getElementById("question8").value =
    credentialToShowOnDisplay.secretQAs[8].secretQ;
  document.getElementById("answer8").value =
    credentialToShowOnDisplay.secretQAs[8].secretA;

  document.getElementById("question9").value =
    credentialToShowOnDisplay.secretQAs[9].secretQ;
  document.getElementById("answer9").value =
    credentialToShowOnDisplay.secretQAs[9].secretA;

  //############## values for view mode: #############################
  document.getElementById("view-name").innerHTML =
    credentialToShowOnDisplay.name;
  document.getElementById("view-website").innerHTML =
    credentialToShowOnDisplay.website;
  document.getElementById("view-email").innerHTML =
    credentialToShowOnDisplay.email;
  document.getElementById("view-username").innerHTML =
    credentialToShowOnDisplay.username;
  document.getElementById("view-password").innerHTML =
    credentialToShowOnDisplay.password;
  document.getElementById("view-pin").innerHTML = credentialToShowOnDisplay.pin;
  document.getElementById("view-recovery-email").innerHTML =
    credentialToShowOnDisplay.recoveryEmail;
  document.getElementById("view-secret-image").innerHTML =
    credentialToShowOnDisplay.secretImage;

  document.getElementById("view-question0").innerHTML =
    credentialToShowOnDisplay.secretQAs[0].secretQ;
  document.getElementById("view-answer0").innerHTML =
    credentialToShowOnDisplay.secretQAs[0].secretA;

  document.getElementById("view-question1").innerHTML =
    credentialToShowOnDisplay.secretQAs[1].secretQ;
  document.getElementById("view-answer1").innerHTML =
    credentialToShowOnDisplay.secretQAs[1].secretA;

  document.getElementById("view-question2").innerHTML =
    credentialToShowOnDisplay.secretQAs[2].secretQ;
  document.getElementById("view-answer2").innerHTML =
    credentialToShowOnDisplay.secretQAs[2].secretA;

  document.getElementById("view-question3").innerHTML =
    credentialToShowOnDisplay.secretQAs[3].secretQ;
  document.getElementById("view-answer3").innerHTML =
    credentialToShowOnDisplay.secretQAs[3].secretA;

  document.getElementById("view-question4").innerHTML =
    credentialToShowOnDisplay.secretQAs[4].secretQ;
  document.getElementById("view-answer4").innerHTML =
    credentialToShowOnDisplay.secretQAs[4].secretA;

  document.getElementById("view-question5").innerHTML =
    credentialToShowOnDisplay.secretQAs[5].secretQ;
  document.getElementById("view-answer5").innerHTML =
    credentialToShowOnDisplay.secretQAs[5].secretA;

  document.getElementById("view-question6").innerHTML =
    credentialToShowOnDisplay.secretQAs[6].secretQ;
  document.getElementById("view-answer6").innerHTML =
    credentialToShowOnDisplay.secretQAs[6].secretA;

  document.getElementById("view-question7").innerHTML =
    credentialToShowOnDisplay.secretQAs[7].secretQ;
  document.getElementById("view-answer7").innerHTML =
    credentialToShowOnDisplay.secretQAs[7].secretA;

  document.getElementById("view-question8").innerHTML =
    credentialToShowOnDisplay.secretQAs[8].secretQ;
  document.getElementById("view-answer8").innerHTML =
    credentialToShowOnDisplay.secretQAs[8].secretA;

  document.getElementById("view-question9").innerHTML =
    credentialToShowOnDisplay.secretQAs[9].secretQ;
  document.getElementById("view-answer9").innerHTML =
    credentialToShowOnDisplay.secretQAs[9].secretA;
}

//######################
// Search Bar behaviour:
//######################

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function isCredentialsSearchable() {
  console.log(`I am the function isCredentialsSearchable()`);

  if (credentialsRetrieved.length == 0) {
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

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Behaviour of little button inside search bar, that is used to clear the search bar
function clrSearchBarBtnBehaviour() {
  clrSearchBar();
  hideSearchResults();
  // focus on search bar
  document.getElementById("search-bar").focus();
}
const clrSearchBarBtn = document.getElementById("clr-search-bar");
clrSearchBarBtn.addEventListener("click", clrSearchBarBtnBehaviour);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Function that handles backspace and delete keystrokes.
function backspaceAndDeleteKeystrokesHandler(e) {
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
}
searchBar.addEventListener("keydown", backspaceAndDeleteKeystrokesHandler);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function findClosestMatches() {
  console.log(`I am the function function findClosest Matches()`);
  // This whole function is executed once for every keystroke

  // Grab search term on every keystroke and...
  const searchTerm = document.getElementById("search-bar").value.toLowerCase();
  console.log(`searchTerm:`);
  console.log(searchTerm);
  if (searchTerm == "") {
    clearSearches();
    hideSearchResults();
  } else {
    showSearchResults();
    // clone credentials array
    const credentials = credentialsRetrieved.slice();

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
    // Grab the first three matches
    for (let index = 0; index < 3; index++) {
      const element = matchedSiteNames[index];
      if (element == undefined) {
        matchedSiteNames.push(" - empty - ");
      }
    }
    // Improove: Sort matches in alphabetical order
    matchedSiteNames.sort((a, b) => a - b);
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

// View Mode
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function switchToViewModeScreen() {
  console.log(`I am the function switchToViewModeScreen()`);

  searchModeAnouncementStyle.display = "none";
  viewModeAnouncementStyle.display = "block";
  editModeAnouncementStyle.display = "none";
  createModeAnouncementStyle.display = "none";

  editToolbarStyle.display = "none";

  hideSearchBox();
  hideSearchResults();
  turnOffEditButton();
  turnOffAddButton();
  showBoxboxes();
  doNotDisplayEmptyValues();
  hideAllDataFields();
  showAllinnerHTMLvalues();
  updateAppModeIndicatorColors();

  // Update color of search toggle button
  if (document.querySelector("#search-div").style.display == "flex") {
    document.querySelector("#search-mode-toggle").style.color = "green";
    searchDivState = true;
  } else {
    document.querySelector("#search-mode-toggle").style.color = "red";
    searchDivState = false;
  }
}

// viewBestMatch
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const bestMatchBtn = document.getElementById("best-eyes-button");
bestMatchBtn.addEventListener("click", switchToViewModeScreen);

// viewMiddleMatch
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const middleMatchBtn = document.getElementById("middle-eyes-button");
middleMatchBtn.addEventListener("click", switchToViewModeScreen);

// viewLowestMatch
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const lowestMatchBtn = document.getElementById("lowest-eyes-button");
lowestMatchBtn.addEventListener("click", switchToViewModeScreen);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
let developerToolbarOn = false; // global variable
function toggleDevDashboar() {
  console.log(`Iam the function toggleDevDashboar()`);

  const devToolbarStyle = document.getElementById("debug-buttons").style;
  const devStatusPanelStyle = document.getElementById("mode-indicators").style;
  const toggleDevDashboardBtnStyle = document.getElementById("dev-mode-toggle")
    .style;
  if (developerToolbarOn) {
    // Hide Developer dashboard
    devToolbarStyle.display = "none";
    devStatusPanelStyle.display = "none";
    toggleDevDashboardBtnStyle.color = "red";
    developerToolbarOn = false;
    console.log(`developerToolbarOn: ${developerToolbarOn}`);
  } else {
    // Show developer dashboard
    devToolbarStyle.display = "flex";
    devStatusPanelStyle.display = "flex";
    toggleDevDashboardBtnStyle.color = "green";
    developerToolbarOn = true;
    console.log(`developerToolbarOn: ${developerToolbarOn}`);
  }
}
const toggleDevDashboardBtn = document.getElementById("dev-mode-toggle");
toggleDevDashboardBtn.addEventListener("click", toggleDevDashboar);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const searchModeAnouncementStyle = document.getElementById(
  "search-mode-anouncement"
).style; // global variable
const viewModeAnouncementStyle = document.getElementById(
  "view-mode-anouncement"
).style; // global variable
const editModeAnouncementStyle = document.getElementById(
  "edit-mode-anouncement"
).style; // global variable
const createModeAnouncementStyle = document.getElementById(
  "create-mode-anouncement"
).style; // global variable
const editToolbarStyle = document.getElementById("edit-toolbar").style;

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function updateAppModeIndicatorColors() {
  console.log(`I am the function updateAppModeIndicatorColors()`);

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

  if (credentialsRetrieved.length == 0) {
    firstUsageWarningStyle.display = "block";
    switchToCreateModeScreen();
  } else {
    clearSearches();
    firstUsageWarningStyle.display = "none";
    searchBox.value = "";
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

// The following two functions to hide or show the searchs results display div
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

  const allDataFieldsParent = document.getElementById("details");
  const allQAsParent = document.getElementById("inputs-qs-and-as");
  const qaHeading = document.getElementById("qa-heading").style;

  allDataFieldsParent.style.display = "none";
  allQAsParent.style.display = "none";
  qaHeading.display = "none";
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function hideAllViewDataFields() {
  console.log(`I am the function hideAllViewDataFields()`);

  const allViewDataFieldsParent = document.getElementById(
    "innerHTML-usual-values"
  );
  const allViewQAsParent = document.getElementById("innerHTML-qs-and-as");
  const qaHeading = document.getElementById("qa-heading").style;

  allViewDataFieldsParent.style.display = "none";
  allViewQAsParent.style.display = "none";
  qaHeading.display = "none";
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function showAllInputFields() {
  console.log(`I am the function showAllInputFields()`);

  const allDataFieldsParent = document.getElementById("details");
  const allQAsParent = document.getElementById("inputs-qs-and-as");
  const qaHeading = document.getElementById("qa-heading").style;

  allDataFieldsParent.style.display = "block";
  allQAsParent.style.display = "block";
  qaHeading.display = "block";
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function showAllinnerHTMLvalues() {
  console.log(`I am the function showAllinnerHTMLvalues()`);

  const allViewDataFieldsParent = document.getElementById(
    "innerHTML-usual-values"
  );
  const allViewQAsParent = document.getElementById("innerHTML-qs-and-as");
  const qaHeading = document.getElementById("qa-heading").style;

  allViewDataFieldsParent.style.display = "block";
  allViewQAsParent.style.display = "block";
  qaHeading.display = "block";
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function switchToSearchModeScreen() {
  console.log(`I am the function switchToSearchModeScreen()`);

  const searchBarStyle = document.getElementById("search-bar").style;
  searchBarStyle.outline = "none";
  document.getElementById("search-bar").focus();

  editToolbarStyle.display = "none";

  searchModeAnouncementStyle.display = "block";
  viewModeAnouncementStyle.display = "none";
  editModeAnouncementStyle.display = "none";
  createModeAnouncementStyle.display = "none";

  showSearchResults();
  turnOffEditButton();
  turnOffAddButton();
  hideBoxboxes();
  hide_innerHTMLvalues();
  hideAllDataFields();
  hideAllViewDataFields();
  showSearchBox();
  updateAppModeIndicatorColors();
  if (searchDivState) {
    // Do nothing
  } else {
    toggleSearchDiv();
  }
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
let searchDivState; // global variable
function toggleSearchDiv() {
  console.log(`Iam the function toggleSearchDiv()`);

  if (searchModeAnouncementStyle.display == "block") {
    //Do nothing
  } else if (
    document.getElementById("first-usage-warning").style.display == "block"
  ) {
    // Display message for 3 seconds
    const message = `⚠ Can't search. Stash empty.`;
    let timeVisible;
    showANotification(message, timeVisible);
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
  // If stash is empty App wont switch to search mode. it must assert creation mode focusing the name field
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

    const nameInputField = document.querySelector("#name");
    nameInputField.focus();
    blurSearchBar();
    hideSearchBox();
    hideSearchResults();
    clearSearches();
    turnOffAddButton();
    showAllInputFields();
    hideBoxboxes();
    hide_innerHTMLvalues();
    updateAppModeIndicatorColors();

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
function turnOffEditButton() {
  console.log(`I am the function turnOffEditButton()`);

  // Update Edit Button Appearance
  const pencilIconStyle = document.getElementById("pencil-icon").style;
  const pencilBtnStyle = document.getElementById("editCredential").style;
  pencilIconStyle.color = "#00243f";
  pencilBtnStyle.border = "1px solid #00243f";
  pencilIconStyle.backgroundColor = "#a3acb1";
  pencilBtnStyle.backgroundColor = "#a3acb1";
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
  const collectionOfAllValueContainer_spans = document.getElementsByClassName(
    "value-container-span"
  );

  for (
    let index = 0; index < collectionOfAllValueContainer_spans.length; index++
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
function hide_innerHTMLvalues() {
  console.log(`I am the function hide_innerHTMLvalues()`);

  const viewUsualDataStyle = document.querySelector("#innerHTML-usual-values")
    .style;
  viewUsualDataStyle.display = "none";
  const viewQAataStyle = document.querySelector("#innerHTML-qs-and-as").style;
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

  // Show all buttons on Buttons Toolbar except the Delete button
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

  hideSearchBox();
  hideSearchResults();
  turnOffEditButton();
  showAllInputFields();
  // Focus on website name imput field
  const nameInputField = document.querySelector("#name");
  nameInputField.focus();
  hideBoxboxes();
  hide_innerHTMLvalues();
  updateAppModeIndicatorColors();
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
function turnOffAddButton() {
  console.log(`I am the function turnOffAddButton()`);

  const plusIconStyle = document.getElementById("plus-icon").style;
  const plusBtnStyle = document.getElementById("addCredential").style;
  plusIconStyle.color = "#00243f";
  plusBtnStyle.border = "1px solid #00243f";
  plusIconStyle.backgroundColor = "#a3acb1";
  plusBtnStyle.backgroundColor = "#a3acb1";
}

// ######################################

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function clearSearches() {
  console.log(`I am the function clearSearches()`);

  document.getElementById("best-match-site").innerHTML = " - empty - ";
  document.getElementById("middle-match-site").innerHTML = " - empty - ";
  document.getElementById("lowest-match-site").innerHTML = " - empty - ";
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function clearAllData() {
  const AllTextInputsCollection = document.getElementsByClassName(
    "a-text-input-field"
  );
  const AllTextInputsArray = Array.from(AllTextInputsCollection);
  AllTextInputsArray.forEach((aTextInputField) => (aTextInputField.value = ""));
}

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function cancelChangesBtnService() {
  console.log(`I am the function cancelChangesBtnService()`);

  clearAllData();
  // Display a notification for 3 seconds
  const message = `Data cleared, but Passwords Stash unchanged.`;
  let timeVisible;
  showANotification(message, timeVisible);
  document.getElementById("name").focus();
}
const cancelChangesBtn = document.getElementById("cancel-changes");
cancelChangesBtn.addEventListener("click", cancelChangesBtnService);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function deleteACredentialBtnService() {
  console.log(`I am the function deleteACredentialBtnService()`);

  const nameOfSiteToBeDeleted = document.getElementById("name").value;
  if (nameOfSiteToBeDeleted == "") {
    console.log(`⚠ Nothing to delete.\nWebsite "Name" required.`);

    //Display a notification for 3 seconds
    const message = `⚠ Sorry! Website "Name" required.`;
    let timeVisible;
    showANotification(message, timeVisible);
  } else {
    if (confirm("Deletions can not be undone. Proceed?")) {
      deleteACredential();
      switchToSearchModeScreen();
      clrSearchBar();
      document.getElementById("search-bar").focus();
      //Display notification for 4 seconds
      const message = `Credentials succesfully deleted.`;
      let timeVisible;
      showANotification(message, timeVisible);
      clearAllData();
    } else {
      //Display notification for 4 seconds
      const message = `Nothing was changed. Continue.`;
      let timeVisible;
      showANotification(message, timeVisible);
    }
  }
}
const deleteCredential = document.getElementById("delete-credential");
deleteCredential.addEventListener("click", deleteACredentialBtnService);