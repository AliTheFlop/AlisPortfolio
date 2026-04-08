"use client";

import {
  Heading,
  Text,
  Button,
  Column,
  Flex,
} from "@once-ui-system/core";
import NextImage from "next/image";

export default function Work() {
  return (
    <Column fillWidth paddingY="xl" gap="xl" align="center">
      {/* Intro Section */}
      <Flex
        fillWidth
        paddingY="xl"
        gap="l"
        vertical="center"
        horizontal="center"
        direction="column"
        style={{ minHeight: '40vh' }}
      >
        <Heading variant="display-strong-l" wrap="balance" align="center">
          Case Studies
        </Heading>
        <Text
          variant="heading-default-l"
          onBackground="neutral-weak"
          wrap="balance"
          align="center"
          style={{ maxWidth: '800px' }}
        >
          These are selected projects showing how strategy, messaging, funnels, content, and conversion improvements help local brands generate more trust, stronger demand, and better conversion paths.
        </Text>
      </Flex>

      {/* Projects List */}
      <Column fillWidth maxWidth="l" gap="128" paddingY="xl">

        {/* Project 1 - Kynetic */}
        <Flex fillWidth gap="xl" wrap vertical="center" align="start">
          <Column flex={1} gap="m" style={{ minWidth: '300px' }}>
            <Text variant="label-strong-s" onBackground="brand-strong">META ADS / FUNNEL STRATEGY</Text>
            <Heading variant="display-strong-m">Kynetic.one</Heading>
            
            <Column gap="s" paddingTop="s">
               <Text variant="body-default-m" onBackground="neutral-weak">
                 <strong>Role:</strong> Acquisition & Funnel Strategy
               </Text>
               <Text variant="body-default-m" onBackground="neutral-weak">
                 <strong>Challenge:</strong> Launching a new creative agency from scratch, meaning zero existing brand trust or referral base to rely on.
               </Text>
               <Text variant="body-default-m" onBackground="neutral-weak">
                 <strong>Strategy:</strong> Avoid generic "we do design" messaging. Instead, we built a highly specific performance-marketing offer targeted at a narrow audience.
               </Text>
               <Text variant="body-default-m" onBackground="neutral-weak">
                 <strong>Execution:</strong> Built a tight Meta Ads campaign pushing traffic to a high-friction landing page with qualifying questions to filter out low-value prospects.
               </Text>
               <Text variant="body-default-m" onBackground="neutral-weak">
                 <strong>Result:</strong> Consistent flow of qualified leads despite no prior brand awareness.
               </Text>
               <Text variant="body-default-m" onBackground="brand-strong">
                 <strong>Takeaway:</strong> You don't need a massive brand to get clients if your offer is sharp and your funnel filters for intent.
               </Text>
            </Column>
            <Button href="/work/project-1" variant="secondary" arrowIcon style={{ width: 'fit-content', marginTop: '16px' }}>
              Read full case study
            </Button>
          </Column>
          <Column flex={1} radius="l"
            style={{
              height: '400px',
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

        {/* Project 2 - Linwood support */}
        <Flex fillWidth gap="xl" wrap vertical="center" direction="row-reverse" align="start">
          <Column flex={1} gap="m" style={{ minWidth: '300px' }}>
            <Text variant="label-strong-s" onBackground="brand-strong">SOCIAL PROOF / CONTENT STRATEGY</Text>
            <Heading variant="display-strong-m">Linwood Support</Heading>
            
            <Column gap="s" paddingTop="s">
               <Text variant="body-default-m" onBackground="neutral-weak">
                 <strong>Role:</strong> Content & Positioning Strategy
               </Text>
               <Text variant="body-default-m" onBackground="neutral-weak">
                 <strong>Challenge:</strong> Operating in the highly sensitive NDIS sector, where clients map their trust based on perceived authority and care.
               </Text>
               <Text variant="body-default-m" onBackground="neutral-weak">
                 <strong>Strategy:</strong> Build a foundational organic presence focusing entirely on education, safety, and community integration.
               </Text>
               <Text variant="body-default-m" onBackground="neutral-weak">
                 <strong>Execution:</strong> Developed content pillars and social proof mechanics that visually demonstrated competence before a prospect ever reached out.
               </Text>
               <Text variant="body-default-m" onBackground="neutral-weak">
                 <strong>Result:</strong> Transformed from a digitally invisible brand to a trusted, highly-perceived local service provider.
               </Text>
               <Text variant="body-default-m" onBackground="brand-strong">
                 <strong>Takeaway:</strong> Paid ads don't work well if your foundation looks untrustworthy. Building social proof is a prerequisite for scaling in sensitive industries.
               </Text>
            </Column>

            <Button href="/work/project-2" variant="secondary" arrowIcon style={{ width: 'fit-content', marginTop: '16px' }}>
              Read full case study
            </Button>
          </Column>
          <Column flex={1} radius="l"
            style={{
              height: '400px',
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
        <Flex fillWidth gap="xl" wrap vertical="center" align="start">
          <Column flex={1} gap="m" style={{ minWidth: '300px' }}>
            <Text variant="label-strong-s" onBackground="brand-strong">WEBSITE CONVERSION / UX</Text>
            <Heading variant="display-strong-m">Brooklyn Boy Bagels</Heading>
            
            <Column gap="s" paddingTop="s">
               <Text variant="body-default-m" onBackground="neutral-weak">
                 <strong>Role:</strong> UX Design & Conversion Support
               </Text>
               <Text variant="body-default-m" onBackground="neutral-weak">
                 <strong>Challenge:</strong> A beloved local food brand was generating massive traffic, but their digital storefront was confusing and leaked sales.
               </Text>
               <Text variant="body-default-m" onBackground="neutral-weak">
                 <strong>Strategy:</strong> Re-architect the user journey to remove buying friction and make the e-commerce experience match the quality of the physical product.
               </Text>
               <Text variant="body-default-m" onBackground="neutral-weak">
                 <strong>Execution:</strong> Complete user experience overhaul focusing on mobile responsiveness, clear calls-to-action, and simplified navigation.
               </Text>
               <Text variant="body-default-m" onBackground="neutral-weak">
                 <strong>Result:</strong> A much smoother path from traffic to ordering, directly supporting business revenue goals.
               </Text>
               <Text variant="body-default-m" onBackground="brand-strong">
                 <strong>Takeaway:</strong> Meta ads are useless if your website acts like a locked door. Conversion rate optimization is just as important as traffic generation.
               </Text>
            </Column>

            <Button href="/work/project-3" variant="secondary" arrowIcon style={{ width: 'fit-content', marginTop: '16px' }}>
              Read full case study
            </Button>
          </Column>
          <Column flex={1} radius="l"
            style={{
              height: '400px',
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
  );
}
