var SINGLENOTEVIEWMODULE = (function(exports) {
  exports.SingleNoteView = SingleNoteView;
  function SingleNoteView(note, noteId) {
    this.note = note;
    this.noteId = noteId;
  };

  SingleNoteView.prototype.HTMLOpenNoteRepresentation = function() {
    var htmlString = (this.note.text) + `<a href='#notes/${this.noteId}/close' style='text-decoration:none'> ―</a>`;

    return htmlString;
  };

  SingleNoteView.prototype.HTMLClosedNoteRepresentation = function() {
    var htmlString = (`<a href='#notes/${this.noteId}'>` + (this.note.abbreviation()) + '</a>');

    return htmlString;
  };

  return exports;
})(this);
