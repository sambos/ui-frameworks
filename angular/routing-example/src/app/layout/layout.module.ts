import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
  HeaderComponent,
  RouterModule
  ]
})
export class LayoutModule { }
