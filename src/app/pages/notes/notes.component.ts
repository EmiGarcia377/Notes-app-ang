import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { NoteService } from '../../services/note.service';
import { NoteCardComponent } from '../../components/note-card/note-card.component';
import { CreateNoteComponent } from '../../components/create-note/create-note.component';

@Component({
  selector: 'app-notes',
  imports: [HeaderComponent, NoteCardComponent, CreateNoteComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent implements OnInit {
  hasError: boolean = false;
  isLoading: boolean = true;

  constructor(public noteService: NoteService) {}
  ngOnInit(): void {
    this.getNotes();
  }
  getNotes(){
    this.noteService.getNotes().subscribe({
      next: (data) =>{
        this.noteService.notes = data;
        this.isLoading = false;
        this.hasError = false;
      },
      error: (e) =>{
        console.error(e);
        this.hasError = true;
      }
    })
  }
}
