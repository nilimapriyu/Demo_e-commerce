import { Component , OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-child-new',
  templateUrl: './child-new.component.html',
  styleUrls: ['./child-new.component.css']
})
export class ChildNewComponent {
  constructor(){}

 @Input() myName = '';
 @Input() mystudy = '';
 @Input() items = '';
 @Input() subTitle = '';
 @Input() content = '';

}
