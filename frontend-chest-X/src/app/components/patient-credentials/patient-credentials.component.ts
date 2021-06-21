import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-patient-credentials',
  templateUrl: './patient-credentials.component.html',
  styleUrls: ['./patient-credentials.component.scss'],
})
export class PatientCredentialsComponent implements OnInit {
  userInfo = {
    name: '',
    dob: '',
    email: '',
  };

  constructor(private userInfoServive: UserDataService) {}

  ngOnInit(): void {}

  userInformation(name: any, dob: any, email: any): void {
    this.userInfo.name = name.value;
    this.userInfo.dob = dob.value;
    this.userInfo.email = email.value;
    console.log(this.userInfo);
    this.userInfoServive.userInformation.next(this.userInfo);
  }
}
