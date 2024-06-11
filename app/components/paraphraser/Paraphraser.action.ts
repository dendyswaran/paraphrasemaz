'use server'

import Groq from "groq-sdk";

export async function generate(link: string) {
    const groq = new Groq({ apiKey: process.env.GROQ_API });

    const stream = await groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: "you are a helpful assistant.",
            },
            {
                role: "user",
                content: `paraphrase the content of the article from this link by using Bahasa: ${link}`,
            },
        ],
        model: "llama3-70b-8192",
        stream: false,
        // Controls randomness: lowering results in less random completions.
        // As the temperature approaches zero, the model will become deterministic
        // and repetitive.
        temperature: 0.5,

        // The maximum number of tokens to generate. Requests can use up to
        // 2048 tokens shared between prompt and completion.
        max_tokens: 1024,

        // Controls diversity via nucleus sampling: 0.5 means half of all
        // likelihood-weighted options are considered.
        top_p: 1,

        // A stop sequence is a predefined or user-specified text string that
        // signals an AI to stop generating content, ensuring its responses
        // remain focused and concise. Examples include punctuation marks and
        // markers like "[end]".
        stop: null,

    });

    return {
        result: stream.choices[0].message.content
    }

}