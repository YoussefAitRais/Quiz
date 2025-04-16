import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { QuizzComponent } from "./quizz/quizz.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Quiz';
}
