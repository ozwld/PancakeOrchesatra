import Head from "next/head";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../components/Auth";

import {
  getDatabseItems,
  setDatabseItems,
} from "../../domain/debris/hook/DatabaseHandler";
import MainLayout from "../../components/MainLayout";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import {
  Container,
  Heading,
  Button,
  Box,
  Grid,
  GridItem,
  Flex,
  Center,
  Input,
  FormControl,
  Textarea,
  ListItem,
  UnorderedList,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { debriEntity } from "../../domain/debris/hook/Types";
import { Converter } from "../../domain/debris/hook/Converter";
import { useToast } from "@chakra-ui/react";

export default function DeburiIndex({ Items }) {
  const { currentUser } = useContext(AuthContext);

  const toast = useToast();
  const [localDate, setlocalDate] = useState(new Date());
  const [body, setBody] = useState("");
  const onChangeBody = (e: any) => {
    setBody(e.target.value);
  };

  const [rate, setRate] = useState(0);
  const onChangeRate = (num: number) => {
    setRate(num);
  };

  const handleOnSubmit = async () => {
    const putEntity: debriEntity = {
      body: body,
      rate: rate,
      date: localDate,
      uid: currentUser?.uid,
    };
    // console.log(putEntity);
    await setDatabseItems(putEntity)
      .then(() => {
        setlocalDate(new Date());
        setBody("");
        setRate(0);
        toast({
          title: "Good Bye",
          description: "メモデブリは宇宙に消えて行った",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((error) => {
        toast({
          title: "Damn...",
          description: "なんかエラーでとるで" + error,

          status: "error",
          duration: 9000,
          isClosable: true,
        });
      });
  };

  if (Items) {
    return (
      <div>
        <Head>
          <title>TINPANI</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <MainLayout>
            <Container fluid className="column">
              <Heading as="h2" mb="2">
                memo debris
              </Heading>
              <Box mb="1.5rem">
                <Calendar
                  locale="ja-JP"
                  onChange={setlocalDate}
                  value={localDate}
                />
              </Box>
              <Box mb="1.5rem">
                <Textarea
                  placeholder="お前の日報や"
                  value={body}
                  onChange={onChangeBody}
                  size="lg"
                  height="200"
                />
              </Box>
              {/* <Box mb="1.5rem">
                <Slider
                  defaultValue={2}
                  min={1}
                  max={3}
                  step={1}
                  onChangeEnd={(val) => onChangeRate(val)}
                >
                  <SliderTrack bg="red.100">
                    <Box position="relative" right={10} />
                    <SliderFilledTrack bg="tomato" />
                  </SliderTrack>
                  <SliderThumb boxSize={6} />
                </Slider>
              </Box> */}
              <Box mb="1.5rem">
                <Button
                  type="submit"
                  onClick={handleOnSubmit}
                  size="lg"
                  w="100%"
                >
                  Save
                </Button>
              </Box>
              <Box mb="1.5rem">
                <UnorderedList>
                  {Items.map((task: debriEntity) => (
                    <ListItem key={task.id}>{task.date}</ListItem>
                  ))}
                </UnorderedList>
              </Box>
            </Container>
          </MainLayout>
        </main>
      </div>
    );
  }
}

export async function getStaticProps() {
  const Items = await getDatabseItems();
  if (Items) {
    // console.log(Items);
    return {
      props: {
        Items,
      },
    };
  }
}
