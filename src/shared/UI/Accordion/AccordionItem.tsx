import React, { FC, useRef, useState, useEffect } from 'react';

interface AccordionItemProps { 
    setIsCurrentOpen : React.Dispatch<React.SetStateAction<number | null>>;
    isCurrentOpen : number | null;
    header : React.ReactNode;
    content : React.ReactNode;
    index : number;
};

export const AccordionItem:FC<AccordionItemProps> = ({setIsCurrentOpen, isCurrentOpen, header, content, index}) => {
    const itemRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);
    const isOpen = isCurrentOpen === index;

    

    useEffect(() => {
        if (itemRef.current) {
            setContentHeight(itemRef.current.scrollHeight);
        }
    }, [content]);

    return (
        <div className="mb-3 border border-gray-200 rounded-lg overflow-hidden bg-white shadow">
            <button
                className="w-full flex items-center justify-between px-4 py-5 text-left font-medium focus:outline-none focus:bg-yellow-100 transition-colors"
                onClick={() => setIsCurrentOpen(prev => prev === index ? null : index)}
                aria-expanded={isOpen}
            >
                <span>{header}</span>
                <span className={`ml-2 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    ▼
                </span>
            </button>
            <div
                ref={itemRef}
                style={{
                    maxHeight: isOpen ? contentHeight : 0,
                    transition: 'max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    overflow: 'hidden'
                }}
            >
                <div className="px-4 pb-4 pt-1 text-gray-700">
                    {content}
                </div>
            </div>
        </div>
    )
}