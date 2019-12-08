import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SurnameShortcurPipe } from './pipes/surname-shortcur.pipe';



@NgModule({
  declarations: [HeaderComponent, SurnameShortcurPipe],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, SurnameShortcurPipe],
})
export class SharedModule { }
