# PasswordStash
MAIN PURPOSE OF THIS APP:

This App will be used as a searchable reference of website credentials. It can be useful when a user forgets the necessary credentials to access a website of interest.
The user of this App will have the option of writing the value component of all these credentials, and save them permanently (create credentials). At a latter time, user may search, and retrieve credentials for viewing, modification, or deletion.
The App includes a copy/paste mechanism. From the View Mode Screen, any value can be copied to clipboard and pasted on the website of interest or any other place.

EXPLANATION OF WHAT IS A CREDENTIAL, AND ITS PURPOSE:

A credential (in this App's context) is an object that contains a fixed amount of properties. Each property is defined as consisting of a "designator", an its corresponding value.
Inside this credential, properties are classified into two distinct categories, namely; "usual properties", and "question/answer pairs".
There will be a unique credential for each website, as defined by combining its 8 usual properties, and its array of ten Question/Answer pairs.
Out of the 8 usual properties, only one (the "Name" designator) is mandatory. All other are optional.
There will be 10 Q-A pairs. None of them mandatory. All of them are optional.
Each Q-A pair resides inside an object. Therefore, every one of these 10 objects consist of two properties. ALL these Q-A pair objects will be ordered inside an array. An example Q-A pair object could look like this:
{secretQ0: "secretQ", secretA0: "secretA"}.
The WebsiteUsualProperties class constructor is defined elsewere in this program. The WebsiteUsualProperties class constructor is used to build the "usual properties" of a credential.
Also elsewere in this program, a ASecretQA class is defined, and subsequently used to build an array that hold ten questions and answer pairs.
