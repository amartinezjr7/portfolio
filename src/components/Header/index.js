import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Header() {
  const  categories = [
    { name: 'Projects', description: 'These are projects that I have worked on in a group or solo' },
    { name: 'Resume', description: 'My work history' }
  ];

  const handleClick = () => {
    console.log("click handled")
  }

  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
        <a href="/">
          <span role="img" aria-label="title"></span> Alejandro Martinez Jr.
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
              About me
            </a>
          </li>
          <li className={"mx-2"}>
            <a href="#contact-form" onClick={() => handleClick()}>
              Contact
            </a>
          </li>
          {
            categories.map((category) => (
              <li className="mx-1" key={category.name} >
                <span onClick={() => { handleClick(); }}>
                 {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}

export default Header;
