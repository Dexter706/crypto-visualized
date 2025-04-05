import { notFound } from 'next/navigation'
import AESVisualization from '@/components/crypto/AESVisualization'

export default function AlgorithmPage({ params }: { params: { algorithm: string } }) {
  if (params.algorithm === 'aes') {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">AES Algorithm</h1>
        <AESVisualization />
      </div>
    )
  }
  
  return notFound()
}