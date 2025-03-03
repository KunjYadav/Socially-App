export const revalidate = 60;

async function TasksPage() {
  const response = await fetch('https://socially-app-psi.vercel.app/api/tasks');
  const tasks = await response.json();

  console.log('tasks:', tasks);

  return <div>TasksPage</div>;
}
export default TasksPage;
