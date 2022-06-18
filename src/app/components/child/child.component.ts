import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'at-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
  // @Input() valueFromOutside: number = 10;

  _valueFromOutside: number = 10;
  @Input('valueFromOutside')
  get valueFromOutside(): number {
    return this._valueFromOutside;
  }
  set valueFromOutside(value: number) {
    console.log('child component');
    if (value > 0) this._valueFromOutside = value;
    else this._valueFromOutside = 0;
  }

  constructor() {}

  ngDoCheck(): void {
    console.log('child component ngDoCheck');
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('child component ngOnChanges');
  }
}
