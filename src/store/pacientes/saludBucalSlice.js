import { createSlice } from "@reduxjs/toolkit";

export const saludBucalSlice = createSlice({
  name: "saludBucal",

  initialState: {
    saludBucalActual: { piezas: [] },
    errorMsgRegSaludB: { msg: "", error: "" },
  },

  reducers: {
    onSetSaludBucalAct: (state, { payload }) => {
      state.saludBucalActual = payload;
    },

    onChangeIndiceSimplificado: (state, { payload }) => {
      //comprobar si es registro o actualizacion
      const existente = state.saludBucalActual.piezas.some(
        (pieceDent) => pieceDent.fila === payload.fila
      );
      // console.log(existente);
      // console.log(payload);
      if (existente) {
        // console.log("actualizado");
        //actualizacion
        state.saludBucalActual.piezas = state.saludBucalActual.piezas.map(
          (pieceDent) => {
            if (pieceDent.fila === payload.fila) {
              return payload;
            }
            return pieceDent;
          }
        );
      } else {
        // console.log("registro");
        state.saludBucalActual.piezas.push(payload);
      }
    },

    changeRegisterSaludB: (state, { payload }) => {
      state.errorMsgRegSaludB = payload;
    },

    clearErrorMessageSaludB: (state) => {
      state.errorMsgRegSaludB = { msg: "", error: "" };
    },
  },
});

export const {
  onSetSaludBucalAct,
  onChangeIndiceSimplificado,
  changeRegisterSaludB,
  clearErrorMessageSaludB,
} = saludBucalSlice.actions;
