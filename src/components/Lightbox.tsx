"use client";

import { useEffect } from 'react';
import { Flex, IconButton, Column } from "@once-ui-system/core";

interface LightboxProps {
    src: string;
    alt: string;
    onClose: () => void;
}

export const Lightbox = ({ src, alt, onClose }: LightboxProps) => {
    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    // Prevent scrolling when lightbox is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
        };
    }, []);

    return (
        <Flex
            position="fixed"
            style={{
                zIndex: 1000,
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backdropFilter: 'blur(8px)',
                cursor: 'zoom-out'
            }}
            background="neutral-alpha-strong"
            onClick={onClose}
            direction="column"
        >
            {/* Scrollable Container */}
            <Flex
                fillWidth
                fillHeight
                padding="xl"
                direction="column"
                horizontal="center"
                style={{ overflowY: 'auto' }}
            >
                {/* Image Wrapper */}
                <Column
                    fillWidth
                    maxWidth="l"
                    vertical="center"
                    horizontal="center"
                    onClick={(e) => e.stopPropagation()} // Click on image/container doesn't close
                    style={{
                        margin: 'auto', // Centers vertically if image is short
                        cursor: 'default'
                    }}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={src}
                        alt={alt}
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                            borderRadius: 'var(--radius-l)',
                            boxShadow: 'var(--shadow-xl)',
                        }}
                    />
                </Column>
            </Flex>

            {/* Fixed Close Button */}
            <Flex
                position="fixed"
                top="s"
                right="s"
                padding="s"
                style={{ zIndex: 1001 }}
            >
                <IconButton
                    onClick={onClose}
                    icon="close"
                    variant="tertiary"
                    tooltip="Close"
                    size="l"
                />
            </Flex>
        </Flex>
    );
};
