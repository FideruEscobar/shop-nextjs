import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function CategoryDropDown() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">All Categories</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="books">Books</DropdownItem>
        <DropdownItem key="mangas">Mangas</DropdownItem>
        <DropdownItem key="hobby_goods">Hobby Goods</DropdownItem>
        <DropdownItem key="stationery">Stationery</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}