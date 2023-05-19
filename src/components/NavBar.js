// import React from "react";

// function NavBar() {
//   const links = ["home", "about", "projects"];

//   const mapLinks = links.map(link => { 
//     return <a>{link}</a>
//   })

//   return <nav>{mapLinks}</nav>;
// }

// export default NavBar;






import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const mapLinks = links.map(link => { 
    return <a key={link} href={`#${link}`}>{link}</a>
  })

  return <nav>{mapLinks}</nav>;
}

export default NavBar;






// import React from "react";

// function NavBar() {
//   const links = ["home", "about", "projects"];

//   return <nav>{/* display an <a> tag for each link here */}</nav>;
// }

// export default NavBar;
