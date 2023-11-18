<div align="center">

# <img src="docs/raspberry-pi.svg" style="height: 1em; aspect-ratio: 1/1; " aria-hidden="true"> Himbeer Verfolgung

A simple web frontend for a RFID demo using Svelte 

<br/>

</div>


## 💡 About The Project

This is a very simplistic project to demonstrate the possibilities of RFID technology.
It uses [Svelte](https://svelte.dev/docs/introduction) and [Tailwind](https://tailwindcss.com/docs/installation) to display a dashboard that visualizes movement of RFID tags. 

It is intended to be used in the lecture "Soziotechnische Studien: Container, Paletten, Verpackungen" taught by Prof. Dr. Martin Binder at [PH-Weingarten](https://technik.ph-weingarten.de/das-fach/das-fach/).

The project should be used in conjunction with this [RESTful](https://github.com/ITBenni/himbeer-verfolgung-backend) backend and this [RFID reader](https://github.com/ITBenni/himbeer-verfolgung-rfid). 


## 🧭 Getting Started

To get a local copy up and running follow these steps.

### Installation

1. Clone this repository

	```bash
	https://github.com/ITBenni/himbeer-verfolgung-frontend.git && cd himbeer-verfolgung-frontend
	```

2. Install NPM packages

	```bash
	npm install
	```


## 🧑‍💻 Developing

To instantly see changes you make to the code, start a development server:

```bash
npm run dev -- --open
```


## 🏗️ Building

To create a production version of the project run:

```bash
npm run build
```

The production version consists only of static Javascript/HTML/CSS files that you can put on any webspace. 
You don't need to install any additional software (aside from a webserver). 


## 🤝 Contributing

Any contributions are welcome :)
If you find any errors or if you have feedback, please open an [issue on Github](https://github.com/ITBenni/himbeer-verfolgung-frontend/issues).


## 📜 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.





















# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.




https://tailwindcss.com/docs/guides/sveltekit