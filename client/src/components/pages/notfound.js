import React from "react";

export default function notfound() {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Gamecity only gives access for registered members!</h1>
      <h3 style={{textAlign:"center"}}> <a href="/addUser">REGISTER</a></h3>
      <img
        style={{marginLeft:"auto", marginRight:"auto", display:"block"}}
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        width="75%"
        alt="page not found"
      ></img>
    </div>
  );
}
