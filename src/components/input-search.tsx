import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const InputSearch = () => {
    return (
        <div className="bg-white border border-gray-200 px-3 py-2 rounded flex items-center space-x-2 h-10">
            <Search className="text-gray-500 w-4 h-4" />
            <Input
                unstyled
                placeholder="Пошук"
                className="bg-transparent border-none outline-none focus:ring-0 w-full"
            />
        </div>
    );
};
