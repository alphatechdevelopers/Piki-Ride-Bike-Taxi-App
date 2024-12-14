import React from 'react';
import MenuItem from './MenuItem';
import type { MenuItem as MenuItemType } from '../../types/menu';

interface MenuSectionProps {
  title: string;
  items: MenuItemType[];
}

export default function MenuSection({ title, items }: MenuSectionProps) {
  if (!items.length) return null;

  return (
    <div>
      <h3 className="text-sm font-medium text-gray-500 mb-3">{title}</h3>
      <div className="space-y-2">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}