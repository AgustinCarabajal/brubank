# Brubank

BitcoinTracer es una aplicación de criptomonedas con un onboarding integrado.

### Desarrollo

- Al ser una aplicación simple que solo cuenta con un onboarding, decidí implementar el formulario con un customHook para que funcione como un multistep form, donde no necesite un store global (como `redux` o `react-context`) para administrar el estado de cada paso del formulario antes del request
- Para las peticiones utilice react-query ya que cuenta con un cache interno que agiliza las consultas y permite guarda los datos sin la necesidad de un store/state aparte
- Para los test utilice `jest` y react `testing-library`
- Para el caso de los formularios se podrían implementar soluciones similares con, por ejemplo, `react-hook-form` o utilizar un framework como remix para que la aplicación sea mas escalable.
- En el caso de los estilos decidí utilizar `css` ya que me pareció que el diseño era simple, pero se podría configurar un framework como `Tailwind` para una aplicación compleja y que requiera una solución escalable.

## Instalación

Utilizar el administrador de paquetes de node [(npm)](https://www.npmjs.com) para instalar la app.

```bash
git clone https://github.com/AgustinCarabajal/brubank.git && cd btctracer
npm install
```

### Levanta la app!

```bash
npm run dev
```

## Testing

```bash
npm run test
```
