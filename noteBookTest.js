var NOTEMODULE = (function(exports) {

  function testThatNoteBookHasEmptyArrayByDefault() {
    var notebook = new NoteBook;
    if (notebook.notes != 0) {
      throw new Error ('Something went wrong')
    }
   };

 testThatNoteBookHasEmptyArrayByDefault();

  function testThatNewNoteCreated() {
    var notebook = new NoteBook();
    var note = new Note('Favourite drink: seltzer');
    var newNote = notebook.create('Favourite drink: seltzer');
    if (!notebook.isEquivalent(newNote, note)) {
      throw new Error ('Something went wrong')
    }
   };

 testThatNewNoteCreated();

 function testThatNewNoteAddedToBook() {
   var notebook = new NoteBook();
   var note = new Note('AAAA');
   notebook.add(note);
   var newNote = notebook.notes[0]
   if (!notebook.isEquivalent(newNote, note)) {
     throw new Error ('Something went wrong')
   }
  };

testThatNewNoteAddedToBook();

function testThatNotesListed() {
  var notebook = new NoteBook();
  var arrayUtils = new ArrayUtils();
  noteA = notebook.create('Mamba');
  notebook.add(noteA);
  noteB = notebook.create('Cramba');
  notebook.add(noteB);
  noteC = notebook.create('Lamba')
  notebook.add(noteC);
  if(!arrayUtils.isEquivalent(notebook.list(), ['Mamba', 'Cramba', 'Lamba'])) {
    throw new Error ('Something went wrong')
  }
 };

testThatNotesListed();

})(this);
