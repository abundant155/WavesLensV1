import { Welcome } from "@/components/Welcome/Welcome";
import { Text, Space, Grid, Paper, Container, Center } from "@mantine/core";
import { ImArrowDown2 } from "react-icons/im";
import { Fade } from 'react-awesome-reveal';
export default function Why() {

return(
    <>
<div>
    <Welcome />
    </div>
    <Space h="md"/>
 <Text ta="center" fz={50} fw={800} fs="italic" variant="gradient" gradient={{ from: 'blue', to: 'cyan', deg: 176 }}>Roadmap</Text>
  <Space h="md"/>
    <Container> 
      <Fade>
        <Paper shadow="xl" radius={111}withBorder p="xl">
        <Text td="underline" ta="center" fw={500}>Launch To Lens Button</Text>
        <Text c="dimmed" fw={200}>Creates a post for the user attaching the Title and Playback URL of their stream.</Text>
        <Space h="md"/>
        <Text c="dimmed" fw={200}>Updates user profile with the StreamID and PlaybackURL.</Text>
        <Space h="md"/>
        </Paper>
</Fade>
        <Space h="sm"/>
        <Center>
       <ImArrowDown2/>
       </Center>
       <Space h="sm"/>
<Fade>
      <Paper shadow="xl" radius={111} withBorder p="xl">
      <Text td="underline" ta="center" fw={500}>Channel Chats</Text>
        <Text c="dimmed" fw={200}>Using Firebase to build the Channel Chats for logged in users to engage in.</Text>
        <Space h="md"/>
        <Text c="dimmed" fw={200}>Will be the only component on Waves that isnt on-chain.</Text>
        <Space h="md"/>
    </Paper>
</Fade>
    <Space h="sm"/>
        <Center>
       <ImArrowDown2/>
       </Center>
       <Space h="sm"/>
    <Fade>
      <Paper shadow="xl" radius={111} withBorder p="xl">
      <Text td="underline" ta="center" fw={500}>Subcription Payments</Text>
        <Text c="dimmed" fw={200}>Building subcriptions around crypto payments (MATIC) to be instantly paid out to streamers.</Text>
        <Space h="md"/>
        <Text c="dimmed" fw={200}>Subscriber rewards: Subscriber Badge, Subscription NFT, Channel Points, and more...</Text>
       <Space h="md"/>
    </Paper>
</Fade>
    <Space h="sm"/>
        <Center>
       <ImArrowDown2/>
       </Center>
       <Space h="sm"/>
<Fade>
      <Paper shadow="xl" radius={111} withBorder p="xl">
          <Text td="underline" ta="center" fw={500}>Clean Up</Text>
        <Text c="dimmed" fw={200}>Fixing any bugs and adding small features based on feedback and testing.</Text>
        <Space h="md"/>
        
    </Paper>
      </Fade>
      <Space h="sm"/>
        <Center>
       <ImArrowDown2/>
       </Center>
       <Space h="sm"/>
<Fade>
       <Paper shadow="xl" radius={111} withBorder p="xl">
          <Text td="underline" ta="center" fw={500}>Community Takeover</Text>
        <Text c="dimmed" fw={200}>Once the foundation for Waves is complete the platform direction will be dependent on the community.</Text>
        <Space h="md"/>
        <Text c="dimmed" fw={200}>Could be done through on-chain voting or some open forum basis.</Text>
           <Space h="md"/>
    </Paper>
      </Fade>

   </Container>
   <Space h={111}/>

</>
)
}