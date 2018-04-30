var NOTEMODULE = (function(exports) {
  exports.Note = Note;
  function Note(text) {
    this.text = text;
  };
  Note.prototype.abbreviation = function() {
    var newtext = this.text.slice(0, 20)
    return newtext
  };

  return exports;
})(this);
