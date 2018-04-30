(function(exports) {
  function testAbbreviationLength() {
    var note = new Note();

    if (note.abbreviationlength > 20) {
      throw new Error('Note abbreviation is greater than 20')
    }
  };

  testAbbreviationLength();
}) (this);
