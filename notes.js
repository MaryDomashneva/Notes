var NOTEMODULE = (function(exports) {
  exports.NoteClass = NoteClass;
  function NoteClass(text) {
    this.text = text;
  }
  NoteClass.prototype.abbreviation = function() {
    var newtext = this.text.slice(0, 20)
    return newtext
  }

  return exports;
})(this);
