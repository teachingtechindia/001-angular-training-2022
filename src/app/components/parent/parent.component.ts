import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'at-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  @ViewChild('templateInsideParent', { static: false })
  view!: TemplateRef<any>;

  templatePlaceholder!: TemplateRef<any>;

  // activePlaceholderItem: 'view' | 'content' | '' = '';

  constructor() {}

  ngOnInit(): void {}

  public changePlaceholderItem() {
    this.templatePlaceholder = this.view;
    // this.activePlaceholderItem = 'view';

    // if (this.activePlaceholderItem === 'content') {
    //   this.templatePlaceholder = this.view;
    //   this.activePlaceholderItem = 'view';
    // } else {
    //   this.templatePlaceholder = this.content;
    //   this.activePlaceholderItem = 'content';
    // }
  }
}
