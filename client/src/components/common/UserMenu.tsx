import * as React from "react";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import menuConfigs from "../../configs/menu.configs";
import { setUser } from "../../redux/features/userSlice";

import styles from "../../styles/Username.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";

const UserMenu = () => {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = useState(null);

  const toggleMenu = (e: any) => setAnchorEl(e.currentTarget);

  console.log("userprofile", user.profile);
  console.log("userdisplayname", user.displayName);

  return (
    <>
      {user && (
        <>
          <div>
            <label htmlFor="profile">
              <img
                src={user.profile}
                alt="avatar"
                className={styles.profile_img}
                style={{ width: "50px", margin: "10px" }}
              />
            </label>
          </div>
          <Typography
            variant="h6"
            sx={{ cursor: "pointer", userSelect: "none" }}
            onClick={toggleMenu}
          >
            {user.displayName}
          </Typography>
          <Menu
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            PaperProps={{ sx: { padding: 0 } }}
          >
            {menuConfigs.user.map((item, index) => (
              <ListItemButton
                component={Link}
                to={item.path}
                key={index}
                onClick={() => setAnchorEl(null)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography textTransform="uppercase">
                      {item.display}
                    </Typography>
                  }
                />
              </ListItemButton>
            ))}
            <ListItemButton
              sx={{ borderRadius: "10px" }}
              onClick={() => dispatch(setUser(null))}
            >
              <ListItemIcon>
                <LogoutOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography textTransform="uppercase">sign out</Typography>
                }
              />
            </ListItemButton>
          </Menu>
        </>
      )}
    </>
  );
};

export default UserMenu;
