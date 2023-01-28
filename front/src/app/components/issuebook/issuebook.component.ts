import { Component } from '@angular/core';
import { BookService } from 'src/app/services/bookService/book.service';
import { StudentService } from 'src/app/services/studentService/student.service';

@Component({
  selector: 'app-issuebook',
  templateUrl: './issuebook.component.html',
  styleUrls: ['./issuebook.component.css']
})
export class IssuebookComponent {
 
  studentId:any 
  bookId:any
  studentfetched:any
  

constructor(private student: StudentService,private book:BookService) {}

issueBook(){
  console.log("button clicked");
  console.log(this.studentId,this.bookId);
  this.student.issueBookData(this.studentId,this.bookId).subscribe(
    response=>{
      this.studentfetched=response;
      console.log(this.studentfetched);
    },
    error=>{
      console.log(error.error.message.message);
      alert(error.error.message.message);
    }
  )
}
}
