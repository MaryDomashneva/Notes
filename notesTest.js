(function(exports) {
  // function testAbbreviationLength() {
  //   var note = new Note();
  //
  //   if (note.abbreviationlength > 20) {
  //     throw new Error('Note abbreviation is greater than 20')
  //   }

  function testThatNotetakesAParametr() {
    var note = new Note('My favourite language is JavaScript');

    if (note.text !== 'My favourite language is JavaScript') {
      throw new Error ('Something went wrong!')
    }
  };

testThatNotetakesAParametr();
}) (this);
