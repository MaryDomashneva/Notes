var SINGLENOTEVIEWMODULE = (function(exports) {

//#HTMLOpenNoteRepresentation test

  function testThatReturnRightOpenString() {
    var note = new Note('My favorite breed of dog is french bulldog');
    var singleNoteView = new SingleNoteView(note, 0);

    if (singleNoteView.HTMLOpenNoteRepresentation() !== "My favorite breed of dog is french bulldog<a href='#notes/0/close' style='text-decoration:none'> -</a>") {
      throw new Error ('Something went wrong!')
    }
    console.log('%c Single Note View: test that method\
     HTMLOpenNoteRepresentation returns right string is passing', 'color:green')
  };

  testThatReturnRightOpenString();

//#HTMLClosedNoteRepresentation test

  function testThatReturnRightClosedString() {
    var note = new Note('My favorite breed of dog is french bulldog');
    var singleNoteView = new SingleNoteView(note, 2);
    if (singleNoteView.HTMLClosedNoteRepresentation() !== "<a href='#notes/2'>My favorite breed of</a>") {
      throw new Error ('Something went wrong!')
    }
    console.log('%c Single Note View: test that method\
     HTMLClosedNoteRepresentation returns right string is passing', 'color:green')
  };

  testThatReturnRightClosedString();
})(this);
