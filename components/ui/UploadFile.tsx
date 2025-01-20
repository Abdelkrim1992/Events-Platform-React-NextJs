import { Dispatch, SetStateAction } from "react"

type FileUploadProps = {
    onChangeFile? : (value:string) => void,
    ImageURL? : string,
    setFiles : Dispatch<SetStateAction<File[]>>
}

const UploadFile = ({onChangeFile, ImageURL, setFiles}: FileUploadProps) => {
  return (
    <div>
      
    </div>
  )
}

export default UploadFile
