'use client'
import { createContext, useState, type FC } from "react";
import { Alert, AlertType } from "./Alert";

interface AlertContextType {
  showAlert: (message: string, type?: AlertType) => void;
}

export const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider:FC<{ children: React.ReactNode }> = ({ children }) => {
  
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<AlertType>('info');

  const hideAlert = () => setVisible(false);

  const showAlert = (message: string, type: AlertType = 'info') => {
    setMessage(message);
    setType(type);
    setVisible(true);
    
    setTimeout(hideAlert, 6000);
  }
      return (
    <AlertContext.Provider value={{showAlert}}>
      {children}
      <Alert show={visible} message={message} type={type} onClose={hideAlert} />
    </AlertContext.Provider>
  );
  } 