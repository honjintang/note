(function(exports) {
  function NoteListViews(noteList) {
    this.noteList = noteList;
  }

  NoteListViews.prototype.returnHtmlString = function() {
    for(i = 0; i < this.noteList.notes.length; i++) {
      return "<ul><li><div>" + this.noteList.notes[i] + "</div></li></ul>";
    }
  };
  exports.NoteListViews = NoteListViews;
})(this);
