import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import {ContentModule} from './content/content.module';
import { FixedBarComponent } from './fixed-bar/fixed-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SidebarMenuComponent,
    FixedBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
