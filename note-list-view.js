(function(exports) {
  function NoteListViews(noteList) {
    this.noteList = noteList;
  }

  NoteListViews.prototype.returnHtmlString = function() {
    var allElements = ""
    for(i = 0; i < this.noteList.notes.length; i++) {
      allElements += "<ul><li><div>" + this.noteList.notes[i] + "</div></li></ul>\b";
    }
    return allElements;
  };
  exports.NoteListViews = NoteListViews;
})(this);
