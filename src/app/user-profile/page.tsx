"use client"

import { useState } from "react"
import { User, Gift, Lightbulb, Bell, Edit3, PlusCircle, LogOut } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SidebarItem } from "@/components/sidebar-item"

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState({
    fullName: "Олександр Грішин Миколайович",
    phone: "+38099321312",
  })

  const handleEdit = () => {
    if (isEditing) {
      setIsEditing(false)
    } else {
      setIsEditing(true)
    }
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-gray-50 min-h-screen">
      <div className="w-full md:w-[280px] bg-white p-4 rounded-lg shadow-sm flex flex-col">
        <div className="flex flex-col items-center gap-3 mb-6 pb-6 border-b">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/placeholder.svg?height=80&width=80" alt="User" />
            <AvatarFallback className="bg-gray-100 text-gray-800">
              <User size={32} />
            </AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h2 className="font-medium text-lg">І'мя користувача</h2>
            <p className="text-sm text-gray-500">Олексій Семенов</p>
          </div>
        </div>

        <nav className="space-y-1 flex-grow">
          <SidebarItem icon={<Gift size={18} />} label="Мої донати" />
          <SidebarItem icon={<Lightbulb size={18} />} label="Мої ініціативи" isActive />
          <SidebarItem icon={<Bell size={18} />} label="Підписки" />
        </nav>

        <div className="mt-auto pt-4 border-t">
          <SidebarItem icon={<LogOut size={18} />} label="Вийти" className="text-red-500 hover:bg-red-50" />
        </div>
      </div>


      <div className="flex-1 bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-semibold mb-6">Особисті дані</h1>

        <div className="space-y-4">
          <Accordion type="single" collapsible defaultValue="account" className="w-full">
            <AccordionItem value="account" className="border rounded-lg p-1">
              <AccordionTrigger className="px-4 py-2 hover:bg-gray-50 rounded-md">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-gray-600" />
                  <span>Мій акаунт</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3">
                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-500 mb-1 block">Повне ім'я</label>
                      <Input
                        value={userData.fullName}
                        onChange={(e) => setUserData({ ...userData, fullName: e.target.value })}
                        className="max-w-md"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-gray-500 mb-1 block">Телефон</label>
                      <Input
                        value={userData.phone}
                        onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                        className="max-w-md"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <p className="font-medium">{userData.fullName}</p>
                    <p className="text-gray-600">{userData.phone}</p>
                  </div>
                )}
                <Button onClick={handleEdit} variant="outline" className="mt-4 flex items-center gap-2">
                  {isEditing ? "Зберегти" : "Редагувати"}
                  <Edit3 size={16} />
                </Button>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="initiative" className="border rounded-lg p-1 mt-4">
              <AccordionTrigger className="px-4 py-2 hover:bg-gray-50 rounded-md">
                <div className="flex items-center gap-3">
                  <Lightbulb className="h-5 w-5 text-gray-600" />
                  <span>Створити інціативу</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3">
                <Button className="flex items-center gap-2">
                  <PlusCircle size={16} />
                  Створити
                </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}


