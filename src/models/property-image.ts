export interface PropertyImage {
  propertyId: string;
  file: FormData;
  fileName: string;
  enabled: boolean;
}

export interface PropertyImageRequest extends PropertyImage { }

export interface PropertyImageResponse extends PropertyImage {
  propertyImageId: string;
}
