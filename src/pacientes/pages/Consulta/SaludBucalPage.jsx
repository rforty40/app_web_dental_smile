import { Box, Grid, Icon, Typography } from "@mui/material";
import { RowSaludBucal } from "../../components";
import { Circle } from "@mui/icons-material";
import { RadioGroupCustom } from "../../../ui";
import { useState } from "react";

const piezasList = [
  { fila: 1, piezas: ["Ausente", 16, 17, 55] },
  { fila: 2, piezas: ["Ausente", 11, 21, 51] },
  { fila: 3, piezas: ["Ausente", 26, 27, 65] },
  { fila: 4, piezas: ["Ausente", 36, 37, 75] },
  { fila: 5, piezas: ["Ausente", 31, 41, 71] },
  { fila: 6, piezas: ["Ausente", 46, 47, 85] },
];

// const colorsResult = [
//   { title: "Excelente 0", color: "success.main" },
//   { title: "Buena 0.1 - 1.2", color: "blueSecondary.main" },
//   { title: "Regular 1.3 - 3.0", color: "warning.main" },
//   { title: "Mala", color: "error.main" },
// ];

export const SaludBucalPage = () => {
  const [stateEnfePerio, setStateEnfePerio] = useState("");
  const [stateMalOclus, setStateMalOclus] = useState("");
  const [stateFluorosis, setStateFluorosis] = useState("");
  return (
    <Box
      component="div"
      className="animate__animated animate__fadeInUp animate__faster"
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "20px",
        // backgroundColor: "myBgColor.main",
        // padding: "20px",
        // boxShadow: "5px 7px 7px rgba(0, 0, 0, 0.5)",
      }}
    >
      {/* <Typography
        sx={{
          fontSize: "22px",
          fontWeight: "bold",
          color: "primary.main",
          backgroundColor: "myBgColor.main",
        }}
      >
        Indicadores de Salud Bucal
      </Typography> */}
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box
          display="flex"
          flexDirection="column"
          rowGap="15px"
          flexBasis="60%"
          sx={{
            boxShadow: "5px 7px 7px rgba(0, 0, 0, 0.5)",
            backgroundColor: "myBgColor.main",
            padding: "15px 15px 10px 15px",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "primary.main",
              textAlign: "center",
            }}
          >
            Índices de Higiene Oral Simplificado
          </Typography>

          <Grid
            container
            display="grid"
            justifyItems="center"
            gridTemplateColumns="repeat(4, 1fr)"
            columnGap="20px"
            rowGap="15px"
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                fontStyle: "italic",
                color: "primary.main",
              }}
            >
              Pieza Dental
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                fontStyle: "italic",
                color: "primary.main",
              }}
            >
              Placa
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                fontStyle: "italic",
                color: "primary.main",
              }}
            >
              Cálculo
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                fontStyle: "italic",
                color: "primary.main",
              }}
            >
              Gingivitis
            </Typography>

            {piezasList.map((piezas, index) => {
              return <RowSaludBucal key={index} piezasList={piezas} />;
            })}

            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                fontStyle: "italic",
                color: "primary.main",
                justifySelf: "end",
                // textAlign: "left",
              }}
            >
              Total
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Total
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Total
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "black",
              }}
            >
              Total
            </Typography>
          </Grid>

          {/* <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Box
              display="flex"
              flexDirection="row"
              columnGap="10px"
              alignItems="center"
            >
              {colorsResult.map((colorRes) => {
                return (
                  <div key={colorRes.title}>
                    <Icon sx={{ color: colorRes.color }}>
                      <Circle />
                    </Icon>
                    <Typography
                      sx={{
                        fontSize: "14px",

                        color: colorRes.color,
                      }}
                    >
                      {colorRes.title}
                    </Typography>
                  </div>
                );
              })}
            </Box>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "warning.main",
              }}
            >
              <span style={{ color: "" }}>{"Total: "}</span>
              2.34
            </Typography>
          </Box> */}
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          rowGap="50px"
          flexBasis="35%"
          sx={{
            boxShadow: "5px 7px 7px rgba(0, 0, 0, 0.5)",
            backgroundColor: "myBgColor.main",
            padding: "20px",
          }}
          alignItems="center"
        >
          <div>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "primary.main",
                textAlign: "center",
              }}
            >
              Enfermedad Periodontal
            </Typography>

            <RadioGroupCustom
              radioOptions={["Ausente", "Leve", "Moderada", "Severa"]}
              hookRadio={stateEnfePerio}
              setHookRadio={setStateEnfePerio}
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
          </div>
          <div>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "primary.main",
                textAlign: "center",
              }}
            >
              Mal Oclusión
            </Typography>
            <RadioGroupCustom
              radioOptions={["Ausente", "Angle I", "Angle II", "Angle III"]}
              hookRadio={stateMalOclus}
              setHookRadio={setStateMalOclus}
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
          </div>
          <div>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "primary.main",
                textAlign: "center",
              }}
            >
              Fluorosis
            </Typography>
            <RadioGroupCustom
              radioOptions={["Ausente", "Leve", "Moderada", "Severa"]}
              hookRadio={stateFluorosis}
              setHookRadio={setStateFluorosis}
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
          </div>
        </Box>
      </Box>
    </Box>
  );
};
