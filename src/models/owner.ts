export interface Owner {
  name: string;
  address: string;
  photo?: FormData;
  birthday: Date;
}

export interface OwnerRequest extends Owner { }

export interface OwnerResponse extends Owner {
  ownerId: string;
}
