import React from 'react'
import { Group, Drawer, MantineProvider, Container, Title, Badge, Text, Modal  } from '@mantine/core';
import { useDisclosure, useViewportSize  } from '@mantine/hooks';
import { KCard } from './KCard'
import { Detail } from './Detail'

export function CardMain() {
  const [opened, { open, close }] = useDisclosure(false);
  const { width } = useViewportSize();

  return (
    <>
      <Group gap="lg">
      <KCard type={8} open={open}/>
      <KCard type={8} open={open}/>
      <KCard type={8} open={open}/>
      <KCard type={8} open={open}/>
      <KCard type={8} open={open}/>
      <KCard type={8} open={open}/>
      <KCard type={8} open={open}/>
      <KCard type={8} open={open}/>
      <KCard type={8} open={open}/>
      <KCard type={8} open={open}/>
      <KCard type={8} open={open}/>
      <KCard type={8} open={open}/>
      <KCard type={8} open={open}/>
      <KCard type={8} open={open}/>
      <KCard type={8} open={open}/>
      <KCard type={8} open={open}/>
      <KCard type={8} open={open}/>
      <KCard type={8} open={open}/>
      <KCard type={8} open={open}/>
      <KCard type={8} open={open}/>
      <KCard type={8} open={open}/>
      <KCard type={8} open={open}/>
      <KCard type={8} open={open}/>
      <KCard type={8} open={open}/>
      </Group>

      
      {width > 900 ? 
        <Modal opened={opened} onClose={close} centered size="md">
          <Detail/>
        </Modal>
        :
        <Drawer offset={10} radius="md" size="80%" position='bottom' opened={opened} onClose={close}>
          <Detail/>
        </Drawer>
      }
    </>
  )
}
