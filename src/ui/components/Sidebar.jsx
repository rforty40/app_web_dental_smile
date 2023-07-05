import { useEffect } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import "react-pro-sidebar/dist/css/styles.css";

/*iconos MUI */
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import  from "@mui/icons-material/CalendarTodayOutlined";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { SideBarItem } from "./SideBarItem";

import { useUiStore } from "../../hooks";
import { SubMenuItem } from "./SubMenuItem";
import {
  AdminPanelSettingsOutlined,
  CalendarTodayOutlined,
  Groups,
  MenuOutlined,
  PersonOutlined,
} from "@mui/icons-material";

//
//
/**el sidebar se renderiza con cada click */
// title={"Valeria Ramirez"}
// to={"/pacientes/37/historial"}
// icon={<HomeOutlinedIcon />}

const menuListSidebar = [
  {
    title: "Miguel ",
    // to: "/pacientes/32/historial",
    to: "32",
    arrCons: [{ id: "13", text: "20/06/2023" }],
  },
  {
    title: "Ana",
    to: "30",
    arrCons: [
      { id: "24", text: "tttttttttttttttttttttt" },
      { id: "25", text: "tttttttttttttttttttttt" },
    ],
  },
  {
    title: "Ronny Bryan Forty Palma",
    // to: "/pacientes/25/historial",
    to: "25",
    arrCons: [
      { id: "11", text: "tttttttttttttttttttttt" },
      { id: "21", text: "tttttttttttttttttttttt" },
    ],
  },
];

export const Sidebar = () => {
  //

  const { changeSidebar, isSidebarOpen, listaPacienteSidebar } = useUiStore();

  //retorno
  // Box --> ProSidebar --> Menu --> MenuItem

  const onClickMenu = () => {
    changeSidebar(!isSidebarOpen);
  };
  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("open");
  }, [isSidebarOpen]);
  //
  return (
    <Box
      sx={{
        height: "100%",
        position: "fixed",
        boxShadow: "3px 5px 5px rgba(0, 0, 0, 0.5)",
        "& .pro-sidebar-inner": {
          backgroundImage: `linear-gradient(#f5f7fa,#7f54a6) !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },

        "& .pro-inner-item": {
          padding: "5px 20px 5px 20px !important",
          backgroundPosition: "center",
        },
        "& .pro-inner-item:hover": {
          color: `${
            !isSidebarOpen ? "white !important" : "#9c27b080 !important"
          }`,
        },
        "& .pro-menu-item.active": {
          backgroundColor: `${
            !isSidebarOpen ? "primary.main" : "transparent !important"
          }`,
          color: `${
            !isSidebarOpen ? "white !important" : "#9c27b0cc !important"
          }`,
          borderRadius: "20px",
        },

        "& .pro-sub-menu > .pro-inner-item > .pro-item-content ": {
          // ":focus": {
          color: "#3a1956",
          fontWeight: "bold",
          paddingRight: "15px",

          // fontSize: "15px",

          // },
        },
        "& .pro-inner-item:focus >  .pro-item-content ": {
          color: "white",
        },
        "& .pro-inner-item:focus >  .pro-icon-wrapper > .pro-icon > .MuiButtonBase-root ":
          {
            color: "white",
          },
        // "& .pro-inner-list-item > div > ul > ": {
        //   backgroundColor: "yellow",
        // },

        // "& .pro-sub-menu.open > .pro-inner-item > .pro-item-content ": {
        //   // ":focus": {
        //   color: "white",

        //   // },
        // },
      }}
    >
      {/*true(esta contraido) false(esta extendido el sidebar)*/}
      <ProSidebar collapsed={isSidebarOpen}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}

          <MenuItem
            onClick={onClickMenu}
            // si esta contraida se muestra el icono de menu
            icon={isSidebarOpen ? <MenuOutlined /> : undefined}
            style={{
              className: "btn-menu",
              margin: "10px 0 20px 0",
              color: "black",
            }}
          >
            {/* menu extendido */}
            {!isSidebarOpen && (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                ml="15px"
              >
                <Typography
                  variant="h3"
                  color="primary.main"
                  fontFamily="Brush Script MT"
                  fontWeight="semibold"
                  fontSize="35px"
                  className="text-shadow"
                >
                  Dental Smile
                </Typography>

                <IconButton
                  className="btn-menu"
                  sx={{ marginLeft: "25px" }}
                  onClick={onClickMenu}
                >
                  <MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* menu extendido */}
          {!isSidebarOpen && (
            <Box mb="40px">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mb="20px"
              >
                <img
                  type="img/svg"
                  alt="logo_molar"
                  width="90px"
                  height="90px"
                  src={`/assets/icons/logo/newLogoMolar.svg`}
                  style={{ borderRadius: "20%" }}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  className="text-shadow"
                  variant="h6"
                  color="primary.main"
                  fontWeight="bold"
                  sx={{
                    m: "0 0 20px 0",
                    lineHeight: "25px",
                  }}
                >
                  Consultorio Odontológico
                  <span
                    style={{
                      fontFamily: "Brush Script MT",
                      fontSize: "30px",
                      fontWeight: "normal",
                    }}
                  >
                    "Dental Smile"
                  </span>
                </Typography>

                <Typography
                  className=""
                  variant="h5"
                  color="primary.main"
                  fontFamily="Brush Script MT"
                  fontWeight="semibold"
                >
                  Od. Xiomara Chávez
                </Typography>
              </Box>
            </Box>
          )}

          {/* los enlances */}
          <Box
            paddingLeft={!isSidebarOpen && "3%"}
            paddingRight={!isSidebarOpen && "3%"}
          >
            {/* {menuListSidebar.map((menu, index) => {
              return (
                <SideBarItem
                  key={index}
                  title={menu.title}
                  to={menu.to}
                  icon={menu.icon}
                />
              );
            })} */}
            <SideBarItem
              title={"Agenda"}
              to={"/agenda"}
              icon={<CalendarTodayOutlined />}
            />
            {/* <SubMenuItem
              title={"Pacientes"}
              to={"/pacientes"}
              icon={<PersonOutlined />}
            /> */}
            <SideBarItem
              title={"Pacientes"}
              to={"/pacientes"}
              icon={<Groups />}
            />
            {/* <SubMenu> */}
            {/* <SideBarItem
          title={"Agenda"}
          to={"/agenda"}
          icon={<CalendarTodayOutlined />}
        /> */}
            {!isSidebarOpen &&
              listaPacienteSidebar.map((menu, index) => {
                return (
                  <SubMenuItem
                    key={index}
                    title={menu.title}
                    to={menu.to}
                    arrCons={menu.arrCons}
                  />
                );
              })}

            <SideBarItem
              title={"Administración"}
              to={"/administracion"}
              icon={<AdminPanelSettingsOutlined />}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};
