import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMismatchCrossValidator } from '../password-mismatch-cross.directive';
import { PasswordMismatchErrorStateMatcher } from '../password-mismatch-error-state-matcher';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm!: FormGroup;
  hideNewPassword: boolean = true;
  hideConfirmPassword: boolean = true;
  matcher = new PasswordMismatchErrorStateMatcher();

  constructor() { }

  ngOnInit(): void {
    this.resetPasswordForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    }, {validators: passwordMismatchCrossValidator});
  }

  get password() {
    return this.resetPasswordForm.get('password');
  }

  get confirmPassword() {
    return this.resetPasswordForm.get('confirmPassword');
  }

  onClear() {
    this.resetPasswordForm.reset();
  }

  onSubmit() {
    if(this.resetPasswordForm.valid) {
      console.log(this.resetPasswordForm.value);
    } else {
      console.log('Form is not valid');
    }
  }

}
