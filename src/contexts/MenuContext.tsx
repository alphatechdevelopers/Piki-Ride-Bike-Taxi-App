import React, { createContext, useContext, useState } from 'react';
import type { MenuItem } from '../types/menu';

interface MenuState {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  activeMenuItem: MenuItem | null;
  setActiveMenuItem: (item: MenuItem | null) => void;
}

const MenuContext = createContext<MenuState | undefined>(undefined);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState<MenuItem | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <MenuContext.Provider value={{ 
      isOpen, 
      toggleMenu, 
      closeMenu, 
      activeMenuItem, 
      setActiveMenuItem 
    }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}