import { Component, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from '../../Tasks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: string;
  remider: boolean = false;
  subcription!: Subscription;
  showAddTask!: boolean;

  constructor(private uiService: UiService) {
    this.subcription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.remider,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.remider = false;
  }
}
