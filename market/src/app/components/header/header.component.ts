import { Component } from '@angular/core';
import { UserSettingsService } from '../../services/user-settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public userService: UserSettingsService) { }
}
