import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthorsService } from './authors.service';

@Component({
    selector: 'app-authors',
    templateUrl: './authors.component.html',
    styleUrls: ['./authors.component.css'],
    standalone: true,
    imports: [CommonModule, FormsModule]
})

export class AuthorsComponent 
{
    authorId: number = 0;
    author: any = null;
    errorMessage: string = '';

    constructor(private authorsService: AuthorsService) {}

    fetchAuthor() 
    {
        this.authorsService.getAuthorById(this.authorId).subscribe(
           (data) => 
            {
              this.author = data;
              this.errorMessage = '';
           },
           (error) => 
            {
              console.error("Error fetching the author:", error);
              this.errorMessage = 'Author has not been found!';
              this.author = null;
           }
        );
     }
}     