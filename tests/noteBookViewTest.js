var NOTEBOOKVIEWMODULE = (function(exports) {

  function testThatItReturnsRightString() {
    var notebook = new NoteBook();
    var note1 = new Note('AAAA');
    var note2 = new Note('BBBB');
    notebook.add(note1);
    notebook.add(note2);
    var view = new NoteBookView(notebook);
    var actualString = view.HTMLNoteBookRepresentation();
    var expectedString =
     "<ul><li><div id='0'>AAAA</div></li><li><div id='1'>BBBB</div></li></ul>";
    if (actualString !== expectedString) {
      throw new Error (`Something went wrong! ${actualString} not equal\
        ${expectedString}`);
    }
  };

  testThatItReturnsRightString();
})(this);
