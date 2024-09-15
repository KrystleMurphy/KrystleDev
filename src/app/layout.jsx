import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Krystle Murphy',
    default: 'Krystle Murphy - Developer and Tech Enthusiast',
  },
  description:
    'I’m Krystle, a Developer based in Warwick, UK. I specialise in creating responsive, engaging digital experiences using HTML, CSS, JavaScript, and React. I’m committed to continuous learning and always looking for ways to make an impact through technology.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
