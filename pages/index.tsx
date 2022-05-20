import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Step, Steps, useSteps } from 'chakra-ui-steps';
import {
  Box,
  Button,
  Code,
  Flex,
  Grid,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../components/ColorModeSwitcher';
import { Logo } from '../components/Logo/Logo';

const content1 = (
  <Flex py={4}>
    <Text noOfLines={[1, 2, 3]}>
      &quot;The quick brown fox jumps over the lazy dog&quot; is an
      English-language pangram—a sentence that contains all of the letters of
      the English alphabet. Owing to its existence, Chakra was created.
    </Text>
  </Flex>
);
const content2 = (
  <Flex py={4}>
    <Text noOfLines={[1, 2, 3]}>
      &quot;The quick brown fox jumps over the lazy dog&quot; is an
      English-language pangram—a sentence that contains all of the letters of
      the English alphabet. Owing to its existence, Chakra was created.
    </Text>
  </Flex>
);
const content3 = (
  <Flex py={4}>
    <Text noOfLines={[1, 2, 3]}>
      &quot;The quick brown fox jumps over the lazy dog&quot; is an
      English-language pangram—a sentence that contains all of the letters of
      the English alphabet. Owing to its existence, Chakra was created.
    </Text>
  </Flex>
);

const steps = [
  { label: 'Step 1', content: content1 },
  { label: 'Step 2', content: content2 },
  { label: 'Step 3', content: content3 },
];

export const StepsExample = () => {
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  return (
    <Flex flexDir="column" width="100%">
      <Steps activeStep={activeStep}>
        {steps.map(({ label, content }) => (
          <Step label={label} key={label}>
            {content}
          </Step>
        ))}
      </Steps>
      {activeStep === steps.length ? (
        <Flex p={4}>
          <Button mx="auto" size="sm" onClick={reset}>
            Reset
          </Button>
        </Flex>
      ) : (
        <Flex width="100%" justify="flex-end">
          <Button
            isDisabled={activeStep === 0}
            mr={4}
            onClick={prevStep}
            size="sm"
            variant="ghost"
          >
            Prev
          </Button>
          <Button size="sm" onClick={nextStep}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Contabilizador de Tareas de Lex Doctor</title>
        <meta
          name="description"
          content="Contabilizador de tareas para Lex Doctor"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid minH="100vh" p={3}>
        <main>
          <Grid height="90vh">
            <ColorModeSwitcher justifySelf="flex-end" />
            <VStack spacing={8}>
              <StepsExample />
              <Text>
                Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
              </Text>
            </VStack>
          </Grid>
        </main>
        <footer>
          <Box textAlign="center">
            <Link
              href="https://www.linkedin.com/in/inaki-arango/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hecho con ❤️ por Iñaki{' '}
            </Link>
          </Box>
        </footer>
      </Grid>
    </div>
  );
};

export default Home;
