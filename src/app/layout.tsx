import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../app/css/globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Embaixadoras | Beleza Diaria',
  description: 'Um ambiente exclusivo destinado às embaixadoras, oferecendo uma visão abrangente de seus feitos, progressos e resultados. Aqui, elas podem acessar métricas detalhadas relacionadas às suas redes sociais e campanhas da Beleza Diária.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
