var NOTEMODULE = (function(exports) {
  function testThatNotetakesAParametr() {
     var note = new Note('My favorite breed of dog is french bulldog');

     if (note.text !== 'My favorite breed of dog is french bulldog') {
       throw new Error ('Something went wrong!')
     }
   };

 testThatNotetakesAParametr();

//#abbreviation test

 function testAbbreviationFunction() {
    var note = new Note('My favorite breed of dog is french bulldog');
    var  newNote = note.abbreviation();
    if (newNote !== 'My favorite breed of') {
      throw new Error ('Something went wrong!')
    }
  };

testAbbreviationFunction();

})(this);
