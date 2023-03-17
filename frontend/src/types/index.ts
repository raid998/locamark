export interface AnnonceState {
  annonces: IAnnonce[];
  loading: boolean;
  error: string | null;
}

export interface IAnnonce {
  _id: string;
  titre: string;
  telephone: string;
  adresse: string;
  complement?: string;
  codePostal: string;
  ville: string;
  description: string;
  photos?: string[];
  prix: number;
  createdAt?: Date;
  user: IUser;
} 

export interface UserState {
  user: IUser | null;
  error: string | null;
  loading: boolean;
}

export interface IUser {
  email: string;
  id: string;
  nom: string;
  prenom: string;
  token: string;
}

export type NavBarItemType = {
  titre: string;
  lien: string;
}[];

export type settingsType = {
  titre: string;
  action: (...args: any) => void;
}[];
