import React from 'react'
import { Group, MantineProvider, Container, Title, Badge, Text  } from '@mantine/core';
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, Float, Html, OrbitControls } from '@react-three/drei'
import { KCard } from './KCard'


export function Detail() {
  return (
    <Container size="sm">
            <Title mb="xs" order={2} c="gray.7">○○研究室</Title>
            <Group mb="md">
              <Badge color="yellow" size="lg" radius="sm">情報</Badge>
              <Badge color="teal" size="lg" radius="sm">物理</Badge>
            </Group>
            <Group mb="xl">
              <Text c="dimmed" size="sm">概要概要概要概要概要概要概要概要概要</Text>
            </Group>
          <Canvas 
            camera={{ position: [0, 0, 8.5] }}
            style={{
              height:"300px",
              borderRadius:"10px"
            }}
          >
            <hemisphereLight groundColor="red" />
            <Float floatIntensity={10} rotationIntensity={4}>
              <Html style={{ userSelect: 'none' }} castShadow receiveShadow transform>
                <MantineProvider>
                  <KCard type={8}/>
                </MantineProvider>
              </Html>
            </Float>
            <Environment background preset="dawn" blur={0.9} />
            <ContactShadows position={[0, -10, 0]} opacity={0.7} scale={30} />
            <OrbitControls />
        </Canvas>
        </Container>
  )
}
