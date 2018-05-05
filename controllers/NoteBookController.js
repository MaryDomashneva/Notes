var NOTEBOOKCONTROLLERMODULE = (function(exports) {
  exports.NoteBookController = NoteBookController;
  function NoteBookController(notebook = new NoteBook()) {
    var note1 = new Note('My favorite breed of dog is french bulldog');
    notebook.add(note1);
    this.notebookview = new NoteBookView(notebook);
  };

  NoteBookController.prototype.updateApp = function(appDiv = this.getAppDiv()) {
    appDiv.innerHTML = this.notebookview.HTMLNoteBookRepresentation();
  };

  //creating link out of note abbreviation and redarecting to new url with note id
  // http:http://127.0.0.1:8080/#notes/0 and showing full note

  NoteBookController.prototype.startListeningForHashChange = function() {
    window.addEventListener('hashchange', e => {e.preventDefault(); this.handleHashChange();}, false);
  };

  NoteBookController.prototype.handleHashChange = function() {
    var link = window.location.hash.split('#')[1];
    if (this.isCloseNoteLink(link)) {
      var noteId = link.split('/')[1];
      this.closeNoteWithId(noteId);
    } else if (this.isOpenNoteLink(link)) {
      var noteId = link.split('/')[1];
      this.openNoteWithId(noteId);
    } else if (this.isCreateNoteLink(link)) {
      this.createNote();
    }
  };

  NoteBookController.prototype.createNote = function() {
    var text = document.getElementById('noteInputField').value;
    var note = new Note(text);
    this.notebookview.notebook.add(note);
    this.updateApp();
  }

  NoteBookController.prototype.openNoteWithId = function(noteId) {
    var note = this.notebookview.notebook.notes[noteId];
    var singleNoteView = new SingleNoteView(note, noteId);
    var noteDiv = this.getNoteDiv(noteId);
    noteDiv.innerHTML = singleNoteView.HTMLOpenNoteRepresentation();
  };

  NoteBookController.prototype.closeNoteWithId = function(noteId) {
    var note = this.notebookview.notebook.notes[noteId];
    var singleNoteView = new SingleNoteView(note, noteId);
    var noteDiv = this.getNoteDiv(noteId);
    noteDiv.innerHTML = singleNoteView.HTMLClosedNoteRepresentation();
  };

  NoteBookController.prototype.getAppDiv = function() {
    return document.getElementById('app');
  };

  NoteBookController.prototype.getNoteDiv = function(noteId) {
    return document.getElementById(`${noteId}`);
  };

  NoteBookController.prototype.isOpenNoteLink = function(link) {
    var stringsSeparatedBySlash = link.split('/');
    return stringsSeparatedBySlash[0] === 'notes' &&
           stringsSeparatedBySlash.length == 2 &&
           stringsSeparatedBySlash[1] !== 'create';
  };

  NoteBookController.prototype.isCreateNoteLink = function(link) {
    var stringsSeparatedBySlash = link.split('/');
    return stringsSeparatedBySlash[0] === 'notes' &&
           stringsSeparatedBySlash.length == 2
           stringsSeparatedBySlash[1] === 'create';
  };

  NoteBookController.prototype.isCloseNoteLink = function(link) {
    var stringsSeparatedBySlash = link.split('/');
    return stringsSeparatedBySlash[0] === 'notes' &&
           stringsSeparatedBySlash.length == 3 &&
           stringsSeparatedBySlash[2] === 'close';
  };

  //code to listen for submit event

  NoteBookController.prototype.listenForEventSubmit = function() {
    var ele = document.getElementById('noteForm');
    if(ele.addEventListener){
        ele.addEventListener('submit', e => {e.preventDefault(); this.handleSubmitNote();}, false);  //Modern browsers
    }else if(ele.attachEvent){
        ele.attachEvent('onsubmit', e => {e.preventDefault(); this.handleSubmitNote();});            //Old IE
    }
  };

  NoteBookController.prototype.handleSubmitNote = function() {
    window.location.hash = '#notes/create';
    // var text = document.getElementById('noteInputField').value;
    // var note = new Note(text);
    // this.notebookview.notebook.add(note);
    // this.updateApp();
  };

  return exports;
})(this);
