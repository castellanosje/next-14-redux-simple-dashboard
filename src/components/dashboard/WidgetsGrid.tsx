'use client';
import { IoCartOutline } from 'react-icons/io5';
import { SimpleWidget } from './SimpleWidget';
import { useAppSelector } from '@/store';

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 justify-center">
      <SimpleWidget
        label={count}
        title="Carrito de compras"
        subtitle="productos en el carrito"
        href="/counter"
        icon={<IoCartOutline size={70} className="text-blue-500" />}
      />
    </div>
  );
}
