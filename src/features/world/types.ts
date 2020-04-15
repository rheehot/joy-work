export interface WorldInfo {
  name: string;
  alpha2Code: string;
  callingCodes: string[];
  capital: string;
  region: string;
}

export interface WorldState {
  status: string;
  worldList: WorldInfo[];
  currentWorldList: WorldInfo[];
  error: string;
  lastIndex: number;
  searchTerm: string;
  debouncedSearchTerm: string;
  currentAlign: string;
}

export interface WorldInputAction {
  [key: string]: string;
}
