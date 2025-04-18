import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { QuizzComponent } from "./quizz/quizz.component";
import { CategoryComponent } from "./category/category.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HomeComponent , CategoryComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Quiz';
}
