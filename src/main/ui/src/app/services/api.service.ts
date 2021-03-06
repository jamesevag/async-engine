import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Consts} from "../consts";
import 'rxjs/Rx';
import {Rest} from "../rest";
import Task = Domain.Task;
import TaskGroup = Domain.TaskGroup;
import ScheduledTask = Domain.ScheduledTask;

@Injectable()
export class ApiService {

  constructor(private http: Http) {
  }

  getTasks() {
    return Rest.get(Consts.TASK, this.http);
  }

  getTaskResult(id: string) {
    return Rest.get(Consts.TASK_RESULT + "/" + id, this.http);
  }

  findTaskResultsByTaskId(taskId: string) {
    return Rest.get(Consts.FIND_BY_TASK_ID_PATH + "/" + taskId, this.http);
  }

  getTaskGroups() {
    return Rest.get(Consts.TASK_GROUP, this.http);
  }

  saveTask(data: Task) {
    return Rest.post(Consts.TASK, data, this.http);
  }

  saveScheduledTask(data: ScheduledTask) {
    return Rest.post(Consts.SCHEDULED_TASK, data, this.http);
  }

  saveTaskGroup(data: TaskGroup) {
    return Rest.post(Consts.TASK_GROUP, data, this.http);
  }
}
