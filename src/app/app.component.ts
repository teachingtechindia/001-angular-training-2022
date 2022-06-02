import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { interval, Observable, of, Subscription } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { MyDialogComponent } from './components/my-dialog/my-dialog.component';
import { ChildMessageService } from './services/child-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data: any;

  isLoggedIn = false;
  email = '';

  showPara = true;

  dob = new Date();

  dig: number = 1234444.45678944;

  myObs$: Observable<number>;

  subscription = new Subscription();

  val = 0;

  total1 = 38;

  total2 = 10;

  increment1() {
    this.total1 += 1;
  }

  increment2() {
    this.total2 += 1;
  }

  constructor(
    private childMessageService: ChildMessageService,
    private httpClient: HttpClient,
    private router: Router,
    public dialog: MatDialog
  ) {
    console.log('VK: APP COMPONENT : Constructor');

    this.myObs$ = interval(2000);

    // this.subscription = this.myObs$.subscribe((d) => {
    //   console.log(d);
    //   this.val = d;
    // });
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    console.log('VK: APP COMPONENT : ngOnInit');

    this.email = window.localStorage.getItem('email') || '';
    this.isLoggedIn = !!window.localStorage.getItem('token');

    // this.callApi();
  }

  callApi() {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((data) => {
        console.log('VK: APP COMPONENT : callApi : data', data);
        this.data = data;
      });
  }

  onSignout() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('id');
    window.localStorage.removeItem('email');
    this.router.navigateByUrl('/signin');
  }

  btnClickHandler() {
    window.alert('Hello World');
  }

  primaryBtnclicked(e: any) {
    console.log('VK: APP COMPONENT : primaryBtnclicked : e', e);
  }

  openMyDlg() {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      minWidth: '50vw',
      width: '5vw',
      minHeight: '50vh',
      disableClose: true,
      backdropClass: 'dlg-bd',
      data: {
        name: 'vivekkumar',
        nationality: 'India',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
