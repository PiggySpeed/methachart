import {
  ON_NAME_BLUR,
  ON_RXNUM_BLUR,
  ON_DRUG_BLUR,
  ON_DOSE_BLUR,
  ON_TAKEHOME_BLUR
} from './actiontypes';

export const DRUG_LIST = [
  {
    displayname: "Methadone",
    drugname: "Methadone 10mg/ml",
    din: "02394596",
    pseudodin: "66999997"
  }
  //{
  //  displayname: "Suboxone",
  //  drugname: "Buprenorphine/Naloxone",
  //  din: "1",
  //  pseudodin: "66999997"
  //},
  //{
  //  displayname: "Kadian",
  //  drugname: "Buprenorphine/Naloxone",
  //  din: "3",
  //  pseudodin: "66999997"
  //}
];

export const onNameBlur = (name) => {
  return dispatch => {
    dispatch({ type: ON_NAME_BLUR, name })
  }
};
export const onRxNumBlur = (rxnum) => {
  return dispatch => {
    dispatch({ type: ON_RXNUM_BLUR, rxnum })
  }
};
export const onSetDrug = (din) => {
  return dispatch => {
    const selecteddrug = DRUG_LIST.filter( drug => drug.din == din)[0];

    dispatch({ type: ON_DRUG_BLUR, selecteddrug })
  }
};
export const onDoseBlur = (dose) => {
  return dispatch => {
    dispatch({ type: ON_DOSE_BLUR, dose })
  }
};
export const onTakehomeBlur = (takehome) => {
  return dispatch => {
    dispatch({ type: ON_TAKEHOME_BLUR, takehome })
  }
};
