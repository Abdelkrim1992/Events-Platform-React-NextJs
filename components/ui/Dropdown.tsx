import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

import { Category } from "@prisma/client";
import { startTransition, useState } from "react";

type DroppdownType = {
  value?: string;
  onChangeHandler?: () => void;
};

export const Dropdown = ({ onChangeHandler, value }: DroppdownType) => {

  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = async()=>{

  }

  return (
    <>
      <Select onValueChange={onChangeHandler} defaultValue={value}>
        <SelectTrigger className="w-full select-field">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.length > 0 &&
            categories.map((category) => (
              <SelectItem
                key={category.id}
                value={category.id}
                className="select-item"
              >
                {category.name}
              </SelectItem>
            ))}

          <AlertDialog >
            <AlertDialogTrigger className="p-meduim-14 flex w-full py-3 pl-5 rounded-sm">Open</AlertDialogTrigger>
            <AlertDialogContent className="bg-white rounded-sm">
              <AlertDialogHeader >
                <AlertDialogTitle>New Category</AlertDialogTitle>
                <AlertDialogDescription>
                  <input type="text" placeholder="Category Name" className="input-field mt-3 w-full" onChange={(e) => setNewCategory(e.target.value)}/>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => startTransition(handleAddCategory)}>Add</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </SelectContent>
      </Select>
    </>
  );
};

export default Dropdown;
