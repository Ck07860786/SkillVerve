import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { BASE_URL } from "@/helper/Url";
import AdminMenu from "@/components/ui/shared/layout/AdminMenu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from "@/components/ui/shared/DatePicker";

function CreateCourse() {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [availability, setAvailability] = useState(null);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/api/v1/category/get-categories`);
      if (data?.success) {
        setCategories(data.category);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!category) {
        toast.error("Please select a category");
        return;
      }

      const courseData = new FormData();
      courseData.append('name', name);
      courseData.append('price', price);
      courseData.append('description', description);
      courseData.append('availability', availability);
      courseData.append('image', image);
      courseData.append('category', category);

      const { data } = await axios.post(`${BASE_URL}/api/v1/skill/create-skill`, courseData);
      if (data?.success) {
        toast.success(data.message);
        navigate('/dashboard/admin/skills');
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      toast.error('Error in creating course');
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <>
      <AdminMenu />
      <div className="p-4 sm:ml-64">
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Create Course</CardTitle>
              <CardDescription>
                Create and offer courses to share your expertise.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="course-name">Course Name</Label>
                    <Input
                      id="course-name"
                      placeholder="Name of your course"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="course-price">Course Price</Label>
                    <Input
                      type="number"
                      id="course-price"
                      placeholder="Price of your course"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="availability">Availability</Label>
                    <DatePicker
                      id="availability"
                      value={availability}
                      onChange={setAvailability}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="course-category">Course Category</Label>
                    <Select onValueChange={(value) => setCategory(value)}>
                      <SelectTrigger id="course-category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        {categories.map((c) => (
                          <SelectItem value={c._id} key={c._id}>
                            {c.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="course-image">
                      {image ? image.name : 'Upload Image'}
                      <Input
                        type="file"
                        onChange={handleImageChange}
                        className="mt-2"
                      />
                    </Label>
                  </div>
                  <div className="">
                    <p className="text-sm">
                      Image You will upload will show here ↓
                    </p>
                    {image && (
                      <div className="text-center">
                        <img
                          src={URL.createObjectURL(image)}
                          alt="product image"
                          width={'200px'}
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="course-description">
                      Course Description
                    </Label>
                    <Textarea
                      id="course-description"
                      placeholder="Enter course description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </div>
                <CardFooter className="flex mt-4 justify-between">
                  <Button type="submit">Create Course</Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
}

export default CreateCourse;
