import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatDatepickerModule, MatFormFieldModule, MatInputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[provideNativeDateAdapter()]
})
export class AppComponent {}
