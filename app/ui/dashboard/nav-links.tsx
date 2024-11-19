"use client"

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { 
    name: 'Home', 
    href: '/', 
    icon: HomeIcon 
  },
  {
    name: 'Components',
    href: '/components',
    icon: DocumentDuplicateIcon,
  },
  {
    name: 'Server-Side Rendering',
    href: '/ssr',
    icon: DocumentDuplicateIcon
  },
  {
    name: 'Client-side Rendering',
    href: '/csr',
    icon: DocumentDuplicateIcon
  }
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-sm bg-beige-400 p-3 text-sm font-medium hover:bg-green-400 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-white text-darkOlive-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
