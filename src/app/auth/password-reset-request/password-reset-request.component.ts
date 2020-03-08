import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-reset-request',
  templateUrl: './password-reset-request.component.html',
  styleUrls: ['./password-reset-request.component.scss'],
})
export class PasswordResetRequestComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private fb: FormBuilder) { }

  frmPasswordReset: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]]
  });

  sendPasswordResetRequest() {
    const email = this.frmPasswordReset.controls.email.value;

    this.afAuth.auth.sendPasswordResetEmail(email).then(
      () => {
        // success, show some message
      },
      err => {
        // handle errors
      }
    );
   }

  ngOnInit() {}


}
