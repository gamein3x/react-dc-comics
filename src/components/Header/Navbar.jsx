export default function Navbar() {
    const navLogo = <img src="src\assets\img\dc-logo.png"></img>;

    return (
        <div>
            
        </div>
    );
}


{/* RAGIONAMENTO

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
        /// NAVLISTITEM
        </ul>
    </div>
  </div>
</nav>

////// NAVLISTITEM


        <li class="nav-item dropdown">
          /// TAG A TITOLO
          /// LISTA PER NAVBAR
        </li>
      

/////// TAG A TITOLO

<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>


////// LISTA DROPDOWN

<ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>



// PIANO

-Creo un modulo .js per contenere i dati della navbar (navData.js);
-Il modulo deve contenere un oggetto navData con chiavi itemTitle e itemList e valori stringhe;
-Mappo l'array e destrutturo per contenere le chiavi di navData;
-Creo la costante navLink per contenere il tag <a> con contenuto itemTitle;
-Creo la costante navDropList per contenere il dropdown menu tag <ul> con contenuto lista <li> presa dalla chiave itemList (jsx -> jx -> jsx? );
-Creo la costante navlistItem per unirli in un unico item;
-Creo una costante navbar per contenere la navbar con contenuto navlistItem;
-Creo costante contentbox per contenere navLogo e navbar;
-La funzione restituisce navbar;

-Crea modulo css per Navbar;
-Importa lo stile in className dove serve;


<navbox>
    <navlogo></navlogo>
    <navlistItem>
        navItem
        navDropdownList
    </navlistItem>
</navbox>

*/}