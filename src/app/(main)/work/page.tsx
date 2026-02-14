"use client";

import {
    Heading,
    Text,
    Flex,
    Button,
    Column,
} from "@once-ui-system/core";
import Link from "next/link";
import NextImage from "next/image";

export default function Work() {
    return (
        <Column fillWidth paddingY="xl" gap="xl" align="center">
            {/* Projects Hero */}
            <Flex
                fillWidth
                paddingY="xl"
                gap="l"
                vertical="center"
                horizontal="center"
                direction="column"
                style={{ minHeight: '60vh' }}
            >
                <Heading variant="display-strong-l" wrap="balance" align="start">
                    My Recent Projects
                </Heading>
                <Text
                    variant="heading-default-xl"
                    onBackground="neutral-weak"
                    wrap="balance"
                    align="start"
                >
                    A selection of my best work running awesome marketing projects for small businesses.
                </Text>
            </Flex>

            {/* Projects List */}
            <Column fillWidth maxWidth="l" gap="xl" paddingY="xl">
                <Column fillWidth gap="xl">
                    {/* Project 1 - Kynetic */}
                    <Flex fillWidth gap="l" wrap paddingY="m" vertical="center" align="start">
                        <Column flex={1} gap="m" style={{ minWidth: '300px' }}>
                            <Heading variant="display-strong-s">Kynetic.one</Heading>
                            <Text variant="heading-default-xs" onBackground="neutral-weak">
                                Performance marketing and sales funnel strategy for a new creative agency.
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
                                Transforming a digitally invisible brand into a trusted community presence for a local NDIS provider.
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
                                Complete UX/UI overhaul for a beloved local bagel brand to drive online orders.
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
        </Column>
    );
}
