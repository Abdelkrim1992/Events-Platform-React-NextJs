"use client";

import { UploadButton } from "@/lib/uploadfile/uploadthing";
import { Dispatch, SetStateAction } from "react";

type UploadFileProps = {
  onChangeFile : (value:string) =>void,
  ImageURL : string,
  setFiles : Dispatch<SetStateAction<File[]>>
}

export default function Home({onChangeFile, ImageURL, setFiles}: UploadFileProps) {
  return (
    <main className="flex flex-col items-center justify-between p-5">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  );
}
