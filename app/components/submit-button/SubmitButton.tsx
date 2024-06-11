'use client'

import React from "react"
import { useFormStatus } from "react-dom"

export function SubmitButton(props: { children: React.ReactNode }) {
    const { pending } = useFormStatus()

    return (
        <button className="bg-green-500 text-xs p-2 rounded-sm" type="submit" disabled={pending}>
            {pending ? 'Loading..' : props.children}
        </button>
    )
}