import React from 'react';
import DownloadsButtons from '../components/DownloadsButtons';
import OrderButton from '@/shared/UI/OrderButton/OrderButton';
import DownloadsInstructions from '../components/DownloadsInstructions';

const Downloads = () => {
    return (
        <section className='downloads'>
            <div className="container">
                <header className='downloads__header'>
                Скачайте приложение СмартКардио®
                для работы с прибором
                </header>
                <DownloadsButtons />
                <DownloadsInstructions />
                
            </div>
        </section>
    );
};

export default Downloads;