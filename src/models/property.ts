import { PropertyTraceResponse } from '@models/property-trace';

export interface Property {
  ownerId: string;
  name: string;
  address: string;
  price: number;
  codeInternal: number;
  year: number;
}

export interface PropertyRequest extends Property { }

export interface PropertyResponse extends Property {
  propertyId: string;
  propertyImageId?: string;
  propertyTraces: PropertyTraceResponse[];
}
