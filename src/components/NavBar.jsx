import { Link, Outlet } from 'react-router-dom'
import ProfileBtn from './ProfileBtn'
import { ModeToggle } from './ModeToogle'
import { useState } from 'react'

export default function NavBar() {
  // TODO: implement checkk login method, if login then show ProfileBtn if not show Login

  return (
    <>
      <nav className='bg-background text-foreground flex h-15 items-center justify-between px-12'>
        <div className='flex w-fit items-center justify-between'>
          <Link to='/'>
            <p className='nav-text text-xl font-semibold'>DGNL WEB</p>
          </Link>
        </div>
        <div className='flex w-2/5 items-center justify-between'>
          <Link to='/'>
            <p className='nav-text'>Trang chủ</p>
          </Link>
          <div>
            <Link to='/exams/setup'>Tạo đề thi</Link>
          </div>
          <div>
            <Link>Dịch vụ</Link>
          </div>
          <div>
            <ModeToggle />
          </div>
          <div>
            <ProfileBtn />
          </div>
        </div>
      </nav>
    </>
  )
}
