'use client';

import React, { Suspense, useEffect, useState } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import { cn } from '@/lib/utils';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';
import { useSearchParams } from 'next/navigation';

const AboutUsContent: React.FC = () => {
    const searchParams = useSearchParams();
    const search = searchParams.get('id');
    const [allTemp1, setAllTemps1] = useState<any>(null);

    let imgs, title, desc, cat, id, sub, level;
    let parsedDuration: { number?: string; unit?: string } = {};
    let parsedAge: { from?: string; to?: string } = {};

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/course/${search}`);
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
        id = allTemp1._id;
        imgs = allTemp1.img;
        cat = allTemp1.category;
        sub = allTemp1.subcategory;
        title = allTemp1.title;
        desc = allTemp1.description;
        level = allTemp1.level;

        try {
            parsedDuration = JSON.parse(allTemp1.duration || '{}');
            parsedAge = JSON.parse(allTemp1.age || '{}');
        } catch (err) {
            console.error('Error parsing duration or age:', err);
        }
    }

    const stats = [
        { value: cat || 'N/A', label: 'Category' },
        { value: sub || 'N/A', label: 'Subcategory' },
        { value: level || 'N/A', label: 'Level' },
        {
            value: parsedDuration.number
                ? `${parsedDuration.number} ${parsedDuration.unit || ''}`
                : 'N/A',
            label: 'Duration',
        },
        {
            value: parsedAge.from
                ? `${parsedAge.from} - ${parsedAge.to} yrs`
                : 'N/A',
            label: 'Age Range',
        },
    ];

    return (
        <>
            <main className="block overflow-hidden pb-8">
                <section id="about" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <SectionHeading title={title} color="blue" />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <p
                                    className="text-gray-700 mb-6"
                                    dangerouslySetInnerHTML={{ __html: desc || '' }}
                                />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 text-center">
                                    {stats.map((stat, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col items-center w-full"
                                        >
                                            <div
                                                className={cn(
                                                    `w-36 h-36 text-xl font-bold rounded-full grid place-items-center bg-opacity-10`,
                                                    index === 0 && 'bg-coducators-blue/15 text-coducators-blue',
                                                    index === 1 && 'bg-coducators-green/15 text-coducators-green',
                                                    index === 2 && 'bg-coducators-red/15 text-coducators-red',
                                                    index === 3 && 'bg-coducators-blue/15 text-coducators-blue',
                                                    index === 4 && 'bg-coducators-green/15 text-coducators-green'
                                                )}
                                            >
                                                {stat.value}
                                            </div>
                                            <p className="mt-3 text-lg font-medium text-gray-700">
                                                {stat.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="order-1 lg:order-2 relative">
                                <div className="rounded-3xl overflow-hidden shadow-xl relative z-[1]">
                                    <img
                                        src={imgs?.[0]}
                                        alt="Course visual"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>

                                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-coducators-green/55 rounded-full z-0"></div>
                                <div className="absolute -top-8 -left-8 w-48 h-48 bg-coducators-blue/55 rounded-full z-0"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center mt-6">
                    <a
                        target='_blank'
                        href={`https://wa.me/96170128107?text=Hi, I'm interested on ${title}`}
                        className="inline-block py-3 px-8 bg-coducators-blue text-white rounded-lg font-semibold shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1"
                    >
                        Interested on it!
                    </a>
                </div>
            </main>
        </>
    );
};

const AboutUs = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <Suspense fallback={<div className="text-center py-20 text-xl">Loading...</div>}>
                <AboutUsContent />
            </Suspense>
            <Footer />
        </div>
    );
};

export default AboutUs;
