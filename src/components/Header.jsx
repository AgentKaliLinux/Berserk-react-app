import React from 'react' 
import {HashLink} from "react-router-hash-link"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <>
      <nav>
        <h1>Berserk</h1>
        <main>
          <HashLink to={'/#'}>Home</HashLink>
          <HashLink to={'/#about'}>About</HashLink>
          <HashLink to={'/#manga'}>Manga</HashLink>
          <Link to={'/nostalgia'}>Nostalgia</Link>
        </main>
      </nav>
    </>
  )
}

export default Header