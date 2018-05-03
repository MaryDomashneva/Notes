var NOTEBOOKCONTROLLERMODULE = (function(exports) {
  exports.NoteBookController = NoteBookController;
  function NoteBookController(notebook = new NoteBook()) {
    var note1 = new Note('Favourite drink: seltzer rghh rgh fg hrtj htgj yj gh ');
    notebook.add(note1);
    this.notebookview = new NoteBookView(notebook);
  };

  NoteBookController.prototype.updateApp = function(appDiv = this.getAppDiv()) {
    appDiv.innerHTML = this.notebookview.HTMLNoteBookRepresentation();
  };

  NoteBookController.prototype.startListeningForHashChange = function() {
    window.addEventListener('hashchange', e => this.handleHashChange());
  };

  NoteBookController.prototype.handleHashChange = function() {
    var noteId = window.location.hash.split('#')[1].split('/')[1];
    this.showSingleNote(noteId);
  };

  NoteBookController.prototype.showSingleNote = function(noteId) {
    var note = this.notebookview.notebook.notes[noteId];
    var singleNoteView = new SingleNoteView(note);
    var appDiv = this.getAppDiv();
    appDiv.innerHTML = singleNoteView.HTMLNoteRepresentation();
  };

  NoteBookController.prototype.getAppDiv = function() {
    return document.getElementById('app');
  };

  return exports;
})(this);
