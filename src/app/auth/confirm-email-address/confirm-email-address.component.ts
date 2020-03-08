import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm-email-address',
  templateUrl: './confirm-email-address.component.html',
  styleUrls: ['./confirm-email-address.component.scss'],
})
export class ConfirmEmailAddressComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private activateRoute: ActivatedRoute) {}

  ngOnInit() {}

}
