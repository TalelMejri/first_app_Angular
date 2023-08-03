import { Component, OnInit } from '@angular/core';
import Aos from "aos"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  ngOnInit(): void {
    Aos.init();
  }
}
