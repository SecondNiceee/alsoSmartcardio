import React, { useEffect } from 'react';

const useBlockScroll = () => {
    useEffect( () => {
        document.body.style.overflow = "hidden"
        return () => {
          document.body.style.overflow = "auto"
        }
      }, [] )
};

export default useBlockScroll;