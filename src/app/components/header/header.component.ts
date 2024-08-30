import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title: string = 'Task Tracker';
  showAddTask!: boolean;
  subcription!: Subscription;

  constructor(private uiSerivce: UiService) {
    this.subcription = this.uiSerivce
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  toggleAddTask() {
    this.uiSerivce.toggleAddTask();
  }
}
