export type MenuSection = 'booking' | 'payments' | 'services' | 'corporate' | 'analytics';

export interface MenuItem {
  id: string;
  label: string;
  description?: string;
  icon: React.ComponentType;
  section: MenuSection;
  badge?: string;
  isNew?: boolean;
}