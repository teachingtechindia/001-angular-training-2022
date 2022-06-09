import {
  Component,
  ElementRef,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'at-view-container-ref-comp',
  templateUrl: './view-container-ref-comp.component.html',
  styleUrls: ['./view-container-ref-comp.component.scss'],
})
export class ViewContainerRefCompComponent implements OnInit {
  @ViewChild('templateA', { static: false, read: TemplateRef })
  templateA!: TemplateRef<any>;

  @ViewChild('templateB', { static: false, read: TemplateRef })
  templateB!: TemplateRef<any>;

  @ViewChild('vcr1', { static: false, read: ViewContainerRef })
  vcr1!: ViewContainerRef;

  @ViewChild('vcr2', { static: false, read: ViewContainerRef })
  vcr2!: ViewContainerRef;

  @ViewChild('nameInput', { static: false, read: ElementRef })
  nameInput!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  addTemplateA() {
    this.vcr1.createEmbeddedView(this.templateA);
  }

  addTemplateB() {
    this.vcr2.createEmbeddedView(this.templateB);
  }

  clearVCR1() {
    console.log(this.vcr1.length);
    this.vcr1.clear();
  }

  clearVCR2() {
    this.vcr2.clear();
  }
}
