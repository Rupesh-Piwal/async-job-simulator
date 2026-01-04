import { Button } from "@/components/ui/button";
import { CirclePlus, Upload } from "lucide-react";

const TopToolbar = () => {
  return (
    <div className="mx-auto my-2 max-w-150 border-2 border-slate-400 min-h-15 min-w-full rounded-lg">
      <div className="flex flex-row items-center justify-center gap-4 p-2 mt-1">
        <Button
          variant="outline"
          className="flex items-center gap-2 text-[16px] font-thin cursor-pointer"
        >
          <CirclePlus className="h-4 w-4" />
          Tigger
        </Button>
        <Button
          variant="outline"
          className="flex items-center gap-2 text-[16px] font-thin cursor-pointer"
        >
          <CirclePlus className="h-4 w-4" />
          Action
        </Button>
        <Button
          variant="outline"
          className="flex items-center gap-2 text-[16px] font-thin cursor-pointer"
        >
          <CirclePlus className="h-4 w-4" />
          Condition
        </Button>
        <Button
          variant="outline"
          className="flex items-center gap-2 text-[16px] font-thin cursor-pointer"
        >
          <Upload className="h-4 w-4" />
          Export
        </Button>
      </div>
    </div>
  );
};

export default TopToolbar;
