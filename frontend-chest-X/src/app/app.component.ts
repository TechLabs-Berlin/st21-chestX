import { Component } from '@angular/core';
import { BackendApiService } from './services/backend-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  UploadedFile: string | undefined;

  constructor( private fileUploadService: BackendApiService ){

  }

  getFiles(){
    this.fileUploadService.getFiles().subscribe((file)=>{
      this.UploadedFile = file;
      console.log(file)
    })
  }


  title = 'chest-X';
}
