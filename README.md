# React + TypeScript + Vite Template

Plantilla mínima para iniciar aplicaciones en **React** con **TypeScript** y **Vite**.  
Incluye configuración lista para Hot Module Replacement (HMR), ESLint con configuración plana y soporte para Tailwind/shadcn si quieres extenderla.

## ✨ Características

- **React + TypeScript**: base moderna con tipado estático.
- **Vite**: desarrollo ultrarrápido y build de producción.
- **ESLint (@stylistic)**: reglas de calidad y formateo automático.
- **Opcional**: integración sencilla con Tailwind CSS v4.

## 📂 Estructura

```
.
├─ src/
│  ├─ components/   # Componentes React
│  ├─ pages/        # Vistas/Rutas
│  ├─ assets/       # Recursos estáticos
│  └─ main.tsx      # Punto de entrada
├─ index.html
├─ package.json
└─ README.md
```

## 🚀 Scripts

```bash
npm install    # Instalar dependencias
npm run dev    # Entorno de desarrollo con HMR
npm run build  # Build de producción
npm run preview# Previsualizar build
npm run lint   # Linter + fix
```

## 🛠 Cómo empezar

1. Clona este repositorio.
2. Instala las dependencias con `npm install` o `yarn`.
3. Inicia el servidor de desarrollo con `npm run dev`.
4. Personaliza la configuración de ESLint/Tailwind según tus necesidades.

---

Esta plantilla sirve como punto de partida para cualquier **aplicación React moderna** con TypeScript y Vite.


## 🎨 Colores y Theme en Tailwind

Puedes definir variables CSS personalizadas en `src/index.css` y usarlas directamente como colores en tus clases de Tailwind.  
Por ejemplo:

```css
/* src/index.css */
--color-primary-500: oklch(0.65 0.20 250);
```

Ahora en tus componentes React puedes escribir:

```tsx
<button className="bg-primary-500 text-white">Botón</button>
```

Esto permite centralizar los colores y otros tokens (fuentes, tamaños) en un solo lugar (`index.css`) y mantenerlos sincronizados con Tailwind.



## 🌐 Traducciones (i18n) con TypeScript

Para manejar traducciones en una aplicación React + TypeScript puedes usar  
[react-i18next](https://react.i18next.com/).

### 1️⃣ Instalar dependencias
```bash
npm install react-i18next i18next
npm install -D @types/react-i18next
```

### 2️⃣ Configurar i18n
Crea el archivo `src/i18n.ts`:

```ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { welcome: 'Welcome' } },
    es: { translation: { welcome: 'Bienvenido' } },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
```

### 3️⃣ Envolver la App
En `src/main.tsx` importa la configuración antes de renderizar:

```tsx
import './i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### 4️⃣ Usar las traducciones
En cualquier componente:

```tsx
import { useTranslation } from 'react-i18next';

export function Welcome() {
  const { t } = useTranslation();
  return <h1>{t('welcome')}</h1>;
}
```

Con este patrón puedes mantener soporte multilenguaje en tu proyecto React + TypeScript y tipar las claves de traducción para mayor seguridad.