import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component'; // Import NavbarComponent
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';  // Adjust to your routes file
import { MatToolbarModule } from '@angular/material/toolbar'; // Import required Angular Material modules
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button'; // If not already imported

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent  // Declare NavbarComponent here
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),  // Your routing module
    MatToolbarModule, // Import Material modules
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
