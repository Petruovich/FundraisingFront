export function SidebarItem({
    icon,
    label,
    isActive = false,
    className = "",
  }: {
    icon: React.ReactNode
    label: string
    isActive?: boolean
    className?: string
  }) {
    return (
      <div
        className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${
          isActive ? "bg-gray-100 text-gray-900 font-medium" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        } ${className}`}
      >
        <div className="text-gray-500">{icon}</div>
        <span>{label}</span>
      </div>
    )
  }