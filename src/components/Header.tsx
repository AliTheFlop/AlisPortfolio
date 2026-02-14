"use client";

import { Flex, Button } from "@once-ui-system/core";
import { social } from "@/resources/once-ui.config";

export const Header = () => {
    return (
        <Flex
            as="header"
            fillWidth
            padding="m"
            horizontal="center" // Center the inner container
            vertical="center"
            background="surface"
            style={{
                position: "fixed",
                top: 0,
                zIndex: 10,
                backdropFilter: "blur(8px)",
                borderBottom: "1px solid var(--neutral-border-weak)",
            }}
        >
            <Flex
                fillWidth
                maxWidth="l"
                horizontal="end" // Align items to the right
                vertical="center"
                gap="16"
            >
                <Button href="/" variant="tertiary" weight="default" size="s">
                    Home
                </Button>
                <Button href="/work" variant="tertiary" weight="default" size="s">
                    My Projects
                </Button>
                <Button href="/contact" variant="primary" size="s">
                    Start a Project
                </Button>
            </Flex>
        </Flex>
    );
};
