import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon,  ListItemText,  Toolbar } from "@mui/material";
import { useSelector } from "react-redux";
import { SideBarItem } from "./";


export const SideBar = ( { drawerWidth = 240 } ) => {

    
    const { displayName } = useSelector( state => state.auth );
    const { notes } = useSelector( state => state.journal );

    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent' // temporary
                open
                sx={{
                    display: { xs: 'block'},
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar variant='h6' component='div'>
                    { displayName }
                </Toolbar>
                <Divider />

                <List>
                    {
                        notes.map( note => (
                            <SideBarItem key={ note.id } {  ...note } />
                        ))
                    }
                </List>
                
            </Drawer>
        </Box>
    )
}
