interface NavBarProps{
  etat: string;
  action: () => void;
}

function NavBar({etat, action}: NavBarProps) {
  return(
    <>
    <button type="button" onClick={action}>{etat}</button>
    </>
  )
}

export default NavBar;
