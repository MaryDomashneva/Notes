var SINGLENOTEVIEWMODULE = (function(exports) {

//#HTMLOpenNoteRepresentation test

  function testThatReturnRightOpenString() {
    var note = new Note('Favourite drink: seltzer');
    var singleNoteView = new SingleNoteView(note, 0);

    if (singleNoteView.HTMLOpenNoteRepresentation() !== "Favourite drink: seltzer<a href='#notes/0/close' style='text-decoration:none'> ―</a>") {
      throw new Error ('Something went wrong!')
    }
  };

  testThatReturnRightOpenString();

//#HTMLClosedNoteRepresentation test

  function testThatReturnRightClosedString() {
    var note = new Note('Favourite drink: seltzer');
    var singleNoteView = new SingleNoteView(note, 2);

    if (singleNoteView.HTMLClosedNoteRepresentation() !== "<a href='#notes/2'>Favourite drink: seltzer</a>") {
      throw new Error ('Something went wrong!')
    }
  };

  testThatReturnRightOpenString();
})(this);
