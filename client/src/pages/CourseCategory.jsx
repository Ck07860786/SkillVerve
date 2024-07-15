import Header from '@/components/ui/shared/layout/Header';
import { BASE_URL } from '@/helper/Url';
import axios from 'axios';
import { Badge } from '@/components/ui/badge';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CourseCategory() {
  const [category, setCategory] = useState([]);
  const [course, setCourse] = useState([]);
  const params = useParams();

  const getCourseCategory = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/v1/skill/skill-category/${params.slug}`);
      if (data.success) {
        setCourse(data.course);
        setCategory(data.category);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error fetching category:', error.message);
    }
  };

  useEffect(() => {
    if (params?.slug) getCourseCategory();
  }, [params?.slug]);

  return (
    <>
      <Header />
      <div className='mt-10'>
        <h2>{category.name}</h2>
        <h2>{course.length} Result found</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {course.map((c) => (
            <Link to={`/skills/${c.slug}`} key={c._id} className="block group relative border border-gray-300 rounded-md">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                <img
                  loading='lazy'
                  src={c.image.url}
                  alt={c.name}
                  className="h-full w-full rounded-md object-cover object-center"
                />
              </div>
              <div className="p-4">
                <div className="mt-4 flex justify-between text-left">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {c.name}
                    </h3>
                    {category && <p className="mt-1 text-sm text-gray-500"><Badge variant="outline">{category.name}</Badge></p>}
                    <p className="mt-1 text-sm text-gray-500 font-semibold">
                      <span className="text-sm text-black font-semibold">Starting from:</span> {new Date(c.availability).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                  <p className="font-extrabold text-right text-gray-900">{c.price}/-</p>
                </div>
                <p className="text-sm text-left mt-2 font-medium text-gray-900">{c.description.substring(0, 60)}....</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default CourseCategory;
