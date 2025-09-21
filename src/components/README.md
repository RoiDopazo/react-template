# Componentes de la aplicación

Esta carpeta (`src/components`) está pensada para contener **componentes reutilizables** de la aplicación.  
Aquí puedes organizar todos los componentes de UI que no dependen de una página específica.

## 🧩 Estructura recomendada

```
src/components/
│
├─ ui/           # Componentes base o librería (p.ej. copiados de shadcn/ui)
├─ layout/       # Encabezados, footers, contenedores de layout
└─ shared/       # Botones, inputs, cards, etc. de uso general
```

Puedes ajustar la estructura según crezca tu proyecto.

## 💡 Uso de shadcn/ui (opcional)

Si quieres partir de componentes accesibles y listos para personalizar con Tailwind,  
puedes usar [shadcn/ui](https://ui.shadcn.com/).

1. Instala la CLI:
   ```bash
   npx shadcn init
   ```
2. Añade un componente, por ejemplo:
   ```bash
   npx shadcn add button
   ```
3. El código se copiará en `src/components/ui/` para que puedas modificarlo a tu gusto.

## Buenas prácticas

- Mantén los componentes **pequeños y enfocados**: un componente = una responsabilidad.
- Usa **TypeScript** para tipar las props.
- Crea un archivo por componente y, si es complejo, subcarpeta con su propio `index.tsx` y estilos si hiciera falta.
- Evita lógica de negocio aquí: los componentes deben ser en su mayoría presentacionales.

Con esta organización, la carpeta `components` será una biblioteca limpia y escalable para toda la aplicación.