"use client";

import {
    Heading,
    Text,
    Flex,
    Button,
    Column,
    Icon,
} from "@once-ui-system/core";

export default function ContactThankYou() {
    return (
        <Column fillWidth paddingY="xl" gap="xl" align="center" horizontal="center" style={{ minHeight: '60vh' }}>
            <Flex
                fillWidth
                paddingY="xl"
                gap="l"
                vertical="center"
                horizontal="center"
                direction="column"
            >
                <Flex
                    padding="l"
                    radius="l"
                    background="surface"
                    border="neutral-medium"
                    vertical="center"
                    horizontal="center"
                >
                    <Icon name="check" size="xl" onBackground="brand-strong" />
                </Flex>

                <Heading variant="display-strong-s" align="center">
                    Thank You
                </Heading>

                <Text variant="body-default-l" onBackground="neutral-weak" align="center" style={{ maxWidth: '600px' }}>
                    I'll get in touch within 1-2 business days to learn more about your business.
                </Text>

                <Button href="/" variant="secondary" size="m" arrowIcon>
                    Back to Home
                </Button>
            </Flex>
        </Column>
    );
}
