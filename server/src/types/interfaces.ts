export interface SmediaList {
  mediaType: string;
  mediaCategory: string;
  page: number;
}
export interface SMediaDetail {
  mediaType?: string;
  mediaId?: string;
}
export interface Spersonid {
  personId: any;
}
export interface SmediaSearch {
  mediaType: string;
  query: string;
  page: number;
}
export interface SmediaGenres {
  mediaType: string;
}

export interface SmodelOptions extends Document {
  
}




export interface SUser extends Document {
  username: string;
  displayName: string;
  password: string;
  profile: string;
  salt: string;
}

export interface SUsermethods extends Document {
  setPassword(): string;
  validPassword(): string;
}

export interface Sreview extends Document {
  user: any;
  content: string;
  mediaType: string;
  mediaId: string;
  mediaTitle: string;
  mediaPoster: string;
}
