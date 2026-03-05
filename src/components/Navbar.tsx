import { LinksDesktop } from "./LinksDesktop"
import { LinksMobile } from "./LinksMobile"


export const Navbar = () => {
  return (
    <nav className="bg-black py-5">
      <div className="align-element">
        <LinksMobile/>
        <LinksDesktop/>
      </div>
    </nav>
  )
}
