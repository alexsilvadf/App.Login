import { forwardRef, NgModule } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultLoginLayoutComponent } from './components/default-login-layout/default-login-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { PrimaryInputComponent } from './components/primary-input/primary-input.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
@NgModule({
  declarations: [
    AppComponent,
    DefaultLoginLayoutComponent,
    LoginComponent,
    PrimaryInputComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    
  ],
  providers: [
    // provideRouter(routes),
    provideHttpClient(withFetch()),
 


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
