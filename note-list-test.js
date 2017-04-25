function testNoteList() {
  var noteList = new NoteList();
  noteList.addNote("Favourite drink: seltzer");
  noteList.addNote("Favourite drink: water");
  assert.isTrue(noteList.returnNotes().includes("Favourite drink: seltzer"));
  assert.isTrue(noteList.returnNotes().includes("Favourite drink: water"));
}

testNoteList();
