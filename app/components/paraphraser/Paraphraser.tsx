'use client'

import useController from "./Paraphraser.controller"

export default function Paraphraser() {
    const {
        isPending,
        link,
        result,
        handleSubmit,
        setLink
    } = useController()
    return (
        <div className="flex flex-col max-w-md mx-auto py-10">
            <div className="flex flex-col gap-2">
                <label>Enter the link below:</label>
                <input
                    name="link"
                    className="text-black p-2 text-xs rounded-sm"
                    type="text"
                    value={link}
                    onChange={(t) => setLink(t.target.value)}
                />
            </div>
            <div className="flex flex-col mt-2">
                <button onClick={handleSubmit} className="bg-green-500 text-xs p-2 rounded-sm" type="button" disabled={isPending}>
                    {isPending ? 'Loading..' : 'Submit'}
                </button>
            </div>
            {
                !isPending && result && (
                    <textarea className="text-black p-2 text-xs rounded-sm mt-2" rows={30}>
                        {result}
                    </textarea>
                )
            }
        </div >
    )
}