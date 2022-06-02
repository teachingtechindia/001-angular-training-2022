import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface MyDialgData {
  name: string;
  nationality: string;
}

@Component({
  selector: 'at-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.scss'],
})
export class MyDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MyDialgData
  ) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close({ result: false, reason: 'Cancel button is clikced' });
  }

  done() {
    this.dialogRef.close({ result: true, reason: 'done button is clikced' });
  }
}
