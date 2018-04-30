var NOTEMODULE = (function(exports) {

  function testThatNoteBookHasEmptyArrayByDefault() {
    var notebook = new NoteBookClass;
    if (notebook.notes != 0) {
      throw new Error ('Something went wrong')
    }
   };

 testThatNoteBookHasEmptyArrayByDefault();

  function testThatNewNoteCreated() {
    var notebook = new NoteBookClass();
    var note = new NoteClass('Favourite drink: seltzer');
    var newNote = notebook.create('Favourite drink: seltzer');
    if (newNote.text != note.text) {
      throw new Error ('Something went wrong')
    }
   };

 testThatNewNoteCreated();

//  function testThatNewNoteAddedToBook() {
//    notebook.add(note);
//    if (notebook.notes != [note]) {
//      throw new Error ('Something went wrong')
//    }
//   };
//
// testThatNewNoteAddedToBook();
//
// function testThatNotesListed() {
//
//  };
//
// testThatNotesListed();

})(this);
