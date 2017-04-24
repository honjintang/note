function testNoteList() {
  var noteList = new NoteList();
  noteList.addNote("Favourite drink: seltzer");
  assert.isTrue(noteList.returnNotes().includes("Favourite drink: seltzer"));
}

testNoteList();
