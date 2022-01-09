import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMismatchCrossValidator } from '../password-mismatch-cross.directive';
import { PasswordMismatchErrorStateMatcher } from '../password-mismatch-error-state-matcher';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm!: FormGroup;
  hideOldPassword: boolean = true;
  hideNewPassword: boolean = true;
  hideConfirmPassword: boolean = true;
  matcher = new PasswordMismatchErrorStateMatcher();

  constructor() { }

  ngOnInit(): void {
    this.changePasswordForm = new FormGroup({
      oldPassword: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    }, {validators: passwordMismatchCrossValidator});
  }

  get oldPassword() {
    return this.changePasswordForm.get('oldPassword');
  }

  get password() {
    return this.changePasswordForm.get('password');
  }

  get confirmPassword() {
    return this.changePasswordForm.get('confirmPassword');
  }

  onClear() {
    this.changePasswordForm.reset();
  }

  onSubmit() {
    if(this.changePasswordForm.valid) {
      console.log(this.changePasswordForm.value);
    } else {
      console.log('Form is not valid');
    }
  }

}
