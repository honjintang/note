(function(exports) {
  function NoteList() {
    this.notes = [];
  }
  NoteList.prototype.returnNotes = function() {
    for (i = 0; i < this.notes.length; i++) {
      return this.notes[i];
    }
  };

  NoteList.prototype.addNote = function(note) {
    this.notes.push(note);
  };
  exports.NoteList = NoteList;
})(this);
