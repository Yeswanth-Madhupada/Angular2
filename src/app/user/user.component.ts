import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { type User } from './user.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }
  onSelectUser() {
    this.select.emit(this.user.id)
  }
}

//V.V.I.P selectedUser which is the state variable is available in user.component.html file ********

// signals
// avatar = input.required<string>()
// name = input.required<string>()
// imagePath = computed(()=>{
//   return  '../../assets/users' + this.avatar()
// })
// select=output<string>();