import React, { useEffect, useState } from "react";
import RTE from "./RTE";
import Input from "../Input";
import Button from "../Button";
import Select from "../Select";
import img from "../../assets/no-image-found.png";
import { useForm } from "react-hook-form";
import dataService from "../../appwrite/data";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function AddBlogForm({ blog }) {
  const { handleSubmit, register, watch, getValues, setValue, control } =
    useForm({
      defaultValues: {
        title: blog?.title || "",
        slug: blog?.slug || "",
        status: "Active",
        content: blog?.content || "",
      },
    });

  const userData = useSelector((state) => state.userData);
  const navigate = useNavigate();

  const [imgFile, setImgFile] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);

  useEffect(() => {
    const subs = watch((values, { name }) => {
      if (name === "image" && values.image && values.image.length > 0) {
        setImgFile(values.image[0]);
      }
    });
    return () => subs.unsubscribe();
  }, [watch]);

  useEffect(() => {
    if (imgFile instanceof File) {
      const reader = new FileReader();
      reader.readAsDataURL(imgFile);
      reader.onload = (e) => {
        setPreviewImg(e.target.result);
      };
      return () => (reader.onload = null);
    }
  }, [imgFile]);

  useEffect(() => {
    const subs = watch((values, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(values.title));
      }
    });
    return () => subs.unsubscribe();
  }, [watch, setValue]);

  const slugTransform = (value) => {
    return value
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-b\d]+/g, "-");
  };

  const submit = async (data) => {
    try {
      const image = await dataService.uploadImage(imgFile);
      const currentTime = new Date().toISOString();
      const uploadData = {
        ...data,
        image: image.$id,
        time: currentTime,
        userId: userData.$id,
        userName: userData.name,
      };
      const finalData = await dataService.addPost(uploadData);
      if (finalData) {
        toast.success("Blog uploaded!", {
          position: "top-center",
        });
        navigate("/app/blog-view/" + finalData.$id);
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

  return (
    <form className=" flex gap-8 " onSubmit={handleSubmit(submit)}>
      <div className="left w-2/5">
        <Input
          label="Title: "
          className="mb-2"
          required
          {...register("title")}
        />
        <Input
          label="Slug: "
          className="mb-2"
          required
          {...register("slug")}
          onInput={(e) => {
            setValue("slug", slugTransform(e.target.value));
          }}
        />
        <Select
          label="Active status:"
          options={["Active", "Inactive"]}
          className="mb-2"
          required
          {...register("status")}
        />
        <Input
          label="Image: "
          type="file"
          className="mb-2"
          required
          {...register("image")}
          accept="image/png, image/jpg, image/jpeg"
        />
        <div className="img-prev h-48 mt-1 bg-slate-800 border rounded-md overflow-hidden">
          <img
            src={previewImg || img}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="right w-3/5">
        <RTE
          label="Content: "
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
        <Button type="submit" className="w-full mt-5">
          POST
        </Button>
      </div>
    </form>
  );
}

export default AddBlogForm;
