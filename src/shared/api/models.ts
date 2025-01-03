
// Тип данных заголовков 
export type CustomHeaders = {
  "Content-Type"?: string;
  Accept?: string;
  "Content-Length"?: number;
  "User-Agent"?: string;
  "Content-Encoding"?: string;
  Authorization?: string;
};

// Тип параметров запроса
export type ParamsType = Record<string, any>;
export type DataType = Record<string, any>

export type TypeStatus = "fulfilled" | "rejected" | "pending"