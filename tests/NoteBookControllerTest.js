var NOTEBOOKCONTROLLERMODULE = (function(exports) {

  function testThatItUpdatesApp() {
    function DivDouble() {
      this.innerHTML = '';
    };

    var divDouble = new DivDouble();
    var noteBookController = new NoteBookController();
    noteBookController.updateApp(divDouble);

    if (divDouble.innerHTML !== noteBookController.notebookview.HTMLNoteBookRepresentation()) {
      throw new Error ('Something went wrong!')
    }
  };

  testThatItUpdatesApp();
})(this);
