'use client'
import { scrollToForWhom } from '../../utils/scrollToForWhom';
import { ScrollArrow } from './ScrollArrow';

const SmartcardioScrollArrow = () => {
    return (
        <ScrollArrow
        onClick={scrollToForWhom}
        className="smartcardio-arrow"
      />
    );
};

export default SmartcardioScrollArrow;