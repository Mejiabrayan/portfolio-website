'use client'

import { Info, LayoutDashboard, Loader2, User } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from './ui/Button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/DropdownMenu'


const MobileMenu = () => {
  const [open, setOpen] = useState<boolean>(false)


  return (
    <nav className='md:hidden fixed z-50 bottom-20 right-0 left-0 flex justify-center'>
      <div className='shadow-2xl rounded-md outline outline-2 '>
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild onClick={() => setOpen((prev) => !prev)}>
            <Button variant='default' size='lg'>
              Menu
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56'>
            <DropdownMenuGroup >
              
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link
                  href='/'
                  className='w-full flex items-center gap-1.5'>
                  <LayoutDashboard className='mr-2 h-5 w-5' />
                  <span>Home</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href='/projects'
                  className='w-full flex items-center gap-1.5'>
                  <info className='mr-2 h-5 w-5' />
                  <span>Work</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {/* <DropdownMenuItem onClick={signUserOut} className='gap-1.5'>
                <User className='mr-2 h-5 w-5' />
                <span>{isLoading ? 'Signing out' : 'Sign out'}</span>
                {isLoading ? (
                  <Loader2 className='animate-spin h-4 w-4' />
                ) : null}
              </DropdownMenuItem> */}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}

export default MobileMenu