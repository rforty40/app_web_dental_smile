import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",

  initialState: {
    pageActive: "",
    isSidebarOpen: false,
    hookTabs: 0,
    hookTabsCons: 0,
    listaPacienteSidebar: [],
  },

  reducers: {
    onChangeSidebar: (state, { payload }) => {
      state.isSidebarOpen = payload;
    },
    onChangePage: (state, { payload }) => {
      state.pageActive = payload;
    },

    onChangeHookTabs: (state, { payload }) => {
      state.hookTabs = payload;
    },

    onChangeHookTabsCons: (state, { payload }) => {
      state.hookTabsCons = payload;
    },

    onSavePacienteSidebar: (state, { payload }) => {
      const registrado = state.listaPacienteSidebar.some(
        (pac) => pac.to === payload.to
      );
      console.log(registrado);
      if (!registrado) {
        state.listaPacienteSidebar.push(payload);
      }
    },

    onDeletePacienteSidebar: (state, { payload }) => {
      state.listaPacienteSidebar = state.listaPacienteSidebar.filter(
        (pac) => pac.to !== payload.to
      );
    },

    onSaveConsultaSidebar: (state, { payload }) => {
      // let consultaRegistrada = false;

      // for (let index = 0; index < state.listaPacienteSidebar.length; index++) {
      //   for (
      //     let index2 = 0;
      //     index2 < state.listaPacienteSidebar[index].arrCons.length;
      //     index2++
      //   ) {
      //     if (
      //       state.listaPacienteSidebar[index].arrCons[index2].id ===
      //       payload.id_con
      //     ) {
      //       consultaRegistrada = true;
      //       break;
      //     }
      //   }
      // }

      for (let index = 0; index < state.listaPacienteSidebar.length; index++) {
        if (state.listaPacienteSidebar[index].to === payload.id_pac) {
          const registrada = state.listaPacienteSidebar[index].arrCons.some(
            (cons) => cons.id === payload.id_con
          );

          if (!registrada) {
            state.listaPacienteSidebar[index].arrCons.push({
              id: payload.id_con,
              text: payload.fecha,
            });
          }

          break;
        }
      }
    },

    onDeleteConsultaSidebar: (state, { payload }) => {
      //posicion del paciente

      console.log("payload", payload);
      let posicionPac = -1;

      for (let index = 0; index < state.listaPacienteSidebar.length; index++) {
        if (state.listaPacienteSidebar[index].to === payload.id_pac) {
          posicionPac = index;
          break;
        }
      }
      console.log(posicionPac);
      if (posicionPac !== -1) {
        state.listaPacienteSidebar[posicionPac].arrCons =
          state.listaPacienteSidebar[posicionPac].arrCons.filter(
            (cons) => cons.id !== payload.id_con
          );
      }
    },
  },
});

export const {
  onChangeSidebar,
  onChangePage,
  onChangeHookTabs,
  onChangeHookTabsCons,
  onSavePacienteSidebar,
  onDeletePacienteSidebar,
  onSaveConsultaSidebar,
  onDeleteConsultaSidebar,
} = uiSlice.actions;
