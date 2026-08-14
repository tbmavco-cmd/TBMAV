import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type CartItem = {
  id: string;
  name: string;
  price: string;
  priceCents?: number;
  actionType: 'add_to_cart' | 'add_to_wellness_plan' | 'existing_patient_request';
  division: string;
  category: string;
  badge?: 'direct_purchase' | 'provider_review' | 'existing_patient';
};

type CartContextValue = {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  itemCount: number;
  totalCents: number;
  hasWellnessPlanItems: boolean;
  hasCartItems: boolean;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = 'bare-method-cart';

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setItems(JSON.parse(stored));
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const addToCart = (item: CartItem) => {
    setItems((prev) => {
      if (prev.some((p) => p.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => setItems([]);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = items.length;
    const totalCents = items.reduce(
      (sum, i) => sum + (typeof i.priceCents === 'number' ? i.priceCents : 0),
      0,
    );
    return {
      items,
      addToCart,
      removeFromCart,
      clearCart,
      itemCount,
      totalCents,
      hasWellnessPlanItems: items.some((i) => i.actionType === 'add_to_wellness_plan'),
      hasCartItems: items.some((i) => i.actionType === 'add_to_cart'),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
