'use client';
import React from 'react';
import Container from '@/app/components/Container';
import { TbBeach, TbGardenCart, TbMountain, TbPool } from 'react-icons/tb';
import { FaCity, FaSkiing } from 'react-icons/fa';
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiModernCity,
  GiWindmill,
} from 'react-icons/gi';
import CategoryBox from '@/app/components/navbar/CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is close to the beach.',
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'This Property has windmills.',
  },
  {
    label: 'Park',
    icon: TbGardenCart,
    description: 'This property is close to a park.',
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'This property is in the countryside.',
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'This Property has a Pool.',
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'This Property is on an island.',
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This property is close t a lake!',
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'This property has skiing activities.',
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'This property is a castle',
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'This property has camping activities',
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    description: 'This property is in an arctic enviroment',
  },
  {
    label: 'Cave',
    icon: GiCaveEntrance,
    description: 'This property is in a cave.',
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'This property is in the desert.',
  },
  {
    label: 'Barns',
    icon: GiBarn,
    description: 'This property is in the barn.',
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    description: 'This property is luxurious',
  },
];
const Categories = () => {
  const searchParams = useSearchParams();
  const category = searchParams?.get('category');
  const pathName = usePathname();
  const isMainPage = pathName === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className='flex flex-row items-center justify-between overflow-x-auto pt-4'>
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category == item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
