import { useDispatch, useSelector } from "react-redux";
import { onChangeIndiceSimplificado, onSetSaludBucalAct } from "../store";

//
//

export const useSaludBucalStore = () => {
  //

  const dispatch = useDispatch();

  const { saludBucalActual, errorMsgRegSaludB } = useSelector(
    (state) => state.saludBucal
  );

  const { consultaActiva } = useSelector((state) => state.consultas);

  //

  const setearSaludBActual = (saludBucalArr) => {
    dispatch(onSetSaludBucalAct(saludBucalArr));
  };

  const updateSaludBActual = (pieza) => {
    dispatch(onChangeIndiceSimplificado(pieza));
  };

  // const startLoadSaludBucalArr = async () => {
  //   try {
  //     const { data } = await getOdontogramas(
  //       "consulta",
  //       consultaActiva.id_consulta
  //     );

  //     // console.log(data);
  //     // console.log(formatearDataOdontograma(data[0]));

  //     dispatch(onSetOdontogramaConsAct(formatearDataOdontograma(data[0])));

  //     dispatch(onSetPiezasListOdon(convertOdonListPiezas(data[0].piezas)));

  //     //
  //   } catch (error) {
  //     console.log(error);
  //     console.log(error.response.data.message);

  //     dispatch(onSetOdontogramaConsAct({ piezas: [], fecha_odontograma: "" }));

  //     dispatch(onSetPiezasListOdon([]));
  //   }
  // };

  // const startSavingSaludBucal = async () => {
  //   dispatch(clearErrorMessageSaludB());
  //   try {
  //     // console.log(odontogramaActual);
  //     let id_odontograma = 0;

  //     if (Object.keys(odontogramaActual).length < 4) {
  //       //registro de odontograma
  //       const { data: dataOdon } = await createOdontograma(
  //         consultaActiva.id_consulta
  //       );
  //       id_odontograma = dataOdon.id_odontograma;
  //     } else {
  //       //actualizacion de las piezas dentales
  //       id_odontograma = odontogramaActual.id_odontograma;
  //     }

  //     for (const pieza of odontogramaActual.piezas) {
  //       //registro de pieza
  //       if (pieza.id === null && !verifyPiezaDentalEmpty(pieza)) {
  //         // console.log("Se crea pieza");
  //         await createPiezaDental(
  //           id_odontograma,
  //           formatearDataPiezaDentalToBD(pieza)
  //         );
  //       }

  //       //actualizacion de pieza
  //       if (pieza.id !== null && !verifyPiezaDentalEmpty(pieza)) {
  //         // console.log("Se actualiza pieza");
  //         await updatePiezaDental(
  //           pieza.id,
  //           formatearDataPiezaDentalToBD(pieza)
  //         );
  //       }

  //       //eliminacion de pieza
  //       if (pieza.id !== null && verifyPiezaDentalEmpty(pieza)) {
  //         // console.log("Se elimina pieza");
  //         await deletePiezaDental(pieza.id);
  //       }
  //     }

  //     // await startLoadOdontogramas();

  //     dispatch(changeRegisterErrorOdont({ msg: "Sin errores", error: "" }));
  //   } catch (error) {
  //     console.log(error);
  //     console.log(error.response.data.message);

  //     dispatch(
  //       changeRegisterErrorOdont({
  //         msg: "Hay errores",
  //         error:
  //           error.response.data.message +
  //           " .Para mas información contactese con el administrador",
  //       })
  //     );
  //   }
  // };

  //
  return {
    //* Propiedades
    saludBucalActual,
    errorMsgRegSaludB,

    //* Métodos
    setearSaludBActual,
    updateSaludBActual,
  };
};
