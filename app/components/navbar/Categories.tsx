import React from "react";
import Container from "@/app/components/Container";
import { TbBeach } from "react-icons/tb";
import { GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "@/app/components/navbar/CategoryBox";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This Property is close to the beach",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This Property is close to Windmills",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This Property is modern",
  },
];
function Categories() {
  return (
    <Container>
      <div
        className={
          "pt-4 flex flex-row items-center justify-between overflow-x-auto"
        }
      >
        {categories.map((category) => (
          <CategoryBox
            key={category.label}
            label={category.label}
            icon={category.icon}
          />
        ))}
      </div>
    </Container>
  );
}

export default Categories;
