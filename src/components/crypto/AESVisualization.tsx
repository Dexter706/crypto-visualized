'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function AESVisualization() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Create 4x4 grid of cubes
    const cubes = []
    for (let i = 0; i < 4; i++) {
      cubes[i] = []
      for (let j = 0; j < 4; j++) {
        const geometry = new THREE.BoxGeometry()
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        const cube = new THREE.Mesh(geometry, material)
        cube.position.set(i - 1.5, j - 1.5, 0)
        scene.add(cube)
        cubes[i][j] = cube
      }
    }

    camera.position.z = 5

    const animate = () => {
      requestAnimationFrame(animate)
      cubes.flat().forEach(cube => {
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
      })
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="w-full h-[500px]" />
}