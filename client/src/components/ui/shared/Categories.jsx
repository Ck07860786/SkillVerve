import useCategory from '@/hooks/useCategory';
import React, { useRef } from 'react';
import { Badge } from '../badge';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function Categories() {
    const categories = useCategory();
    const scrollContainerRef = useRef(null);

    const scrollDistance = () => {
        if (window.innerWidth >= 1024) {
            return 300; // Large screens
        } else if (window.innerWidth >= 768) {
            return 200; // Medium screens
        } else {
            return 100; // Small screens
        }
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -scrollDistance(),
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: scrollDistance(),
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <div className='mt-10'>
                <h1 className='text-xl font-semibold'>Find By Categories</h1>
                <div className='relative mt-5'>
                    <button
                        onClick={scrollLeft}
                        className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md'
                    >
                        <ChevronLeft/> 
                    </button>
                    <div
                        ref={scrollContainerRef}
                        className='flex space-x-4 overflow-x-auto pb-3 scroll-smooth scrollbar-hide'
                    >
                        {categories.map((c) => (
                            <Link to={`/category/${c.slug}`} key={c.id}>
                                <Badge variant="outline" className='py-5 px-4 bg-gray-100 text-lg inline-block whitespace-nowrap'>
                                    {c.name}
                                </Badge>
                            </Link>
                        ))}
                    </div>
                    <button
                        onClick={scrollRight}
                        className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md'
                    >
                        <ChevronRight/> {/* Right Arrow */}
                    </button>
                </div>
            </div>
        </>
    );
}

export default Categories;
