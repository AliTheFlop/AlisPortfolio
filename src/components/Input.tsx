"use client";

import { Flex, Text, Column } from "@once-ui-system/core";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    lines?: number;
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string;
    label: string;
    lines?: number;
}

export const Input = ({
    id,
    label,
    lines,
    ...props
}: InputProps & TextareaProps) => {
    return (
        <Column
            fillWidth
            padding="s"
            radius="m"
            background="surface"
            border="neutral-medium"
            align="start"
            style={{
                transition: "border 0.2s ease-in-out",
                "&:focus-within": {
                    border: "1px solid var(--brand-solid-strong)"
                }
            } as React.CSSProperties}
        >
            <Text
                as="label"
                variant="label-default-s"
                onBackground="neutral-weak"
                htmlFor={id}
                style={{ marginBottom: "2px" }}
            >
                {label}
            </Text>
            {lines ? (
                <textarea
                    id={id}
                    rows={lines}
                    className="input-reset"
                    style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        resize: "vertical",
                        color: "inherit",
                        fontFamily: "inherit",
                        padding: 0,
                    }}
                    {...props}
                />
            ) : (
                <input
                    id={id}
                    className="input-reset"
                    style={{
                        width: "100%",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        color: "inherit",
                        fontFamily: "inherit",
                        padding: 0,
                    }}
                    {...props}
                />
            )}
        </Column>
    );
};
