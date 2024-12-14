import React from 'react';
import { useMenu } from '../../contexts/MenuContext';
import type { MenuItem as MenuItemType } from '../../types/menu';

interface MenuItemProps {
  item: MenuItemType;
}

export default function MenuItem({ item }: MenuItemProps) {
  const { setActiveMenuItem, closeMenu } = useMenu();
  const Icon = item.icon;
  
  const handleClick = () => {
    setActiveMenuItem(item);
    closeMenu();
  };
  
  return (
    <button
      onClick={handleClick}
      className="w-full flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg group transition-colors"
    >
      <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-100">
        <Icon className="w-5 h-5 text-indigo-600" />
      </div>
      <div className="flex-1 text-left">
        <div className="flex items-center space-x-2">
          <span className="font-medium">{item.label}</span>
          {item.isNew && (
            <span className="px-2 py-0.5 text-xs bg-indigo-100 text-indigo-700 rounded-full">
              New
            </span>
          )}
          {item.badge && (
            <span className="px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded-full">
              {item.badge}
            </span>
          )}
        </div>
        {item.description && (
          <p className="text-sm text-gray-500">
            {item.description}
          </p>
        )}
      </div>
    </button>
  );
}