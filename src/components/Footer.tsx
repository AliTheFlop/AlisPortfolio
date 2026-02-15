"use client";

import { Flex, Text, Button } from "@once-ui-system/core";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Flex
            as="footer"
            fillWidth
            padding="l"
            vertical="center"
            horizontal="center"
            direction="column"
            gap="m"
            background="surface"
            style={{
                borderTop: "1px solid var(--neutral-border-weak)",
            }}
        >
            <Flex gap="16" wrap>
                <Button href="/" variant="tertiary" size="s">
                    Home
                </Button>
            </Flex>
            <Text variant="body-default-s" onBackground="neutral-weak">
                © {currentYear} Ali Saleh. All rights reserved.
            </Text>
        </Flex>
    );
};
