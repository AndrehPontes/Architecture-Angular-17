import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './shared/user.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  users$ = this.userService.getUsers();

  constructor(private userService: UserService) {}
}
