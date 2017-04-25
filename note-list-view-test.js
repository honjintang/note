function testNoteListViews() {
  var noteList = new NoteList()
  var noteListViews = new NoteListViews(noteList);
  noteList.addNote("Favourite drink: seltzer");
  noteList.addNote("Favourite food: cheez");
  assert.isTrue(noteListViews.returnHtmlString().includes("<ul><li><div>Favourite drink: seltzer</div></li></ul>"))
  assert.isTrue(noteListViews.returnHtmlString().includes("<ul><li><div>Favourite food: cheez</div></li></ul>"))
};

testNoteListViews();
