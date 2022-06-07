import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'at-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
})
export class UserRegistrationComponent implements OnInit {
  public regForm!: FormGroup;

  get addresses() {
    return this.regForm.get('addresses') as FormArray;
    // return this.regForm.controls['addresses'] as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.createRegFrom();
  }

  ngOnInit(): void {}

  createRegFrom() {
    this.regForm = this.fb.group({
      basic: this.fb.group({
        firstName: [
          { value: '', disabled: false },
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(50),
          ],
        ],
        lastName: [
          { value: '', disabled: false },
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(50),
          ],
        ],
        age: [
          { value: '', disabled: false },
          [Validators.required, Validators.max(200), Validators.min(5)],
        ],
      }),
      login: this.fb.group({
        username: [
          { value: '', disabled: false },
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(50),
          ],
        ],
        email: [
          { value: '', disabled: false },
          [
            Validators.required,
            Validators.email,
            Validators.minLength(5),
            Validators.maxLength(50),
          ],
        ],
        password: [
          { value: '', disabled: false },
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(50),
          ],
        ],
        repeatPassword: [
          { value: '', disabled: false },
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(50),
          ],
        ],
        securityQuestion: [
          { value: '', disabled: false },
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(50),
          ],
        ],
        securityAnswer: [
          { value: '', disabled: false },
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(50),
          ],
        ],
      }),
      addresses: this.fb.array([this.createAddressFormGroup()]),
    });

    //  this.fb.array([this.createAddressFormGroup()]),
/*     this.fb.group({
      0: {}
      1: {}
      2: {}
    }) */
  }

  createAddressFormGroup() {
    return this.fb.group({
      flat: [
        { value: '', disabled: false },
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
      street: [
        { value: '', disabled: false },
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
      city: [
        { value: '', disabled: false },
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
      state: [
        { value: '', disabled: false },
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
      pin: [
        { value: '', disabled: false },
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(50),
        ],
      ],
    });
  }

  addAnotherAddressBtnClickHandler() {
    this.addresses.push(this.createAddressFormGroup());
  }

  submitForm() {
    console.log(this.regForm);
  }
}
