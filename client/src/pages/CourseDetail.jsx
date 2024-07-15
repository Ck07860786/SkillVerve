import { Badge } from "@/components/ui/badge";
import Header from "@/components/ui/shared/layout/Header";
import { BASE_URL } from "@/helper/Url";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

function CourseDetail() {
  const [skill, setSkill] = useState({});
  const [categories, setCategories] = useState([]);
  const params = useParams();

  const getCourse = async () => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/api/v1/skill/get-skill/${params.slug}`
      );
      if (data?.success) {
        setSkill(data.skill);
        console.log(data.skill);
      } else {
        toast.error("Cannot found course");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (params?.slug) getCourse();
  }, [params?.slug]);

  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/api/v1/category/get-categories`
      );
      if (data.success) {
        setCategories(data.category);
        console.log(data.category);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const category = categories.find(c => c._id === skill.category);

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row h-full">
        <div className="w-full md:w-1/2 p-4 md:p-10 flex justify-center md:justify-end">
          <div className="w-full max-w-md h-[500px] border border-blue-700 rounded-xl shadow-md shadow-blue-700 mt-4 md:mt-28">
            <img
              className="w-full h-full object-cover rounded-lg p-4"
              src={skill.image?.url}
              alt={skill.name}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-5 flex justify-center md:justify-start">
          <div className="mt-4 md:mt-40 w-full text-left max-w-md">
            <h1 className="text-2xl font-bold text-blue-600">{skill.name}</h1>
            <p className="mt-4 md:mt-10">{skill.description}</p>
            <h1 className="mt-4 md:mt-16 text-2xl font-bold">
              Rs. {skill.price}/-
            </h1>

            <div className="mt-4 md:mt-8 text-xl  flex flex-wrap gap-10 items-center">
              {category && <Badge variant="outline" className='px-4 py-2 bg-zinc-200'>{category.name}</Badge>}

              <Badge variant="outline" className='px-4 py-2 bg-zinc-200'><pre className=" text-zinc-600 font-Inter">Starting from: </pre> {new Date(skill.availability).toLocaleDateString('en-GB', {
                                                        day: '2-digit',
                                                        month: 'short',
                                                        year: 'numeric'
                                                    })}
              </Badge>
              
            </div>
           
          

            <button className="bg-black text-white w-full md:w-[500px] h-10 rounded-md mt-4 md:mt-10 text-center hover:bg-zinc-700">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseDetail;
