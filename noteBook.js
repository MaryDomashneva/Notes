var NOTEBOOKMODULE = (function(exports) {
  exports.NoteBook = NoteBook;
  function NoteBook() {
    this.notes = [];
  };

  NoteBook.prototype.list = function() {
    return this.notes.map(function(note) {
      return note.text;
    });
  };

  NoteBook.prototype.create = function(text) {
    note = new Note(text);
    return note
  };

  NoteBook.prototype.add = function(note) {
    this.notes.push(note);
    return this.notes
  };

  NoteBook.prototype.isEquivalent = function(noteA, noteB) {
    if (noteA.text === noteB.text) {
      return true;
    }
    return false;
  };

  return exports;
})(this);
