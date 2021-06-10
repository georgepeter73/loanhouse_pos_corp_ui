import {AppState} from '../states';

// Categories
export const getCategories = (state: AppState) => state.todo.categories;
export const selectedCategoryIndex = (state: AppState) => state.todo.selectedCategory;
export const selectedCategory = (state: AppState) => state.todo.categories[state.todo.selectedCategory];

// Projects
export const getProjects = (state: AppState) => state.todo.projects;
export const selectedProjectIndex = (state: AppState) => state.todo.selectedProject;
export const selectedProject = (state: AppState) => state.todo.projects[state.todo.selectedProject];

// Tasks
export const getTasks = (state: AppState) => {
  const projectId = state.todo.projects[state.todo.selectedProject].id;
  const categoryId = state.todo.categories[state.todo.selectedCategory].id;

  return state.todo.tasks.filter((task) =>
    (task.projectId === projectId && (categoryId === '1' ? 1 : task.categoryId === categoryId))
  );
};
export const openedTasks = (state: AppState) => state.todo.tasks.filter((task) => task.status);
export const closedTasks = (state: AppState) => state.todo.tasks.filter((task) => !task.status);
