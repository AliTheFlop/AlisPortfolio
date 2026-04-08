"use client";

import {
  Heading,
  Text,
  Button,
  Column,
  Flex,
  RevealFx,
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
              Meta Ads for Local Businesses That Need Calls, Not Clicks.
            </Heading>
          </RevealFx>
          <RevealFx translateY="16" speed="fast" delay={0.2}>
            <Text
              variant="heading-default-l"
              onBackground="neutral-weak"
              wrap="balance"
            >
              No-contract Meta Ads management for local service businesses tired of ghost leads, vague reports, and agencies that vanish after the sale.
            </Text>
          </RevealFx>
          <RevealFx translateY="16" speed="fast" delay={0.4}>
            <Flex gap="m" wrap vertical="center">
              <Button href="/contact" variant="primary" size="l" arrowIcon>
                Request a Free Meta Ads Audit
              </Button>
              <Button href="/work" variant="secondary" size="l" arrowIcon>
                View Case Studies
              </Button>
            </Flex>
          </RevealFx>
          <RevealFx translateY="16" speed="fast" delay={0.6}>
            <Flex gap="m" wrap vertical="center" paddingTop="m">
              <Flex gap="xs" vertical="center">
                <Icon name="check" size="s" onBackground="brand-strong" />
                <Text variant="body-default-xs" onBackground="neutral-weak">No contracts</Text>
              </Flex>
              <Flex gap="xs" vertical="center">
                <Icon name="check" size="s" onBackground="brand-strong" />
                <Text variant="body-default-xs" onBackground="neutral-weak">Direct access</Text>
              </Flex>
              <Flex gap="xs" vertical="center">
                <Icon name="check" size="s" onBackground="brand-strong" />
                <Text variant="body-default-xs" onBackground="neutral-weak">Your account stays yours</Text>
              </Flex>
              <Flex gap="xs" vertical="center">
                <Icon name="check" size="s" onBackground="brand-strong" />
                <Text variant="body-default-xs" onBackground="neutral-weak">Simple reporting</Text>
              </Flex>
            </Flex>
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
                  <Text variant="heading-strong-xs">Meaningful Metrics</Text>
                </Flex>
                <Text variant="body-default-s" onBackground="neutral-weak">This Month</Text>
              </Flex>
              <Flex fillWidth gap="m" direction="column">
                <Flex fillWidth horizontal="between" paddingY="s" borderBottom="neutral-medium">
                  <Text variant="body-default-m" onBackground="neutral-weak">Ad Spend</Text>
                  <Text variant="heading-strong-s">$1,250</Text>
                </Flex>
                <Flex fillWidth horizontal="between" paddingY="s" borderBottom="neutral-medium">
                  <Text variant="body-default-m" onBackground="brand-strong">Qualified Leads</Text>
                  <Text variant="heading-strong-s" onBackground="brand-strong">32</Text>
                </Flex>
                <Flex fillWidth horizontal="between" paddingY="s" borderBottom="neutral-medium">
                  <Text variant="body-default-m" onBackground="brand-strong">Calls Booked</Text>
                  <Text variant="heading-strong-s" onBackground="brand-strong">18</Text>
                </Flex>
                <Flex fillWidth horizontal="between" paddingY="s">
                  <Text variant="body-default-m" onBackground="neutral-alpha-weak" style={{ textDecoration: 'line-through' }}>Vanity Impressions</Text>
                  <Text variant="heading-strong-s" onBackground="neutral-alpha-weak" style={{ textDecoration: 'line-through' }}>240,000</Text>
                </Flex>
              </Flex>
            </Column>
          </RevealFx>
        </Column>
      </Flex>

      {/* Pain / Identification Section */}
      <Column fillWidth maxWidth="l" gap="l" paddingY="xl" horizontal="center">
        <Heading variant="heading-strong-l" align="center">You didn't start your business to become a marketer.</Heading>
        <Text variant="heading-default-m" onBackground="neutral-weak" align="center" wrap="balance" style={{ maxWidth: '600px' }}>
          Dealing with broken campaigns, unresponsive agencies, and unpredictable cash flow isn't what you signed up for.
        </Text>
        <Flex fillWidth wrap gap="l" horizontal="center" paddingTop="l">
          <Column flex={1} style={{ minWidth: '250px', textAlign: 'center' }} gap="m" padding="l" background="surface" border="neutral-medium" radius="l" horizontal="center">
             <Heading variant="heading-strong-s">The Agency Runaround</Heading>
             <Text variant="body-default-s" onBackground="neutral-weak">
                Agencies love dashboards and impressions, but you care about calls and bookings. You're tired of talking to junior account managers.
             </Text>
          </Column>

          <Column flex={1} style={{ minWidth: '250px', textAlign: 'center' }} gap="m" padding="l" background="surface" border="neutral-medium" radius="l" horizontal="center">
             <Heading variant="heading-strong-s">The Ghost Lead Trap</Heading>
             <Text variant="body-default-s" onBackground="neutral-weak">
                Meta numbers can look fine while the phone stays quiet. Cheap leads often ghost, haggle on price, or go nowhere.
             </Text>
          </Column>

          <Column flex={1} style={{ minWidth: '250px', textAlign: 'center' }} gap="m" padding="l" background="surface" border="neutral-medium" radius="l" horizontal="center">
             <Heading variant="heading-strong-s">The Expensive Lesson</Heading>
             <Text variant="body-default-s" onBackground="neutral-weak">
                Boosting posts and running generic ads wastes money. You don't want to be locked into another 6-month contract with zero return.
             </Text>
          </Column>
        </Flex>
      </Column>

      {/* Mechanism Section */}
      <Column fillWidth paddingY="xl" background="surface" align="center" horizontal="center" radius="l">
        <Column fillWidth maxWidth="l" gap="xl" align="center" horizontal="center" paddingX="l">
          <Heading variant="display-strong-xs" align="center">
            Why most local Meta campaigns fail.
          </Heading>
          
          <Flex fillWidth wrap gap="xl" vertical="stretch" paddingTop="l">
            <Column flex={1} gap="m" padding="xl" background="page" border="neutral-medium" radius="l" style={{ minWidth: '300px' }}>
              <Heading variant="heading-strong-m" onBackground="neutral-weak">Part 1: The Ghost Lead Loop</Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">The broken pattern most agencies run:</Text>
              <Column gap="s" paddingTop="m">
                <Flex gap="s" vertical="center"><Icon name="close" size="s" onBackground="danger-strong" /><Text variant="body-default-s">Broad targeting and generic messaging</Text></Flex>
                <Flex gap="s" vertical="center"><Icon name="close" size="s" onBackground="danger-strong" /><Text variant="body-default-s">Low-friction lead forms that invite time-wasters</Text></Flex>
                <Flex gap="s" vertical="center"><Icon name="close" size="s" onBackground="danger-strong" /><Text variant="body-default-s">Outsourced account management</Text></Flex>
                <Flex gap="s" vertical="center"><Icon name="close" size="s" onBackground="danger-strong" /><Text variant="body-default-s">Reporting that looks busy but says nothing useful</Text></Flex>
              </Column>
            </Column>

            <Column flex={1} gap="m" padding="xl" background="brand-alpha-weak" border="brand-medium" radius="l" style={{ minWidth: '300px' }}>
              <Heading variant="heading-strong-m" onBackground="brand-strong">Part 2: The Local Intent Filter</Heading>
              <Text variant="body-default-m" onBackground="neutral-strong">Our anti-agency approach:</Text>
              <Column gap="s" paddingTop="m">
                <Flex gap="s" vertical="center"><Icon name="check" size="s" onBackground="brand-strong" /><Text variant="body-default-s">Stronger local positioning & service-specific offers</Text></Flex>
                <Flex gap="s" vertical="center"><Icon name="check" size="s" onBackground="brand-strong" /><Text variant="body-default-s">Qualifying questions & friction to block junk leads</Text></Flex>
                <Flex gap="s" vertical="center"><Icon name="check" size="s" onBackground="brand-strong" /><Text variant="body-default-s">Direct specialist oversight by the person doing the work</Text></Flex>
                <Flex gap="s" vertical="center"><Icon name="check" size="s" onBackground="brand-strong" /><Text variant="body-default-s">Simple reporting: spend, leads, calls, bookings</Text></Flex>
              </Column>
            </Column>
          </Flex>
        </Column>
      </Column>

      {/* Trust Stack / Why This Is Different */}
      <Column fillWidth maxWidth="l" gap="l" paddingY="xl" horizontal="center">
        <Heading variant="heading-strong-l" align="center">A direct response to agency trauma.</Heading>
        <Text variant="heading-default-m" onBackground="neutral-weak" align="center" wrap="balance" style={{ maxWidth: '600px' }}>
           Why this specialist service feels significantly safer than a normal marketing agency.
        </Text>
        <Flex fillWidth wrap gap="l" horizontal="center" paddingTop="l">
           {[
             { title: "No Contracts", desc: "Month-to-month by default. If the ads don't work, you shouldn't be trapped paying a retainer." },
             { title: "Your Account Stays Yours", desc: "You own the ad account, the pixel, and the data. No holding your assets hostage if you leave." },
             { title: "Direct Communication", desc: "No junior account-manager handoffs. You talk directly with the specialist building your campaigns." },
             { title: "Built for Local Services", desc: "Not ecommerce brands, not software companies. Built specifically for trades and local businesses." }
           ].map((item, index) => (
             <Column key={index} flex={1} style={{ minWidth: '200px' }} gap="s" padding="m" border="neutral-medium" radius="m">
               <Heading variant="heading-strong-s">{item.title}</Heading>
               <Text variant="body-default-s" onBackground="neutral-weak">{item.desc}</Text>
             </Column>
           ))}
        </Flex>
      </Column>

      {/* What You Actually Get */}
      <Column fillWidth maxWidth="m" paddingY="xl" gap="l">
         <Heading variant="heading-strong-l" align="center">What you actually get.</Heading>
         <Text variant="heading-default-m" onBackground="neutral-weak" align="center">Plain English. No fluff.</Text>
         <Column fillWidth gap="xs" background="surface" padding="xl" radius="l" border="neutral-medium" marginTop="m">
            {[
              "Account audit and clean technical setup",
              "Offer and angle selection based on your market",
              "Full campaign build and management",
              "Ad copy and creative direction",
              "Qualifying lead form strategy to filter junk",
              "Landing-page guidance (where needed)",
              "Weekly optimization to protect your budget",
              "Simple monthly reporting (spend vs leads vs calls)"
            ].map((feature, i) => (
              <Flex key={i} gap="m" vertical="center" paddingY="s" borderBottom={i < 7 ? "neutral-weak" : undefined}>
                 <Icon name="check" size="m" onBackground="brand-strong" />
                 <Text variant="body-default-m">{feature}</Text>
              </Flex>
            ))}
         </Column>
      </Column>

      {/* Case Study / Proof Section */}
      <Column fillWidth maxWidth="l" gap="xl" paddingY="xl">
        <Column gap="s" horizontal="center">
          <Heading variant="heading-strong-l" align="center">Real results.</Heading>
          <Text variant="heading-default-m" onBackground="neutral-weak" align="center">
            Proof that focused offers, better positioning, and qualified traffic work.
          </Text>
        </Column>

        <Column fillWidth gap="xl" paddingTop="l">
          {/* Project 1 - Kynetic */}
          <Flex fillWidth gap="l" wrap paddingY="m" vertical="center" align="start">
            <Column flex={1} gap="m" style={{ minWidth: '300px' }}>
              <Text variant="label-strong-s" onBackground="brand-strong">META ADS / ACQUISITION PROOF</Text>
              <Heading variant="display-strong-s">Kynetic.one</Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                <strong>Challenge:</strong> Launching without existing brand recognition.
              </Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                <strong>What changed:</strong> Focused offer + Meta traffic + targeted landing page strategy.
              </Text>
              <Text variant="body-default-m" onBackground="neutral-strong">
                <strong>Why it matters:</strong> Generates qualified leads by leveraging high-friction funnels rather than waiting for word-of-mouth.
              </Text>
              <Button href="/work/project-1" variant="secondary" arrowIcon style={{ width: 'fit-content', marginTop: '16px' }}>
                View Meta Strategy
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
              <Text variant="label-strong-s" onBackground="brand-strong">SOCIAL PROOF / CONTENT STRATEGY</Text>
              <Heading variant="display-strong-s">Linwood Support</Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                <strong>Challenge:</strong> Sensitive industry (NDIS) requiring deep trust before the buying moment.
              </Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                <strong>What changed:</strong> Overhauled community presence and trust-building category messaging.
              </Text>
              <Text variant="body-default-m" onBackground="neutral-strong">
                <strong>Why it matters:</strong> Trust-building content clears the pathway to success for paid growth campaigns.
              </Text>
              <Button href="/work/project-2" variant="secondary" arrowIcon style={{ width: 'fit-content', marginTop: '16px' }}>
                View Content Strategy
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

          {/* Project 3 - Brooklyn Boy Bagels */}
          <Flex fillWidth gap="l" wrap paddingY="m" vertical="center" align="start">
            <Column flex={1} gap="m" style={{ minWidth: '300px' }}>
              <Text variant="label-strong-s" onBackground="brand-strong">CONVERSION / UX PROOF</Text>
              <Heading variant="display-strong-s">Brooklyn Boy Bagels</Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                <strong>Challenge:</strong> Traffic was landing on a confusing user experience, leaking potential sales.
              </Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                <strong>What changed:</strong> Complete conversion-focused UX overhaul and messaging update.
              </Text>
              <Text variant="body-default-m" onBackground="neutral-strong">
                <strong>Why it matters:</strong> Traffic alone isn't enough. Your website must handle the demand efficiently.
              </Text>
              <Button href="/work/project-3" variant="secondary" arrowIcon style={{ width: 'fit-content', marginTop: '16px' }}>
                View UX Approach
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

      {/* Objections / FAQ Section */}
      <Column fillWidth paddingY="xl" background="surface" align="center" horizontal="center" radius="l">
        <Column fillWidth maxWidth="l" gap="xl" align="center" horizontal="center" paddingX="l">
          <Heading variant="heading-strong-l" align="center">Straight answers to sensible questions.</Heading>
          
          <Flex fillWidth wrap gap="l" paddingTop="m">
            <Column flex={1} style={{ minWidth: '300px' }} gap="s">
               <Heading variant="heading-strong-s">"I've been burned by agencies before."</Heading>
               <Text variant="body-default-s" onBackground="neutral-weak">I get it. That's why there are no long-term contracts. You stay if it's profitable, you leave if it's not. No hostages.</Text>
            </Column>
            <Column flex={1} style={{ minWidth: '300px' }} gap="s">
               <Heading variant="heading-strong-s">"Are Meta leads just junk?"</Heading>
               <Text variant="body-default-s" onBackground="neutral-weak">They are if you use default agency settings. We use qualifying forms and friction to filter out tire-kickers so you only speak to people who want to buy.</Text>
            </Column>
            <Column flex={1} style={{ minWidth: '300px' }} gap="s">
               <Heading variant="heading-strong-s">"How do I know I keep my data?"</Heading>
               <Text variant="body-default-s" onBackground="neutral-weak">You create the ad account and page, you give me access. You can revoke it anytime. Your pixel data stays yours forever.</Text>
            </Column>
            <Column flex={1} style={{ minWidth: '300px' }} gap="s">
               <Heading variant="heading-strong-s">"Will you outsource the work?"</Heading>
               <Text variant="body-default-s" onBackground="neutral-weak">No. You speak directly to me, and I personally build and manage the campaigns. I take a limited number of clients to ensure quality.</Text>
            </Column>
          </Flex>
        </Column>
      </Column>

      {/* Final CTA Section */}
      <Column fillWidth maxWidth="m" paddingY="128" gap="l" horizontal="center" align="center">
        <RevealFx translateY="16" speed="fast" delay={0}>
          <Column fillWidth horizontal="center">
            <Heading variant="display-strong-m" align="center" wrap="balance">
              Ready to see whether Meta can actually work for your business?
            </Heading>
          </Column>
        </RevealFx>
        <RevealFx translateY="16" speed="fast" delay={0.2}>
          <Column fillWidth horizontal="center">
            <Text variant="heading-default-l" onBackground="neutral-weak" align="center" wrap="balance">
              No pressure. No lock-in. Honest fit check.
            </Text>
          </Column>
        </RevealFx>
        <RevealFx translateY="16" speed="fast" delay={0.4}>
          <Flex fillWidth horizontal="center" paddingTop="m">
            <Button href="/contact" variant="primary" size="l" arrowIcon>
              Request a Free Meta Ads Audit
            </Button>
          </Flex>
        </RevealFx>
      </Column>
    </Column>
  );
}
