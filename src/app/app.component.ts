import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo_project_1';
  myself = 'Nilima';
  myStudy = 'This is my angular component study';
  myItems = 'pen,pensil, NoteBook, scale';
  sTitle = 'This is my angular App';
  myContent = 'This application made by practice purpose';
  

  getName(name:string)
  {
    alert('Nilima Patil');
  }
  addItem(a:any,b:any)
  {
    
    console.log(a+b);
  }

  
}
