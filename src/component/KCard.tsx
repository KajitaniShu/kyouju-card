import React from 'react'
import { Card, Image, Text, Group, BackgroundImage, UnstyledButton } from '@mantine/core';


export function KCard({type, open}: any) {
  return (
    <UnstyledButton onClick={open}>
    <Card c="white" p={0} radius="md" withBorder w={200}>
       <BackgroundImage
        h={280}
        src={"./card"+  type + ".png"}
        radius="md"
      >
      <Group justify="space-between" mt="md" mb="md" px="md" >
        <Text size="xs" c="#ddd">○○研究室</Text>
      </Group>
      <Card.Section mt="xs" px="xl">
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={90}
          radius="md" 
          alt="Norway"
        />
      </Card.Section>


      <Text size="7" c="#97C7CF" pt="lg"  px="xl">
        あああああ
      </Text>
      </BackgroundImage>
    </Card>
    </UnstyledButton>
  )
}
