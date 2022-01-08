import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordMismatchValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {
    const password = control.root.get('password')?.value;
    const confirmPassword = control.value;
    if(password !== confirmPassword) {
      return {passwordMismatch:true};
    }

    return null;
  }
};
