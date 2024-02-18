
import { ActiveLink, Props } from "../activelink/ActiveLink";

interface xd {
    links: Props[]
}

export const Navbar = ({links}:xd) => {

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">

        <span className="pr-3">Home</span>

        <div className="flex flex-1"></div>

        {
            links.map(({path,text}) => (
                <ActiveLink key={path} path={path} text={text}/>
            ))
        }

    </nav>
  )
}
