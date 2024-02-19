import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  items = [
    {
      label: 'item_1',
      link: '/app/menu_1',
    },
    {
      label: 'item_2',
      link: '/app/menu_2',
    },
  ];
}
