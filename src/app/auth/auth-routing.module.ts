import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PasswordResetRequestComponent } from './password-reset-request/password-reset-request.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';

const routes: Routes = [
  // {
  //   path: 'auth',
  //   children: [
  //     {
  //       // ... Auth Guards For UnAuthenticated Users Here
  //       children: [
  //         // ...
  //         {
  //           path: 'forgot-password',
  //           component: PasswordResetRequestComponent,
  //           data: { title: 'Forgot Password' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'email/action',
  //       component: EmailConfirmationComponent,
  //       data: { title: 'Confirm Email Address' }
  //     }
  //   ]
  // }
  {
    path: '',
    component: PasswordResetRequestComponent,
  },
  {
    path: 'forgot-password',
    component: PasswordResetRequestComponent,
    data: { title: 'Forgot Password' }
  },
  {
    path: 'email/action',
    component: EmailConfirmationComponent,
    data: { title: 'Confirm Email Address' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
