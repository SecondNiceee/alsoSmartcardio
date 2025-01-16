'use client'
import React from 'react';
import { ScrollArrow } from './ScrollArrow';
import { scrollToDownloads } from '../../utils/scrollToDownloads';

const SmartcardioScrollArrow = () => {
    return (
        <ScrollArrow
        onClick={scrollToDownloads}
        className="smartcardio-arrow"
      />
    );
};

export default SmartcardioScrollArrow;