var NOTEMODULE = (function(exports) {
  function testThatNotetakesAParametr() {
     var note = new Note('My favorite breed of dog is french bulldog');

     if (note.text !== 'My favorite breed of dog is french bulldog') {
       throw new Error ('Something went wrong!')
     }
     console.log('%c Note: test that function Note takes a parametr is passing',
      'color:green')
   };

 testThatNotetakesAParametr();

//#abbreviation test

 function testAbbreviationFunction() {
    var note = new Note('My favorite breed of dog is french bulldog');
    var  newNote = note.abbreviation();
    if (newNote !== 'My favorite breed of') {
      throw new Error ('Something went wrong!')
    }
    console.log('%c Note: test that method abbreviation reduce note to 20 chars\
     is passing', 'color:green')
  };

testAbbreviationFunction();

})(this);
