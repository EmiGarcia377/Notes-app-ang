import { Injectable } from '@angular/core';
import Note from '../../models/Note';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  readonly API_URL = "https://ca9a3c9baf9aea185ee5.free.beeceptor.com/api/notes/";
  notes: Note[];

  constructor(private http: HttpClient) {
    this.notes = []
  }

  getNotes(){
    return this.http.get<Note[]>(this.API_URL);
  }

  updateTitle = (id: string, newTitle: string) =>{
    const updatedNote = this.notes.find(note => note.id === id);
    if(!updatedNote) return

    updatedNote.title = newTitle;
  }

  updateMarked = (id: string) =>{
    const updatedNote = this.notes.find(note => note.id === id);
    if(!updatedNote) return
    
    updatedNote.marked = !updatedNote.marked;
  }

  createNote(note: Note){
    return this.http.post<Note>(this.API_URL, note);
  }

  createId = () =>{
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  }
}
