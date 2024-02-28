'use client';
import React from 'react';
import Container from '@/app/components/Container';
import { TbBeach, TbGardenCart } from 'react-icons/tb';
import { FaCity } from 'react-icons/fa';
import { GiModernCity, GiWindmill } from 'react-icons/gi';
import CategoryBox from '@/app/components/navbar/CategoryBox';

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is close to the beach.',
  },
  {
    label: 'Park',
    icon: TbGardenCart,
    description: 'This property is close to a park.',
  },
  {
    label: 'Suburb',
    icon: FaCity,
    description: 'This property is in a quiet suburb.',
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'This Property has windmills.',
  },
  {
    label: 'Windmill',
    icon: GiModernCity,
    description: 'This Property is modern',
  },
  // create more objects like this
];
const Categories = () => {
  return (
    <Container>
      <div className='flex flex-row items-center justify-between overflow-x-auto pt-4'>
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
