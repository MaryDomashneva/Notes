var NOTEBOOKMODULE = (function(exports) {
  exports.NoteBookClass = NoteBookClass;
  function NoteBookClass() {
    this.notes = [];
  };

  NoteBookClass.prototype.list = function() {
    return this.notes.map(function(note) {
      return note.text;
    });
  };

  NoteBookClass.prototype.create = function(text) {
    note = new NoteClass(text);
    return note
  };

  NoteBookClass.prototype.add = function(note) {
    this.notes.push(note);
    return this.notes
  };

  NoteBookClass.prototype.isEquivalent = function(noteA, noteB) {
    if (noteA.text === noteB.text) {
      return true;
    }
    return false;
  };

  return exports;
})(this);
