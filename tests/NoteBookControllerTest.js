var NOTEBOOKCONTROLLERMODULE = (function(exports) {

  function testThatItUpdatesApp() {
    function DivDouble() {
      this.innerHTML = '';
    };

    var divDouble = new DivDouble();
    var noteBookController = new NoteBookController();
    noteBookController.updateApp(divDouble);

    if (divDouble.innerHTML !==
      noteBookController.notebookview.HTMLNoteBookRepresentation()) {
      throw new Error ('Something went wrong!')
    }
      console.log('%c Note Book Controller: test that HTML page has a right representation when loaded is passing', 'color:green')
  };

  testThatItUpdatesApp();
})(this);
