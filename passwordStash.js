﻿"use strict";

//Empty LocalStorage
//empty LocalStorage
function nullLocalStorage() {
  // Clr LS - OK
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

function retrieveCredentialsFromLocalStorage() {
  console.log(`I am the function retrieveCredentialsFromLocalStorage()`);
  // OK - Reload the credentialsRetrieved localstorage mirror variable
  credentialsRetrieved = JSON.parse(window.localStorage.getItem("credentials"));
  if (credentialsRetrieved == null) {
    console.log(
      `Things looking good!!\nBut no credentials container in localstorage.\nCalling the function to set the container...`
    );
    loadEmptyCredentialsArrayToLocalStorage();
  }
  console.log(
    `In case you need it, "credentialsRetrieved" is my return output:`
  );
  console.log(credentialsRetrieved);

  return credentialsRetrieved;
}
retrieveCredentialsFromLocalStorage(); // Reload the credentialsRetrieved localstorage mirror variable
// const fromStorageBtn = document.getElementById("get-credentials-from-localstorage");
// fromStorageBtn.addEventListener("click", retrieveCredentialsFromLocalStorage);

//writeToLocalstorage will load an empty credentials array in localstorage
function loadEmptyCredentialsArrayToLocalStorage() {
  // OK - [] to LS
  console.log(`Now runing "loadEmptyCredentialsArrayToLocalStorage()" function. 
  "loadEmptyCredentialsArrayToLocalStorage()" will load an empty credentials array in localstorage`);
  console.log(`1st step :  Deleting EVERYTHING from local storage.`);
  window.localStorage.clear();
  console.log(
    `2nd step :  Saving an empty credentials array to local storage.`
  );
  let credentials = [];
  window.localStorage.setItem("credentials", JSON.stringify(credentials));
  console.log(`3rd step :  Validating operation.`);
  alert(
    `4t step: Credentials container ready.\n. I will now  reload your browser tab.`
  );
  location.reload();

  console.log(`Browser tab reloaded!!`);
  retrieveCredentialsFromLocalStorage(); // Reload the credentialsRetrieved localstorage mirror variable
}
const writeToLocalstorageBtn = document.getElementById("write-to-localstorage");
writeToLocalstorageBtn.addEventListener(
  "click",
  loadEmptyCredentialsArrayToLocalStorage
);

function does_credentialsArrayExistsInLocalstorage() {
  // OK - LS null?
  console.log(
    `Running "does_credentialsArrayExistsInLocalstorage()" function.`
  );

  console.log(
    `1st step: Calling the "retrieveCredentialsFromLocalStorage()" function.`
  );
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
function WriteToArray() {
  // OK - {} to []
  console.log(`Now runing "WriteToArray()" function. 
  "WriteToArray()" will load an "pregnant" credentials array into localstorage`);
  console.log(`1st step :  Deleting EVERYTHING from local storage.`);
  window.localStorage.clear();
  console.log(
    `2nd step :  Saving a "pregnant" credentials array to local storage.`
  );
  /*
    let credentials = [{
      dummyKey: "dummyValue",
    }, ];
  */
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
  console.log(`3rd step :  Validating operation.`);
  retrieveCredentialsFromLocalStorage(); // Reload the credentialsRetrieved localstorage mirror variable

  alert(`4t step: As a last step, your browser tab will be reloaded.`);

  location.reload();
  console.log(`Browser tab reloaded!!`);
}
const WriteToArrayBtn = document.getElementById("write-to-array");
WriteToArrayBtn.addEventListener("click", WriteToArray);

function does_credentialsArrayContainsData() {
  // OK - {} in []?
  console.log(`Running "does_credentialsArrayContainsData()" function.`);
  console.log(
    `1st step: Calling the "retrieveCredentialsFromLocalStorage()" function.`
  );
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

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Place in the body of this functin the function to test. Use DEBUG button to exercise the function to test.
function testAFunction() {
  // OK - DEBUG
  console.log(`I am the function tester`);
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // A new credential could come from either Create Mode Screen, or Edit Mode Screen
  function whoRequestedANewCredential() {
    // A new credential could come from either Create Mode Screen, or Edit Mode Screen
    console.log(`I am the function whoRequestedANewCredential().`);

    let credentialWasRequestedBy = "";

    // Request comming from Add Mode?
    const addModeIndicatorStyle = document.querySelector("#add-indicator")
      .style;
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
  function isWebsiteNameAlreadyInCredentials() {
    // Determine if some website name is already present in the stash
    console.log(`I am the function isWebsiteNameAlreadyInCredentials();`);

    const siteNameToQuery = document.getElementById("name").value;
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
    } else {
      if (
        requestorForANewCredential == "AddMode" &&
        websiteNameIsAlreadyInCredentials == true
      ) {
        requestForNewCredentialWasAccepted = false;
      }
    }

    if (
      requestorForANewCredential == "EditMode" &&
      websiteNameIsAlreadyInCredentials == false
    ) {
      requestForNewCredentialWasAccepted = true;
    } else {
      if (
        requestorForANewCredential == "EditMode" &&
        websiteNameIsAlreadyInCredentials == true
      ) {
        requestForNewCredentialWasAccepted = false;
      }
    }
    return requestForNewCredentialWasAccepted;
  }

  // Direct the system to edit an existing credential using the data on screen that was entered by the user
  function isRequestToModifyCredentialAcceptable() {
    let requestToModifyCredentialWasAccepted;
    const requestorForANewCredential = whoRequestedANewCredential();
    if (
      requestorForANewCredential == "EditMode" &&
      websiteNameIsAlreadyInCredentials == true
    ) {
      requestToModifyCredentialWasAccepted = true;
    }
    return requestToModifyCredentialWasAccepted;
  }

  function credentialModifyer() {
    console.log(`I am the function credentialModifyer();`);

    let requestToModifyCredentialWasAccepted = isRequestToModifyCredentialAcceptable();
    if ((requestToModifyCredentialWasAccepted = false)) {
      alert(
        `⚠ Sorry. Request refused. You are using an existing website name\nIt looks like you are trying to modify a credential.\nModifications are not allowed from the Create Mode Screen credential.`
      );
      console.log(
        `⚠ Sorry. Request refused. You are using an existing website name\nIt looks like you are trying to modify a credential.\nModifications are not allowed from the Create Mode Screen credential.`
      );
    } else {
      alert(
        `Congrats! Request to edit existing credential accepted.\nWe will edit the existing credential.`
      );
      console.log(
        `Congrats! Request to edit existing credential accepted.\n\nWe will edit the existing credential..\credentialModifyer() calling credentialUpdater();`
      );
      let matchFound = true;
      console.log(`Calling function `);
      confirmDeletion2(); // OK CHECKS!!

      // Retrieving Credentials contained in localstorage
      //console.log(`Calling function retrieveCredentialsFromLocalStorage()`);
      //retrieveCredentialsFromLocalStorage(); // Reload the credentialsRetrieved localstorage mirror variable

      // Creating a working duplicate of credentials array
      let credentialsRetrievedClone = credentialsRetrieved.slice();

      let IndexOfSuccessfulQuery = JSON.parse(
        window.sessionStorage.getItem("IndexOfSuccessfulQuery")
      );
      console.log(`IndexOfSuccessfulQuery: ${IndexOfSuccessfulQuery}`);
      console.log(
        `credentialsRetrieved.length: ${credentialsRetrieved.length}`
      );

      // delete old credential by using its index found previously by  queryACredentialBySiteName() function
      const siteNameToQuery = document.getElementById("name").value;
      console.log(
        `I am the function modifyACredential(), deleting website Name ${siteNameToQuery} at index = ${IndexOfSuccessfulQuery}`
      );
      credentialsRetrievedClone.splice(IndexOfSuccessfulQuery, 1);

      // Saving the "trimmed" credentials back to localstorage
      var credentials = credentialsRetrievedClone.slice();
      console.log(`Calling function saveCredentialsToLocalStorage()`);
      saveCredentialsToLocalStorage(credentials);

      // Reload the retrievedCredentials (the variable that mirrors the contents of localstorage at all times)
      console.log(`Calling function retrieveCredentialsFromLocalStorage()`);
      retrieveCredentialsFromLocalStorage(); // Reload the credentialsRetrieved localstorage mirror variable
      console.log(`Retrieved Credentials:`);
      console.log(credentialsRetrieved);
      // create new website's credential and save permanently
      // * function stashOnScreenDataAsNewCredential() {}
      // stashOnScreenDataAsNewCredential();
      console.log(
        `Calling function makeANewCredential(),\nto save all data on screen as a new credential,\nAFTER deleting the original credential`
      );
      let newlyCreatedCredential = makeANewCredential();
      append_newlyCreatedCredentialTo_credentialsRetrieved(
        newlyCreatedCredential
      );
    }
  }
  // Direct the system to create a new credential using the data on screen that was entered by the user
  function credentialArchitect() {
    // Direct the system to create a new credential using the data on screen that was entered by the user
    console.log(`I am the function credentialArchitect();`);

    let requestForNewCredentialWasAccepted = isRequestForNewCredentialAcceptable();
    if (requestForNewCredentialWasAccepted) {
      alert(
        `Congrats! Request for new credential accepted.\nWe will create the new credential.`
      );
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
    } else {
      alert(
        `⚠ Sorry. Request for new credential rejected.\nI will NOT create the new credential.`
      );
      console.log(
        `⚠ Sorry. Request for new credential rejected.\nI will NOT create the new credential.`
      );
      credentialModifyer();
    }
  }
  credentialArchitect();

  //#################################
}
const testAFunctionBtn = document.getElementById("test-a-function");
testAFunctionBtn.addEventListener("click", testAFunction);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ console.log();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function copyToClipboard(e) {
  const textOnViewModeScreen = e.target.previousElementSibling.innerHTML;
  let notVisibleClipboard = document.getElementById("clipboard");
  notVisibleClipboard.value = textOnViewModeScreen;
  notVisibleClipboard.select();
  notVisibleClipboard.setSelectionRange(0, 99999);
  document.execCommand("copy");
  // switchToSearchModeScreen();
  document.getElementById(
    "notifications"
  ).innerHTML = `"${textOnViewModeScreen}\nCopied to clipboard`;
  document.getElementById("notifications").style.display = "block";
  setTimeout(function () {
    document.getElementById("notifications").style.display = "none";
  }, 3000);
}
const usualValuesContainer_ul = document.querySelector("#view-usual-values");
const qs_and_asContainer_ul = document.querySelector("#view-qs-and-as");

usualValuesContainer_ul.addEventListener("click", copyToClipboard);
qs_and_asContainer_ul.addEventListener("click", copyToClipboard);

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
}

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
}

// The WebsiteUsualProperties class constructor is used to build the collection of "usual properties" of a credential.
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

// Create credential object of a new website (newCredential object) and then append new credential object
// to existing credentials object

function saveCredentialsToLocalStorage(credentials) {
  console.log(`I am the function saveCredentialsToLocalStorage().`);
  // improove: All the called functions should be out of here
  console.log(`credentials array I will save is: \n${credentials}`);

  console.log(`Saving to localstorage.`); // For the time being, I won't reload the page.
  window.localStorage.setItem("credentials", JSON.stringify(credentials));

  console.log(
    `saveCredentialsToLocalStorage calling retrieveCredentialsFromLocalStorage();`
  );
  retrieveCredentialsFromLocalStorage();
  console.log(`saveCredentialsToLocalStorage calling initializeApp();`); // For the time being, I won't reload the page.
  initializeApp();
  //location.reload();

  console.log(
    `Calling an alert() function;\nCongrats!! credentials array was saved to localstorage.`
  );
  alert("Congrats!! credentials array was saved to localstorage.");
}

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

  //Improove: the following lines should not be neede
  //console.log(`Calling function retrieveCredentialsFromLocalStorage()`);
  //retrieveCredentialsFromLocalStorage(); // Reload the credentialsRetrieved localstorage mirror variable.credentialsRetrieved mirrors credentials in localstorage at all times. Therefore, once all debugging is done, this instruction is not needed.
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
  //secretQAsArray2Ready = false;
  console.log(`My return output is:\n${credentials}`);
  return credentials;
}

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

  function dummyConcealer3() {
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
  }
  //let secretQAsArray2 = Array.from.secretQAsArray;
  // secretQAsArray2.length = 0;
  // console.log(`newCredentialBeingBuilt["secretQAs"]:`);
  // console.log(newCredentialBeingBuilt);
  // Rename/reset newCredentialBeingBuilt object  to credential object
  let { ...newlyCreatedCredential } = newCredentialBeingBuilt;
  console.log(`My returned output is "newlyCreatedCredential":`);
  console.log(newlyCreatedCredential);
  // console.log(`Calling function  append_newlyCreatedCredentialTo_credentialsRetrieved()`);
  // saveCredentialsToLocalStorage(credentials);
  return newlyCreatedCredential;
  console.log(`Fabrication complete.`);
}

function whoRequestedANewCredential() {
  console.log(`Step #5 whoRequestedANewCredential()`);
  console.log(`I am the function whoRequestedANewCredential().`);

  let whoRequestedANewCredential = "";
  // Request comming from Add Mode?
  const addModeIndicatorStyle = document.querySelector("#add-indicator").style;
  if (addModeIndicatorStyle.backgroundColor == "green") {
    // Yes. Requested from Add Mode
    whoRequestedANewCredential = "AddMode";
    console.log(`The request is comming from:`);
    console.log(whoRequestedANewCredential);
    // Improove: This function does not belong here.
    console.log(`Calling function makeANewCredential()`);

    let newlyCreatedCredential = makeANewCredential();
    append_newlyCreatedCredentialTo_credentialsRetrieved(
      newlyCreatedCredential
    );
  } else {
    // Request is comming from EDIT MODE!!

    const editModeIndicatorStyle = document.querySelector("#edit-indicator")
      .style;
    if (editModeIndicatorStyle.backgroundColor == "green") {
      whoRequestedANewCredential = "EditMode";
      // Comming soon: The outdated credential was replaced with Your newly edited version
      console.log(
        `Request is comming from EDIT MODE!!\n⚠  Warning! \nIf you changed the Website Name,\nyour data will become an aditional (new website) data set.\nConsequently, Your original website's data doesn't change.\n\nIf you did not change the original Website Name,\nthe edited data will overwrite the current data.\nYour original website's data will be lost.`
      );
      if (
        confirm(
          "⚠  Warning! \nIf you changed the Website Name,\nyour data will become an aditional (new website) data set.\nConsequently, Your original website's data doesn't change.\n\nIf you did not change the original Website Name,\nthe edited data will overwrite the current data.\nYour original website's data will be lost.\n\nProceed with changes?"
        )
      ) {
        alert("Calling function modifyACredential()");
        console.log(`Calling function modifyACredential()`);
        modifyACredential();
      } else {
        alert("OK! Nothing changed.");
      }
    }
  }
  return whoRequestedANewCredential;
}

function didUserInputTheSiteName() {
  // OK - boolean variable: userProvidedASiteName
  console.log(`Step #4 didUserInputTheSiteName()`);
  console.log(`I am the function didUserInputTheSiteName().`);

  let userProvidedASiteName;
  let nameValue = document.querySelector("#name").value;
  if (nameValue == "") {
    userProvidedASiteName = false;
  } else {
    userProvidedASiteName = true;
  }
  return userProvidedASiteName;
}

function saveNewOrEditedCredentialBtnServiceRequest() {
  console.log(`Step #3 saveNewOrEditedCredentialBtnServiceRequest()();`);
  console.log(
    `I am the function function saveNewOrEditedCredentialBtnServiceRequest()`
  );

  let userProvidedASiteName = didUserInputTheSiteName();
  if (userProvidedASiteName == false) {
    // error message "No name provided".
    alert(
      `⚠  Sorry. Can't save with no website name.\nType the site name and try again.\nThanks for using this App!!`
    );
  } else {
    console.log(`Calling function whoRequestedANewCredential()`);
    whoRequestedANewCredential();
  }
}
// * const saveNewOrEditedCredentialBtn = document.querySelector("#save-new-or-edited");
// * saveNewOrEditedCredentialBtn.addEventListener("click", saveNewOrEditedCredentialBtnServiceRequest);

function confirmDeletion2() {
  // OK
  console.log(`I am the function confirmDeletion2().`);
  let txt;
  if (confirm("Deletions can not be undone. Proceed?")) {
    // continue
    alert("Edited credentials wil replace current credentials.");
  } else {
    // Do nothing
    txt = "The original credentials remained unchanged.";
    console.log(`Calling function cancelChangesBtnService()`);
    cancelChangesBtnService();
  }
}

function stashOnScreenDataAsNewCredential() {
  console.log(`Step #7 stashOnScreenDataAsNewCredential()`);
  // Grab values (some edited by user) to make a new credential
  console.log(`Calling function makeANewCredential()`);
  let newlyCreatedCredential = makeANewCredential();

  // Append newly created credential to credentials residing in localstorage
  console.log(
    `Calling function  append_newlyCreatedCredentialTo_credentialsRetrieved()`
  );
  append_newlyCreatedCredentialTo_credentialsRetrieved(newlyCreatedCredential);
  /*
  // Save the resulting credentials array back to localstorage
  console.log(`Calling function saveCredentialsToLocalStorage()`);
  saveCredentialsToLocalStorage(credentials);
  */
  // Update mirror variable
  console.log(`Calling function retrieveCredentialsFromLocalStorage()`);
  retrieveCredentialsFromLocalStorage(); // Reload the credentialsRetrieved localstorage mirror variable
  initializeApp();
  //location.reload();
}

function deblanker(undeblankedName) {
  console.log(`I am the function deblanker().`);
  let deblankedName = undeblankedName.trim();
  console.log(`deblankedName`);
  console.log(deblankedName);
  return deblankedName;
}

function modifyACredential() {
  console.log(`Step #6 modifyACredential()`);
  console.log(`I am the function modifyACredential().`);

  //Grab site name of modified credential
  let undeblankedName = document.getElementById("name").value;

  // Call function deblanker(); to delete surplus blank spaces from name
  console.log(`Calling function deblanker()`);
  let siteNameToQuery = deblanker(undeblankedName);

  // Search for the site name within credentials kept in localstorage
  // Note:  queryACredentialBySiteName() saves its finded index in sessionstorage
  console.log(`Calling function  queryACredentialBySiteName()`);
  queryACredentialBySiteName(siteNameToQuery);

  // Retrieving the found match (if any) from sessionstorage
  let IndexOfSuccessfulQuery = JSON.parse(
    window.sessionStorage.getItem("IndexOfSuccessfulQuery")
  );
  //if (IndexOfSuccessfulQuery == credentialsRetrieved.length + 1) {
  if (IndexOfSuccessfulQuery == credentialsRetrieved.length) {
    // No match
    let matchFound = false;
    if (
      confirm(
        `Step #6\nThe "${siteNameToQuery}" website name,\ndoes not exist in your Stash.\nWe will save it as a brand new set of credentials for the "${siteNameToQuery}"\n\nProceed?`
      )
    ) {
      `Saving as brand new website credentials under the  "${siteNameToQuery}" website name.`;
      // create new website's credential and save permanently
      // * stashOnScreenDataAsNewCredential();
      console.log(`Calling function makeANewCredential()`);
      let newlyCreatedCredential = makeANewCredential();
      append_newlyCreatedCredentialTo_credentialsRetrieved(
        newlyCreatedCredential
      );
    } else {
      `Nothing was changed.\nReturning to your original edit screen.`;
    }
  } else {
    // Yes match
    let matchFound = true;
    console.log(`Calling function `);
    confirmDeletion2(); // OK CHECKS!!

    // Retrieving Credentials contained in localstorage
    console.log(`Calling function retrieveCredentialsFromLocalStorage()`);
    retrieveCredentialsFromLocalStorage(); // Reload the credentialsRetrieved localstorage mirror variable

    // Creating a working duplicate of credentials array
    let credentialsRetrievedClone = credentialsRetrieved.slice();

    // delete old credential by using its index found previously by  queryACredentialBySiteName() function
    console.log(
      `I am the function modifyACredential(), deleting website Name ${siteNameToQuery} at index = ${IndexOfSuccessfulQuery}`
    );
    credentialsRetrievedClone.splice(IndexOfSuccessfulQuery, 1);

    // Saving the "trimmed" credentials back to localstorage
    var credentials = credentialsRetrievedClone.slice();
    console.log(`Calling function saveCredentialsToLocalStorage()`);
    saveCredentialsToLocalStorage(credentials);

    // Reload the retrievedCredentials (the variable that mirrors the contents of localstorage at all times)
    console.log(`Calling function retrieveCredentialsFromLocalStorage()`);
    retrieveCredentialsFromLocalStorage(); // Reload the credentialsRetrieved localstorage mirror variable
    console.log(`Retrieved Credentials:`);
    console.log(credentialsRetrieved);
    // create new website's credential and save permanently
    // * function stashOnScreenDataAsNewCredential() {}
    // stashOnScreenDataAsNewCredential();
    console.log(
      `Calling function makeANewCredential(),\nto save all data on screen as a new credential,\nAFTER deleting the original credential`
    );
    let newlyCreatedCredential = makeANewCredential();
    append_newlyCreatedCredentialTo_credentialsRetrieved(
      newlyCreatedCredential
    );
  }
}
// *  #########

// Build the secretQAsArray2 by adding 10 instances of the secretQA object to an empty secretQAsArray2 array
let secretQAsArray2;
let secretQAsArray2Ready = false;
// let credentialsArray = [];
// secretQAsArray.length = 0; // Empty array contents
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

    function dummyConcealer4() {
      if (secretQAsArray2Ready == false) {
        //  secretQAsArray2 = [];
      }
    }
  }
  secretQAsArray2Ready = true;
  console.log(`My returned output is secretQAsArray2:`);
  console.log(secretQAsArray2);
  console.log(`I turned on the secretQAsArray2Ready flag.:`);
  console.log(secretQAsArray2Ready);

  return secretQAsArray2;
}
// const xtraquestionBtn = document.querySelector("#xtraquestion-btn");
//xtraquestionBtn.addEventListener("click", addXtraQA);

// ######################
// SAVING CREDENTIALS TO STORAGE
// (No longer used. It was used for debugging)
// ######################

function dummyConcealer5() {
  let credentialsArray = []; // Not used
  function saveToLocalStorage() {
    // OK - Not used. checks for missing name before saving credentialsArray
    const firstUsageWarningStyle = document.getElementById(
      "first-usage-warning"
    ).style;
    if (credentialsArray[credentialsArray.length - 1].name == "") {
      console.log(`error message`);
      alert(
        `⚠  Credentials not saved. \nMissing "Name". Website name is required.`
      );
      // firstUsageWarningStyle.backgroundColor = "#00243f";
    } else {
      window.localStorage.setItem(
        "credentials",
        JSON.stringify(credentialsArray)
      );
      console.log(`This was the saved array:`);
      console.log(credentialsArray);
      // Improove: replace followimg instruction with update operationModeOnScreen();
      firstUsageWarningStyle.display = "none";
    }
  }
  // const toStorageBtn = document.getElementById("credentials-to-localstorage");
  // toStorageBtn.addEventListener("click", saveToLocalStorage);
}

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
  userSelectedSiteName = document.getElementById("best-match-site").innerHTML;
  console.log(`userSelectedSiteName for function selectBestSite():`);
  console.log(userSelectedSiteName);
  if (userSelectedSiteName == "") {
    alert(`"⚠  Nothing to display. A website "Name" is required.`);
  } else {
    // console.log(`stored best userSelectedSiteName:`);
    // console.log(userSelectedSiteName);
    spoolToDisplay();
  }
}
const bestSiteBtn = document.getElementById("best-eyes-button");
bestSiteBtn.addEventListener("focus", selectBestSite);

function selectMiddleSite() {
  userSelectedSiteName = document.getElementById("middle-match-site").innerHTML;
  if (userSelectedSiteName == "") {
    alert(`"⚠  Nothing to display. Name" required.`);
  } else {
    // console.log(`stored middle userSelectedSiteName:`);
    // console.log(userSelectedSiteName);
    spoolToDisplay();
  }
}
const middleSiteBtn = document.getElementById("middle-eyes-button");
middleSiteBtn.addEventListener("focus", selectMiddleSite);

function selectLowestSite() {
  userSelectedSiteName = document.getElementById("lowest-match-site").innerHTML;
  if (userSelectedSiteName == "") {
    alert(`"⚠  Nothing to display. Name" required.`);
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

function queryACredentialBySiteName(siteNameToQuery) {
  console.log(`I am the function queryACredentialBySiteName(siteNameToQuery)`);
  // Is there data in credentials array?
  // siteNameToQuery = document.getElementById("lowest-match-site").value;
  // Improove: verificationsBeforeQuery(), including verify if credentials array is present before checking it for data content.
  console.log(`Calling does_credentialsArrayContainsData()`);
  let credentialsArrayContainsData = does_credentialsArrayContainsData();
  // Note: credentialsRetrieved is a global variable that is refreshed by the
  // does_credentialsArrayContainsData() function.
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
        //const credentialNeeded = aCredential;
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
      // window.sessionStorage.setItem("credentialNeeded", JSON.stringify(aCredential));
    } else {
      siteNameToQueryFound = false;
      console.log(
        `We are really sorry.\n The "${siteNameToQuery}" website name, \ndoes not exist in your Passwords Stash.`
      );
      alert(
        `We are really sorry.\n The "${siteNameToQuery}" website name, \ndoes not exist in your Passwords Stash.`
      );
      //window.sessionStorage.clear();
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

function spoolToDisplay() {
  let siteNameToQuery = userSelectedSiteName;
  let credentialNeeded = queryACredentialBySiteName(siteNameToQuery);
  // let credentialNeeded = JSON.parse(window.sessionStorage.getItem("credentialNeeded"));

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
// const toDisplayBtn = document.getElementById('to-display-btn');
// toDisplayBtn.addEventListener('click', spoolToDisplay)

/*function postClosestMatches() {
  document.getElementById("best-match-site").innerHTML = bestMatchSiteName;
  document.getElementById("middle-match-site").innerHTML = middleMatchSiteName;
  document.getElementById("lowest-match-site").innerHTML = lowestMatchSiteName;
}

const searchBtn = document.getElementById('search');
searchBtn.addEventListener('keyup', postClosestMatches)
*/

//######################
// Search Bar behaviour:
//######################
const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("click", isCredentialsSearchable);
searchBar.addEventListener("keyup", isCredentialsSearchable);
searchBar.addEventListener("focus", isCredentialsSearchable);

const clrSearchBarBtn = document.getElementById("clr-search-bar");
clrSearchBarBtn.addEventListener("click", clrSearchBar);
clrSearchBarBtn.addEventListener("click", clearSearches);
clrSearchBarBtn.addEventListener("click", switchToSearchModeScreen);
clrSearchBarBtn.addEventListener("click", hideSearchResults);

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

//searchBar.addEventListener("keyup", clearSearches);
//const appContainer = document.getElementById("main-wrapper");
//appContainer.addEventListener("click", clearSearches);
// const searchBtn = document.getElementById("search");
// searchBtn.addEventListener("click", findClosestMatches);

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

function dummyConcealer6() {
  function clrSearchesOnBarEmpty() {
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
function clrSearchResults() {
  const searchTerm = document.getElementById("search-bar").value;
  if (searchTerm == "") {
    clearSearches();
  }
}
searchBar.addEventListener("click", clrSearchResults);

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

//###########################################################
//###########################################################

// View Mode
function switchToViewModeScreen() {
  // searchModeFlag = false;
  // viewModeFlag = true;
  // editModeFlag = false;
  // addModeFlag = false;
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

  blurSearchBar();
  hideSearchResults();
  clearSearches();
  quitEditMode();

  quitAddMode();
  showBoxboxes();
  doNotDisplayEmptyValues();
  //showAllDataFields();
  hideAllDataFields();
  showAllViewDataFields();
  updateModeIndicatorColors();

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
function viewMiddleMatch() {
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
function viewLowestMatch() {
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

// Mode flags
// let viewModeFlag = false;
// let editModeFlag = false;
// let addModeFlag = false;
// let searchModeFlag = true;

const toggleDevDashboardBtn = document.getElementById("dev-mode-toggle");
toggleDevDashboardBtn.addEventListener("click", toggleDevDashboar);
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

function initializeApp() {
  console.log(`I am the function initializeApp();`);

  const firstUsageWarningStyle = document.getElementById("first-usage-warning")
    .style;
  const searchBox = document.querySelector("#search-bar");

  if (credentialsRetrieved == null || credentialsRetrieved.length == 0) {
    // * document.getElementById("addCredential").focus();
    switchToCreateModeScreen();

    searchModeAnouncementStyle.display = "none";
    viewModeAnouncementStyle.display = "none";
    editModeAnouncementStyle.display = "none";
    createModeAnouncementStyle.display = "block";

    firstUsageWarningStyle.display = "block";

    searchBox.blur();

    clearSearches();
    clearAllData();
    hideSearchResults();
    updateModeIndicatorColors();
  } else {
    // document.getElementById("search-bar").focus();
    quitAddMode();

    switchToSearchModeScreen();

    firstUsageWarningStyle.display = "none";

    searchModeAnouncementStyle.display = "block";
    viewModeAnouncementStyle.display = "none";
    editModeAnouncementStyle.display = "none";
    createModeAnouncementStyle.display = "none";

    searchBox.value = "";
    searchBox.focus();

    clearSearches();
    clearAllData();
    hideSearchResults();

    updateModeIndicatorColors();
  }
}

window.onload = function () {
  initializeApp();
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

function clrSearchBar() {
  const searchBox = document.getElementById("search-bar");
  searchBox.value = "";
}

function hideSearchBox() {
  const searchBoxStyle = document.getElementById("search-div").style;
  searchBoxStyle.display = "none";
}

function showSearchBox() {
  const searchBoxStyle = document.getElementById("search-div").style;
  searchBoxStyle.display = "flex";
}

function hideBestMatchResult() {
  const bestMatchResultStyle = document.getElementById("best-match-site")
    .parentElement.style;
  bestMatchResultStyle.display = "none";
}

function hidemiddleMatchResult() {
  const middleMatchResultStyle = document.getElementById("middle-match-site")
    .parentElement.style;
  middleMatchResultStyle.display = "none";
}

function hidelowestMatchResult() {
  const lowestMatchResultStyle = document.getElementById("lowest-match-site")
    .parentElement.style;
  lowestMatchResultStyle.display = "none";
}

function showBestMatchResult() {
  const bestMatchResultStyle = document.getElementById("best-match-site")
    .parentElement.style;
  bestMatchResultStyle.display = "flex";
}

function showmiddleMatchResult() {
  const middleMatchResultStyle = document.getElementById("middle-match-site")
    .parentElement.style;
  middleMatchResultStyle.display = "flex";
}

function showlowestMatchResult() {
  const lowestMatchResultStyle = document.getElementById("lowest-match-site")
    .parentElement.style;
  lowestMatchResultStyle.display = "flex";
}

// The following two functions to hide or show the searchs results display region
function hideSearchResults() {
  const searchMatchesStyle = document.getElementById("matches").style;
  searchMatchesStyle.display = "none";
}

function showSearchResults() {
  const searchMatchesStyle = document.getElementById("matches").style;
  searchMatchesStyle.display = "block";
}

function hideAllDataFields() {
  // OK
  const allDataFieldsParent = document.getElementById("details");
  const allQAsParent = document.getElementById("qs-and-as");
  const h5Tag = document.getElementById("qa-hether").style;
  //const allDataFieldsArray = Array.from(allDataFieldsCollection);
  allDataFieldsParent.style.display = "none";
  allQAsParent.style.display = "none";
  h5Tag.display = "none";
}

function hideAllViewDataFields() {
  // OK
  const allViewDataFieldsParent = document.getElementById("view-usual-values");
  const allViewQAsParent = document.getElementById("view-qs-and-as");
  const h5Tag = document.getElementById("qa-hether").style;
  //const allDataFieldsArray = Array.from(allDataFieldsCollection);
  allViewDataFieldsParent.style.display = "none";
  allViewQAsParent.style.display = "none";
  h5Tag.display = "none";
}

function showAllDataFields() {
  // OK
  const allDataFieldsParent = document.getElementById("details");
  const allQAsParent = document.getElementById("qs-and-as");
  const h5Tag = document.getElementById("qa-hether").style;
  //const allDataFieldsArray = Array.from(allDataFieldsCollection);
  allDataFieldsParent.style.display = "block";
  allQAsParent.style.display = "block";
  h5Tag.display = "block";
}

function showAllViewDataFields() {
  // OK
  const allViewDataFieldsParent = document.getElementById("view-usual-values");
  const allViewQAsParent = document.getElementById("view-qs-and-as");
  const h5Tag = document.getElementById("qa-hether").style;
  //const allDataFieldsArray = Array.from(allDataFieldsCollection);
  allViewDataFieldsParent.style.display = "block";
  allViewQAsParent.style.display = "block";
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

function switchToSearchModeScreen() {
  const searchBarStyle = document.getElementById("search-bar").style;
  /*
  if (credentialsRetrieved == null) {
    //document.getElementById("search-bar").blur();
    switchToCreateModeScreen();
    blurSearchBar();
    //showAllDataFields();
    //hideAllDataFields();
    //updateModeIndicatorColors();
  } else {
    if (credentialsRetrieved.length == 0) {
      switchToCreateModeScreen();
      blurSearchBar();
      //showAllDataFields();
      //hideAllDataFields();
      //updateModeIndicatorColors();
      //document.getElementById("search-bar").blur();
    }
  }
  */
  editToolbarStyle.display = "none";
  // const clrIconStyle = document.getElementById("clr-search-bar").style;
  // const clrBtnStyle = document.getElementById("search").style;
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
}

// const searchBar = document.getElementById("search-bar");
//searchBar.addEventListener("click", switchToSearchModeScreen);
// const searchBtn = document.getElementById("search");
// searchBtn.addEventListener("click", switchToSearchModeScreen);
// searchBtn.addEventListener("click", function () {
//  document.querySelector("#search-bar").focus();
//});

function blurSearchBar() {
  // const clrIconStyle = document.getElementById("clr-search-bar").style;
  // const clrBtnStyle = document.getElementById("search").style;
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
  // updateModeIndicatorColors();
}
// searchBar.addEventListener("blur", blurSearchBar);

function switchToEditModeScreen() {
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
  const cancelChangesBtnStyle = document.getElementById("cancel-changes").style;
  cancelChangesBtnStyle.display = "block";
  const deleteACredentialBtnStyle = document.getElementById("delete-credential")
    .style;
  deleteACredentialBtnStyle.display = "block";
  const saveNewOrEditedCredentialBtnStyle = document.getElementById(
    "save-new-or-edited"
  ).style;
  saveNewOrEditedCredentialBtnStyle.display = "block";

  //turnOffBestEyes();
  // turnOffMiddleEyes();
  // turnOffLowestEyes();
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
  //hideAllViewDataFields();
}

const edit = document.getElementById("editCredential");
edit.addEventListener("click", switchToEditModeScreen);

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
  //  switchToSearchModeScreen();
  // switchToViewMode();
  updateModeIndicatorColors();
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

function doNotDisplayEmptyValues() {
  // Grab all span elements used as property values containers. They all share the 'value-container-span' class
  let collectionOfAllValueContainer_spans = document.getElementsByClassName(
    "value-container-span"
  );
  //console.log(`collectionOfAllValueContainer_spans:`);

  //  console.log(`the_spanUniqueIdValues:`);

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

function quit_innerHTMLdata() {
  let viewUsualDataStyle = document.querySelector("#view-usual-values").style;
  viewUsualDataStyle.display = "none";
  let viewQAataStyle = document.querySelector("#view-qs-and-as").style;
  viewQAataStyle.display = "none";
}

function showBoxboxes() {
  for (let index = 0; index < boxboxBtnsArray.length; index++) {
    const boxboxBtn = boxboxBtnsArray[index];
    boxboxBtn.style.display = "block";
  }
}

function switchToCreateModeScreen() {
  // searchModeFlag = false;
  // viewModeFlag = false;
  // editModeFlag = false;
  // addModeFlag = true;

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

  // Focus on website name
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
}
const add = document.getElementById("addCredential");
add.addEventListener("focus", switchToCreateModeScreen);

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
  // switchToSearchModeScreen();
  updateModeIndicatorColors();
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
  // OK
  //document.getElementById("search-bar").value = "";
  document.getElementById("best-match-site").innerHTML = " - empty - ";
  document.getElementById("middle-match-site").innerHTML = " - empty - ";
  document.getElementById("lowest-match-site").innerHTML = " - empty - ";
  // document.getElementById("search-bar").focus();
}

function clearAllData() {
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

function cancelChangesBtnService() {
  // OK
  clearSearches();
  clearAllData();
  // switchToSearchModeScreen();
  /*   document.getElementById("erase-values-typed-so-far").style.display = "block";
  setTimeout(function () {
    document.getElementById("erase-values-typed-so-far").style.display = "none";
  }, 5000); */
  document.getElementById(
    "notifications"
  ).innerHTML = `All changes discarded.\nYour Password Stash was not altered.`;
  document.getElementById("notifications").style.display = "block";
  setTimeout(function () {
    document.getElementById("notifications").style.display = "none";
  }, 5000);

  document.getElementById("name").focus();
}
//const cancelChangesBtn = document.getElementById("cancel-changes");
//cancelChangesBtn.addEventListener("click", function cancelChangesBtnService);

// Delete a credential
function deleteCredential() {
  // OK - It is deleting fine
  retrieveCredentialsFromLocalStorage(); // Reload the credentialsRetrieved localstorage mirror variable
  const nameOfSiteToBeDeleted = document.getElementById("name").value;
  if (nameOfSiteToBeDeleted == "") {
    alert(`⚠  Nothing to delete. Website "Name" required.`);
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
        // improove: use function saveCredentialsToLocalStorage();
        console.log(arrayAfterTrim);
        window.localStorage.setItem(
          "credentials",
          JSON.stringify(arrayAfterTrim)
        );
        // Update the localstorage mirror (global variable)
        retrieveCredentialsFromLocalStorage(); // Reload credentialsRetrieved
        //credentialsArray = credentialsRetrieved.slice();
        let credentialsArrayContainsData = does_credentialsArrayContainsData();
        if (credentialsArrayContainsData) {
          //saveToLocalStorage();
          // window.localStorage.setItem("credentials", JSON.stringify(arrayAfterTrim));
          // console.log(`The trimmed credentials array is:`);
          // console.log(credentialsRetrieved);
          // Stay on Edit Mode, but Re-assert the Edit Mode
          //switchToEditModeScreen();
        } else {
          alert("⚠  Your Passwords Stash is now empty!!");
          //Initialize App
          console.log(`Initializing App!!`); //`Reloading browser tab!!`
          initializeApp();
          //location.reload();
        }

        console.log(`Initializing App!!`); //`Reloading browser tab!!`
        //Initialize App
        initializeApp();
        //location.reload();
      }
    }
  }
}

function deleteACredentialBtnService() {
  // OK
  let txt;
  if (confirm("Deletions can not be undone. Proceed?")) {
    deleteCredential();
    txt = "Website's credentials were succesfully removed.";
  } else {
    // Do nothing
    txt = "The original credentials remained unchanged.";
    console.log(`Calling function cancelChangesBtnService()`);
    cancelChangesBtnService();
  }
}
const deleteACredential = document.getElementById("delete-credential");
deleteACredential.addEventListener("click", deleteACredentialBtnService);

/*
<button id="add-indicator" style="background-color: green;">A</button>
*/

// ##########################################################################

//function cancelChangesBtnServiceRequest() {// OK cancelChanges();}
// <button id="cancel-changes">↺</button>
//const cancelChangesBtn = document.getElementById("cancel-changes");
//cancelChangesBtn.addEventListener("click", cancelChangesBtnServiceRequest);

/*
function saveNewOrEditedCredentialBtnServiceRequest() {
  console.log(`Step #2 saveNewOrEditedCredentialBtnServiceRequest();`);
  //test1BeforeMakingNewCredential();
  // Note: "Name"s are case sensitive
  if (`Save action requested from Add Mode Screen?`) {
    // Yes - Save action requested from Add Mode Screen
    // it MUST be a new (not saved yet) website Name
    /*
    1. Use the std. procedure to save a newly created credential.
    */
//} else {
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
//}
//const saveNewOrEditedCredentialBtn = document.querySelector("#save-new-or-edited");
//saveNewOrEditedCredentialBtn.addEventListener("click", test1BeforeMakingNewCredential);
//}
// <button id="save-new-or-edited">✔</button>
//const saveNewOrEditedCredentialBtn = document.querySelector("#save-new-or-edited");
//saveNewOrEditedCredentialBtn.addEventListener("click", saveNewOrEditedCredentialBtnServiceRequest);*/

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

/*
function toolbarActionsManager() {
  // OK
  console.log(`Step #1 toolbarActionsManager();`);
  const cancelChangesBtn = document.getElementById("cancel-changes");
  const deleteACredentialBtn = document.querySelector("#delete-credential");
  const saveNewOrEditedCredentialBtn = document.querySelector(
    "#save-new-or-edited"
  );

  cancelChangesBtn.addEventListener("click", cancelChangesBtnServiceRequest);
  deleteACredentialBtn.addEventListener(
    "click",
    deleteACredentialBtnServiceRequest
  );
  saveNewOrEditedCredentialBtn.addEventListener(
    "click",
    saveNewOrEditedCredentialBtnServiceRequest
  );
} */

//cancelChangesBtn.addEventListener("click", toolbarActionsManager);
//deleteACredentialBtn.addEventListener("click", toolbarActionsManager);
//saveNewOrEditedCredentialBtn.addEventListener("click", toolbarActionsManager);

// Toolbar Buttons Actions:
const cancelChangesBtn = document.getElementById("cancel-changes");
const deleteACredentialBtn = document.querySelector("#delete-credential");
const saveNewOrEditedCredentialBtn = document.querySelector(
  "#save-new-or-edited"
);
cancelChangesBtn.addEventListener("click", cancelChangesBtnService);
deleteACredentialBtn.addEventListener("click", deleteACredentialBtnService);
saveNewOrEditedCredentialBtn.addEventListener(
  "click",
  saveNewOrEditedCredentialBtnServiceRequest
);
