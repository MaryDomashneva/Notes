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
    var htmlString = `<ul><li><div id='0'><a href='#notes/0'>`;
    for (var i = 0; i < this.notebook.notes.length; i++) {
      var note = this.notebook.notes[i];
      htmlString += note.abbreviation();
      if (i !== this.notebook.notes.length - 1) {
        htmlString += `</a></div></li><li><div id='${i+1}'><a href='#notes/${i+1}'>`;
      }
    }
    htmlString += '</a></div></li></ul>';
    return htmlString;
  };

  return exports;
})(this);
