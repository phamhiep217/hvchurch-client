import * as Types from './_actionTypes';

export const initInvExact = () => {
  return {
    type: Types.INIT_INVEXACT
  };
};

export const getAllInvExact = body => {
  return {
    type: Types.GET_INVEXACT,
    body
  };
};

export const getInvDK = body => {
  return {
    type: Types.GET_INVDK,
    body
  };
};

export const getInvKV = body => {
  return {
    type: Types.GET_INVKV,
    body
  };
};

export const getBCTK = body => {
  return {
    type: Types.GET_BCTK,
    body
  };
};

export const getBCTKTHEOKHO = body => {
  return {
    type: Types.GET_BCTKTHEOKHO,
    body
  };
};

export const getBCTKNVL100 = body => {
  return {
    type: Types.GET_BCTKNVL100,
    body
  };
};

export const getBCTKNVL200 = body => {
  return {
    type: Types.GET_BCTKNVL200,
    body
  };
};

export const getBCTKTP100 = body => {
  return {
    type: Types.GET_BCTKTP100,
    body
  };
};
export const getBCTKTP200 = body => {
  return {
    type: Types.GET_BCTKTP200,
    body
  };
};
