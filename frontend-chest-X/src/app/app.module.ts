import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ImageDisplayComponent } from './components/image-display/image-display.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PatientCredentialsComponent } from './components/patient-credentials/patient-credentials.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    FileUploadComponent,
    ImageDisplayComponent,
    WelcomeComponent,
    PatientCredentialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
