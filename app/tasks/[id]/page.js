import EditForm from '@/components/EditForm'
import { editTask, getTask } from '@/utils/actions'
import prisma from '@/utils/db'
import Link from 'next/link'

const SingleTask = async ({ params }) => {
  const task = await getTask(params.id)

  return (
    <>
      <div className='mb-16'>
        <Link href='/tasks' className='btn btn-accent btn-md'>
          Back to Tasks
        </Link>
      </div>
      <EditForm task={task} />
    </>
  )
}
export default SingleTask
