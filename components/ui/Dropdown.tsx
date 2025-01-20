import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

type DroppdownType = {
  value?: string;
  onChangeHandler?: () => void;
};

export const Dropdown = ({ onChangeHandler, value }: DroppdownType) => {
    
  const [category, setCategory] = useState<Category>([])
  return (
    <>
      <Select onValueChange={ onChangeHandler } defaultValue={ value }>
        <SelectTrigger className="w-full select-field">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
};

export default Dropdown;
