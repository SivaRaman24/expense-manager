import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

/** Error when invalid control is dirty, touched, or submitted. */
export class PasswordMismatchErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    const invalidCtrl = !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    const invalidForm = !!(form?.invalid && form?.hasError('passwordMismatch'));

    return (invalidCtrl || invalidForm);
  }
}
