'use client'
import { FC, useState } from "react"
import { AccordionItem } from "./AccordionItem"
type AccordionProps = {
    content : {
        title : React.ReactNode,
        answer : React.ReactNode
    }[]
}
export const Accordion:FC<AccordionProps> = ({content = []}) => {
    const [isCurrentOpen, setIsCurrentOpen] = useState<number | null>(null);

    return (
        <div className="w-[full] mx-auto">
            {content.map(({title, answer}, i) => (
              <AccordionItem key={i} setIsCurrentOpen={setIsCurrentOpen} content = {answer} header = {title} index={i} isCurrentOpen={isCurrentOpen}/>
            ))}
        </div>
    )
}