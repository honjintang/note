function testNoteListViews() {
  var noteList = new NoteList()
  var noteListViews = new NoteListViews(noteList);
  noteList.addNote("Favourite drink: seltzer");
  assert.isTrue(noteListViews.returnHtmlString() === "<ul><li><div>Favourite drink: seltzer</div></li></ul>")
};

testNoteListViews();
