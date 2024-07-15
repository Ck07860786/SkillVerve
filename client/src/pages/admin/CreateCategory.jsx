import AdminMenu from "@/components/ui/shared/layout/AdminMenu";
import AddCategory from "@/forms/AddCategory";
import { BASE_URL } from "@/helper/Url";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Skeleton } from "@/components/ui/skeleton"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function CreateCategory() {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState(null);
  const [updateName, setUpdateName] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${BASE_URL}/api/v1/category/create-category`,
        { name }
      );
      if (data?.success) {
        toast.success(`${name} category created successfully`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `${BASE_URL}/api/v1/category/get-categories`
      );
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `${BASE_URL}/api/v1/category/update-category/${selected._id}`,
        { name: updateName }
      );
      if (data?.success) {
        toast.success(data.message);
        getAllCategory();
        setSelected(null); // Reset selected category
        setUpdateName(""); // Reset update name
        setVisible(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `${BASE_URL}/api/v1/category/delete-category/${id}`
      );
      if (data.success) {
        toast.success(data.message);
        getAllCategory();
      } else {
        toast.error("somthing went wrong");
      }
    } catch (error) {
      toast.error(data.message);
    }
  };

  return (
    <>
      <AdminMenu />
      <div className="p-4 sm:ml-64">
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
          <AddCategory
            handleSubmit={handleSubmit}
            value={name}
            setValue={setName}
          />
          {categories.length > 0 ? (
            <Table>
              <TableCaption>A list of your recent categories.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Edit</TableHead>
                  <TableHead>Delete</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories.map((c) => (
                  <TableRow className="text-left" key={c._id}>
                    <TableCell>{c.name}</TableCell>
                    <TableCell>
                      <Dialog open={visible} onOpenChange={setVisible}>
                        <DialogTrigger>
                          <Button
                            onClick={() => {
                              setSelected(c);
                              setUpdateName(c.name);
                              setVisible(true);
                            }}
                          >
                            Edit
                          </Button>
                        </DialogTrigger>

                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Update Category</DialogTitle>
                            <DialogDescription>
                              Update the category name.
                            </DialogDescription>
                          </DialogHeader>
                          <form onSubmit={handleUpdate}>
                            <Input
                              type="text"
                              value={updateName}
                              onChange={(e) => setUpdateName(e.target.value)}
                              placeholder="Enter updated name"
                            />
                            <DialogFooter>
                              <Button className=" w-full mt-9" type="submit">
                                Update
                              </Button>
                            </DialogFooter>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                    <TableCell>
                      <AlertDialog>
                        <AlertDialogTrigger>
                          <Button className="bg-red-600 text-white">
                            Delete
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you sure to delete category?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will delete
                              category and remove your data from our servers.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction className="bg-red-600 hover:bg-red-400">
                              <Button
                                onClick={() => handleDelete(c._id)}
                                className="bg-red-600 hover:bg-red-400 text-white"
                              >
                                Continue
                              </Button>
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="flex flex-col space-y-3">
      <Skeleton className="h-12 w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
          )}
        </section>
      </div>
    </>
  );
}

export default CreateCategory;
