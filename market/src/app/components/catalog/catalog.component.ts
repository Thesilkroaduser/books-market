import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books-settings.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  providers: [BooksService]
})
export class CatalogComponent {
  constructor(public booksService: BooksService) {}
}
