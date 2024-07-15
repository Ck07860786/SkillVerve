import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '@/helper/Url'
import toast from 'react-hot-toast'
import { Link, useParams } from 'react-router-dom'
import { Badge } from '@/components/ui/badge'
import AdminMenu from '@/components/ui/shared/layout/AdminMenu'
import UpdateCourse from './UpdateCourse'

function AllCourses() {
    const [skills, setSkills] = useState([]);
    const [categories, setCategories] = useState([]);
    const params = useParams();

    const getAllCourses = async () => {
        try {
            const { data } = await axios.get(`${BASE_URL}/api/v1/skill/get-skills`);
            if (data?.success) {
                setSkills(data.skill);
                
            } else {
                toast.error('Something went wrong');
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        getAllCourses();
    }, []);

    const getAllCategories = async () => {
        try {
            const { data } = await axios.get(`${BASE_URL}/api/v1/category/get-categories`);
            if (data.success) {
                setCategories(data.category);
            } else {
                toast.error('Something went wrong');
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        getAllCategories();
    }, []);

    return (
        <>
        <AdminMenu/>
        <div className="p-2 sm:ml-32 w-full">
   
      
    <section className="relative isolate overflow-hidden  bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Skill Courses</h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6  gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {skills.map((s) => {
                            const category = categories.find(c => c._id === s.category);
                            return (
                                <Link to={`/dashboard/admin/skills/${s.slug}`}>

                            
                                <div key={s._id} className="group relative border border-gray-300 rounded-md">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img
                                            src={s.image.url}
                                            alt={s.name}
                                            className="h-full w-full rounded-md object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <div className="mt-4 flex justify-between text-left">
                                            <div>
                                                <h3 className="text-sm font-semibold text-gray-700">
                                                    <a href={s.url}>
                                                        <span aria-hidden="true" className="absolute inset-0" />
                                                        {s.name}
                                                    </a>
                                                </h3>
                                                {category && <p className="mt-1 text-sm text-gray-500"><Badge variant="outline">{category.name}</Badge></p>}
                                                <p className="mt-1 text-sm text-gray-500 font-semibold">
                                                    <span className="text-sm text-black font-semibold">Starting from :</span> {new Date(s.availability).toLocaleDateString('en-GB', {
                                                        day: '2-digit',
                                                        month: 'short',
                                                        year: 'numeric'
                                                    })}
                                                </p>
                                            </div>
                                            <p className="  font-extrabold text-right text-gray-900">{s.price}/-</p>
                                        </div>
                                        <p className="text-sm text-left mt-2 font-medium text-gray-900">{s.description.substring(0, 60)}....</p>
                                    </div>
                                </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>

    </section>
  </div>



                   </>
    );
}

export default AllCourses;
