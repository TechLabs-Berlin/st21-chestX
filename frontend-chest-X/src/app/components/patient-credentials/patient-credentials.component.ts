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
  emailAddress: string = '';
  dateOfBirth: string = '';
  fullName: string = '';

  constructor(private userInfoServive: UserDataService) {}

  ngOnInit(): void {}

  userInformation(name: any, dob: any, email: any): void {
    this.userInfo.name = name.value;
    this.userInfo.dob = dob.value;
    this.userInfo.email = email.value;
    console.log(this.userInfo);
    this.userInfoServive.userInformation.next(this.userInfo);
  }

  // emailFunction(event: any) {
  //   this.emailAddress = event.target.value.trim();
  //   console.dir(this.emailAddress);
  // }
  newEmail(event: any) {
    this.emailAddress = event.target.value.trim();
    console.log(this.emailAddress);
  }
  newDOB(event: any) {
    this.dateOfBirth = event.target.value.trim();
    console.log(this.dateOfBirth);
  }
  newName(event: any) {
    this.fullName = event.target.value.trim();
    console.log(this.fullName);
  }
}
