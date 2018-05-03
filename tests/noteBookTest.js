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
    var notebook = new NoteBook();
    var noteA = new Note('Mamba');
    var newNote = notebook.create('Mamba');
    if (!notebook.isEquivalent(newNote, note)) {
      throw new Error ('Something went wrong')
    }
   };

 testThatNewNoteCreated();

  //#add test

 function testThatNewNoteAddedToBook() {
   var notebook = new NoteBook();
   var noteA = notebook.create('Mamba');
   notebook.add(noteA);
   var newNote = notebook.notes[0]
   if (!notebook.isEquivalent(newNote, noteA)) {
     throw new Error ('Something went wrong')
   }
  };

testThatNewNoteAddedToBook();

//#list test

function testThatNotesListed() {
  var notebook = new NoteBook();
  var noteA = notebook.create('Mamba');
  notebook.add(noteA);
  var noteB = notebook.create('Cramba');
  notebook.add(noteB);
  var noteC = notebook.create('Lamba')
  notebook.add(noteC);
  var arrayUtils = new ArrayUtils();
  if(!arrayUtils.isEquivalent(notebook.list(), ['Mamba', 'Cramba', 'Lamba'])) {
    throw new Error ('Something went wrong')
  }
 };

testThatNotesListed();

})(this);
