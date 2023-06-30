import { createSlice } from "@reduxjs/toolkit";

export const odontogramaSlice = createSlice({
  name: "odontograma",

  initialState: {
    toolOdontActiva: null,
    odontogramaActual: { piezas: [], fecha_odontograma: "" },
    errorMsgRegOdontog: { msg: "", error: "" },
    piezasListOdon: [],
    piezaActiva: null,
    isUpdated: false,
  },

  reducers: {
    onSetActiveTool: (state, { payload }) => {
      state.toolOdontActiva = payload;
    },

    onSetOdontogramaConsAct: (state, { payload }) => {
      state.odontogramaActual = payload;
    },

    onChangePiezasDentales: (state, { payload }) => {
      //comprobar si es registro o actualizacion
      const existente = state.odontogramaActual.piezas.some(
        (pieceDent) => pieceDent.numberTooth === payload.numberTooth
      );
      // console.log(existente);
      // console.log(payload);
      if (existente) {
        // console.log("actualizado");
        //actualizacion
        state.odontogramaActual.piezas = state.odontogramaActual.piezas.map(
          (pieceDent) => {
            if (pieceDent.numberTooth === payload.numberTooth) {
              return payload;
            }
            return pieceDent;
          }
        );
      } else {
        // console.log("registro");
        state.odontogramaActual.piezas.push(payload);
      }
    },

    onSetPiezasListOdon: (state, { payload }) => {
      state.piezasListOdon = payload;
    },

    onSetPiezaActiva: (state, { payload }) => {
      state.piezaActiva = payload;
    },

    changeRegisterErrorOdont: (state, { payload }) => {
      state.errorMsgRegOdontog = payload;
    },

    clearErrorMessageOdont: (state) => {
      state.errorMsgRegOdontog = { msg: "", error: "" };
    },

    onUpdated: (state, { payload }) => {
      state.isUpdated = payload;
    },
  },
});

export const {
  onSetActiveTool,
  onChangePiezasDentales,
  onSetOdontogramaConsAct,
  changeRegisterErrorOdont,
  clearErrorMessageOdont,
  onSetPiezasListOdon,
  onSetPiezaActiva,
  onUpdated,
} = odontogramaSlice.actions;
