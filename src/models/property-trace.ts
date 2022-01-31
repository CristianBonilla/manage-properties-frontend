export interface PropertyTrace {
  propertyId: string;
  dateSale: Date;
  name: string;
  value: number;
  tax: number;
}

export interface PropertyTraceRequest extends PropertyTrace { }

export interface PropertyTraceResponse extends PropertyTrace {
  propertyTraceId: string;
}
