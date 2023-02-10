import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        /*active: {
            id: ABC123,
            title: '',
            body: '',
            date: 1234567,
            imageUrls: [], // https://foto1.jpg, https://foto2.jpg, https://foto3.jpg, 
        }*/
    },
    reducers: {

        savingNewNote: (state ) => { //cambia el estado 
            state.isSaving = true;
        },
        // Para crear una nota
        addNewEmptyNote: (state, action ) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        // Para activar una nota
        setActiveNote: (state, action ) => {
            state.active = action.payload;
        },
        setNotes: (state, action ) => {
            state.notes = action.payload;
        },
        setSaving: (state ) => {
            state.isSaving = true
            // TODO: mensaje de error,...
        },
        updateNote: (state, action ) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => {

                if ( note.id === action.payload.id ) {
                    return action.payload;
                }

                return note;
            });

            // Todo: Mostrar el mensaje de actualización
        },
        deleteNoteById: (state, action ) => {

        },
    }
});
// Action creators are generated for each case reducer function
export const {
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
} = journalSlice.actions;