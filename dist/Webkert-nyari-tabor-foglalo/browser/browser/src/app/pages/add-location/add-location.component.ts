import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DatePipe, CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { CampLocation } from '../../shared/models/CampLocation';
import { TaskService } from '../../shared/services/task.service';
import { Subscription, combineLatest } from 'rxjs';
import { Task } from '../../shared/models/Task';

@Component({
  selector: 'app-tasks',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DatePipe,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTabsModule
  ],
  templateUrl: './add-location.component.html',
  styleUrl: './add-location.component.scss',
  standalone: true
})
export class AddLocationComponent implements OnInit, OnDestroy {
  title: string = 'Új tábor felvétele a rendszerbe';
  displayedColumns: string[] = ['status', 'name', 'korosztaly', 'dueDate', 'actions'];
  specialDisplayedColumns: string[] = ['name', 'korosztaly', 'dueDate', 'actions'];
  taskForm!: FormGroup;
  tasks: CampLocation[] = [];
  highKorosztalyTasks: CampLocation[] = [];
  tasksForNextWeek: CampLocation[] = [];
  isLoading = false;
  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.loadAllTaskData();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  initializeForm(): void {
    this.taskForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      korosztaly: ['High', Validators.required],
      dueDate: [new Date(), Validators.required],
      description: ['', Validators.maxLength(200)]
    });
  }

  toggleTaskCompletion(task: Task): void {

  }

  addTask(): void {
  }

  loadAllTaskData(): void {
    this.isLoading = true;

    const allTasks$ = this.taskService.getAllTasks();
    const highKorosztalyTasks$ = this.taskService.getHighKorosztalyPendingTasks();
    const nextWeekTasks$ = this.taskService.getTasksForNextWeek();

    const combined$ = combineLatest([
      allTasks$,
      highKorosztalyTasks$,
      nextWeekTasks$
    ]);
  }





  deleteTask(taskId: string): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.isLoading = true;
      this.taskService.deleteTask(taskId)
        .then(() => {
          this.loadAllTaskData();
          this.showNotification('Task deleted successfully', 'success');
        })
        .catch(error => {
          console.error('Error deleting task:', error);
          this.showNotification('Failed to delete task', 'error');
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }

  private showNotification(message: string, type: 'success' | 'error' | 'warning'): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: [`snackbar-${type}`]
    });
  }
}