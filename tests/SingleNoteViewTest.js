var SINGLENOTEVIEWMODULE = (function(exports) {

  function testThatReturnRightString() {
    var note = new Note('Favourite drink: seltzer');
    var singleNoteView = new SingleNoteView(note);


    if (singleNoteView.HTMLNoteBookRepresentation() !== '<div>Favourite drink: seltzer</div>') {
      throw new Error ('Something went wrong!')
    }
  };

  testThatReturnRightString();
})(this);
