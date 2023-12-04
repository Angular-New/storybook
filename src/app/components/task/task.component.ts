import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from "../../models";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent {
  /**
   * The shape of the task object
   */
  @Input() task: ITask = <ITask>{};

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTask: EventEmitter<Event> = new EventEmitter<Event>();

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTask: EventEmitter<Event> = new EventEmitter<Event>();

  /**
   * @ignore
   * Component method to trigger the onPin event
   * @param id string
   */
  onPin(id: any): void {
    this.onPinTask.emit(id);
  }

  /**
   * @ignore
   * Component method to trigger the onArchive event
   * @param id string
   */
  onArchive(id: any): void {
    this.onArchiveTask.emit();
  }
}
