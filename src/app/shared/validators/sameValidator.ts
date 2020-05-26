import { AbstractControl } from '@angular/forms';

export function sameValidator(control: AbstractControl) {
  let pass = control.get('password').value;
  let confirmPass = control.get('confirmPass').value;

  return pass === confirmPass ? { notSame: true } : null;      
}