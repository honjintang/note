function testNoteText() {
  var note = new Note();
  assert.isTrue(note.returnText() === "My favourite language is JavaScript");
};

testNoteText();
