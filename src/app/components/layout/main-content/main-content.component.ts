import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  script = '<h2>Some text beofere script elem</h2><script>alert("This alert will not be called!!")</script>';
  div = '<h1>this is a div</h1>';

  constructor() {}

  ngOnInit(): void {}
}
