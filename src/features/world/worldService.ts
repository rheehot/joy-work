import { WorldState, WorldInputAction, WorldInfo } from './types';
import { DATA } from '@/utils/constants';

const getNewWorld = (inputWorld: WorldInputAction): WorldInfo => {
  return {
    alpha2Code: inputWorld[DATA.CODE],
    callingCodes: inputWorld[DATA.CALL].split(','),
    name: inputWorld[DATA.NAME],
    capital: inputWorld[DATA.CAPITAL],
    region: inputWorld[DATA.REGION],
  };
};

const applyAlign = (state: WorldState, type: string) => {
  const { currentWorldList, currentAlign } = state;
  switch (type) {
    case DATA.CODE:
      if (currentAlign === DATA.CODE)
        currentWorldList.sort((w1, w2) =>
          w2.alpha2Code.localeCompare(w1.alpha2Code)
        );
      else
        currentWorldList.sort((w1, w2) =>
          w1.alpha2Code.localeCompare(w2.alpha2Code)
        );
      break;
    case DATA.CAPITAL:
      if (currentAlign === DATA.CAPITAL)
        currentWorldList.sort((w1, w2) => w2.capital.localeCompare(w1.capital));
      else
        currentWorldList.sort((w1, w2) => w1.capital.localeCompare(w2.capital));
      break;
    case DATA.NAME:
      if (currentAlign === DATA.NAME)
        currentWorldList.sort((w1, w2) => w2.name.localeCompare(w1.name));
      else currentWorldList.sort((w1, w2) => w1.name.localeCompare(w2.name));
      break;
    case DATA.REGION:
      if (currentAlign === DATA.REGION)
        currentWorldList.sort((w1, w2) => w2.region.localeCompare(w1.region));
      else
        currentWorldList.sort((w1, w2) => w1.region.localeCompare(w2.region));
      break;
    case DATA.CALL:
      if (currentAlign === DATA.CALL)
        currentWorldList.sort((w1, w2) =>
          w2.callingCodes.join(',').localeCompare(w1.callingCodes.join(','))
        );
      else
        currentWorldList.sort((w1, w2) =>
          w1.callingCodes.join(',').localeCompare(w2.callingCodes.join(','))
        );
      break;
  }
};

export { getNewWorld, applyAlign };
