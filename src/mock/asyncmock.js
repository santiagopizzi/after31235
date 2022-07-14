const lista = [
  {
    nombre: "Componente Funcional",
    id: "1",
    precio: 100,
    categoria: "componente",
    imgItem: "/img/components.jpg",
    imgDetalle: "/img/funcion.jpg",
    stock: 11,
    descripcion:
      "React Function Components -- also known as React Functional Components -- are the status quo of writing modern React applications. In the past, there have been various React Component Types, but with the introduction of React Hooks it's possible to write your entire application with just functions as React components. This in-depth guide shows you everything about React Function Components -- which are basically just JavaScript Functions being React Components which return JSX (React's Syntax) -- so that after you have read this tutorial you should be well prepared to implement modern React applications with them."
  },
  {
    nombre: "useState",
    id: "2",
    precio: 150,
    categoria: "hook",
    imgItem: "/img/hook.jpg",
    imgDetalle: "/img/usestate.jpg",
    stock: 22,
    descripcion:
      "Ejecutar el método useState con el valor inicial de nuestro estado nos devuelve un array que tendrá el valor del estado y un método para actualizar el estado. Supongo que habréis notado los símbolos [ y ] y quizás te estás preguntando qué significan si no estás habituado con la nueva sintaxis de Javascript. Esta característica se llama array destructuring y básicamente nos permite extraer los elementos de un array y crear variables directamente. En este caso estamos extrayendo la primera posición del array, donde tendremos el valor del state, y lo llamamos count. En la segunda posición, que le llamamos setCount nos devuelve el método que ejecutaremos para actualizar el estado más adelante."
  },
  {
    nombre: "Componente de Clase",
    id: "3",
    precio: 200,
    categoria: "componente",
    imgItem: "/img/components.jpg",
    imgDetalle: "/img/class.jpg",
    stock: 3,
    descripcion:
      "Utilizar la sintaxis de class es una de las formas más comunes de definir un componente React. Las class en javascript se introdujeron en ECMAScript 2015 con el objetivo de tener una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia. Para crear un class component utilizaremos la herencia ya que extenderemos de una class llamada Component que viene con React. Gracias a extender de esta clase podremos hacer cosas cómo manejar el state del componente, escuchar el ciclo de vida, etc.",
    extra: "¡¡¡Últimas unidades!!!"
  },
  {
    nombre: "useEffect",
    id: "4",
    precio: 250,
    categoria: "hook",
    imgItem: "/img/hook.jpg",
    imgDetalle: "/img/useeffect.jpg",
    stock: 44,
    descripcion:
      "Al usar este Hook, le estamos indicando a React que el componente tiene que hacer algo después de renderizarse. React recordará la función que le hemos pasado (nos referiremos a ella como nuestro “efecto”), y la llamará más tarde después de actualizar el DOM. En este efecto, actualizamos el título del documento, pero también podríamos hacer peticiones de datos o invocar alguna API imperativa. Poner useEffect dentro del componente nos permite acceder a la variable de estado count (o a cualquier prop) directamente desde el efecto. No necesitamos una API especial para acceder a ella, ya que se encuentra en el ámbito de la función. Los Hooks aprovechan los closures de JavaScript y evitan introducir APIs específicas de React donde JavaScript ya proporciona una solución."
  }
];

export default lista;
