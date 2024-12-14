import React from 'react';
import { X } from 'lucide-react';
import { useMenu } from '../../contexts/MenuContext';
import { MENU_SECTIONS } from '../../constants/sections';
import {
  BOOKING_ITEMS,
  PAYMENT_ITEMS,
  SERVICE_ITEMS,
  CORPORATE_ITEMS,
  ANALYTICS_ITEMS,
} from '../../constants/menuItems';
import MenuSection from './MenuSection';
import type { MenuSection as MenuSectionType } from '../../types/menu';

export default function SideMenu() {
  const { isOpen, closeMenu } = useMenu();

  const allItems = {
    booking: BOOKING_ITEMS,
    payments: PAYMENT_ITEMS,
    services: SERVICE_ITEMS,
    corporate: CORPORATE_ITEMS,
    analytics: ANALYTICS_ITEMS,
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={closeMenu}
      />
      <div className="fixed inset-y-0 left-0 w-80 bg-white z-50 overflow-y-auto">
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-indigo-600">PikiRide Menu</h2>
            <button
              onClick={closeMenu}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="space-y-6">
            {(Object.entries(MENU_SECTIONS) as [MenuSectionType, string][]).map(
              ([section, title]) => (
                <MenuSection
                  key={section}
                  title={title}
                  items={allItems[section]}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}