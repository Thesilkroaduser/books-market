import { Injectable } from '@angular/core';
import { booksInfo } from '../constants/constants';
import { BookCard } from '../models/book-card.model';

@Injectable()
export class BooksService {

  constructor() {
    const books = booksInfo;
    localStorage.setItem('books', JSON.stringify(books));
   }

  books: BookCard[] = JSON.parse(localStorage.getItem('books'))
}
