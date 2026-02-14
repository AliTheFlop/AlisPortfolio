"use client";

import {
  Heading,
  Text,
  Button,
  Column,
  Flex,
  RevealFx,
  LetterFx,
  Icon,
} from "@once-ui-system/core";


import NextImage from "next/image";

export default function Home() {
  return (
    <Column fillWidth paddingY="xl" gap="xl" align="center" horizontal="center">
      {/* Hero Section */}
      <Flex
        fillWidth
        minHeight="80"
        paddingY="xl"
        gap="xl"
        vertical="center"
        horizontal="center"
        direction="row"
        wrap
      >
        <Column flex={1} gap="l" align="start" style={{ minWidth: "300px" }}>
          <RevealFx translateY="16" speed="fast" delay={0}>
            <Heading variant="display-strong-l" wrap="balance">
              Helping Small Businesses Get More Business.
            </Heading>
          </RevealFx>
          <RevealFx translateY="16" speed="fast" delay={0.2}>
            <Text
              variant="heading-default-xl"
              onBackground="neutral-weak"
              wrap="balance"
            >
              I help small businesses run marketing projects that boost
              their revenue and get more clients.
            </Text>
          </RevealFx>
          <RevealFx translateY="16" speed="fast" delay={0.4}>
            <Button href="/contact" variant="primary" size="l" arrowIcon>
              Start a Project
            </Button>
          </RevealFx>
        </Column>

        <Column flex={1} horizontal="center" vertical="center" style={{ minWidth: "300px" }}>
          <RevealFx speed="fast" delay={0.2}>
            <Column
              fillWidth
              padding="l"
              background="surface"
              border="neutral-medium"
              radius="l"
              gap="m"
              style={{
                position: 'relative',
                boxShadow: '0 20px 40px -10px var(--neutral-alpha-medium)'
              }}
            >
              <Flex fillWidth horizontal="between" vertical="center">
                <Flex gap="12" vertical="center">
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--brand-solid-strong)' }} />
                  <Text variant="heading-strong-xs">Revenue Growth</Text>
                </Flex>
                <Text variant="body-default-s" onBackground="neutral-weak">Last 30 days</Text>
              </Flex>
              <Flex fillWidth gap="4" vertical="end" style={{ height: '120px' }}>
                {[30, 45, 35, 60, 50, 75, 90].map((height, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${height}%`,
                      background: i === 6 ? 'var(--brand-solid-strong)' : 'var(--neutral-alpha-medium)',
                      borderRadius: 'var(--radius-xs)',
                      opacity: i === 6 ? 1 : 0.5
                    }}
                  />
                ))}
              </Flex>
              <Flex fillWidth horizontal="between" vertical="center" paddingTop="s" borderTop="neutral-medium">
                <Text variant="label-default-s" onBackground="neutral-weak">New Clients</Text>
                <Text variant="heading-strong-m">+24%</Text>
              </Flex>
            </Column>
          </RevealFx>
        </Column>
      </Flex>

      {/* The Problem Section */}
      <Column fillWidth maxWidth="l" gap="l" paddingY="xl" horizontal="center">
        <Heading variant="heading-strong-l">Always On Your Mind...</Heading>
        <Flex fillWidth wrap gap="l" horizontal="center">
          {/* Point 1: Marketer (Stress) */}
          <Column flex={1} style={{ minWidth: '250px', textAlign: 'center' }} gap="m" padding="l" background="surface" border="neutral-medium" radius="l" horizontal="center">
            <Flex
              width="48"
              height="48"
              radius="m"
              background="neutral-alpha-medium"
              vertical="center"
              horizontal="center"
            >
              <Icon name="person" size="l" onBackground="neutral-strong" />
            </Flex>
            <Column gap="xs" horizontal="center">
              <Heading variant="heading-strong-s">You didn't start your business to become a marketer.</Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Marketing takes too much time away from your craft.
              </Text>
            </Column>
          </Column>

          {/* Point 2: Money */}
          <Column flex={1} style={{ minWidth: '250px', textAlign: 'center' }} gap="m" padding="l" background="surface" border="neutral-medium" radius="l" horizontal="center">
            <Flex
              width="48"
              height="48"
              radius="m"
              background="neutral-alpha-medium"
              vertical="center"
              horizontal="center"
            >
              <Icon name="cash" size="l" onBackground="neutral-strong" />
            </Flex>
            <Column gap="xs" horizontal="center">
              <Heading variant="heading-strong-s">Your next client could be weeks away.</Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Inconsistent lead flow makes revenue unpredictable and stressful.
              </Text>
            </Column>
          </Column>

          {/* Point 3: Time */}
          <Column flex={1} style={{ minWidth: '250px', textAlign: 'center' }} gap="m" padding="l" background="surface" border="neutral-medium" radius="l" horizontal="center">
            <Flex
              width="48"
              height="48"
              radius="m"
              background="neutral-alpha-medium"
              vertical="center"
              horizontal="center"
            >
              <Icon name="clock" size="l" onBackground="neutral-strong" />
            </Flex>
            <Column gap="xs" horizontal="center">
              <Heading variant="heading-strong-s">You hate being a <br />full-time CEO.</Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Managing operations shouldn't consume 100% of your freedom.
              </Text>
            </Column>
          </Column>
        </Flex>
      </Column>

      {/* What We've Done (Work) */}
      <Column fillWidth maxWidth="l" gap="xl" paddingY="xl">
        <Heading variant="heading-strong-l">Recent projects</Heading>
        <Column fillWidth gap="xl">
          {/* Project 1 - Kynetic */}
          <Flex fillWidth gap="l" wrap paddingY="m" vertical="center" align="start">
            <Column flex={1} gap="m" style={{ minWidth: '300px' }}>
              <Heading variant="display-strong-s">Kynetic.one</Heading>
              <Text variant="heading-default-xs" onBackground="neutral-weak">
                Launching a performance marketing agency with a high-converting acquisition funnel.
              </Text>
              <Button href="/work/project-1" variant="secondary" arrowIcon>
                Read case study
              </Button>
            </Column>
            <Column flex={1} radius="l"
              style={{
                height: '300px',
                minWidth: '300px',
                background: 'var(--neutral-alpha-medium)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <NextImage
                src="/projects/kynetic.one/kynetic_cover.webp"
                alt="Kynetic.one Cover"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Column>
          </Flex>

          {/* Project 2 - Linwood (Reversed) */}
          <Flex fillWidth gap="l" wrap paddingY="m" vertical="center" direction="row-reverse" align="start">
            <Column flex={1} gap="m" style={{ minWidth: '300px' }}>
              <Heading variant="display-strong-s">Linwood Support</Heading>
              <Text variant="heading-default-xs" onBackground="neutral-weak">
                Transforming an invisible brand into a trusted community presence for a local NDIS provider.
              </Text>
              <Button href="/work/project-2" variant="secondary" arrowIcon>
                Read case study
              </Button>
            </Column>
            <Column flex={1} radius="l"
              style={{
                height: '300px',
                minWidth: '300px',
                background: 'var(--neutral-alpha-medium)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <NextImage
                src="/projects/linwood support/linwood_cover.webp"
                alt="Linwood Support Cover"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Column>
          </Flex>

          {/* Project 3 - Brooklyn */}
          <Flex fillWidth gap="l" wrap paddingY="m" vertical="center" align="start">
            <Column flex={1} gap="m" style={{ minWidth: '300px' }}>
              <Heading variant="display-strong-s">Brooklyn Boy Bagels</Heading>
              <Text variant="heading-default-xs" onBackground="neutral-weak">
                Complete UX/UI overhaul for a beloved local bagel brand.
              </Text>
              <Button href="/work/project-3" variant="secondary" arrowIcon>
                Read case study
              </Button>
            </Column>
            <Column flex={1} radius="l"
              style={{
                height: '300px',
                minWidth: '300px',
                background: 'var(--neutral-alpha-medium)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <NextImage
                src="/projects/brooklyn boy bagels/bbb_cover_big.webp"
                alt="Brooklyn Boy Bagels Cover"
                fill
                style={{ objectFit: 'cover' }}
              />
            </Column>
          </Flex>
        </Column>
      </Column>

      {/* CTA Section */}
      <Column fillWidth maxWidth="m" paddingY="128" gap="l" horizontal="center" align="center">
        <RevealFx translateY="16" speed="fast" delay={0}>
          <Column fillWidth horizontal="center">
            <Heading variant="display-strong-m" align="center" wrap="balance">
              Ready to grow your business?
            </Heading>
          </Column>
        </RevealFx>
        <RevealFx translateY="16" speed="fast" delay={0.2}>
          <Column fillWidth horizontal="center">
            <Text variant="heading-default-l" onBackground="neutral-weak" align="center" wrap="balance">
              Let's turn your passive website into a revenue-generating asset.
            </Text>
          </Column>
        </RevealFx>
        <RevealFx translateY="16" speed="fast" delay={0.4}>
          <Flex fillWidth horizontal="center">
            <Button href="/contact" variant="primary" size="l" arrowIcon>
              Start a Project
            </Button>
          </Flex>
        </RevealFx>
      </Column>
    </Column>
  );
}
