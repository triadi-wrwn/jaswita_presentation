import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './index/index.component';

import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { MatDialogModule } from '@angular/material/dialog';

import { StepListComponent } from './shared/step-list/step-list.component';
import { ModalComponent } from './shared/modal/modal.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    StepListComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFullpageModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent],
})
export class AppModule { }
