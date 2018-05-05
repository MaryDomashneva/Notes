function notebookCreatorCreateOneNote() {
  var notebook = new NoteBook();
  var noteA = new Note('Mamba');
  var newNote = notebook.create('Mamba');
  return notebook.isEquivalent(newNote, note)
};

function notebookCreatorAddOneNote() {
  var notebook = new NoteBook();
  var noteA = notebook.create('Mamba');
  notebook.add(noteA);
  var newNote = notebook.notes[0]
  return notebook.isEquivalent(newNote, noteA)
};

function notebookCreatorTreeNotes() {
  var notebook = new NoteBook();
  var noteA = notebook.create('Mamba');
  notebook.add(noteA);
  var noteB = notebook.create('Cramba');
  notebook.add(noteB);
  var noteC = notebook.create('Lamba')
  notebook.add(noteC);
  var arrayUtils = new ArrayUtils();
  return arrayUtils.isEquivalent(notebook.list(), ['Mamba', 'Cramba', 'Lamba'])
};

function notebookCreatorTreeNotesAndReturnNotebook() {
  var notebook = new NoteBook();
  var noteA = notebook.create('Mamba');
  notebook.add(noteA);
  var noteB = notebook.create('Cramba');
  notebook.add(noteB);
  var noteC = notebook.create('Lamba')
  notebook.add(noteC);
  return notebook
};
