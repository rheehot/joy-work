export interface WorldInfo {
  name: string;
  alpha2Code: string;
  callingCodes: string[];
  capital: string;
  region: string;
}

export interface WorldState {
  status: string;
  worldList: WorldInfo[] | null;
  error: string;
}
