import { Project } from '../../models/project';
import { Task } from '../../models/task';
import {Category} from '../../models/category';

export interface TodoState {
  selectedProject: number;
  selectedCategory: number;
  projects: Project[];
  categories: Category[];
  tasks: Task[];
}

export const initialTodoState: TodoState = {
  selectedProject: 0,
  selectedCategory: 0,
  projects: [
    {
      id: '1',
      name: 'Analytics',
      status: true
    },
    {
      id: '2',
      name: 'Project Management'
    },
    {
      id: '3',
      name: 'E-commerce'
    },
    {
      id: '4',
      name: 'CRM'
    }
  ],
  categories: [
    {
      id: '1',
      name: 'All Task',
      color: 'success'
    },
    {
      id: '2',
      name: 'People',
      color: 'warning'
    },
    {
      id: '3',
      name: 'Files',
      taskNewCount: 5,
      color: 'danger'
    },
    {
      id: '4',
      name: 'Statistics',
      color: 'primary'
    }
  ],
  tasks: [
    {
      id: '1',
      title: 'Landing page for secret Project',
      projectId: '1',
      categoryId: '1',
      userId: '1',
      priority: 'Expiring',
      status: false
    },
    {
      id: '2',
      title: 'Dashboard page',
      projectId: '1',
      categoryId: '4',
      userId: '2',
      priority: 'Complete',
      status: true
    },
    {
      id: '1',
      title: 'Project 1 Landing page for secret Project',
      projectId: '2',
      categoryId: '3',
      userId: '1',
      priority: 'Expiring',
      status: true
    },
    {
      id: '2',
      title: 'Project 1 Dashboard page',
      projectId: '2',
      categoryId: '2',
      userId: '2',
      priority: 'Complete',
      status: false
    },
    {
      id: '3',
      title: 'Design page and UI/UX',
      projectId: '1',
      categoryId: '1',
      userId: '3',
      priority: 'Urgent',
      status: true
    }
  ]
};
