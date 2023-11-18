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
