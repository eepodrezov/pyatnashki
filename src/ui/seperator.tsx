import { FC } from "react"

export interface SeperatorProps {
    text?: string
}

export const Seperator:FC<SeperatorProps> = ({
    text
}) => {
  return (
    <div
        className="grid grid-cols-[0.8fr_0.4fr_0.8fr] grid-rows-[1fr] gap-x-0 gap-y-0 items-center"
    >
        <div className="h-1 bg-gray-200 rounded-[10px_0_0_10px]"></div>
        <h2>{text}</h2>
        <div className="h-1 bg-gray-200 rounded-[0_10px_10px_0]"></div>
    </div>
  )
}
