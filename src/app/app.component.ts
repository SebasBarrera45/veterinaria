import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Veterinaria';
  constructor(public dialogo: MatDialog) {}

}
