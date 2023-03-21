import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const drawerWidth = 240;

type SideBarItemsType = {
  nom: string;
  subElements: { titre: string; lien: string }[];
}[];

const sideBarSections: SideBarItemsType = [
  {
    nom: "Client",
    subElements: [
      { titre: "Nouvelle annonce", lien: "/annonces/ajouter" },
      { titre: "Mes annonces", lien: "/mes-annonces" },
      { titre: "Mes propositions reçues", lien: "/" },
    ],
  },

  {
    nom: "Prestataire",
    subElements: [
      { titre: "Nouveau service", lien: "/" },
      { titre: "Mes services", lien: "/" },
      { titre: "Mes demandes reçues", lien: "/" },
    ],
  },
];
type SideBarProps = {
  routes: JSX.Element;
};
export default function SideBar({ routes }: SideBarProps) {
  const [sideBarElementsStates, setSideBarElementsStates] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    sideBarSections.map((section) =>
      setSideBarElementsStates((elements) => ({
        ...elements,
        [section.nom]: false,
      }))
    );
  }, []);

  return (
    <Box sx={{ display: "flex", zIndex: 9, position: "relative" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          {sideBarSections.map((section, index) => (
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              key={index}
            >
              <ListItemButton
                onClick={() => {
                  setSideBarElementsStates((elements) => ({
                    ...elements,
                    [section.nom]: !sideBarElementsStates[section.nom],
                  }));
                }}
              >
                <ListItemText primary={section.nom} />
                {sideBarElementsStates[section.nom] ? (
                  <ExpandLess />
                ) : (
                  <ExpandMore />
                )}
              </ListItemButton>
              <Collapse
                in={sideBarElementsStates[section.nom]}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {section.subElements.map((element, index) => (
                    <Link to={element.lien} key={index}>
                      <ListItemButton sx={{ pl: 4 }}>
                        {" "}
                        <ListItemText primary={element.titre} />
                      </ListItemButton>
                    </Link>
                  ))}
                </List>
              </Collapse>
            </List>
          ))}
        </Box>
      </Drawer>
      <Box component="main" mt="64px" sx={{ flexGrow: 1, p: 3 }}>
        {routes}
      </Box>
    </Box>
  );
}
