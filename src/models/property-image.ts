export interface PropertyImage {
  propertyId: string;
  file: FormData;
  enabled: boolean;
}

export interface PropertyImageRequest extends PropertyImage { }

export interface PropertyImageResponse extends PropertyImage {
  propertyImageId: string;
}
