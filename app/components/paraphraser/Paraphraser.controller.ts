import { useState } from "react"
import { generate } from "./Paraphraser.action"


export default function useController() {
    const [isPending, setIsPending] = useState<boolean>(false)
    const [link, setLink] = useState<string>("")
    const [result, setResult] = useState<string>("")

    const handleSubmit = async () => {
        if (!link) return
        setIsPending(true)
        const { result } = await generate(link)
        setResult(result || "")
        setIsPending(false)
    }

    return {
        link,
        result,
        isPending,
        setLink,
        handleSubmit
    }
}