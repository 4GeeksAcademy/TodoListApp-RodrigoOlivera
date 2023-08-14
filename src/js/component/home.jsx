import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	//establecemos 2 estados, uno para la lista y otro que sera el que guarde el valor del input
	const [value,setValue]=useState("")
	const [ToodoList,setToodoList]=useState([])
	const [stateCountTodo,setStateCountTodo] = useState()
	// este estado lo que hara es fijarse si el componente esta en su pseudoclase hover para colocar el boton de eliminar
	const [hover,setHover] = useState()

	const styleInput = {
	borderBottom: "none",
	width:"100%",
	position: "relative",
	display: "block",
	padding: "var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x)",
	color: "var(--bs-list-group-color)",
	textDecoration: "none",
	backgroundColor: "var(--bs-list-group-bg)",
	border: "var(--bs-list-group-border-width) solid var(--bs-list-group-border-color)"
	}
	

	useEffect(()=> {
		setStateCountTodo(ToodoList.length)
	},[ToodoList])

	const addToList = (e)=> {
		e.preventDefault()
		if(value !== "") {
			setToodoList([...ToodoList, value])
			setValue("")
		}

	}
	const EliminarTodo = (indexElement)=> {
		const newArr = ToodoList.filter((todo,index)=> {
			return index !== indexElement
		})
		setToodoList(newArr)
	}


	return (
		<div className="container">
			<div className="row">
				<div className="col-4 m-auto">
					<h1 className="text-center opacity-50" style={{fontSize:"50px"}}>todos</h1>
					<ul className="list-group">
					<form onSubmit={addToList} action="">
    					<input type="text" className="btnInput" value={value} onChange={(e) => setValue(e.target.value)} style={styleInput} placeholder="Ingrese una tarea"/>
					</form>
					{
						ToodoList[0]?
						ToodoList.map((todo,index)=> {
							return <li key={index} onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)} className="list-group-item d-flex flex-row justify-content-between">
								<p className="p-0 m-0">{todo}</p>
								{
									hover === true && <p role="button" onClick={()=> EliminarTodo(index)} className="p-0 m-0 text-danger opacity-50">X</p>
								}

							</li>
						}) : 
						<li className="list-group-item">No hay Tareas.</li>
					}
					<li className="list-group-item"><p className="p-0 m-0 opacity-50" style={{fontSize:"12px"}}>{stateCountTodo} item left</p></li>
					</ul>




				</div>
			</div>

		</div>
	);
};

export default Home;
