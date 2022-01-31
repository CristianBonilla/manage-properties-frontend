import { PropertyResponse } from '@models/property';

export interface PropertiesFilter {
  ownerId: string;
  ownerName: string;
  properties: PropertyResponse[];
}
