"use client"
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import data from "@/data/music_library.json"

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}

function Feature() {
    const courseData = data.courses.filter((item: Course) => item.isFeatured);

    return (
        <div className="py-12 w-[94%] mx-auto bg-gray-900">
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Featured Courses</h2>
                <p className="mt-5 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">LEARN WITH THE BEST</p>
            </div>
            <div className="mt-12 mx-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {courseData.map((item: Course) => (
                        <div key={item.id} className="flex justify-center cursor-pointer">
                            <BackgroundGradient className="flex flex-col rounded-[22px] h-full max-w-sm p-2 bg-white dark:bg-zinc-900 overflow-hidden">
                                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{item.title}</p>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{item.description}</p>
                                    <Link href={`/courses/${item.slug}`} className="mt-3">
                                        Learn More
                                    </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link href="/courses" className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">View All Courses</Link>
            </div>
        </div>
    )
}

export default Feature
