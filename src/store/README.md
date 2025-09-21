# Global State with Zustand

Esta carpeta (`src/store`) está pensada para contener **stores** de [Zustand](https://github.com/pmndrs/zustand), una librería ligera para manejar estado global en React.

## 🚀 Instalación
Si aún no la tienes en el proyecto:
```bash
npm install zustand
```

## 🛠 Ejemplo básico

Crea un archivo, por ejemplo `src/store/useCounter.ts`:

```ts
import { create } from 'zustand';

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useCounter = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
```

## 🧩 Uso en componentes

```tsx
import { useCounter } from '@/store/useCounter';

export default function CounterButton() {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="flex gap-2">
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
```

- **useCounter** es un hook que puedes usar en cualquier componente.
- No necesitas `Provider` ni Context adicional.

## 💡 Buenas prácticas

- Crea un archivo por cada *store* lógico (e.g. `useUser.ts`, `useTheme.ts`).
- Mantén el estado y las acciones en el mismo store para mayor claridad.
- Usa TypeScript para tipar el estado y las acciones.

Con este patrón puedes tener un estado global simple y escalable en tu aplicación React.