class Note {
    constructor(title) {
      this.title = title;
      this.element = this.createElement(title);
    }
    
    createElement(title){
      let newNote = document.createElement('div');
      newNote.setAttribute('class', 'card');
      let newPar = document.createElement('p');
      let a = document.createElement('a');
      a.setAttribute('class', 'card-remove');
      a.setAttribute('href', '#');
      let newTitle = document.createTextNode(this.title);
      let removeTitle = document.createTextNode('Remove');
      a.appendChild(removeTitle);
      newPar.appendChild(newTitle);
      newNote.appendChild(newPar);
      newNote.appendChild(a);
      a.addEventListener('click', this.remove.bind(newNote));    
      return newNote;
    }
    
    add(title,element){
      let notes = document.querySelector('.notes');
      let prev = document.querySelector(".card");
      notes.insertBefore(this.element, prev);
      // HINT🤩
      // this function should append the note to the screen somehow
    }
    
    saveToStorage(){
      let note = document.querySelectorAll('.card p'), i;
      let notes =  new Array();
      for (let i = 0; i < note.length; ++i) {
        notes[i] = note[i].innerHTML;
      };
      localStorage.setItem('notes', JSON.stringify(notes));

      
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
    }
    
    remove(){
      this.remove();
      let note = new Note();
      note.saveToStorage();
      // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element
    } 
  }
  
  class App {
    constructor() {
      console.log("👊🏼 The Constructor!");
      // HINT🤩
      // clicking the button should work
      // pressing the enter key should also work
      this.btnAdd = document.getElementById('btnAddNote');
      document.querySelector('#txtAddNote').addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) { 
          document.getElementById('btnAddNote').click();
        }
    });
      this.btnAdd.addEventListener("click", this.createNote.bind(this));
      this.loadNotesFromStorage();
    }
    
    loadNotesFromStorage() {
      storedNotes.reverse();
      storedNotes.forEach(function(card) {
        let note = new Note(card);
        note.add();
      });
      // HINT🤩
      // load all notes from storage here and add them to the screen
      // something like note.add() in a loop would be nice
      
    }
     
    createNote(e){
      this.txtAdd = document.getElementById('txtAddNote').value;
      if(this.txtAdd != ""){
      let note = new Note(this.txtAdd);
      note.add();
      note.saveToStorage();
      this.reset();
      };
      // note.add
      // this function should create a new note by using the Note() class
      // HINT🤩
      // note.add();
      // note.saveToStorage();
      // this.reset();
    }
    
    reset(){
      // this function should reset the form 
      document.getElementById('txtAddNote').value = "";
    }
    
  }
  

  let storedNotes = JSON.parse(localStorage.getItem("notes"));
  let app = new App();