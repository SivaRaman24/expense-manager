import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordMismatchCrossValidator } from '../password-mismatch-cross.directive';
import { PasswordMismatchErrorStateMatcher } from '../password-mismatch-error-state-matcher';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;
  matcher = new PasswordMismatchErrorStateMatcher();

  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      fullName: new FormControl('', [Validators.required, Validators.pattern('')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    }, {validators: passwordMismatchCrossValidator});
  }

  get fullName() {
    return this.signupForm.get('fullName');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

  checkPasswordMisMatch(control:FormControl) {
    const password = control.root.get('password')?.value;
    const confirmPassword = control.value;
    if(password !== confirmPassword) {
      return {passwordMismatch:true};
    }
    return null;
  }

  onClear() {
    this.signupForm.reset();
  }

  onSubmit() {
    if(this.signupForm.valid) {
      console.log(this.signupForm.value);
    } else {
      console.log('Form is not valid');
    }
  }

}
