"use client";
import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const categories = [
    { id: "humanitarian", label: "Гуманітарна допомога" },
    { id: "military", label: "Військові" },
    { id: "medical", label: "Медичні" },
    { id: "rehabilitation", label: "Реабілітація" },
    { id: "civic", label: "Громадські ініціативи" },
];

export const Sidebar = () => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const toggleCategory = (id: string) => {
        setSelectedCategories((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    return (
        <aside className="bg-white border border-gray-200 p-4 rounded">
            <h1 className="text-lg font-semibold text-gray-800 mb-4">Initiatives</h1>
            <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Оберіть категорію" />
                </SelectTrigger>
                <SelectContent>
                    <div className="space-y-2 p-2">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className="flex items-center justify-between rounded-md p-2 hover:bg-gray-100"
                            >
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id={category.id}
                                        checked={selectedCategories.includes(category.id)}
                                        onCheckedChange={() => toggleCategory(category.id)}
                                    />
                                    <label
                                        htmlFor={category.id}
                                        className="text-sm cursor-pointer"
                                    >
                                        {category.label}
                                    </label>
                                </div>

                                {selectedCategories.includes(category.id) && (
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <div className="text-xs px-2 py-1 rounded bg-gray-200 cursor-pointer">
                                                    ℹ️
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent
                                                side="right"
                                                className="bg-gray-900 text-white border border-gray-700 rounded-md px-4 py-3 space-y-3"
                                            >
                                                <div className="flex flex-col gap-2">
                                                    <span>Кількість товарів: 21</span>
                                                    <Button
                                                        size="sm"
                                                        variant="ghost"
                                                        className="bg-white text-black hover:bg-gray-100"
                                                    >
                                                        Показати
                                                    </Button>
                                                </div>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>

                                )}
                            </div>
                        ))}
                    </div>
                </SelectContent>
            </Select>
        </aside>
    );
};
