var NOTEMODULE = (function(exports) {

  function testThatNoteBookHasEmptyArrayByDefault() {
    var notebook = new NoteBook;
    if (notebook.notes != 0) {
      throw new Error ('Something went wrong')
    }
   };

 testThatNoteBookHasEmptyArrayByDefault();

 //#create test

  function testThatNewNoteCreated() {
    if (!notebookCreatorCreateOneNote()) {
      throw new Error ('Something went wrong')
    }
   };

 testThatNewNoteCreated();

  //#add test

 function testThatNewNoteAddedToBook() {
   if (!notebookCreatorAddOneNote()) {
     throw new Error ('Something went wrong')
   }
  };

testThatNewNoteAddedToBook();

//#list test

function testThatNotesListed() {
  if(!notebookCreatorTreeNotes()) {
    throw new Error ('Something went wrong')
  }
 };

testThatNotesListed();

})(this);
