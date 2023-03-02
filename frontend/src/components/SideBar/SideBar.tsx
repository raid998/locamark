import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Routes from "../../routes/Routes";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { StarBorder } from "@mui/icons-material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

type SideBarItemsType = {
  nom: string;
  subElements: { titre: string; lien: string }[];
}[];

const sideBarSections: SideBarItemsType = [
  {
    nom: "Client",
    subElements: [
      { titre: "Nouvelle annonce", lien: "/" },
      { titre: "Mes annonces", lien: "/" },
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

export default function SideBar() {
  const sideBarElementsStates: Record<string, boolean> = {};
  sideBarSections.map((section) => {
    sideBarElementsStates[section.nom] = false;
  });

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
          <List>
            {sideBarSections.map((section, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>

                  <ListItemText primary={section.nom} />
                  {sideBarElementsStates[section.nom] ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}

                  {/* {section.subElements.map((subElement, index) => (
                    <Link to={subElement.lien} key={index}>
                      <ListItemText primary={subElement.titre} />
                    </Link>
                  ))} */}
                </ListItemButton>

                <Collapse
                  in={sideBarElementsStates[section.nom]}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      {section.subElements.map((subElement, index) => (
                        <Link to={subElement.lien} key={index}>
                          <ListItemText primary={subElement.titre} />
                        </Link>
                      ))}
                    </ListItemButton>
                  </List>
                </Collapse>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Routes />
      </Box>
    </Box>
  );
}
