import TaskFormCustom from '@/components/TaskFormCustom'
import TaskForm from '@/components/TaskFormCustom'
import TaskList from '@/components/TaskList'
export const dynamic = 'force-dynamic'
const tasksPage = () => {
  return (
    <div className='max-w-lg'>
      <TaskFormCustom />
      <TaskList />
    </div>
  )
}
export default tasksPage
