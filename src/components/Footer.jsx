import React from 'react'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import NotesIcon from '@mui/icons-material/Notes';

const Footer = ({onTap}) => {
  return (
    <footer>
      <div onClick={onTap} className='footer-items'>
        <NotesIcon/>
        <p>notes</p>
        </div>
      <div onClick={onTap} className='footer-items'>
        <FormatListBulletedIcon/>
        <p>to-dos</p>
        </div>
    </footer>
  )
}

export default Footer