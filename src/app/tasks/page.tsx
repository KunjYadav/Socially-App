export const dynamic = 'force-static';

async function TasksPage() {
  const response = await fetch('https://socially-app-psi.vercel.app/api/tasks', {
    cache: 'no-store',
  });
  const tasks = await response.json();

  console.log('tasks:', tasks);

  return <div>TasksPage</div>;
}
export default TasksPage;
