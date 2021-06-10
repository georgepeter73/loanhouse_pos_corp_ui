import {initialTodoState, TodoState} from '../states/todo.state';
import {ProjectActions, ProjectActionTypes} from '../actions/project.actions';
import {Project} from '../../models/project';
import {TaskActions, TaskActionTypes} from '../actions/task.actions';
import {Task} from '../../models/task';

export function TodoReducer(state: TodoState = initialTodoState, action: ProjectActions | TaskActions)
  : TodoState {
  switch (action.type) {
    case ProjectActionTypes.selectedCategory:
      return {
        ...state,
        selectedCategory: state.categories.findIndex((category) => category.id === action.payload)
      };
    case ProjectActionTypes.selectedProject:
      return {
        ...state,
        selectedProject: state.projects.findIndex((project) => project.id === action.payload)
      };
    case ProjectActionTypes.addProject:
      return {
        ...state,
        projects: [ ...state.projects, new Project(action.payload)]
      };
    case TaskActionTypes.addTask:
      return {
        ...state,
        tasks: [ ...state.tasks, new Task(action.payload)]
      };
    case TaskActionTypes.closedTask:
      return {
        ...state,
        tasks: state.tasks.map<Task>((task) => {
          return task.id !== action.payload ?
            task :
            Object.assign({}, task, {status: !task.status});
        })
      };
    default:
      return state;
  }
}
