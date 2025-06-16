import '@/styles/globals.css'

import { ReactNode } from 'react'
import { Metadata } from 'next'
import { auth0 } from 'auth0/lib/auth0'
import { redirect } from 'next/navigation'
import { Navbar } from '@/modules/auth/components/Navbar'

type Props = {
  children?: ReactNode
}

export const metadata: Metadata = {
  title: 'Auris system',
  description: 'Auris system',
  manifest: '/manifest.json',
  icons: {
    apple: '/apple-icon.png',
  },
}

export default async function RootLayout({ children }: Props) {
  const session = await auth0.getSession()
  if (!session) {
    redirect('/auth/login')
  }

  const user = session.user

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-neutral-white p-4 text-neutral-dark">
        <Navbar user={user} />
        <main>{children}</main>
      </body>
    </html>
  )
}
