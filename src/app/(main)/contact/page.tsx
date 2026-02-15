"use client";

import {
    Heading,
    Text,
    Flex,
    Button,
    Column,
} from "@once-ui-system/core";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from "@/components/Input";

export default function Contact() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('https://wompwomp.academy/webhook/ecfa92ee-eef1-4e01-a0b5-ab4d3258e004', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                router.push('/contact-thank-you');
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission failed:', error);
            setStatus('error');
        }
    };

    return (
        <Column fillWidth paddingY="m" gap="xl" align="center">
            <Flex
                fillWidth
                minHeight="80vh"
                paddingY="xl"
                gap="xl"
                vertical="center"
                horizontal="center"
                direction="column"
            >
                <Column fillWidth maxWidth="s" gap="s" paddingY="xl" horizontal="center">
                    <Heading variant="display-strong-s" align="center">Start Your Project</Heading>
                    <Text variant="body-default-m" onBackground="neutral-weak" align="center">
                        Ready to grow your business? Fill out the form below and we'll get back to you within 24 hours.
                    </Text>

                    <Column fillWidth as="form" gap="m" paddingTop="m" onSubmit={handleSubmit}>
                        <Flex fillWidth gap="m" wrap>
                            <Column flex={1} style={{ minWidth: '250px' }}>
                                <Input
                                    id="name"
                                    label="Name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Column>
                            <Column flex={1} style={{ minWidth: '250px' }}>
                                <Input
                                    id="email"
                                    label="Email"
                                    placeholder="email@example.com"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Column>
                        </Flex>
                        <Input
                            id="message"
                            label="Message"
                            placeholder="How can we help?"
                            lines={4}
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />

                        {status === 'error' && (
                            <Text variant="body-default-s" onBackground="danger-weak">
                                Something went wrong. Please try again.
                            </Text>
                        )}

                        <Button
                            variant="primary"
                            size="l"
                            fillWidth
                            type="submit"
                            loading={status === 'submitting'}
                            disabled={status === 'submitting'}
                        >
                            Get Started
                        </Button>
                    </Column>
                </Column>
            </Flex>
        </Column>
    );
}
