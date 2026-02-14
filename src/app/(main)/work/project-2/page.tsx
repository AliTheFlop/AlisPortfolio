"use client";

import {
    Heading,
    Text,
    Flex,
    Button,
    Column,
    RevealFx,
    Row,
} from "@once-ui-system/core";
import NextImage from "next/image";

export default function ProjectTwo() {
    return (
        <Column fillWidth paddingY="m" gap="xl" align="center">
            <Column fillWidth paddingY="xl" gap="l" align="center">
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
                        <Text variant="label-default-m" onBackground="neutral-weak">DECEMBER 2025</Text>
                    </Column>

                    <Heading variant="display-strong-l" wrap="balance">
                        Linwood Support
                    </Heading>

                    <Flex gap="s" vertical="center">
                        <Text variant="body-default-m" onBackground="neutral-weak">Role:</Text>
                        <Text variant="body-default-m">Social Media Strategy & Content</Text>
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
                            src="/projects/linwood support/linwood_cover.webp"
                            alt="Linwood Support Cover"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </Column>
                </Column>

                {/* Content Container */}
                <Column fillWidth maxWidth="m" gap="xl" paddingY="xl" align="start">

                    {/* Challenge */}
                    <Column gap="l">
                        <Heading variant="display-strong-xs">The Challenge</Heading>
                        <Text variant="body-default-l" onBackground="neutral-weak">
                            Local NDIS provider with zero social media presence struggling to build trust with potential clients and generate referrals in a highly competitive, trust-dependent industry.
                        </Text>
                    </Column>

                    {/* Approach */}
                    <Column gap="l">
                        <Heading variant="display-strong-xs">The Approach</Heading>
                        <Text variant="body-default-l" onBackground="neutral-weak">
                            Identified the opportunity through targeted outreach, recognizing that NDIS services require exceptional credibility-building due to the vulnerable populations they serve. Developed a comprehensive 60-day content strategy focused on:
                        </Text>
                        <Column as="ul" gap="m" paddingLeft="l">
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">Establishing thought leadership in disability support</Text>
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">Humanizing the brand through authentic storytelling</Text>
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">Creating educational content that demonstrated expertise</Text>
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">Building community engagement organically</Text>
                        </Column>
                    </Column>

                    {/* Execution */}
                    <Column gap="l">
                        <Heading variant="display-strong-xs">The Execution</Heading>
                        <Column as="ul" gap="m" paddingLeft="l">
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">Delivered 48 custom-designed posts across 8 weeks</Text>
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">Maintained consistent posting schedule to build audience trust</Text>
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">Created content pillars around client success, team culture, NDIS navigation, and community support</Text>
                        </Column>
                    </Column>

                    {/* Results */}
                    <Column gap="l">
                        <Heading variant="display-strong-xs">The Results</Heading>
                        <Column as="ul" gap="m" paddingLeft="l">
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">30+ followers gained in first 30 days (100% organic growth)</Text>
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">Established foundational social presence from ground zero</Text>
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">Client immediately engaged for paid advertising management based on content performance</Text>
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">Positioned brand as approachable, trustworthy NDIS provider in local market</Text>
                        </Column>
                    </Column>

                    {/* Bigger Picture */}
                    <Column gap="l" paddingBottom="xl">
                        <Heading variant="display-strong-xs">The Bigger Picture</Heading>
                        <Text variant="body-default-l" onBackground="neutral-weak">
                            Transformed a digitally invisible NDIS provider into a trusted community presence, creating a sustainable platform for ongoing client acquisition and relationship building.
                        </Text>
                    </Column>
                </Column>

                {/* CTA */}
                <Column gap="l" paddingY="xl" align="center" horizontal="center">
                    <Heading variant="heading-strong-xl" align="center">Ready for similar results?</Heading>
                    <Button href="/contact" variant="primary" size="l" arrowIcon horizontal="center">
                        Start a Project
                    </Button>
                </Column>

            </Column>
        </Column >
    );
}
