import { AppShell, Burger, Title, Image, Group, Button, Text, ScrollArea, Container, Chip } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { CardMain } from '../component/CardMain'


export function Home() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <>
    <AppShell
      layout="alt"
      header={{ height: 180 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group px="xl" mt="40">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Title order={1}>一覧 | All</Title>
        </Group>
        <Group px="md" w="100%" mt="xs">
          <ScrollArea offsetScrollbars p="sm">
          <table style={{width:"1000px"}}>
            <tr>
              <td><Chip mr="6" color="indigo">物理</Chip></td>
              <td><Chip mr="6" color="indigo">宇宙</Chip></td>
              <td><Chip mr="6" color="indigo">AI</Chip></td>
              <td><Chip mr="6" color="indigo">生命</Chip></td>
              <td><Chip mr="6" color="indigo">情報</Chip></td>
              <td><Chip mr="6" color="indigo">建築</Chip></td>
              <td><Chip mr="6" color="indigo">化学</Chip></td>
              <td><Chip mr="6" color="indigo">半導体</Chip></td>
              <td><Chip mr="6" color="indigo">画像処理</Chip></td>
              <td><Chip mr="6" color="indigo">材料</Chip></td>
              <td><Chip mr="6" color="indigo">数学</Chip></td>
              <td><Chip mr="6" color="indigo">セキュリティ</Chip></td>
              <td><Chip mr="6" color="indigo">自動運転</Chip></td>
              <td><Chip mr="6" color="indigo">航空</Chip></td>
              <td><Chip mr="6" color="indigo">流体力学</Chip></td>
            </tr>
          </table>
          </ScrollArea>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Group mb="80">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Image
            w="30%"
            radius="sm"
            src="./icon.png"
          />
        </Group>
        <Button mt="sm" size="lg" variant="default"><Text c="gray.7" fw="bold">工学部</Text></Button>
        <Button mt="sm" size="lg" variant="default"><Text c="gray.7" fw="bold">情報工学部</Text></Button>
      </AppShell.Navbar>
      <AppShell.Main bg="#F8F9FA">
        <Container>
          <CardMain/>
        </Container>
      </AppShell.Main>
    </AppShell>
    </>
  );
}