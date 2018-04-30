var NOTEMODULE = (function(exports) {
  function testThatNotetakesAParametr() {
     var note = new Note('My favourite language is JavaScript');

     if (note.text !== 'My favourite language is JavaScript') {
       throw new Error ('Something went wrong!')
     }
   };

 testThatNotetakesAParametr();

 function testAbbreviationFunction() {
    var note = new Note('My favourite language is JavaScript');
    var  newNote = note.abbreviation();
    if (newNote !== 'My favourite languag') {
      throw new Error ('Something went wrong!')
    }
  };

testAbbreviationFunction();

})(this);
