import { useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import {
  Close,
  CloseOutlined,
  Delete,
  DeleteOutline,
  Save,
  UploadOutlined,
} from "@mui/icons-material";
import { ButtonCustom, IconTextField } from "../../ui";
import { FaUserEdit } from "react-icons/fa";
import { MdOutlineTitle, MdSubtitles } from "react-icons/md";

export const FormRecursoFoto = ({ stateDialog, setStateDialog, titleForm }) => {
  //store

  //hooks
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [stateTitle, setStateTitle] = useState("");
  const [stateDescription, setStateDescription] = useState("");
  const fileInputRef = useRef();
  const [selectedImages, setSelectedImages] = useState([]);
  const [arrImgSelect, setArrImgSelect] = useState([]);

  //handlers
  const cerrarModal = () => {
    setStateDialog(false);
  };

  const cleanArrImages = () => {
    setSelectedImages([]);
    setArrImgSelect([]);
  };

  const handleImageDelete = (index) => {
    setSelectedImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
    setArrImgSelect((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const image = e.target.result;
        setSelectedImages((prevImages) => [...prevImages, image]);
        setArrImgSelect((prevImages) => [...prevImages, file]);
      };
      reader.readAsDataURL(file);
    });
  };

  //funcion enviar los datos
  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSaving(true);
    setFormSubmitted(true);

    const recursoData = {
      stateTitle,
      stateDescription,
      arrImgSelect,
    };

    // await startSavingOdontograma(recursoData);
  };

  //manejador de errores todos los campos
  // useEffect(() => {
  //   if (errorMsgRegOdontog.msg === "Sin errores" && formSubmitted) {
  //     handleOpenSnackbar();
  //     setFormSubmitted(false);
  //     setStartSaving(false);
  //     // cerrarModal();
  //   }
  //   if (errorMsgRegOdontog.msg === "Hay errores" && formSubmitted) {
  //     handleOpenSnackbarError();
  //     setFormSubmitted(false);
  //     setStartSaving(false);
  //     // cerrarModal();
  //   }
  // }, [errorMsgRegOdontog]);
  // console.log(arrImgSelect);
  // console.log(selectedImages);
  //
  return (
    <Dialog
      maxWidth="xl"
      open={stateDialog}
      onClose={cerrarModal}
      sx={{
        "& .MuiPaper-root": {
          height: "90%",
          width: "90%",
          backgroundColor: "rgba(255,255,255,0.9)",
          padding: "5px",
        },
      }}
    >
      <DialogTitle
        padding="16px 10px 16px  20px !important"
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "25px",
            fontStyle: "italic",
            textShadow: "0px 1px 1px rgba(0, 0, 0, 0.4)",
          }}
        >
          {titleForm}
        </Typography>

        <Box display="flex" flexDirection="row" columnGap="10px">
          {isSaving ? (
            <CircularProgress color="primary" />
          ) : (
            <ButtonCustom
              altura="45px"
              txt_b_size="14px"
              flexDir="column-reverse"
              colorf="transparent"
              colorh="transparent"
              colort="primary.main"
              colorth="black"
              txt_b="Guardar"
              fontW="bold"
              iconB={<Save />}
              propsXS={{ boxShadow: "none !important" }}
              onClick={onSubmit}
            />
          )}

          <ButtonCustom
            altura="45px"
            txt_b_size="14px"
            flexDir="column-reverse"
            colorf="transparent"
            colorh="transparent"
            colort="primary.main"
            colorth="black"
            txt_b="Cerrar"
            fontW="bold"
            iconB={<Close />}
            propsXS={{ boxShadow: "none !important" }}
            onClick={cerrarModal}
          />
        </Box>
      </DialogTitle>

      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "10px",
          paddingTop: "16px",
        }}
      >
        <Box display="flex" flexDirection="row" columnGap="20px">
          <Box display="flex" flexDirection="column" flexBasis="40%">
            <Typography fontWeight="bold" fontSize="17px" color="primary.main">
              Título
            </Typography>
            <IconTextField
              fullWidth
              multiline
              label=""
              type="text"
              placeholder="Ingrese un título"
              value={stateTitle}
              onChange={({ target }) => {
                setStateTitle(target.value);
              }}
              colorIcon="primary.main"
              colorHover="btnHoverInForm.main"
              colorTxt="black"
              colorLabel="primary.main"
              iconEnd={
                <Icon>
                  <MdOutlineTitle />
                </Icon>
              }
            />
          </Box>
          <Box display="flex" flexDirection="column" flexBasis="60%">
            <Typography fontWeight="bold" fontSize="17px" color="primary.main">
              Descripción
            </Typography>
            <IconTextField
              fullWidth
              multiline
              label=""
              type="text"
              placeholder="Ingrese una descripción"
              value={stateDescription}
              onChange={({ target }) => {
                setStateDescription(target.value);
              }}
              colorIcon="primary.main"
              colorHover="btnHoverInForm.main"
              colorTxt="black"
              colorLabel="primary.main"
              iconEnd={
                <Icon>
                  <MdSubtitles />
                </Icon>
              }
            />
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          paddingTop="20px"
          alignItems="center"
        >
          <Typography fontWeight="bold" fontSize="17px" color="primary.main">
            Fotografías
          </Typography>
          <div>
            <input
              accept="image/*"
              type="file"
              multiple
              ref={fileInputRef}
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />

            <IconButton
              color="primary"
              onClick={cleanArrImages}
              sx={{
                ":hover": {
                  color: "black",
                },
              }}
            >
              <DeleteOutline />
            </IconButton>

            <IconButton
              color="primary"
              onClick={() => fileInputRef.current.click()}
              sx={{
                ":hover": {
                  color: "black",
                },
              }}
            >
              <UploadOutlined />
            </IconButton>
          </div>
        </Box>
        <Grid container spacing={2}>
          {selectedImages.length > 0 &&
            selectedImages.map((image, index) => (
              <Grid item xs={6} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                  }}
                >
                  <IconButton
                    onClick={() => {
                      handleImageDelete(index);
                    }}
                  >
                    <CloseOutlined
                      style={{ fontSize: "25px", color: "#602a90" }}
                    />
                  </IconButton>

                  <CardMedia
                    component="img"
                    image={image}
                    alt={`Uploaded ${index}`}
                    sx={{
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </Grid>
            ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};
