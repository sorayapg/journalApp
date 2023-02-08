import { useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { JourmalLayout } from "../layout/JourmalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { startNewNote } from "../../store/journal";


export const JournalPage = () => {

    const dispatch = useDispatch();

    const onClickNewNote = () => {
        dispatch( startNewNote() );
    }

    return (
        <JourmalLayout>
           { /* <Typography>Nostrud nostrud dolor cupidatat ullamco laborum quis officia officia mollit officia. Incididunt et ullamco cupidatat consectetur Lorem do mollit pariatur do nisi veniam adipisicing ad pariatur. Anim sit laboris aliqua et. Et mollit labore exercitation laborum est eu ut incididunt ut cillum. Enim non eiusmod quis duis magna. In pariatur sit labore do irure excepteur occaecat ea eiusmod excepteur consectetur incididunt irure Lorem.</Typography> */}
            
            <NothingSelectedView />
            {/* <NoteView /> */ }

            <IconButton
                onClick={ onClickNewNote }
                size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            
            >
               <AddOutlined  sx={{ fontSize: 30 }}/>

            </IconButton>
        </JourmalLayout>
       
        
    )
}
