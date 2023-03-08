export interface AnnonceState {
  annonces: IAnnonce[];
  loading: boolean;
  error: string | null;
}

export interface IAnnonce {
  id: string;
  titre: string;
  description: string;
  adresse: string;
  complement_adresse?: string | null;
  code_postal: string;
  ville: string;
  telephone: string;
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
