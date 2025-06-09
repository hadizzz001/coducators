'use client';

import React, { useEffect, useState, Suspense } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { cn } from '@/lib/utils';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';
import { useSearchParams } from 'next/navigation';

const AboutUsContent: React.FC = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('id');
  const [allTemp1, setAllTemps1] = useState<any>(null);

  let imgs, name, desc, cat, position;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/team/${search}`);
        const data = await response.json();
        setAllTemps1(data[0]);
      } catch (error) {
        console.error('Error fetching the description:', error);
      }
    };

    if (search) {
      fetchData();
    }
  }, [search]);

  if (allTemp1) {
    imgs = allTemp1.img[0];
    cat = allTemp1.category;
    name = allTemp1.name;
    desc = allTemp1.description;
    position = allTemp1.position;
  }

  return (
    <>
      <SectionHeading
        title={`More about ${name}`}
        color="red"
        className="mt-10"
      />

      <main className="flex-grow flex items-center justify-center mb-20 dark:bg-gray-900 dark:text-white">
        <article className="flex flex-col items-center text-center max-w-md w-full dark:bg-gray-900 dark:text-white">
          {/* Profile Image with Red Border */}
          <div className="relative w-56 h-56 rounded-full p-2 bg-coducators-red">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src={imgs}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-2xl font-bold text-coducators-red uppercase">{name}</h3>
            <p className="mt-1 text-base text-gray-600 dark:bg-gray-900 dark:text-white">{position}</p>
            {desc && (
              <div
                className="mt-4 text-base text-gray-600 dark:bg-gray-900 dark:text-white"
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            )}
          </div>
        </article>
      </main>
    </>
  );
};

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white">
      <Navbar />
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <AboutUsContent />
      </Suspense>
      <Footer />
    </div>
  );
};

export default AboutUs;
