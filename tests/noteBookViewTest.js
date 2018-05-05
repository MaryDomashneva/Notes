var NOTEBOOKVIEWMODULE = (function(exports) {

//#HTMLNoteBookRepresentation test
  function testThatItReturnsRightString() {
    var notebook = notebookCreatorTreeNotesAndReturnNotebook()
    var view = new NoteBookView(notebook);
    var actualString = view.HTMLNoteBookRepresentation();
    var expectedString =
     "<ul><li><div id='0'><a href='#notes/0'>Mamba</a></div></li><li><div id='1'><a href='#notes/1'>Cramba</a></div></li><li><div id='2'><a href='#notes/2'>Lamba</a></div></li></ul>";
    if (actualString !== expectedString) {
      throw new Error (`Something went wrong! ${actualString} not equal\
        ${expectedString}`);
    }
    console.log('%c Note Book View: test that method HTMLNoteBookRepresentation\
    returns a right output is passing', 'color:green')
  };

  testThatItReturnsRightString();

})(this);
