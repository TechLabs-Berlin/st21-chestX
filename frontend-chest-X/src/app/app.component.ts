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


  title = 'chest-X';
}
