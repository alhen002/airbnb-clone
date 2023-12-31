import React from "react";
import Container from "@/app/components/Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "@/app/components/navbar/CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";

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
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This Property is in the countryside",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This Property has a pool",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This Property is on an island",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This Property is close to a lake",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This Property has skiing activities",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This Property is in a castle",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This Property has camping activities",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This Property has an arctic surrounding",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This Property is in a cave",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This Property is in a desert",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This Property is in the barn",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This Property is luxury",
  },
];
function Categories() {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathName = usePathname();
  const isMain = pathName === "/";

  if (!isMain) {
    return null;
  }

  return (
    <Container>
      <div
        className={
          "pt-4 flex flex-row items-center justify-between overflow-x-auto"
        }
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}

export default Categories;
