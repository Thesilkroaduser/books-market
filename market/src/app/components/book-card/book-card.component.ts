import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { BookCard } from '../../models/book-card.model';
import { UserSettingsService } from '../../services/user-settings.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCardComponent {
  @Input() book: BookCard;
  constructor(public userService: UserSettingsService) { }
}
