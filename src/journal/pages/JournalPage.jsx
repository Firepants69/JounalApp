import { AddOutlined, Note } from "@mui/icons-material"
import { JournalLayout } from "../../auth/layout/JournalLayout"
import { NothingSelectedView,NoteView } from "../views"
import { IconButton } from "@mui/material"
export const JournalPage = () => {
  return (
    <JournalLayout>

      {/**NothinSelected */}
      {/**NoteView */}
      {/* <NoteView/> */}
      <NothingSelectedView/>
      <IconButton
        size="large"
        sx={{
          color:'white',
          backgroundColor:'error.main',
          ':hover':{backgroundColor:'error.main',opacity: 0.9},
          position:'fixed',
          right:50,
          bottom:50
        }}
      >
        <AddOutlined sx={{fontSize:30}}/>
      </IconButton>

    </JournalLayout>
    
  )
}

