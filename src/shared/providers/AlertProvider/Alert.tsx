// src/components/Alert/Alert.tsx
import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

export type AlertType = 'success' | 'error' | 'info' | 'warning';
interface AlertProps {
  show: boolean;
  message: string;
  type?: AlertType;
  onClose: () => void;
}

const alertStyles = {
  success: 'bg-green-100 text-green-800',
  error: 'bg-red-100 text-red-800',
  info: 'bg-blue-100 text-blue-800',
  warning: 'bg-yellow-100 text-yellow-800',
};

export const Alert: React.FC<AlertProps> = ({ show, message, type = 'info', onClose }) => {
  const ref = useRef(null);
  return (
    <CSSTransition in={show} timeout={300} classNames="alert" nodeRef={ref} unmountOnExit>
      <div ref={ref} className={`fixed top-4 right-1/2 translate-x-1/2 z-50 p-4 rounded-md shadow-lg ${alertStyles[type]} flex justify-between items-center`}>
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 font-bold">
          &times;
        </button>
      </div>
    </CSSTransition>
  );
};