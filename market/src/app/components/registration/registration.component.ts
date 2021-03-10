import { Component } from '@angular/core';
import { UserSettingsService } from '../../services/user-settings.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  constructor (public userService: UserSettingsService) { }
}
