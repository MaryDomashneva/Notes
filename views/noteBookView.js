// $(document).ready(function() {
//   notebook = new NoteBook();
// });
//
// $(document).on('submit', 'form.noteForm', function(event) {
//   var text = document.getElementById('noteInputField').value;
//   var note = new Note(text);
//   notebook.add(note);
//   event.preventDefault();
//   for (var i = 0; i < notebook.notes.length; i++) {
//     var note = document.createElement('h1');
//     note.innerHTML = notebook.notes[i].text;
//     $("body").append(note);
//   };
// });

var NOTEBOOKVIEWMODULE = (function(exports) {
  exports.NoteBookView = NoteBookView;
  function NoteBookView(notebook) {
    this.notebook = notebook;
  };

  NoteBookView.prototype.HTMLNoteBookRepresentation = function() {
    var htmlString = ('<ul><li><div>' + (this.notebook.notes.map(note =>
      note.abbreviation()).join('</div></li><li><div>')) + '</div></li></ul>');

    return htmlString;
  };

  return exports;
})(this);
