import { useRef } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import { CloseOutlined, UploadOutlined } from "@mui/icons-material";

export const ViewRecursoFoto = ({ stateDialog, setStateDialog }) => {
  //
  const fileInputRef = useRef();

  //
  const cerrarModal = () => {
    setStateDialog(false);
  };

  const onFileInputChange = ({ target }) => {
    console.log(target);
    if (target.files === 0) return;
    console.log(target.files);
    console.log("subiendo archivos");

    // dispatch(startUploadingFiles(target.files));
  };

  return (
    <Dialog
      maxWidth="xl"
      open={stateDialog}
      onClose={cerrarModal}
      sx={{
        "& .MuiPaper-root": {
          minHeight: "85%",
          minWidth: "80%",
          backgroundColor: "rgba(255,255,255,0.9)",
          padding: "10px",
        },
      }}
    >
      {/* <DialogTitle
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
        aaaaaaaaaa
      </Typography>

      <IconButton onClick={cerrarModal}>
        <CloseOutlined style={{ fontSize: "25px", color: "#602a90" }} />
      </IconButton>
    </DialogTitle> */}
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "row",
          columnGap: "35px",
          padding: "15px",
          // justifyContent: "space-between",
          // width: "100%",
          height: "100vh",
          // paddingBottom: "20px",
        }}
      >
        <img
          style={
            {
              // maxWidth: "90%",
              // maxHeight: "90%",
              // objectPosition: "center",
              // objectFit: "scale-down",
            }
          }
          src="/assets/img/fondos/fondohistory.jpg"
          alt="image"
        />
        <Box display="flex" flexDirection="column" flexBasis="25%">
          <Box alignSelf="end">
            <IconButton onClick={cerrarModal}>
              <CloseOutlined style={{ fontSize: "25px", color: "#602a90" }} />
            </IconButton>
            <IconButton
              color="primary"
              // disabled={isSaving}
              onClick={() => fileInputRef.current.click()}
            >
              <UploadOutlined />
            </IconButton>
          </Box>
          <Typography fontWeight="bold" fontSize="18px" color="primary.main">
            Fecha
          </Typography>
          <Typography fontWeight="bold" fontSize="18px" color="primary.main">
            Título
          </Typography>
          <Typography fontWeight="bold" fontSize="18px" color="primary.main">
            Descripción
          </Typography>

          <input
            type="file"
            multiple
            ref={fileInputRef}
            onChange={onFileInputChange}
            style={{ display: "none" }}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};
