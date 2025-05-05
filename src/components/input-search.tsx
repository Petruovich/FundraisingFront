import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const InputSearch = () => {
    return (
        <div className="bg-white border border-gray-200 px-3 py-2 rounded flex items-center space-x-2 h-10">
            <Search className="text-gray-500 w-4 h-4" />
            <Input
                placeholder="Пошук"
                className="border-none bg-transparent focus:ring-0 focus-visible:ring-0 p-0 text-sm placeholder:text-gray-400 h-6"
            />
        </div>
    );
};
