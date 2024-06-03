import React, { useEffect, useState } from "react";
import RTE from "./RTE";
import Input from "../Input";
import Button from "../Button";
import Select from "../Select";
import img from "../../assets/no-image-found.png";
import { useForm } from "react-hook-form";

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

  const [previewImg, setPreviewImg] = useState(null);

  const showPreview = (e) => {
    register("img").onChange(e);

    if (getValues().img && getValues().img[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(getValues().img[0]);
      reader.onload = (e) => {
        setPreviewImg(e.target.result);
      };
    }
  };

  useEffect(() => {
    setValue("slug", slugTransform(getValues("title")));
  }, [watch().title]);

  const slugTransform = (value) => {
    return value
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-b\d]+/g, "-");
  };

  const submit = () => {
    console.log(getValues());
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
          {...register("img")}
          accept="image/png, image/jpg, image/jpeg"
          onChange={showPreview}
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
