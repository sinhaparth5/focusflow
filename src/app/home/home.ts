import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ButtonModule, CardModule, DividerModule, TagModule],
  templateUrl: './home.html',
  styleUrl: './home.sass'
})
export class Home {
  constructor() { }
  loginWithGoogle() {
    window.location.href = 'https://focusflow-be-production.up.railway.app/auth/google';
  }
}
