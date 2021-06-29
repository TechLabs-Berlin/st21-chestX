import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BackendApiService } from 'src/app/services/backend-api.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {
  selectedFiles?: FileList;
  currentFile?: File;
  progress$ = new BehaviorSubject<number>(0);
  message = '';
  fileInfo?: Observable<any>;
  // resetValue: any;
  resetBtn = false;
  form!: FormGroup;
  pickedImage: string | undefined;
  covidResult = '';
  confidenceLevel: number | undefined;
  userInformation: any;

  constructor(
    private fileUploadService: BackendApiService,
    private userInfoService: UserDataService
  ) {}

  ngOnInit(): void {
    this.fileInfo = this.fileUploadService.getFiles();
    this.form = new FormGroup({
      image: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  selectFile(event: any): void {
    // Getting the user information from service
    this.userInfoService.userInformation.subscribe((val) => {
      this.userInformation = val;
    });

    const file = event.target.files[0];
    this.selectedFiles = event.target.files;
    this.form.patchValue({ image: file });
    this.form.get('image')?.updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.pickedImage = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  inputReset(reset: any): void {
    this.currentFile = undefined;
    this.selectedFiles = undefined;
    this.resetBtn = false;
    reset.value = '';
    this.message = '';
    this.pickedImage = '';
    this.covidResult = '';
    this.confidenceLevel = undefined;
    this.userInformation = '';
    this.fileUploadService.emptyDirectory().subscribe((files) => {});
  }
  result(): void {
    const min = 60;
    const max = 100;
    this.confidenceLevel = Math.floor(Math.random() * (max - min) + min);
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber <= 3) {
      this.covidResult = 'Positive';
    } else {
      this.covidResult = 'Negative';
    }
  }

  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;
        this.resetBtn = true;
        this.result();
        this.fileUploadService.upload(this.currentFile).subscribe(
          (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              let progress = Math.round((100 * event.loaded) / event.total);
              this.progress$.next(progress);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfo = this.fileUploadService.getFiles();
            }
          },
          (error: any) => {
            this.progress$.next(0);
            if (error.error && error.error.message) {
              this.message = error.error.message;
            } else {
              this.message = 'File cannot be uploaded!';
              this.resetBtn = true;
            }
            this.currentFile = undefined;
          }
        );
      }
      this.selectedFiles = undefined;
    }
  }
}
