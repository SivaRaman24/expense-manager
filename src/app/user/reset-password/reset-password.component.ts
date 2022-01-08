import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMismatchValidator } from '../password-mismatch.directive';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm!: FormGroup;
  hideNewPassword: boolean = true;
  hideConfirmPassword: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.resetPasswordForm = new FormGroup({
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required, passwordMismatchValidator()]),
    });
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
