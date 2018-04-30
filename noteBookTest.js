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
    if (!notebook.isEquivalent(newNote, note)) {
      throw new Error ('Something went wrong')
    }
   };

 testThatNewNoteCreated();

 function testThatNewNoteAddedToBook() {
   var notebook = new NoteBookClass();
   var note = new NoteClass('AAAA');
   notebook.add(note);
   var newNote = notebook.notes[0]
   if (!notebook.isEquivalent(newNote, note)) {
     throw new Error ('Something went wrong')
   }
  };

testThatNewNoteAddedToBook();

function testThatNotesListed() {
  var notebook = new NoteBookClass();
  noteA = notebook.create('Mamba');
  notebook.add(noteA);
  noteB = notebook.create('Cramba');
  notebook.add(noteB);
  noteC = notebook.create('Lamba')
  notebook.add(noteC);
  if(notebook.list() !== ['Mamba', 'Cramba', 'Lamba']) {
    throw new Error ('Something went wrong')
  }

 };

testThatNotesListed();

})(this);
