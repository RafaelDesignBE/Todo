class Note {
    constructor(title) {
      this.title = title;
      this.element = this.createElement(title);
    }
    
    createElement(title){
      let newNote = document.createElement('div');
      newNote.setAttribute('class', 'card');
      let newPar = document.createElement('p');
      let remove = document.createElement('a');
      remove.setAttribute('class', 'card-remove');
      remove.setAttribute('href', '#');
      let newTitle = document.createTextNode(this.title);
      let removeTitle = document.createTextNode('Remove');
      remove.appendChild(removeTitle);
      newPar.appendChild(newTitle);
      newNote.appendChild(newPar);
      newNote.appendChild(remove);
      document.querySelector('a.card-remove').addEventListener('click', this.remove.bind(newNote));    
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
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
    }
    
    remove(){
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
      this.btnAdd.addEventListener("click", this.createNote.bind(this));
      // this.loadNotesFromStorage();
    }
    
    loadNotesFromStorage() {
      // HINT🤩
      // load all notes from storage here and add them to the screen
      // something like note.add() in a loop would be nice
    }
     
    createNote(e){
      this.txtAdd = document.getElementById('txtAddNote').value;
      let note = new Note(this.txtAdd);
      note.add();
      this.reset();
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
  
  let app = new App();