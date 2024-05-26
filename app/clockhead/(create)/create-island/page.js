'use client';

import React, { useState } from 'react';
import IslandForm from '@/components/Forms/IslandForm';
import prisma from '@/utils/db';
import Link from 'next/link';
import { createIsland } from '@/utils/action';

const newIsland = () => {
  const [formData, setFormData] = useState({
    name: '',
  });

  const prismaHandler = async (e) => {
    e.preventDefault();
    const value = e.target.name.value;
    console.log(e.target.name.value);
    await createIsland(value);
  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <IslandForm
        prismaHandler={prismaHandler}
        data={formData}
        handleInputChange={handleInputChange}
      ></IslandForm>
    </div>
  );
};

export default newIsland;
