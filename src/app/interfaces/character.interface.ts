// Interface de tipo Character (personaje)
export interface Character {
  _id: string;
  name: string;
  role: string;
  house: string;
  school: string;
  __v: number;
  ministryOfMagic: boolean;
  orderOfThePhoenix: boolean;
  dumbledoresArmy: boolean;
  deathEater: boolean;
  bloodStatus: string;
  species: string;
}

// Interface de tipo Characters (personajes)
export interface Characters {
  _id: string;
  name: string;
  role?: string;
  house?: string;
  school?: string;
  __v: number;
  ministryOfMagic: boolean;
  orderOfThePhoenix: boolean;
  dumbledoresArmy: boolean;
  deathEater: boolean;
  bloodStatus: string;
  species: string;
  boggart?: string;
  alias?: string;
  animagus?: string;
  wand?: string;
  patronus?: string;
}
