import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {
  script = '<script>alert("This alert will not be called!!")</script>';
  div = '<div>this is a div</div>';

  constructor() {}

  ngOnInit(): void {}
}
