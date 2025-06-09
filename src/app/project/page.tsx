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

    let imgs, title, desc, subtitle, id, student, age, video,course;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/project/${search}`);
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
        subtitle = allTemp1.subtitle;
        student = allTemp1.student;
        title = allTemp1.title;
        desc = allTemp1.description;
        age = allTemp1.age;
        video = allTemp1.video;
        course = allTemp1.course;
    }

    const stats = [
        { value: student || 'N/A', label: 'Student' },
        { value: age || 'N/A', label: 'Age' },
        { value: course || 'N/A', label: 'Course' },
    ];

    return (
        <main className="block overflow-hidden pb-8 dark:bg-gray-900 dark:text-white">
            <section id="about" className="py-20 bg-white dark:bg-gray-900 dark:text-white">
                <div className="container mx-auto px-4 dark:bg-gray-900 dark:text-white">
                    <SectionHeading title={title} color="blue" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center dark:bg-gray-900 dark:text-white">
                        <div className="order-2 lg:order-1 dark:bg-gray-900 dark:text-white">
                            <h1 style={{fontSize:'2em', fontWeight:'bolder'}}>{student}</h1>
                            <p
                                className="text-gray-700 mb-6 dark:bg-gray-900 dark:text-white"
                                dangerouslySetInnerHTML={{ __html: desc || '' }}
                            />

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 text-center dark:bg-gray-900 dark:text-white">
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
                                                index === 2 && 'bg-coducators-red/15 text-coducators-red'
                                            )}
                                        >
                                            {stat.value}
                                        </div>
                                        <p className="mt-3 text-lg font-medium text-gray-700 dark:bg-gray-900 dark:text-white">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <div className="rounded-3xl overflow-hidden shadow-xl relative z-[1]">
                                <video src={video} controls></video>
                               
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-coducators-green/55 rounded-full z-0"></div>
                            <div className="absolute -top-8 -left-8 w-48 h-48 bg-coducators-blue/55 rounded-full z-0"></div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center mt-6 container mx-auto px-4">
                 <img
                                    src={imgs?.[0]}
                                    alt="Project visual"
                                    className="w-full h-auto object-cover"
                                />
            </div>
        </main>
    );
};

const AboutUs: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <Suspense fallback={<div className="text-center mt-20">Loading...</div>}>
                <AboutUsContent />
            </Suspense>
            <Footer />
        </div>
    );
};

export default AboutUs;
