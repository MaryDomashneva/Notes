var NOTEBOOKCONTROLLERMODULE = (function(exports) {
  function DivDouble() {
    this.innerHTML = '';
  };

  function InputFieldDouble() {
    this.value = '';
  };

  function testThatItUpdatesApp() {
    var divDouble = new DivDouble();
    var noteBookController = new NoteBookController();
    noteBookController.updateApp(divDouble);

    if (divDouble.innerHTML !==
      noteBookController.notebookview.HTMLNoteBookRepresentation()) {
      throw new Error ('Something went wrong!')
    }
    console.log('%c Note Book Controller: test that HTML\
      page has a right representation when loaded is passing', 'color:green')
  };

  testThatItUpdatesApp();

  function testThatItCreatesNote() {
    var divDouble = new DivDouble();
    var fieldDouble = new InputFieldDouble();
    fieldDouble.value = 'Mamba'
    var noteBookController = new NoteBookController();
    noteBookController.createNote(fieldDouble, divDouble)

    if (fieldDouble.value !==
      noteBookController.notebookview.notebook.notes[1].text) {
      throw new Error ('Something went wrong!')
    }
    console.log('%c Note Book Controller: test that it\
      creates note is passing', 'color:green')
  };

  testThatItCreatesNote();

  function testThatCloseNoteShowsAbbreviationText() {
    var divDouble = new DivDouble();
    var noteBookController = new NoteBookController();
    noteBookController.closeNoteWithId(0, divDouble)
    var singleNoteView =
      new SingleNoteView(noteBookController.notebookview.notebook.notes[0], 0);
    if (divDouble.innerHTML !== singleNoteView.HTMLClosedNoteRepresentation()) {
      throw new Error ('Something went wrong!')
    }
    console.log('%c Note Book Controller: test that it\
      shows abbreviated text is passing', 'color:green')
  };

  testThatCloseNoteShowsAbbreviationText();

  function testThatOpenNoteShowsFullText() {
    var divDouble = new DivDouble();
    var noteBookController = new NoteBookController();
    noteBookController.openNoteWithId(0, divDouble)
    var singleNoteView =
      new SingleNoteView(noteBookController.notebookview.notebook.notes[0], 0);
    if (divDouble.innerHTML !== singleNoteView.HTMLOpenNoteRepresentation()) {
      throw new Error ('Something went wrong!')
    }
    console.log('%c Note Book Controller: test that it\
      shows full text is passing', 'color:green')
  };

  testThatOpenNoteShowsFullText();

})(this);
