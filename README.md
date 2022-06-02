# Symfony-React-Vite-Template
Base template for a Symfony / React / Vite project

If you want to create a project using Symfony for backend and React + Vite for your front here is a base template

Get started : 

```
composer install
yarn
```

To run in dev mode :

`php -S localhost:8000 -t public` or `symfony server:start` (optional)  
`yarn dev` --> This will allow you auto reload for js and twig modifications

May also need to do
`ln -s assets/ public/assets/` to link images

To run in prod :

`yarn build`