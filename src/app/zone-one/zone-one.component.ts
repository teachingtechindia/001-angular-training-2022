import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NgZone,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'at-zone-one',
  templateUrl: './zone-one.component.html',
  styleUrls: ['./zone-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZoneOneComponent implements OnInit {
  public progress = 0;

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.normalCode();

    // this.codeOutsideZone();
  }

  normalCode() {
    this.progress = 0;
    let interval: any = null;

    interval = setInterval(() => {
      this.progress += 10;
      this.cdr.detectChanges();
      console.log(this.progress);
    }, 1000);
  }

  codeOutsideZone() {
    this.progress = 0;
    let interval = null;
    this.ngZone.runOutsideAngular(() => {
      interval = setInterval(() => {
        this.progress += 10;
        this.cdr.detectChanges();
        console.log(this.progress);
      }, 1000);
    });
  }
}
