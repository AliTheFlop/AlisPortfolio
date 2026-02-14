"use client";

import {
    Heading,
    Text,
    Flex,
    Button,
    Column,
} from "@once-ui-system/core";
import { useState } from 'react';
import NextImage from "next/image";
import { Lightbox } from "@/components/Lightbox";

export default function ProjectThree() {
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

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
                        Brooklyn Boy Bagels
                    </Heading>

                    <Flex gap="s" vertical="center">
                        <Text variant="body-default-m" onBackground="neutral-weak">Role:</Text>
                        <Text variant="body-default-m">UX/UI Design & Strategy</Text>
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
                            src="/projects/brooklyn boy bagels/bbb_cover_big.webp"
                            alt="Brooklyn Boy Bagels Cover"
                            fill
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </Column>
                </Column>

                {/* Content Container */}
                <Column fillWidth maxWidth="m" gap="xl" paddingY="xl" align="start">

                    {/* The Opportunity */}
                    <Column gap="l">
                        <Heading variant="display-strong-xs">The Opportunity</Heading>
                        <Text variant="body-default-l" onBackground="neutral-weak">
                            Identified a beloved local bagel brand with a weak digital storefront failing to convert their authentic NYC bagel story into online orders and foot traffic.
                        </Text>
                    </Column>

                    {/* The Problem */}
                    <Column gap="l">
                        <Heading variant="display-strong-xs">The Problem</Heading>
                        <Column as="ul" gap="m" paddingLeft="l">
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">Original site buried their delivery service and ordering CTA</Text>
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">Lacked clear product photography at hero level</Text>
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">No urgency or conversion-focused messaging</Text>
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">Muted color palette didn't match the bold, energetic brand personality</Text>
                        </Column>
                    </Column>

                    {/* The Solution */}
                    <Column gap="l">
                        <Heading variant="display-strong-xs">The Solution</Heading>
                        <Text variant="body-default-l" onBackground="neutral-weak">
                            Complete UX/UI overhaul focused on:
                        </Text>
                        <Column as="ul" gap="m" paddingLeft="l">
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">Immediate action: Hero CTA for "Order Fresh Bagels" + "Market Locations" above the fold</Text>
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">Visual appetite appeal: High-impact product photography driving desire</Text>
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">Brand personality amplification: Bold red color scheme matching their vibrant brand energy</Text>
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">Conversion architecture: Clear path from awareness → desire → action</Text>
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">Social proof integration: Awards and testimonials prominently featured</Text>
                            <Text as="li" variant="body-default-l" onBackground="neutral-weak">Journey storytelling: "The Bagel's Journey" builds emotional connection</Text>
                        </Column>
                    </Column>

                    {/* The Transformation */}
                    <Column gap="l" paddingBottom="xl">
                        <Heading variant="display-strong-xs">The Transformation</Heading>
                        <Text variant="body-default-l" onBackground="neutral-weak">
                            From passive informational site to active conversion machine—prioritizing the customer journey from "I'm hungry" to "I'm ordering."
                        </Text>

                        {/* Before & After Gallery */}
                        <Column gap="m" paddingY="l">
                            <Heading variant="heading-strong-l">Before & After</Heading>
                            <Flex fillWidth gap="m" wrap>
                                <Column
                                    flex={1}
                                    gap="xs"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setLightboxImage('/projects/brooklyn boy bagels/bbb_old.webp')}
                                >
                                    <Column
                                        fillWidth
                                        radius="l"
                                        overflow="hidden"
                                        border="neutral-medium"
                                        style={{ aspectRatio: '16/9', position: 'relative' }}
                                    >
                                        <NextImage
                                            src="/projects/brooklyn boy bagels/bbb_old.webp"
                                            alt="Before Redesign"
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <Flex
                                            position="absolute"
                                            bottom="s"
                                            left="s"
                                            paddingX="s"
                                            paddingY="xs"
                                            radius="m"
                                            background="surface"
                                            border="neutral-medium"
                                        >
                                            <Text variant="label-default-s">BEFORE</Text>
                                        </Flex>
                                    </Column>
                                </Column>
                                <Column
                                    flex={1}
                                    gap="xs"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setLightboxImage('/projects/brooklyn boy bagels/bbb_redesign.webp')}
                                >
                                    <Column
                                        fillWidth
                                        radius="l"
                                        overflow="hidden"
                                        border="neutral-medium"
                                        style={{ aspectRatio: '16/9', position: 'relative' }}
                                    >
                                        <NextImage
                                            src="/projects/brooklyn boy bagels/bbb_redesign.webp"
                                            alt="After Redesign"
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <Flex
                                            position="absolute"
                                            bottom="s"
                                            left="s"
                                            paddingX="s"
                                            paddingY="xs"
                                            radius="m"
                                            background="surface"
                                            border="neutral-medium"
                                        >
                                            <Text variant="label-default-s">AFTER</Text>
                                        </Flex>
                                    </Column>
                                </Column>
                            </Flex>
                        </Column>
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

            {lightboxImage && (
                <Lightbox
                    src={lightboxImage}
                    alt="Project Screenshot"
                    onClose={() => setLightboxImage(null)}
                />
            )}
        </Column>
    );
}
