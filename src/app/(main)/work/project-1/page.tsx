"use client";

import {
    Heading,
    Text,
    Flex,
    Button,
    Column,
} from "@once-ui-system/core";
import NextImage from "next/image";

export default function ProjectOne() {
    return (
        <Column fillWidth paddingY="xl" gap="xl" align="center">
            <Column fillWidth paddingY="xl" gap="xl" align="center">
                {/* Project Hero */}
                <Column
                    fillWidth
                    maxWidth="l"
                    paddingY="xl"
                    gap="l"
                    align="start"
                >
                    <Column gap="xs">
                        <Text variant="label-default-m" onBackground="neutral-weak">PROJECTS</Text>
                        <Text variant="label-default-m" onBackground="neutral-weak">JANUARY 2026</Text>
                    </Column>

                    <Heading variant="display-strong-xl" wrap="balance">
                        Kynetic.one
                    </Heading>

                    <Flex gap="s" vertical="center">
                        <Text variant="body-default-m" onBackground="neutral-weak">Role:</Text>
                        <Text variant="body-default-m">Performance Marketing & Funnel Strategy</Text>
                    </Flex>
                </Column>

                {/* Featured Image */}
                <Column fillWidth maxWidth="l">
                    <Column
                        fillWidth
                        radius="l"
                        overflow="hidden"
                        background="surface"
                        border="neutral-medium"
                        style={{ aspectRatio: '16 / 9', position: 'relative' }}
                    >
                        <NextImage
                            src="/projects/kynetic.one/kynetic_cover.webp"
                            alt="Kynetic.one Cover"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </Column>
                </Column>

                {/* Content Container */}
                <Column fillWidth maxWidth="m" gap="xl" paddingY="xl" align="start">

                    {/* The Challenge */}
                    <Column gap="l">
                        <Heading variant="display-strong-xs">The Challenge</Heading>
                        <Text variant="body-default-l" onBackground="neutral-weak">
                            Launch a brand-new creative agency in a saturated market with zero brand recognition, limited budget, and compete against established players for high-value service clients.
                        </Text>
                    </Column>

                    {/* The Strategy */}
                    <Column gap="l">
                        <Heading variant="display-strong-xs">The Strategy</Heading>
                        <Text variant="body-default-l" onBackground="neutral-weak">
                            Built a performance-driven acquisition funnel designed to convert cold traffic into qualified leads through strategic offer positioning and conversion optimization.
                        </Text>

                        <Column gap="s" paddingTop="m">
                            <Heading variant="heading-strong-m">Funnel Architecture</Heading>
                            <Column as="ul" gap="m" paddingLeft="l">
                                <Text as="li" variant="body-default-l" onBackground="neutral-weak"><Text weight="strong">Top of Funnel:</Text> Meta Ads targeting service-based small businesses in Sydney lacking consistent social media presence</Text>
                                <Text as="li" variant="body-default-l" onBackground="neutral-weak"><Text weight="strong">Landing Page:</Text> Single-offer focused page (16 posts per month + free trial) eliminating decision paralysis</Text>
                                <Text as="li" variant="body-default-l" onBackground="neutral-weak"><Text weight="strong">Conversion Path:</Text> Took prospects from "Do I need this?" → "This is exactly what I need" → "I trust these people" through strategic messaging hierarchy</Text>
                            </Column>
                        </Column>

                        <Column gap="s" paddingTop="m">
                            <Heading variant="heading-strong-m">Key Funnel Elements</Heading>
                            <Column as="ul" gap="m" paddingLeft="l">
                                <Text as="li" variant="body-default-l" onBackground="neutral-weak">Irresistible offer: 16 custom posts monthly with free trial removing financial risk</Text>
                                <Text as="li" variant="body-default-l" onBackground="neutral-weak">Done-for-you positioning: "We create, design, schedule—you just approve" eliminating time objections</Text>
                                <Text as="li" variant="body-default-l" onBackground="neutral-weak">Trust-building through process transparency and portfolio showcase</Text>
                                <Text as="li" variant="body-default-l" onBackground="neutral-weak">Friction-reduced contact flow for immediate engagement</Text>
                            </Column>
                        </Column>
                    </Column>

                    {/* The Execution */}
                    <Column gap="l">
                        <Heading variant="display-strong-xs">The Execution</Heading>
                        <Column as="ul" gap="m" paddingLeft="l">
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">Designed and built custom landing page optimized for single conversion goal</Text>
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">Created and managed Meta Ads campaign targeting qualified Sydney-based business owners</Text>
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">A/B tested messaging focusing on "time-saving" vs "professional presence" positioning</Text>
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">Optimized ad spend based on cost-per-qualified-lead metrics</Text>
                        </Column>
                    </Column>

                    {/* The Results */}
                    <Column gap="l">
                        <Heading variant="display-strong-xs">The Results</Heading>
                        <Column as="ul" gap="m" paddingLeft="l">
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">10 qualified leads generated from paid traffic in just two weeks</Text>
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">2 clients closed (20% conversion rate)</Text>
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">$600 in immediate revenue</Text>
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">$3,800+ projected 6-month LTV from initial cohort</Text>
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">Immediate upsell: One client engaged for $1,000/month additional services based on initial results</Text>
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">CAC: Positive ROI within first 30 days</Text>
                        </Column>
                    </Column>

                    {/* The Bigger Picture */}
                    <Column gap="l" paddingBottom="xl">
                        <Heading variant="display-strong-xs">The Bigger Picture</Heading>
                        <Text variant="body-default-l" onBackground="neutral-weak">
                            Proved a scalable acquisition model for service-based businesses—demonstrating that strategic funnel design, risk-reversal offers, and targeted local messaging can compete with established agencies even without brand recognition.
                        </Text>
                    </Column>
                </Column>

                {/* CTA */}
                <Column gap="l" paddingY="xl" align="center" horizontal="center">
                    <Heading variant="heading-strong-xl" align="center">Ready for similar results?</Heading>
                    <Button href="/contact" variant="primary" size="l" arrowIcon>
                        Start a Project
                    </Button>
                </Column>

            </Column>
        </Column>
    );
}
