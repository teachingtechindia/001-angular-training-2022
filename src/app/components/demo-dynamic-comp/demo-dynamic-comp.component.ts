import {
  Component,
  ComponentFactoryResolver,
  Injector,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ErrorToastComponent } from '../error-toast/error-toast.component';
import { SuccessToastComponent } from '../success-toast/success-toast.component';
import { WarningToastComponent } from '../warning-toast/warning-toast.component';

@Component({
  selector: 'at-demo-dynamic-comp',
  templateUrl: './demo-dynamic-comp.component.html',
  styleUrls: ['./demo-dynamic-comp.component.scss'],
})
export class DemoDynamicCompComponent implements OnInit {
  @ViewChild('toastViewContainerRef', { read: ViewContainerRef, static: false })
  toastViewContainerRef!: ViewContainerRef;

  toastType = 'success';

  constructor(
    private cfr: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  ngOnInit(): void {}

  createDynamicComponent() {
    const factory = this.cfr.resolveComponentFactory(this.getComponent());
    const componentRef = factory.create(this.injector);
    console.log(componentRef);
    if (this.toastViewContainerRef.length > 0) {
      this.toastViewContainerRef.clear();
    }
    this.toastViewContainerRef.insert(componentRef.hostView);
    componentRef.instance[
      'msg'
    ] = `Settng ${this.toastType} Message at the time of creation`;
  }

  private getComponent() {
    let component!: Type<any>;

    switch (this.toastType) {
      case 'success':
        component = WarningToastComponent;
        this.toastType = 'warning';
        break;

      case 'warning':
        component = ErrorToastComponent;
        this.toastType = 'error';
        break;

      case 'error':
        component = SuccessToastComponent;
        this.toastType = 'success';
        break;
    }

    return component;
  }
}
