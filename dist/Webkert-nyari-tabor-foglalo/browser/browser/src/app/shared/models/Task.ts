export interface Task {
  id: string;
  name: string;
  completed: boolean;
  korosztaly: 'High' | 'Medium' | 'Low';
  dueDate: string;
  description?: string;     
}