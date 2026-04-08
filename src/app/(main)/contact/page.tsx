"use client";

import {
    Heading,
    Text,
    Flex,
    Button,
    Column,
    Icon,
} from "@once-ui-system/core";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from "@/components/Input";

export default function Contact() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        businessName: '',
        email: '',
        phone: '',
        website: '',
        industry: '',
        location: '',
        service: '',
        runningAds: '',
        adSpend: '',
        biggestIssue: '',
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
        <Column fillWidth paddingY="xl" gap="xl" align="center" horizontal="center">
            <Flex fillWidth maxWidth="l" gap="xl" paddingY="xl" vertical="start" wrap>
                
                {/* Left Column - Intro, Process, Trust */}
                <Column flex={1} gap="xl" style={{ minWidth: "300px" }}>
                    <Column gap="m">
                        <Heading variant="display-strong-s">Let’s See If Meta Is a Fit for Your Business</Heading>
                        <Text variant="body-default-l" onBackground="neutral-weak">
                            Please fill out the details below. This helps me understand your situation before we speak, so I can give you an honest answer on whether Meta Ads will actually work for you. No salesy fluff.
                        </Text>
                    </Column>

                    <Column gap="m" padding="l" background="surface" border="neutral-medium" radius="l">
                        <Heading variant="heading-strong-s">What happens next?</Heading>
                        <Column gap="s">
                            <Flex gap="s" vertical="center"><Icon name="check" size="s" onBackground="brand-strong" /><Text variant="body-default-s">I review your current setup and situation.</Text></Flex>
                            <Flex gap="s" vertical="center"><Icon name="check" size="s" onBackground="brand-strong" /><Text variant="body-default-s">I look at your offer, messaging, and likely leak points.</Text></Flex>
                            <Flex gap="s" vertical="center"><Icon name="check" size="s" onBackground="brand-strong" /><Text variant="body-default-s">I tell you honestly whether Meta is a fit.</Text></Flex>
                            <Flex gap="s" vertical="center"><Icon name="check" size="s" onBackground="brand-strong" /><Text variant="body-default-s">If it is, I’ll outline practical next steps.</Text></Flex>
                        </Column>
                    </Column>

                    <Column gap="m" padding="l" border="neutral-medium" radius="l">
                        <Heading variant="heading-strong-s">Why this is low risk:</Heading>
                        <Column gap="s">
                            <Flex gap="s" vertical="center"><Icon name="check" size="s" onBackground="brand-strong" /><Text variant="body-default-s">No contracts</Text></Flex>
                            <Flex gap="s" vertical="center"><Icon name="check" size="s" onBackground="brand-strong" /><Text variant="body-default-s">Direct access to the specialist</Text></Flex>
                            <Flex gap="s" vertical="center"><Icon name="check" size="s" onBackground="brand-strong" /><Text variant="body-default-s">Your account stays yours forever</Text></Flex>
                            <Flex gap="s" vertical="center"><Icon name="check" size="s" onBackground="brand-strong" /><Text variant="body-default-s">Straight answers, no fake promises</Text></Flex>
                        </Column>
                    </Column>
                </Column>

                {/* Right Column - Form */}
                <Column flex={1.5} gap="m" style={{ minWidth: "300px" }} as="form" onSubmit={handleSubmit} padding="l" background="surface" border="neutral-medium" radius="l">
                    <Heading variant="heading-strong-m" paddingBottom="m">Audit Request Form</Heading>
                    
                    <Flex fillWidth gap="m" wrap>
                        <Column flex={1} style={{ minWidth: '200px'}}><Input id="name" label="Name" value={formData.name} onChange={handleChange} required /></Column>
                        <Column flex={1} style={{ minWidth: '200px'}}><Input id="businessName" label="Business Name" value={formData.businessName} onChange={handleChange} required /></Column>
                    </Flex>
                    
                    <Flex fillWidth gap="m" wrap>
                        <Column flex={1} style={{ minWidth: '200px'}}><Input id="email" type="email" label="Email" value={formData.email} onChange={handleChange} required /></Column>
                        <Column flex={1} style={{ minWidth: '200px'}}><Input id="phone" label="Phone" value={formData.phone} onChange={handleChange} required /></Column>
                    </Flex>
                    
                    <Input id="website" label="Website / Instagram" value={formData.website} onChange={handleChange} required />
                    
                    <Flex fillWidth gap="m" wrap>
                        <Column flex={1} style={{ minWidth: '200px'}}><Input id="industry" label="Business Type / Industry" value={formData.industry} onChange={handleChange} required /></Column>
                        <Column flex={1} style={{ minWidth: '200px'}}><Input id="location" label="Location / Service Area" value={formData.location} onChange={handleChange} required /></Column>
                    </Flex>

                    <Input id="service" label="What do you sell / what service do you offer?" value={formData.service} onChange={handleChange} required />
                    
                    <Flex fillWidth gap="m" wrap>
                        <Column flex={1} style={{ minWidth: '200px'}}><Input id="runningAds" label="Are you currently running ads?" placeholder="Yes / No" value={formData.runningAds} onChange={handleChange} required /></Column>
                        <Column flex={1} style={{ minWidth: '200px'}}><Input id="adSpend" label="Monthly ad spend range" placeholder="e.g. $1k-$3k" value={formData.adSpend} onChange={handleChange} required /></Column>
                    </Flex>

                    <Input id="biggestIssue" label="What’s the biggest issue right now?" placeholder="(poor lead quality, agency burnout, low bookings...)" value={formData.biggestIssue} onChange={handleChange} required />
                    
                    <Input id="message" label="Anything else I should know? (Optional)" lines={3} value={formData.message} onChange={handleChange} />

                    {status === 'error' && (
                        <Text variant="body-default-s" onBackground="danger-weak">Something went wrong. Please try again.</Text>
                    )}

                    <Button variant="primary" size="l" fillWidth type="submit" loading={status === 'submitting'} disabled={status === 'submitting'} style={{ marginTop: '16px' }}>
                        Request Free Audit
                    </Button>
                </Column>
            </Flex>
        </Column>
    );
}
