import { SERVER_ERRORS } from "./constants";

export type ServerError = {
  error: {
    msg: string;
    type: SERVER_ERRORS;
  };
};

type Card = {
  id: number;
  name: string;
  type: string;
  desc: string;
  atk?: number;
  def?: number;
  level?: number;
  race?: string;
  attribute?: string;
  scale?: number;
  linkval?: number;
  linkmarkers?: string[];
  archetype?: string;
  sets: CardSetInfo[];
  images: CardImageInfo[];
  legality: number;
};

export type CardDB = Record<string, Card>;

type CardSetInfo = {
  set_name: string;
  set_code: string;
  set_rarity: string;
  set_rarity_code: string;
  set_price: string;
};

type CardImageInfo = {
  id: number;
  image_url: string;
  image_url_small: string;
};

type DecklistEntry = {
  quantity: number;
  card: Card;
};

export type Decklist = {
  name: string;
  description: string;
  imgURL: string;
  mainDeck: DecklistEntry[];
  extraDeck: DecklistEntry[];
  sideDeck: DecklistEntry[];
};

export type Decklists = Decklist[];

type FLListEntry = {
  id: number;
  card: Card;
  legality: string;
  remark: string;
  notes: string;
};

export type FLList = {
  forbidden: FLListEntry[];
  limited: FLListEntry[];
  semiLimited: FLListEntry[];
  unlimited: FLListEntry[];
};

type AddListEntry = {
  id: number;
  card: Card;
  setCode: string;
  releaseDate: string;
  notes?: string;
};

type AddListGroup = {
  name: string;
  cards: AddListEntry[];
};

export type AddList = AddListGroup[];
