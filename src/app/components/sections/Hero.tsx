'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CalendarDays, Star } from 'lucide-react';
import { AddSVG } from '@/app/icons/AddSVG';
import { CircleSVG } from '@/app/icons/CircleSVG';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const MotionImage = motion(Image);

const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const HeroSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const res = await fetch('/api/banner');
        const json = await res.json();
        setData(json[0]); // assuming array response
      } catch (err) {
        console.error('Failed to fetch banner:', err);
      }
    };

    fetchBanner();
  }, []);

  if (!data) return null;

  // Dynamic title with styled words
  const renderStyledTitle = (title) => {
    const words = title.split(' ');
    return (
      <>
        {words.map((word, index) => {
          let className = '';
          if (index === 1) className = 'text-coducators-blue';
          else if (index === 3) className = 'text-coducators-green';
          else if (index === words.length - 1) className = 'text-coducators-red';

          return (
            <span key={index} className={cn(className && className)}>
              {word}{' '}
            </span>
          );
        })}
      </>
    );
  };

  return (
    <motion.section
      className={cn(
        'max-md:scroll-mt-24 flex container relative max-md:mt-2 max-lg:mt-20 lg:items-center w-full',
        'max-md:h-[calc(100vh-80px)] md:h-[calc(80vh-80px)] lg:h-[calc(50vh-80px)] xl:h-[calc(100vh-80px)]'
      )}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="flex flex-col items-start max-w-full max-md:w-full max-lg:w-3/4 lg:w-3/5 z-[2]"
        variants={itemVariants}
      >
        <motion.span
          className="max-md:px-3 max-md:py-2 max-md:text-base px-4 py-3 text-xl text-center text-blue-500 rounded-full bg-blue-500 bg-opacity-10"
          variants={itemVariants}
        >
          {data.sub}
        </motion.span>

        <motion.h1
          className="mt-3 text-7xl max-md:text-5xl max-md:leading-tight 2xl:leading-normal max-lg:leading-tight font-bold text-slate-950"
          variants={itemVariants}
        >
          {renderStyledTitle(data.title)}
        </motion.h1>

        <motion.p
          className="pt-2 max-lg:mt-3 max-lg:pr-16 max-md:pr-0 mt-3 max-w-full max-md:text-base max-lg:text-lg text-2xl leading-8 text-gray-700"
          variants={itemVariants}
        >
          {data.desc}
        </motion.p>

        <motion.div
          className="flex flex-col self-stretch mt-5 w-full text-center "
          variants={itemVariants}
        >
          <div className="flex flex-wrap gap-2 py-3 w-full text-xl max-md:text-lg leading-snug max-md:justify-center max-sm:justify-start">
            <a
              href={data.btn1?.link || '/book'}
              className="flex flex-col items-center font-bold text-white max-md:min-w-60 max-sm:min-w-52"
            >
              <button
                className={cn(
                  'flex gap-2 justify-center items-center px-4 py-4 lg:px-8 lg:py-5 rounded-xl max-md:px-3 max-md:py-3 max-md:w-full',
                  'bg-amber-400 border-2 border-amber-400 border-solid'
                )}
              >
                <CalendarDays className="w-5" />
                <span className="self-stretch my-auto">{data.btn1?.text || 'Free Trial'}</span>
              </button>
            </a>
            <a
              href={data.btn2?.link || '/courses'}
              className="flex flex-col items-center font-semibold text-blue-500 max-md:min-w-60 max-sm:min-w-52"
            >
              <button
                className={cn(
                  'flex gap-2 justify-center items-center px-4 py-4 lg:px-8 lg:py-5 max-md:w-full rounded-xl max-md:px-3 max-md:py-3',
                  'border-2 border-blue-500 border-solid bg-white'
                )}
              >
                <BookOpen className="w-5" />
                <span className="self-stretch my-auto">{data.btn2?.text || 'Our Courses'}</span>
              </button>
            </a>
          </div>

          <div className="max-lg:mt-4 text-gray-700 flex max-lg:flex-col-reverse max-lg:space-y-3 max-md:text-start lg:items-center self-start 2xl:pt-8 lg:pt-3 max-md:text-base text-lg leading-loose border-t border-black border-opacity-10">
            <div className="flex items-start lg:py-1.5 pr-5">
              {[...Array(5)].map((_, i) => (
                <Star
                  className="fill-yellow-500 stroke-none max-md:w-7"
                  size={30}
                  key={i}
                />
              ))}
            </div>
            <p className="">Join 500+ students registered</p>
          </div>
        </motion.div>
      </motion.div>

      {data.img?.[0] && (
        <MotionImage
          src={data.img[0]}
          alt="Banner"
          width={800}
          height={600}
          className={cn(
            'object-contain max-w-full max-md:w-full max-lg:w-[90%] lg:w-2/4 2xl:w-[65%] z-[1]',
            'absolute -right-32 md:-right-48 lg:-right-10 2xl:-right-1/4 bottom-0'
          )}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          priority
        />
      )}

      <CircleSVG className="absolute bottom-1/3 right-1/4 z-0 max-md:hidden" size={160} />
      <AddSVG className="absolute bottom-[20%] right-1/4 z-0 max-md:hidden" size={65} />
      <CircleSVG className="absolute top-10 max-lg:right-2 right-10 z-0 max-md:hidden" size={200} />
      <AddSVG className="absolute top-10 right-1/4 z-0 max-md:hidden" size={80} />
    </motion.section>
  );
};
