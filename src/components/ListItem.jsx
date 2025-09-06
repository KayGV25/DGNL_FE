import { NavigationMenuLink } from '@radix-ui/react-navigation-menu'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'

import { Link } from 'react-router-dom'

export default function ListItem({ href, children, ...props }) {
  return (
    <li className='flex w-full items-center rounded-md'>
      <Link to={`${href}`} className='w-full text-center'>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>{children}</NavigationMenuLink>
      </Link>
    </li>
  )
}
