'use client'
import React, { useEffect, useState } from 'react';
import { ScrollArrow } from './ScrollArrow';

const SmartcardioScrollArrow = () => {
    const [scrollToDownloads, setScrollToDownloads] = useState(() => () => {});

    useEffect(() => {
    const importScrollToDownloads = async () => {
        const { scrollToDownloads } = await import('../../utils/scrollToDownloads');
        setScrollToDownloads(() => scrollToDownloads);
    };
    importScrollToDownloads();
    }, []);
    return (
        <ScrollArrow
        onClick={scrollToDownloads}
        className="smartcardio-arrow"
      />
    );
};

export default SmartcardioScrollArrow;