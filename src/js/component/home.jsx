import React, { useEffect, useState } from "react";


const Home = () => {

	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	
	useEffect( () => {
		fetch('https://playground.4geeks.com/apis/fake/todos/user/AdrianRios25')

    .then(resp => {
        console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
        console.log(resp.status); // el código de estado = 200 o código = 400 etc.
        console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
        return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
    })
    .then(data => {
       {todos.map((item, index) => (
					<li>

						{item}	<i className="fa-sharp fa-solid fa-trash" style={{ color: '#000000' }} onClick={() => setTodos(
							todos.filter(
								(t, currentIndex) => index != currentIndex
							)
						)
						}></i>
					</li>
				))}
        console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
    })
    .catch(error => {
        //manejo de errores
        console.log(error);
    });
	},
	[]	
	)
	

	return (
		<div className="container">
			<h1 className="text-center mt-5">To do list</h1>
			<ul className="">
				<li>
					<input className="p-1"
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyPress={(e) => {
							if (e.key === "Enter") {
								setTodos(todos.concat(inputValue));
								setInputValue("");
							}
						}}
						placeholder="what do you need to do?" ></input>
				</li>
				{todos.map((item, index) => (
					<li>

						{item}	<i className="fa-sharp fa-solid fa-trash" style={{ color: '#000000' }} onClick={() => setTodos(
							todos.filter(
								(t, currentIndex) => index != currentIndex
							)
						)
						}></i>
					</li>
				))}

			</ul >
			<div className="border border-white p-1">
					{todos.length} task
			</div>
			
		</div >
	);
};

export default Home;
