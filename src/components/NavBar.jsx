import "../styles/navbar.css"
import { createSignal } from "solid-js";

function NavBar() {
  const [nav_menu_display, setNavMenuDisplay] = createSignal("none");  

  const open_and_close_nav_menu = () => {
    if (nav_menu_display() === "none") {
      setNavMenuDisplay((prev) => "block")
    } else if (nav_menu_display() === "block") {
      setNavMenuDisplay((prev) => "none")
    }
  };

  let dropdown_button_element;
  document.body.addEventListener("click", function (event) {
    if (dropdown_button_element.contains(event.target) === false) {
      setNavMenuDisplay((prev) => "none")
    }
  });

  return(
    <>
      <div class="navbar bg-base-100 shadow-sm bg-cornflower-blue fixed">
        <div class="navbar-left">
          <div class="dropdown inline-block">
            <button
              id="dropdown-button"
              ref={dropdown_button_element}
              class="dropdown-btn px-[14px] py-[8px] btn rounded-full hover:bg-gray-200 bg-transparent border-transparent shadow-none hover:shadow-sm shadow-white"
              aria-label="Dropdown Button"
              onClick={open_and_close_nav_menu}
            >
              <i class="dropdown-btn fa fa-bars" />
            </button>
            <div
              id="dropdown-menu"
              class={"dropdown-content bg-cornflower-blue rounded-md shadow-sm"}
              style={{display: nav_menu_display()}}
            >
              <a class="!text-gray-900" href="/PersonalWebsite">Home</a>
              <a class="!text-gray-900" href="/PersonalWebsite/projects">
                Projects
              </a>
            </div>
          </div>
          <a
            class="!text-black font-bold text-xl btn rounded-md hover:bg-gray-200 bg-transparent border-transparent shadow-none hover:shadow-sm shadow-white p-2"
            href="/PersonalWebsite"
          >
            Salmaan Saeed
          </a>
        </div>
        <div class="navbar-center" />
        <div class="navbar-right" />
      </div>
    </>
  );
}

export default NavBar;
