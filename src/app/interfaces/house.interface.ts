export interface Houses {
  _id: string;
  name: string;
  mascot: string;
  headOfHouse: string;
  houseGhost: string;
  founder: string;
  __v: number;
  school?: string;
  members: string[];
  values: string[];
  colors: string[];
}

export interface House {
  _id: string;
  name: string;
  mascot: string;
  headOfHouse: string;
  houseGhost: string;
  founder: string;
  __v: number;
  school: string;
  members: Member[];
  values: string[];
  colors: string[];
}

export interface Member {
  _id: string;
  name: string;
}
