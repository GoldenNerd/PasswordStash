﻿"use strict";

//Empty LocalStorage
//empty LocalStorage
function nullLocalStorage() { // Clr LS - OK 
  window.localStorage.clear();
  console.log(`All data was deLeted from local storage.`);

  alert(
    `Your browser tab will be reloaded, and \nthe App will switch to "Add Mode".`
  );

  console.log(`Reloading browser tab . . .  Done!!`);
  location.reload();
  console.log(`Done!!`);
}
const nullLocalStorageBtn = document.getElementById("empty-localstorage");
nullLocalStorageBtn.addEventListener("click", nullLocalStorage);

/*
function nullLocalStorage() {
  window.localStorage.clear();
  console.log(`All data was deteted from local storage.`);
  location.reload();
  console.log(`Reloading App . . .  Done!!`);
}
*/

// ######################
// FETCHING CREDENTIALS FROM STORAGE
// ######################

// Reload the credentialsRetrieved localstorage mirror variable
let credentialsRetrieved;

function retrieveCredentialsFromLocalStorage() { // OK - Reload the credentialsRetrieved localstorage mirror variable
  credentialsRetrieved = JSON.parse(
    window.localStorage.getItem("credentials")
  );
  console.log(`This is the retrieved array:`);
  console.log(credentialsRetrieved);
  return credentialsRetrieved;
}
retrieveCredentialsFromLocalStorage(); // Reload the credentialsRetrieved localstorage mirror variable 
// const fromStorageBtn = document.getElementById("get-credentials-from-localstorage");
// fromStorageBtn.addEventListener("click", retrieveCredentialsFromLocalStorage);

//writeToLocalstorage will load an empty credentials array in localstorage
function writeToLocalStorage() { // OK - [] to LS
  console.log(`Now runing "writeToLocalStorage()" function. 
  "writeToLocalStorage()" will load an empty credentials array in localstorage`);
  console.log(`1st step :  Deleting EVERYTHING from local storage.`);
  window.localStorage.clear();
  console.log(
    `2nd step :  Saving an empty credentials array to local storage.`
  );
  let credentials = [];
  window.localStorage.setItem("credentials", JSON.stringify(credentials));
  console.log(`3rd step :  Validating operation.`);
  retrieveCredentialsFromLocalStorage(); // Reload the credentialsRetrieved localstorage mirror variable 

  alert(`4t step: As a last step, your browser tab will be reloaded.`);

  location.reload();
  console.log(`Browser tab reloaded!!`);
}
const writeToLocalstorageBtn = document.getElementById("write-to-localstorage");
writeToLocalstorageBtn.addEventListener("click", writeToLocalStorage);

function does_credentialsArrayExistsInLocalstorage() { // OK - LS null?
  console.log(
    `Running "does_credentialsArrayExistsInLocalstorage()" function.`
  );

  console.log(`1st step: Calling the "retrieveCredentialsFromLocalStorage()" function.`);
  retrieveCredentialsFromLocalStorage(); // Reload the credentialsRetrieved localstorage mirror variable 
  console.log(`Retrieved object:`);
  console.log(credentialsRetrieved);
  let credentialsArrayIsPresentInLocalstorage;
  if (credentialsRetrieved == null) {
    credentialsArrayIsPresentInLocalstorage = false;
    console.log(`Result:
  Upon calling, "retrieveCredentialsFromLocalStorage()" function will return
  credentialsArrayIsPresentInLocalstorage value.
  Right now, credentialsArrayIsPresentInLocalstorage value = ${credentialsArrayIsPresentInLocalstorage}`);
  } else {
    credentialsArrayIsPresentInLocalstorage = true;
    console.log(`Result:
  Upon calling, "retrieveCredentialsFromLocalStorage()" function will return
  credentialsArrayIsPresentInLocalstorage value.
  Right now, credentialsArrayIsPresentInLocalstorage value = ${credentialsArrayIsPresentInLocalstorage}`);
  }
  return credentialsArrayIsPresentInLocalstorage;
}
const localstorageInUseBtn = document.getElementById("is-localstorage-empty");
localstorageInUseBtn.addEventListener(
  "click",
  does_credentialsArrayExistsInLocalstorage
);

// Write dummy credential to credentialsArray
function WriteToArray() { // OK - {} to []
  console.log(`Now runing "WriteToArray()" function. 
  "WriteToArray()" will load an "pregnant" credentials array into localstorage`);
  console.log(`1st step :  Deleting EVERYTHING from local storage.`);
  window.localStorage.clear();
  console.log(
    `2nd step :  Saving a "pregnant" credentials array to local storage.`
  );
  let credentials = [{
    dummyKey: "dummyValue",
  }, ];
  window.localStorage.setItem("credentials", JSON.stringify(credentials));
  console.log(`3rd step :  Validating operation.`);
  retrieveCredentialsFromLocalStorage(); // Reload the credentialsRetrieved localstorage mirror variable 

  alert(`4t step: As a last step, your browser tab will be reloaded.`);

  location.reload();
  console.log(`Browser tab reloaded!!`);
}
const WriteToArrayBtn = document.getElementById("write-to-array");
WriteToArrayBtn.addEventListener("click", WriteToArray);

function does_credentialsArrayContainsData() { // OK - {} in []?
  console.log(`Running "does_credentialsArrayContainsData()" function.`);
  console.log(`1st step: Calling the "retrieveCredentialsFromLocalStorage()" function.`);
  retrieveCredentialsFromLocalStorage(); // Reload the credentialsRetrieved localstorage mirror variable
  console.log(`Retrieved object:`);
  console.log(credentialsRetrieved);
  let credentialsArrayContainsData;
  if (credentialsRetrieved.length == 0) {
    credentialsArrayContainsData = false;
    console.log(`Result:
  Upon calling, "does_credentialsArrayContainsData()" function will return
  credentialsArrayContainsData value.
  Right now, credentialsArrayContainsData value = ${credentialsArrayContainsData}`);
  } else {
    credentialsArrayContainsData = true;
    console.log(`Result:
  Upon calling, "does_credentialsArrayContainsData()" function will return
  credentialsArrayContainsData value.
  Right now, credentialsArrayContainsData value = ${credentialsArrayContainsData}`);
  }
  return credentialsArrayContainsData;
}
const isArrayEmptyBtn = document.getElementById("is-array-empty");
isArrayEmptyBtn.addEventListener("click", does_credentialsArrayContainsData);

function dummyConcealer0() {

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
};

function dummyConcealer1() {
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

function dummyConcealer2() {
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
};

// The WebsiteUsualProperties class constructor is used to build the collection of "usual properties" of a credential.
class WebsiteUsualProperties { // OK - Instantiate the set of usual properties of a credential
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

class ASecretQA { // Instantiate a Q-A pair object
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

// Create credential object of a new website (newCredential object) and then append new credential object
// to existing credentials object

function didUserInputTheSiteName() { // OK - boolean variable: userProvidedASiteName
  let userProvidedASiteName;
  let nameValue = document.querySelector('#name').value;
  if (nameValue == "") {
    userProvidedASiteName = false;
  } else {
    userProvidedASiteName = true;
  }
  return userProvidedASiteName;
};


function saveNewOrEditedCredential() {
  let userProvidedASiteName = didUserInputTheSiteName();
  if (userProvidedASiteName == false) {
    // error message "No name provided".
    alert(`Sorry. Can't save with no website name.\nType the site name and try again.\nThanks for using this App!!`);

  } else {
    //}
    const addPilotStyle = document.querySelector("#add-indicator").style;
    if (addPilotStyle.backgroundColor == "green") { // Request comming from ADD MODE?
      console.log(`Request comming from ADD MODE!!
      Append the new credential to the existing credentials Array in localstorage`);
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

      let {
        ...newCredentialBeingBuilt
      } = new WebsiteUsualProperties(
        newWebsiteUsualValues
      );
      // console.log(`newCredentialBeingBuilt:`);
      // console.log(newCredentialBeingBuilt);

      if (secretQAsArray2Ready) {
        newCredentialBeingBuilt["secretQAs"] = secretQAsArray2;
      }

      function dummyConcealer1() {
        /* else {
      
      // STEP 1 - b) User "SAVE CREDENTIALS" button results in the following "Question-Answer" values:
      // Create object containing a new secret question and its corresponding answer (newWebsiteQAProperties object)
      // let newWebsiteQAValues = ["Favorite veggie?", "Cucumber."];
      // console.log(`newWebsiteQAValues:`);
      // console.log(newWebsiteQAValues);

      let {
        ...newWebsiteQAProperties
      } = new ASecretQA(newWebsiteQAValues);
      // console.log(`newWebsiteQAProperties:`);
      // console.log(newWebsiteQAProperties);

      // Create secretQAs array containing the newWebsiteQAProperties object
      let secretQAsArray = [];
      secretQAsArray.push(newWebsiteQAProperties);
      // console.log(`secretQAsArray:`);
      // console.log(secretQAsArray);

      // STEP 2 - combine all properties into a single credential object:
      // Compose the credential array by appending secretQAs array to newCredentialBeingBuilt object

      newCredentialBeingBuilt["secretQAs"] = secretQAsArray;
     }*/
      };
      //let secretQAsArray2 = Array.from.secretQAsArray;
      // secretQAsArray2.length = 0;
      // console.log(`newCredentialBeingBuilt["secretQAs"]:`);
      // console.log(newCredentialBeingBuilt);
      // Rename/reset newCredentialBeingBuilt object  to credential object
      let {
        ...newlyCreatedCredential
      } = newCredentialBeingBuilt;
      // console.log(`newlyCreatedCredential:`);
      // console.log(newlyCreatedCredential);

      // STEP 3 - combine all credential objects into a single credentials array:
      // Append the newly created credential object to the credentials array
      retrieveCredentialsFromLocalStorage(); // Reload the credentialsRetrieved localstorage mirror variable.credentialsRetrieved mirrors credentials in localstorage at all times. Therefore, once all debugging is done, this instruction is not needed.
      let credentialsBeingUpdated = credentialsRetrieved.slice();
      credentialsBeingUpdated.push(newlyCreatedCredential);
      console.log(`credentialsBeingUpdated:`);
      console.log(credentialsBeingUpdated);
      secretQAsArray2Ready = false;
      // *  #########
      window.localStorage.setItem("credentials", JSON.stringify(credentialsBeingUpdated));
      location.reload();
      switchToSearchMode();
      updatePilotColors();
      alert("Congrats!! \nYour newly created credential was succesfully saved");
    } else { // Request is comming from EDIT MODE!!
      const editPilotStyle = document.querySelector("#edit-indicator").style;
      if (editPilotStyle.backgroundColor == "green") {
        // Comming soon: The outdated credential was replaced with Your newly edited version
        console.log(`Request is comming from EDIT MODE!!
        Comming soon: 
        The outdated credential was replaced with Your newly edited versionl`);
      }
    }
  }
}
// * const saveNewOrEditedCredentialBtn = document.querySelector("#save-new-or-edited");
// * saveNewOrEditedCredentialBtn.addEventListener("click", saveNewOrEditedCredential);

// *  #########

// Add a new instance of the secretQA object to the secretQAs array

let secretQAsArray2;
let secretQAsArray2Ready = false;
// let credentialsArray = [];
// secretQAsArray.length = 0; // Empty array contents
function addXtraQA() { // OK - Add a new instance of the secretQA object to the secretQAs array
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
    let {
      ...newWebsiteXtraQAProperties
    } = new ASecretQA(
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
// SAVING CREDENTIALS TO STORAGE (no longer used for debugging)
// ######################
// Not used:
let credentialsArray = []; // Not used
function saveToLocalStorage() { // OK - Not used. checks for missing name before saving credentialsArray
  const firstUsageWarningStyle = document.getElementById("first-usage-warning")
    .style;
  if (credentialsArray[credentialsArray.length - 1].name == "") {
    console.log(`error message`);
    alert(`Credentials not saved. Missing "Name". Website name is required.`);
    // firstUsageWarningStyle.backgroundColor = "#00243f";
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
let credentialsRetrieved;

function retrieveCredentialsFromLocalStorage() {
  credentialsRetrieved = JSON.parse(window.localStorage.getItem("credentials"));
  console.log(`This is the retrieved array:`);
  console.log(credentialsRetrieved);
}
// const fromStorageBtn = document.getElementById("get-credentials-from-localstorage");
// fromStorageBtn.addEventListener("click", retrieveCredentialsFromLocalStorage);
*/

let userSelectedSiteName;

function selectBestSite() {
  userSelectedSiteName = document.getElementById("best-match-site").value;
  if (userSelectedSiteName == "") {
    alert(`"Nothing to display. A website "Name" is required.`);
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

function queryACredential() {
  // Is there data in credentials array?
  userSelectedSiteName = document.getElementById("lowest-match-site").value;
  let credentialsArrayContainsData = does_credentialsArrayContainsData();
  // Note: credentialsRetrieved is a global variable that is refreshed by the
  // does_credentialsArrayContainsData() function.
  if (credentialsArrayContainsData) {
    let aCredential = {};
    // console.log(`userSelectedSiteName:`);
    // console.log(userSelectedSiteName);
    // credentialsRetrieved.length
    for (let index = 0; index < credentialsRetrieved.length; index++) {
      aCredential = credentialsRetrieved[index];
      if (aCredential.name == userSelectedSiteName) {
        const credentialNeeded = aCredential;
        // console.log(`credentialNeeded.name:`);
        // console.log(credentialNeeded.name);
        window.sessionStorage.clear();
        window.sessionStorage.setItem(
          "credentialNeeded",
          JSON.stringify(credentialNeeded)
        );
      } else {
        alert(
          `We are really sorry.\n The "${userSelectedSiteName}" website name, \ndoes not exist in your Passwords Stash.`
        );
      }
    }
  } else {
    const firstUsageWarningStyle = document.getElementById(
      "first-usage-warning"
    ).style;
    firstUsageWarningStyle.backgroundColor = "#00243f";
    switchToAddMode();
    updatePilotColors();
    createModeAnouncementStyle.display = "block";
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

function clrSearchResults() {
  const searchTerm = document.getElementById("search-bar").value;
  if (searchTerm == "") {
    clearSearches();
  }
}

const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("keyup", findClosestMatches);
searchBar.addEventListener("click", clrSearchResults);
searchBar.addEventListener("keyup", clrSearchResults);
const appContainer = document.getElementById("main-wrapper");
appContainer.addEventListener("click", clrSearchResults);

// const searchBtn = document.getElementById("search");
// searchBtn.addEventListener("click", findClosestMatches);

// View Mode
function switchToViewMode() {
  // searchModeFlag = false;
  // viewModeFlag = true;
  // editModeFlag = false;
  // addModeFlag = false;

  searchModeAnouncementStyle.display = "none";
  viewModeAnouncementStyle.display = "block";
  editModeAnouncementStyle.display = "none";
  createModeAnouncementStyle.display = "none";

  quitSearchMode();
  quitEditMode();
  editToolbarStyle.display = "none";
  quitAddMode();
  showBoxboxes();
  showAllDataFields();
  updatePilotColors();

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

function turnOffBestEyes() {
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

function turnOffMiddleEyes() {
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

function turnOffLowestEyes() {
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
let bestMatchFlag;
let middleMatchFlag;
let lowestMatchFlag;

function viewBestMatch() {
  if (credentialsRetrieved == null) {
    switchToAddMode();
    updatePilotColors();
  } else {
    if (credentialsRetrieved.length == 0) {
      switchToAddMode();
      updatePilotColors();
    }
    bestMatchFlag = true;
    turnOffMiddleEyes();
    turnOffLowestEyes();
    switchToViewMode();
    updatePilotColors();
  }
}
const bestMatchBtn = document.getElementById("best-eyes-button");
bestMatchBtn.addEventListener("click", viewBestMatch);
// **********************************************************
function viewMiddleMatch() {
  if (credentialsRetrieved == null) {
    switchToAddMode();
    updatePilotColors();
  } else {
    if (credentialsRetrieved.length == 0) {
      switchToAddMode();
      updatePilotColors();
    }
    middleMatchFlag = true;
    turnOffBestEyes();
    turnOffLowestEyes();
    switchToViewMode();
    updatePilotColors();
  }
}
const middleMatchBtn = document.getElementById("middle-eyes-button");
middleMatchBtn.addEventListener("click", viewMiddleMatch);
// **********************************************************
function viewLowestMatch() {
  if (credentialsRetrieved == null) {
    switchToAddMode();
    updatePilotColors();
  } else {
    if (credentialsRetrieved.length == 0) {
      switchToAddMode();
      updatePilotColors();
    }
    lowestMatchFlag = true;
    turnOffBestEyes();
    turnOffMiddleEyes();
    switchToViewMode();
    updatePilotColors();
  }
}
const lowestMatchBtn = document.getElementById("lowest-eyes-button");
lowestMatchBtn.addEventListener("click", viewLowestMatch);
// #########################################################

// Mode flags
// let viewModeFlag = false;
// let editModeFlag = false;
// let addModeFlag = false;
// let searchModeFlag = true;
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

function updatePilotColors() {
  const searchPilotStyle = document.querySelector("#search-indicator").style;
  const viewPilotStyle = document.querySelector("#view-indicator").style;
  const addPilotStyle = document.querySelector("#add-indicator").style;
  const editPilotStyle = document.querySelector("#edit-indicator").style;

  if (searchModeAnouncementStyle.display == "block") {
    searchPilotStyle.backgroundColor = "green";
  } else {
    searchPilotStyle.backgroundColor = "red";
  }

  if (viewModeAnouncementStyle.display == "block") {
    viewPilotStyle.backgroundColor = "green";
  } else {
    viewPilotStyle.backgroundColor = "red";
  }

  if (createModeAnouncementStyle.display == "block") {
    addPilotStyle.backgroundColor = "green";
  } else {
    addPilotStyle.backgroundColor = "red";
  }

  if (editModeAnouncementStyle.display == "block") {
    editPilotStyle.backgroundColor = "green";
  } else {
    editPilotStyle.backgroundColor = "red";
  }
}

window.onload = function () {
  const firstUsageWarningStyle = document.getElementById("first-usage-warning")
    .style;
  const searchBar = document.querySelector("#search-bar");
  if (credentialsRetrieved == null || credentialsRetrieved.length == 0) {
    // * document.getElementById("addCredential").focus();
    switchToAddMode();
    searchModeAnouncementStyle.display = "none";
    viewModeAnouncementStyle.display = "none";
    editModeAnouncementStyle.display = "none";
    createModeAnouncementStyle.display = "block";
    firstUsageWarningStyle.display = "block";
    clearSearches();
    searchBar.blur();
    clearAllData();
    updatePilotColors();
  } else {
    // document.getElementById("search-bar").focus();
    clearSearches();
    clearAllData();
    switchToSearchMode();
    searchModeAnouncementStyle.display = "block";
    viewModeAnouncementStyle.display = "none";
    editModeAnouncementStyle.display = "none";
    createModeAnouncementStyle.display = "none";
    firstUsageWarningStyle.display = "none";
    updatePilotColors();
    searchBar.focus();
  }
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

function hideAllDataFields() { // OK
  const allDataFieldsParent = document.getElementById("details");
  const allQAsParent = document.getElementById("qs-and-as");
  const h5Tag = document.getElementById("qa-hether").style;
  //const allDataFieldsArray = Array.from(allDataFieldsCollection);
  allDataFieldsParent.style.display = "none";
  allQAsParent.style.display = "none";
  h5Tag.display = "none";
}

function showAllDataFields() { // OK
  const allDataFieldsParent = document.getElementById("details");
  const allQAsParent = document.getElementById("qs-and-as");
  const h5Tag = document.getElementById("qa-hether").style;
  //const allDataFieldsArray = Array.from(allDataFieldsCollection);
  allDataFieldsParent.style.display = "block";
  allQAsParent.style.display = "block";
  h5Tag.display = "block";
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
  if (credentialsRetrieved == null) {
    document.getElementById("search-bar").blur();
    switchToAddMode();
    showAllDataFields();
    updatePilotColors();
  } else {
    if (credentialsRetrieved.length == 0) {
      switchToAddMode();
      showAllDataFields();
      updatePilotColors();
    }
    editToolbarStyle.display = "none";
    // const searchIconStyle = document.getElementById("search-icon").style;
    // const searchBtnStyle = document.getElementById("search").style;
    // searchModeFlag = true;
    // viewModeFlag = false;
    // editModeFlag = false;
    // addModeFlag = false;
    // searchIconStyle.color = "#00243f";
    // searchBtnStyle.border = "1px solid #00243f";
    // searchIconStyle.backgroundColor = "white";
    // searchBtnStyle.backgroundColor = "white";
    searchBarStyle.outline = "none";
    document.getElementById("search-bar").focus();

    searchModeAnouncementStyle.display = "block";
    viewModeAnouncementStyle.display = "none";
    editModeAnouncementStyle.display = "none";
    createModeAnouncementStyle.display = "none";

    turnOffBestEyes();
    turnOffMiddleEyes();
    turnOffLowestEyes();
    quitEditMode();
    quitAddMode();
    hideBoxboxes();
    hideAllDataFields();
    updatePilotColors();
  }
}
// const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("click", switchToSearchMode);
// const searchBtn = document.getElementById("search");
// searchBtn.addEventListener("click", switchToSearchMode);
// searchBtn.addEventListener("click", function () {
//  document.querySelector("#search-bar").focus();
//});

function quitSearchMode() {
  // const searchIconStyle = document.getElementById("search-icon").style;
  // const searchBtnStyle = document.getElementById("search").style;
  // searchModeFlag = false;
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
  updatePilotColors();
}
// searchBar.addEventListener("blur", quitSearchMode);

function switchToEditMode() {
  // searchModeFlag = false;
  // viewModeFlag = false;
  // editModeFlag = true;
  // addModeFlag = false;
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

  const deleteBtnStyle = document.getElementById("delete-credential").style;
  deleteBtnStyle.display = "block";

  //turnOffBestEyes();
  // turnOffMiddleEyes();
  // turnOffLowestEyes();
  quitSearchMode();
  quitAddMode();
  hideBoxboxes();
  showAllDataFields();
  updatePilotColors();
}
const edit = document.getElementById("editCredential");
edit.addEventListener("click", switchToEditMode);

function quitEditMode() {
  // searchModeFlag = false;
  // viewModeFlag = true;
  // editModeFlag = false;
  // addModeFlag = false;
  //editToolbarStyle.display = "none";
  const pencilIconStyle = document.getElementById("pencil-icon").style;
  const pencilBtnStyle = document.getElementById("editCredential").style;
  pencilIconStyle.color = "#00243f";
  pencilBtnStyle.border = "1px solid #00243f";
  pencilIconStyle.backgroundColor = "#a3acb1";
  pencilBtnStyle.backgroundColor = "#a3acb1";
  //  switchToSearchMode();
  // switchToViewMode();
  updatePilotColors();
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
  // searchModeFlag = false;
  // viewModeFlag = false;
  // editModeFlag = false;
  // addModeFlag = true;
  editToolbarStyle.display = "flex";
  const plusIconStyle = document.getElementById("plus-icon").style;
  const plusBtnStyle = document.getElementById("addCredential").style;
  plusIconStyle.color = "#00243f";
  plusIconStyle.backgroundColor = "white";
  plusBtnStyle.backgroundColor = "white";
  plusBtnStyle.outline = "none";

  searchModeAnouncementStyle.display = "none";
  viewModeAnouncementStyle.display = "none";
  editModeAnouncementStyle.display = "none";
  createModeAnouncementStyle.display = "block";

  const deleteBtnStyle = document.getElementById("delete-credential").style;
  deleteBtnStyle.display = "none";

  quitSearchMode();
  quitEditMode();
  hideBoxboxes();
  showAllDataFields();
  updatePilotColors();
}
const add = document.getElementById("addCredential");
add.addEventListener("focus", switchToAddMode);

function quitAddMode() {
  // searchModeFlag = true;
  // viewModeFlag = false;
  // editModeFlag = false;
  // addModeFlag = false;
  // editToolbarStyle.display = "none";
  const plusIconStyle = document.getElementById("plus-icon").style;
  const plusBtnStyle = document.getElementById("addCredential").style;
  plusIconStyle.color = "#00243f";
  plusBtnStyle.border = "1px solid #00243f";
  plusIconStyle.backgroundColor = "#a3acb1";
  plusBtnStyle.backgroundColor = "#a3acb1";
  // switchToSearchMode();
  updatePilotColors();
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

function clearSearches() { // OK 
  document.getElementById("search-bar").value = "";
  document.getElementById("best-match-site").value = "";
  document.getElementById("middle-match-site").value = "";
  document.getElementById("lowest-match-site").value = "";
  // document.getElementById("search-bar").focus();
}

function clearAllData() { // OK
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

function cancelChanges() { // OK
  clearSearches();
  clearAllData();
  switchToSearchMode();
  document.getElementById("revert-Notification").style.display = "block";
  setTimeout(function () {
    document.getElementById("revert-Notification").style.display = "none";
  }, 5000);
}
//const cancelChangesBtn = document.getElementById("cancel-changes");
//cancelChangesBtn.addEventListener("click", cancelChanges);

// Delete a credential
function deleteCredential() { // OK - It isdeleting fine
  retrieveCredentialsFromLocalStorage(); // Reload the credentialsRetrieved localstorage mirror variable 
  const nameOfSiteToBeDeleted = document.getElementById("name").value;
  if (nameOfSiteToBeDeleted == "") {
    alert(`Nothing to delete. Website "Name" required.`);
  } else {
    // let aCredential = {};
    // console.log(`userSelectedSiteName:`);
    // console.log(userSelectedSiteName);
    // credentialsRetrieved.length
    for (let index = 0; index < credentialsRetrieved.length; index++) {
      const aCredential = credentialsRetrieved[index];
      if (nameOfSiteToBeDeleted == aCredential.name) {
        console.log(`Name of website to be deleted:`);
        console.log(aCredential.name);
        //DELETE INDEXED CREDENTIAL
        console.log(`Index of website to delete: ${index}`);

        console.log(`Array before trim:`);
        let arrayBefore = credentialsRetrieved.slice();
        console.log(arrayBefore);

        console.log(`Array after trim:`);
        arrayBefore.splice(index, 1);
        let arrayAfterTrim = arrayBefore.slice();
        console.log(arrayAfterTrim);
        window.localStorage.setItem("credentials", JSON.stringify(arrayAfterTrim));
        // Update the localstorage mirror (global variable)
        credentialsRetrieved = retrieveCredentialsFromLocalStorage();
        //credentialsArray = credentialsRetrieved.slice();
        let credentialsArrayContainsData = does_credentialsArrayContainsData();
        if (credentialsArrayContainsData) {
          //saveToLocalStorage();
          // window.localStorage.setItem("credentials", JSON.stringify(arrayAfterTrim));
          // console.log(`The trimmed credentials array is:`);
          // console.log(credentialsRetrieved);
          // Stay on Edit Mode, but Re-assert the Edit Mode
          //switchToEditMode();
          location.reload();
        } else {
          alert("Your Passwords Stash is now empty!!");
          //Reload App
          writeToLocalStorage();
        }
      }
    }
  }
}

function confirmDeletion() { // OK
  let txt;
  if (confirm("Deletions can not be undone. Proceed?")) {
    deleteCredential();
    txt = "Website's credentials were succesfully removed.";
  } else {
    // Do nothing
    txt = "The original credentials remained unchanged.";
    cancelChanges();
  }
}
const deleteACredential = document.getElementById("delete-credential");
deleteACredential.addEventListener("click", confirmDeletion);

/*
<button id="add-indicator" style="background-color: green;">A</button>
*/

// ##########################################################################

function cancelChangesBtnServiceRequest() { // OK
  cancelChanges();
}
// <button id="cancel-changes">↺</button>
//const cancelChangesBtn = document.getElementById("cancel-changes");
//cancelChangesBtn.addEventListener("click", cancelChangesBtnServiceRequest);

/**/
function saveNewOrEditedCredentialBtnServiceRequest() {
  saveNewOrEditedCredential();
  // Note: "Name"s are case sensitive
  if (`Save action requested from Add Mode Screen?`) {
    // Yes - Save action requested from Add Mode Screen
    // it MUST be a new (not saved yet) website Name
    /*
    1. Use the std. procedure to save a newly created credential.
    */
  } else {
    // No - Save action requested from Edit Mode screen.
    /*
    A Case 1 - no Name:
    1. No Name provided, Nothing to save.

    A Case 2 - different Name (Name was changed as part of the editing):
    Treat it like a new website credentials to be created

    A Case 3 - same Name:
      1. Treat it like a new website credentials to be created. 
      But, if requirements to create a new credential are fullfiled, save to a staggingVariable.
      
      2. Delete same-named credential existing in credentials array.
         Follow standard procedure as deleting any other credential. Namely:
      1. No Name provided, Nothing to save.
      2. Are you sure? "Deletions can not be reversed!!"
        no - Abort. Stay on same App mode.
        yes - continue.
      3. Credentials empty?
        yes - Nothing to delete.
        no - Continue.
      4. Search in Credentials
        Name not found - Display error "Name not found. Provide valid name and try again."
        Name found - Remove item. Report success.
      5. Credentials empty? 
        yes - Switch to first time App usage screen (Add Mode).
        no - Switch to Search Mode 






    A. Buffer edited credential for latter use

    B. Delete existing credential for same named website
    Same procedure as just deleting any website

      1. No Name provided, Nothing to create.
      2. Are you sure? "Deletions can not be reversed!!"
        no - Abort. Stay on same App mode.
        yes - continue.
      3. Credentials empty?
        yes - Nothing to delete.
        no - Continue.
      4. Search in Credentials
        Name not found - Display error "Name not found. Provide valid name and try again."
        Name found - Remove item. Report success.
      5. Credentials empty? 
        yes - Switch to first time App usage screen (Add Mode).
        no - Switch to Search Mode 
    */
  }
  //const saveNewOrEditedCredentialBtn = document.querySelector("#save-new-or-edited");
  //saveNewOrEditedCredentialBtn.addEventListener("click", saveNewOrEditedCredential);
}
// <button id="save-new-or-edited">✔</button>
//const saveNewOrEditedCredentialBtn = document.querySelector("#save-new-or-edited");
//saveNewOrEditedCredentialBtn.addEventListener("click", saveNewOrEditedCredentialBtnServiceRequest);

function deleteACredentialBtnServiceRequest() {
  /*
  // Note: delete possible only from Edit Mode.
  1. No name provided, Nothing to delete.
  2. Are you sure? "Deletions can not be reversed!!"
    no - Abort. Stay on same App mode.
    yes - continue.
  3. Credentials empty?
    yes - Nothing to delete.
    no - Continue.
  4. Search in Credentials
    Name not found - Display error "Name not found. Provide valid name and try again."
    Name found - Remove item. Report success.
  5. Credentials empty? 
    yes - Switch to first time App usage screen (Add Mode).
    no - Switch to Search Mode 
  */
}
// <button id="delete-credential">✘</button>
//const deleteACredentialBtn = document.getElementById("delete-credential");
//deleteACredentialBtn.addEventListener("click", delBtnServiceRequest);

function toolbarActionsManager() { // OK
  const cancelChangesBtn = document.getElementById("cancel-changes");
  const deleteACredentialBtn = document.querySelector("#delete-credential");
  const saveNewOrEditedCredentialBtn = document.querySelector(
    "#save-new-or-edited"
  );

  cancelChangesBtn.addEventListener("click", cancelChangesBtnServiceRequest);
  deleteACredentialBtn.addEventListener("click", deleteACredentialBtnServiceRequest);
  saveNewOrEditedCredentialBtn.addEventListener("click", saveNewOrEditedCredentialBtnServiceRequest);
}
const cancelChangesBtn = document.getElementById("cancel-changes");
const deleteACredentialBtn = document.querySelector("#delete-credential");
const saveNewOrEditedCredentialBtn = document.querySelector(
  "#save-new-or-edited"
);

cancelChangesBtn.addEventListener("click", toolbarActionsManager);
deleteACredentialBtn.addEventListener("click", toolbarActionsManager);
saveNewOrEditedCredentialBtn.addEventListener("click", toolbarActionsManager);