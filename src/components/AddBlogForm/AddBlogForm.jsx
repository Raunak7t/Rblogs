import React from "react";
import RTE from "./RTE";
import Input from "../Input";
import Button from "../Button";
import Select from "../Select";
import img from "../../assets/no-image-found.png";

function AddBlogForm() {
  return (
    <form className=" flex gap-8 ">
      <div className="left w-2/5">
        <Input label="Title: " className="mb-2" />
        <Input label="Slug: " className="mb-2" />
        <Select
          label="Active status:"
          options={["Active", "Inactive"]}
          className="mb-2"
        />
        <Input label="Image: " type="file" className="mb-2" />
        <div className="img-prev h-48 mt-1 bg-slate-800 border rounded-md overflow-hidden">
          <img src={img} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="right w-3/5">
        <RTE label="Content: " />
        <Button type="submit" className="w-full mt-5">
          POST
        </Button>
      </div>
    </form>
  );
}

export default AddBlogForm;
