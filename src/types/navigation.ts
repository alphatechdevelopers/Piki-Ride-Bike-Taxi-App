export type NavigationScreen = 'home' | 'history' | 'settings';

export interface NavigationState {
  currentScreen: NavigationScreen;
  setCurrentScreen: (screen: NavigationScreen) => void;
}