Notes Creator Challenge
=================

Task:
-------

The purpose of this project is to create an app for making notes using only pure JavaScript.
It means - no jQuery and no Jasmin for the testing environment.
Focus on unit tests and write unit tests without using a testing library.

User Story:
-------

```
As a programmer
I can see a list of my notes, where each note is abbreviated to the first 20 characters
So I can find the one I want
```

```
As a programmer
I can create a new note
So I can record something I need to remember
```

```
As a programmer
I can see the full text of an individual note on its own page
So I can see all the information in the note
```

Technologies used
-----
* node JS 8.9.4

Run project
-----

* In order to run tests, clone project, install node JS and open file ```index.html``` in Browser.
* In order to see if tests are passing, open console in ```View``` --> ```Developer Tools```.

Result:
-------

* When open, notebook app shows abbreviation (20 first chars) of initial note ```My favorite breed of dog is french bulldog``` as a link ```My favorite breed of```. URL ```http://127.0.0.1:8080/```
* When open, notebook app shows field for text entering and button ```Create Note```
* When entering text ```Task for today: 1. prepare dinner, 2. pack boxes, 3. homework``` and press button ```Create Note```
* will see a link of first 20 chars of created note below the initial note. URL ```http://127.0.0.1:8080/#notes/create```
* When press on created note link will see the full note. URL ```http://127.0.0.1:8080/#notes/1```
* When press on ```-``` will close the note and see abbreviated note again. URL ```http://127.0.0.1:8080/#notes/1/close```

View:
-------

#Tests are passing

<img src="https://monosnap.com/image/yzIsCsnQJroA6h4xSJ52dUMmknWUhv.png" height="200" width="400">

#When open app

<img src="https://monosnap.com/image/BCzrmysvf0wASK0QRU1s7TDpi31TAf.png" height="200" width="400">

#When adding long a note

<img src="https://monosnap.com/image/RsnJSXAMcxT4Un9w78bGgwjqxTpIL1.png" height="200" width="400">

#When clicking on the note and see full description

<img src="https://monosnap.com/image/BG3u48WipSgMEYkPPLMXcrR4Gfn0BI.png" height="200" width="400">
