import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="border-b border-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-xl font-bold">
          CryptoVisualized
        </Link>
        <div className="flex gap-4">
          <Link href="/algorithms">Algorithms</Link>
          <Link href="/tools">Tools</Link>
        </div>
      </div>
    </nav>
  )
}