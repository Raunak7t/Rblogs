import { Editor } from "@tinymce/tinymce-react";
import React, { useRef } from "react";

function RTE({ label }) {
  return (
    <>
      <div className="py-1">
        <label className="cursor-pointer">{label}</label>
      </div>
      <div className=" border rounded-lg w-full">
        <Editor
          apiKey="x14piip80qtvcsxnugo20j2s9wsndw9gbmbxaush0cgkrs4i"
          init={{
            content_css: "dark",
            skin: "oxide-dark",
            height: 400,
            plugins:
              "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
            toolbar:
              "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
            tinycomments_mode: "embedded",
            tinycomments_author: "Author name",
            mergetags_list: [
              { value: "First.Name", title: "First Name" },
              { value: "Email", title: "Email" },
            ],
            ai_request: (request, respondWith) =>
              respondWith.string(() =>
                Promise.reject("See docs to implement AI Assistant")
              ),
          }}
        />
      </div>
    </>
  );
}

export default RTE;
