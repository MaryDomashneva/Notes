var NOTEMODULE = (function(exports) {

  function testThatNoteBookHasEmptyArrayByDefault() {
    var notebook = new NoteBook;
    if (notebook.notes != 0) {
      throw new Error ('Something went wrong')
    }
    console.log('%c Note Book: test that notebook has an empty hash by default is passing', 'color:green')
   };

 testThatNoteBookHasEmptyArrayByDefault();

 //#create test

  function testThatNewNoteCreated() {
    if (!notebookCreatorCreateOneNote()) {
      throw new Error ('Something went wrong')
    }
    console.log('%c Note Book: test that method create created new note is passing', 'color:green')
   };

 testThatNewNoteCreated();

  //#add test

 function testThatNewNoteAddedToBook() {
   if (!notebookCreatorAddOneNote()) {
     throw new Error ('Something went wrong')
   }
    console.log('%c Note Book: test that method add adding note to the notebook is passing', 'color:green')
  };

testThatNewNoteAddedToBook();

//#list test

function testThatNotesListed() {
  if(!notebookCreatorTreeNotes()) {
    throw new Error ('Something went wrong')
  }
  console.log('%c Note Book: test that method list listing all notes and showing there text is passing', 'color:green')
 };

testThatNotesListed();

})(this);
