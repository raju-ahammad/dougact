import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : '#f1f1f1'} />
    </mesh>
  )
}

export default function BoxAnim() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-1., 0, -1]} />
      <Box position={[1, 0, 0]} />
      <Box position={[-0.5, 1.5, -1]} />
      <Box position={[-0.1, -1, 0]} />
      <Box position={[-0.1, -2, 0]} />
      <Box position={[-0.1, -3, 0]} />
      <Box position={[-0.1, 4, 0]} />
      <Box position={[1, 4, 0]} />
      <Box position={[-0.1, 3, 0]} />
      <Box position={[1, 2, 0]} />
      <Box position={[0.7, 1, 0]} />
      <Box position={[0.4, 0.5, 0]} />
      <Box position={[-1, -1.5, 0]} />
      <Box position={[1, -1.6, 0]} />
      <Box position={[-0.5, -2.8, 0]} />
    </Canvas>
  )
}
