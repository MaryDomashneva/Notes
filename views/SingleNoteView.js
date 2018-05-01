var SINGLENOTEVIEWMODULE = (function(exports) {
  exports.SingleNoteView = SingleNoteView;
  function SingleNoteView(note) {
    this.note = note;
  };

  SingleNoteView.prototype.HTMLNoteBookRepresentation = function() {
    var htmlString = ('<div>' + (this.note.text) + '</div>');

    return htmlString;
  };

  return exports;
})(this);
