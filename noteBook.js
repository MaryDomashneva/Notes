var NOTEBOOKMODULE = (function(exports) {
  exports.NoteBookClass = NoteBookClass;
  function NoteBookClass() {
    this.notes = [];
  };

  NoteBookClass.prototype.list = function() {

  };

  NoteBookClass.prototype.create = function(text) {
    note = new NoteClass(text);
    return note
  };

  NoteBookClass.prototype.add = function(note) {
    this.notes.push(note);
  };

  return exports;
})(this);
