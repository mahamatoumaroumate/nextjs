import { NextResponse } from 'next/server'
import db from '@/utils/db'
import { data } from 'autoprefixer'
export const GET = async (request) => {
  const tasks = await db.task.findMany()
  // return Response.json({ data: tasks })
  return NextResponse.json({ data: tasks })
}
export const POST = async (request) => {
  const data = await request.json()
  const tasks = await db.task.create({
    data: {
      content: data.content,
    },
  })
  // return Response.json({ data: tasks })
  return NextResponse.json({ data: tasks })
}
export const PATCH = async (request) => {
  const data = await request.json()
  const tasks = await db.task.update({
    where: {
      id: data.id,
    },
    data: {
      content: data.content,
      completed: data.completed == 'on' ? true : false,
    },
  })
  return NextResponse.json({ data: tasks })
}
