import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'at-user-settings-reactive-form',
  templateUrl: './user-settings-reactive-form.component.html',
  styleUrls: ['./user-settings-reactive-form.component.scss'],
})
export class UserSettingsReactiveFormComponent implements OnInit {
  public userSettingForm!: FormGroup;
  public formSubmitted = false;

  constructor() {
    this.createForm();
  }

  createForm() {
    this.userSettingForm = new FormGroup({
      name: new FormControl('Angular training', {
        validators: Validators.required,
        updateOn: 'change',
      }),
      emailOffers: new FormControl(true),
      interfaceStyle: new FormControl(''),
      subscriptionType: new FormControl(''),
      notes: new FormControl(''),
    });
  }

  ngOnInit(): void {}

  submitUserSettingsForm() {
    this.formSubmitted = true;
    console.log(this.userSettingForm);
  }
}
