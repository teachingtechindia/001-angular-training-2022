import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface UserSettings {
  name: string;
  emailOffers: boolean;
  interfaceStyle: string;
  subscriptionType: string;
  notes: string;
}

@Component({
  selector: 'at-user-settings-forms',
  templateUrl: './user-settings-forms.component.html',
  styleUrls: ['./user-settings-forms.component.scss'],
})
export class UserSettingsFormsComponent implements OnInit {
  userSettings: UserSettings = {
    name: 'Vivek Kumar',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'I like Angular framework',
  };

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log('form: ', form);
  }
}
