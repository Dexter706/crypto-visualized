import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Cryptography Visualized</h1>
      <div className="grid gap-4">
        <Link href="/algorithms/aes" className="p-4 border rounded hover:bg-gray-800">
          <h2 className="text-2xl font-semibold">AES Encryption</h2>
          <p>Symmetric encryption standard</p>
        </Link>
        <Link href="/tools/rsa-generator" className="p-4 border rounded hover:bg-gray-800">
          <h2 className="text-2xl font-semibold">RSA Generator</h2>
          <p>Asymmetric key pair generator</p>
        </Link>
      </div>
    </div>
  )
}