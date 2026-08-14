import {Navbar, NavbarContent, NavbarItem, Link, } from "@nextui-org/react";

export default function SubMenu() {
  return (
    <Navbar isBordered>
      <NavbarContent className="sm:flex gap-4">
        <NavbarItem>
          <Link color="foreground" href="/product">
            Shop points
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" href="#">
            Buy Again
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Read Manga
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}