import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { NavBar, SideBar } from "../components";

const drawerWidth = 280;


export const JourmalLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>

            <NavBar drawerWidth={ drawerWidth } /> 

            <SideBar drawerWidth={ drawerWidth } />{/* SideBar drawerWidth */}

            <Box 
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
            >
                <Toolbar /> {/* ToolBar */}
                { children }

            </Box>

        </Box>
    )
}
