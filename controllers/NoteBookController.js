var NOTEBOOKCONTROLLERMODULE = (function(exports) {
  exports.NoteBookController = NoteBookController;
  function NoteBookController(notebook = new NoteBook()) {
    var note1 = new Note('Favourite drink: seltzer');
    notebook.add(note1);
    this.notebookview = new NoteBookView(notebook);
  };

  NoteBookController.prototype.updateApp = function(appDiv = document.getElementById('app')) {
    appDiv.innerHTML = this.notebookview.HTMLNoteBookRepresentation();
  };

  return exports;
})(this);
