$(document).ready(function() {
  notebook = new NoteBook();

});

$(document).on('submit', 'form.NoteForm', function(event) {
  var text = $('#1')
  notebook.addcreatednote(text);
  event.preventDefault();
  for (var i = 0; i < notebook.notes.length; i++) {
    var note = document.createElement("h1");
    note.innerHTML = notebook.notes[i].text;
    $("body").append(note);
  };
});
