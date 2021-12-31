import React, { createContext, useContext, useState, useEffect } from 'react';
import { FETCH_STATES, SERVER_ERRORS, SERVER_URL } from '../../constants';

type CardInfoContextType = {
  cardDB: CardDB;
  flList: FLList;
  addList: AddList;
  fetchState: FETCH_STATES;
};

type AllCardInfo = { cardDB: CardDB; flList: FLList; addList: AddList };

type AllCardInfoResponse = AllCardInfo | ServerError;

// Custom type guards
const isAllCardInfo = (json: AllCardInfoResponse): json is AllCardInfo => {
  return (json as AllCardInfo).cardDB !== undefined;
};
const CardInfoContext = createContext<CardInfoContextType>({
  cardDB: {},
  flList: { forbidden: [], limited: [], semiLimited: [], unlimited: [] },
  addList: [],
  fetchState: FETCH_STATES.INIT,
});

// TS *really* doesn't like when you try to type children within a context
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CardInfoProvider = ({ children }: { children?: React.ReactNode }): JSX.Element => {
  const [fetchState, setFetchState] = useState(FETCH_STATES.INIT);
  const [cardDB, setCardDB] = useState<CardDB>({});
  const [flList, setFLList] = useState<FLList>({
    forbidden: [],
    limited: [],
    semiLimited: [],
    unlimited: [],
  });
  const [addList, setAddList] = useState<AddList>([]);
  useEffect(() => {
    const fetchAllCardInfo = async (): Promise<AllCardInfo> => {
      const res = await fetch(`${SERVER_URL}/allcardinfo`);
      const json = (await res.json()) as AllCardInfoResponse;
      if (isAllCardInfo(json)) {
        return json;
      } else {
        if (json.error.type === SERVER_ERRORS.SERVER_NOT_STARTED) {
          return new Promise((resolve) =>
            setTimeout(() => {
              resolve(fetchAllCardInfo());
            }, 10000),
          );
        } else {
          throw new Error('An unknown fatal server error occurred.');
        }
      }
    };

    setFetchState(FETCH_STATES.LOADING);
    fetchAllCardInfo()
      .then((res) => {
        setCardDB(res.cardDB);
        setFLList(res.flList);
        setAddList(res.addList);
        setFetchState(FETCH_STATES.DONE);
      })
      .catch((err) => {
        setFetchState(FETCH_STATES.ERROR);
        console.error(err);
      });
  }, []);
  return (
    <CardInfoContext.Provider value={{ cardDB, flList, addList, fetchState }}>
      {children}
    </CardInfoContext.Provider>
  );
};

export const useCardInfoContext = () => useContext(CardInfoContext);

export default CardInfoProvider;
