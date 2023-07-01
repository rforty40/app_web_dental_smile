import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import { ButtonCustom } from "../../../ui";
import {
  AddPhotoAlternate,
  CloseOutlined,
  UploadOutlined,
} from "@mui/icons-material";
import { useRef, useState } from "react";
import { FormRecursoFoto, ViewRecursoFoto } from "../../components";

export const RecursosFotograficosPage = () => {
  const [stateDialog, setStateDialog] = useState(false);
  const [titleForm, setTitleForm] = useState("");
  const abrirModal = () => {
    setStateDialog(true);
    setTitleForm("Registrar recursos fotográficos");
  };

  return (
    <Box
      component="div"
      className="animate__animated animate__fadeInUp animate__faster"
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          columnGap: "15px",
          backgroundColor: "primary.main",
          color: "white",
          padding: "10px 20px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Recursos fotográficos de la consulta
        </Typography>
        <ButtonCustom
          altura="45px"
          txt_b_size="14px"
          flexDir="column-reverse"
          colorf="transparent"
          colorh="transparent"
          colort="white"
          colorth="celesteNeon.main"
          txt_b="Agregar"
          fontW="bold"
          iconB={<AddPhotoAlternate />}
          propsXS={{ boxShadow: "none !important" }}
          onClick={abrirModal}
        />
      </Box>

      <ImageList
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          padding: "20px",
          cursor: "pointer",
        }}
        cols={3}
        rowHeight={340}
      >
        {itemData.map((item) => (
          <ImageListItem
            component="div"
            // onMouseEnter={() => {
            //   console.log("entra");
            //   abrirModal();
            // }}
            // onMouseLeave={() => {
            //   console.log("sale");
            //   cerrarModal();
            // }}
            // onMouseLeave={cerrarModal}
            // onClick={abrirModal}
            key={item.img}
            sx={{
              ":hover": {
                // transform: "scale(1.5)",
                // boxShadow: "5px 7px 7px rgba(0, 0, 0, 0.5)",
                // position: "absolute",
                // zIndex: "10000",
              },
            }}
          >
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>

      {/* <ViewRecursoFoto
        stateDialog={stateDialog}
        setStateDialog={setStateDialog}
      /> */}

      <FormRecursoFoto
        stateDialog={stateDialog}
        setStateDialog={setStateDialog}
        titleForm={titleForm}
      />
    </Box>
  );
};
const itemData = [
  {
    // img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    img: "/assets/img/fondos/fondoConsulta2.jpg",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  },
];
