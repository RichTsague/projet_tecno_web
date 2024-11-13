export const metadata = {
  title: 'Bibliothèque',
  description: 'Gestion de bibliothèque',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Menu de navigation */}
        <nav className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
          <div className="text-xl font-bold">Bibliothèque</div>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:underline">Accueil</a></li>
            <li><a href="/books" className="hover:underline">Livres</a></li>
            <li><a href="/authors" className="hover:underline">Auteurs</a></li>
          </ul>
        </nav>

        {/* Contenu principal */}
        <main className="p-8">{children}</main>

        {/* Pied de page */}
        <footer className="bg-gray-900 text-center text-white py-4">
          &copy; 2024 - Gestion de Bibliothèque
        </footer>
      </body>
    </html>
  )
}
