import TaskForm from '@/component/TaskForm'
import TaskList from '@/component/TaskList'

const tasksPage = () => {
  return (
    <div className='max-w-lg'>
      <TaskForm />
      <TaskList />
    </div>
  )
}
export default tasksPage
