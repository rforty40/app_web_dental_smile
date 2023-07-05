import { Link, useNavigate } from "react-router-dom";
import { MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import { useUiStore } from "../../hooks";
import {
  CalendarTodayOutlined,
  Close,
  Groups,
  PersonOutlined,
} from "@mui/icons-material";
import { SideBarItem } from "./SideBarItem";
import { useState } from "react";
import { AiFillFolderOpen } from "react-icons/ai";
import { TbDental } from "react-icons/tb";
import { invertDateFormat } from "../../agenda/helpers/formatedDataCite";

export const SubMenuItem = ({ title, to, arrCons }) => {
  //
  const navigate = useNavigate();

  const { deletePacienteSidebar, deleteConsultaSidebar } = useUiStore();

  const onClickPaciente = () => {
    navigate("pacientes");
    setTimeout(() => {
      navigate("pacientes/" + to + "/historial");
    }, 10);
  };

  const [open, setOpen] = useState(false);

  const [classSelect, setclassSelect] = useState("not_selected_submenu");

  const { pageActive } = useUiStore();

  const onClickConsulta = (id) => {
    // const submenuPac = document.querySelector(".submenu_custom");
    // submenuPac.classList.add("seleccionado");
    navigate("pacientes");
    setTimeout(() => {
      navigate("pacientes/" + to + "/historial/" + id);
    }, 10);
  };

  const deletePaciente = () => {
    deletePacienteSidebar({ to });
  };

  const deleteConsulta = (id) => {
    console.log(to, id);
    deleteConsultaSidebar({ id_pac: to, id_con: id });
  };

  return (
    <>
      <IconButton
        sx={{ color: "#562682", position: "absolute" }}
        onClick={deletePaciente}
      >
        <Close
          sx={{
            fontSize: "15px",
            ":hover": {
              color: "white",
            },
          }}
        />
      </IconButton>

      <SubMenu
        title={title}
        style={{
          marginLeft: "15px",
        }}
        icon={
          <IconButton onClick={onClickPaciente} sx={{ color: "#3a1956" }}>
            <AiFillFolderOpen />
          </IconButton>
        }
      >
        {arrCons.map((cons) => {
          return (
            <div key={cons.id}>
              <IconButton
                key={cons.id}
                sx={{
                  color: "#562682",
                  position: "absolute",
                }}
                onClick={() => {
                  deleteConsulta(cons.id);
                  console.log("first");
                }}
              >
                <Close
                  sx={{
                    fontSize: "15px",
                    ":hover": {
                      color: "white",
                    },
                  }}
                />
              </IconButton>

              <MenuItem
                style={{
                  color: "#562682",
                  fontWeight: "bold",
                  marginLeft: "15px",
                }}
                key={cons.id}
                icon={
                  <IconButton sx={{ color: "#562682" }}>
                    <TbDental />
                  </IconButton>
                }
                onClick={() => {
                  onClickConsulta(cons.id);
                }}
              >
                {invertDateFormat(cons.text)}
              </MenuItem>
            </div>
          );
        })}
      </SubMenu>
    </>
  );
};
