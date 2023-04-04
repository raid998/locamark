import { Button, Link } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import AdbIcon from "@mui/icons-material/Adb";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { NavBarItemType, settingsType } from "../../types";
import { useAppDispatch, useAppSelector } from "../../store";
import { logout } from "../../features/userSlice";
import { clearAnnonces } from "../../features/annonceSlice";

const pages: NavBarItemType = [
  { titre: "Demandes de service", lien: "/annonces" },
];

const NavBar = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const loggedInSettings: settingsType = [
    { titre: "Profil", action: () => {
      navigate("/mon-profil", {replace: true})
    } },
    {
      titre: "Déconnexion",
      action: () => {
        dispatch(logout());
        dispatch(clearAnnonces());
      },
    },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 10,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOCAMARK
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {user &&
                pages.map((page, i) => (
                  <MenuItem key={i}>
                    <Link
                      component={RouterLink}
                      to={page.lien}
                      sx={{
                        textDecoration: "none",
                        color: "#333",
                      }}
                    >
                      <Typography textAlign="center">{page.titre}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              {!user && (
                <>
                  <MenuItem>
                    <Link
                      component={RouterLink}
                      to="/connexion"
                      sx={{ textDecoration: "none", color: "#333" }}
                    >
                      <Typography textAlign="center">Connexion</Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      component={RouterLink}
                      to="/inscription"
                      sx={{ textDecoration: "none", color: "#333" }}
                    >
                      <Typography textAlign="center">Inscription</Typography>
                    </Link>
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOCAMARK
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: !user ? "flex-end" : "flex-start",
            }}
          >
            {user &&
              pages.map((page, i) => (
                <Button
                  key={i}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <Link
                    component={RouterLink}
                    to={page.lien}
                    color={"#333"}
                    sx={{
                      textDecoration: "none",
                      backgroundColor: "primary.main",
                    }}
                  >
                    <Typography textAlign="center">{page.titre}</Typography>
                  </Link>
                </Button>
              ))}
            {!user && (
              <>
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                  }}
                >
                  <Link
                    component={RouterLink}
                    to="/connexion"
                    sx={{ textDecoration: "none", color: "#333" }}
                  >
                    <Typography textAlign="center">Connexion</Typography>
                  </Link>
                </Button>
                <Button
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                  }}
                >
                  <Link
                    component={RouterLink}
                    to="/inscription"
                    sx={{ textDecoration: "none", color: "#333" }}
                  >
                    <Typography textAlign="center">Inscription</Typography>
                  </Link>
                </Button>
              </>
            )}
          </Box>

          {user && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {loggedInSettings.map((setting, i) => (
                  <MenuItem key={i} onClick={setting.action}>
                    <Typography textAlign="center">{setting.titre}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
