import {
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { RadioGroupCustom } from "../../ui";
import { useSaludBucalStore } from "../../hooks";

export const RowSaludBucal = ({ piezasList }) => {
  //store
  const { updateSaludBActual } = useSaludBucalStore();
  //hook
  const [statePieza, setStatePieza] = useState("");
  const [statePlaca, setStatePlaca] = useState(0);
  const [stateCalculo, setStateCalculo] = useState(0);
  const [stateGingivitis, setStateGingivitis] = useState(0);

  useEffect(() => {
    updateSaludBActual({
      fila: piezasList.fila,
      pieza: statePieza,
      placa: statePlaca,
      calculo: stateCalculo,
      gingivitis: stateGingivitis,
    });
  }, [statePieza, , statePlaca, stateCalculo, stateGingivitis]);

  return (
    <>
      {/* <RadioGroup
        row
        sx={{
          display: "flex",
          flexWrap: "nowrap",

          "& .MuiFormControlLabel-root > .MuiButtonBase-root": {
            padding: "0px 10px",
          },
        }}
      >
        {piezas.map((pieza, index) => {
          return (
            <FormControlLabel
              key={index}
              value={pieza}
              control={<Radio onClick={handleClick} />}
              label={
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {pieza === 0 ? "Ausente" : pieza}
                </Typography>
              }
              labelPlacement="start"
            />
          );
        })}
      </RadioGroup> */}

      <RadioGroupCustom
        radioOptions={piezasList.piezas}
        hookRadio={statePieza}
        setHookRadio={setStatePieza}
        fontSzlbl="15px"
        colorTxt="black"
        fontw="bold"
        styleRadioGroup={{
          display: "flex",
          flexWrap: "nowrap",

          "& .MuiFormControlLabel-root > .MuiButtonBase-root": {
            padding: "0px 10px",
          },
        }}
      />
      <Select
        value={statePlaca}
        onChange={(event) => {
          setStatePlaca(event.target.value);
        }}
        size="small"
        sx={{
          fontWeight: "bold",
          width: "50px",
          height: "25px",
          padding: "3px !important",
        }}
        inputProps={{ IconComponent: () => null }}
      >
        {[0, 1, 2, 3].map((item) => {
          return (
            <MenuItem
              key={item}
              value={item}
              sx={{ fontStyle: "italic", fontWeight: "bold" }}
            >
              {item}
            </MenuItem>
          );
        })}
      </Select>

      <Select
        value={stateCalculo}
        onChange={(event) => {
          setStateCalculo(event.target.value);
        }}
        size="small"
        sx={{
          fontWeight: "bold",
          width: "50px",
          height: "25px",
          padding: "3px !important",
        }}
        inputProps={{ IconComponent: () => null }}
      >
        {[0, 1, 2, 3].map((item) => {
          return (
            <MenuItem
              key={item}
              value={item}
              sx={{ fontStyle: "italic", fontWeight: "bold" }}
            >
              {item}
            </MenuItem>
          );
        })}
      </Select>

      <Select
        value={stateGingivitis}
        onChange={(event) => {
          setStateGingivitis(event.target.value);
        }}
        size="small"
        sx={{
          fontWeight: "bold",
          width: "50px",
          height: "25px",
          padding: "3px !important",
        }}
        inputProps={{ IconComponent: () => null }}
      >
        {[0, 1].map((item) => {
          return (
            <MenuItem
              key={item}
              value={item}
              sx={{ fontStyle: "italic", fontWeight: "bold" }}
            >
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};
