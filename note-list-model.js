(function(exports) {
  function NoteList() {
    this.notes = [];
  }

  NoteList.prototype.returnNotes = function() {
    allElements = "";
    for (i = 0; i < this.notes.length; i++) {
        allElements += this.notes[i] + '\b';
    }
    return allElements;
  };

  NoteList.prototype.addNote = function(note) {
    this.notes.push(note);
  };
  exports.NoteList = NoteList;
})(this);
