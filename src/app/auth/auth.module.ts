import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { PasswordResetRequestComponent } from './password-reset-request/password-reset-request.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { ConfirmPasswordResetComponent } from './confirm-password-reset/confirm-password-reset.component';
import { ConfirmEmailAddressComponent } from './confirm-email-address/confirm-email-address.component';


@NgModule({
  declarations: [
    PasswordResetRequestComponent,
    EmailConfirmationComponent,
    ConfirmPasswordResetComponent,
    ConfirmEmailAddressComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
