
import './styles/App.css';
import Fotoperro from './media/husky-siberiano.jpg';
import Fotoperro2 from './media/noseRaza.jpg';
import Logo from './media/logoPerro1.jpg';
import Corazon from './media/me-gusta.png';
import Comentario from './media/comentario.png';
import Ver from './media/ver.png';

const Header = () =>{
 return<header>
	<ul className="navbar">
		<li><img className="logo" src={Logo} alt="logoDeLaPagina"/></li>
		<li><button className="mainButom boton1" type="submit">+ nuevo post</button></li>
		<li>
			<div className="buscar">
			<input placeholder="buscar una raza"/>
		<i className="fas fa-search"></i>
	</div>
		</li>
		<li><button className="mainButom secundaryButtom" type="submit">login</button></li>
		<li><button className="mainButom botonRegistro" type="submit">registro</button></li>
	</ul>
</header>
};

const Perros = (props)=>{
	return (	<li className="hijo">
	<div className="contenedor1">
							<img src={props.Foto} alt="husky-siberiano"/>
		</div>
		<span className="spamNose">{props.nombreDeRaza}</span>
		<div className="lobo">
		<div><img className="corazon" src={Corazon} alt="corazon" /> <spam className="notaria"></spam>100</div>
		<div><img className="comentario" src={Comentario} alt="corazon"/><spam className="notaria">2.5K</spam></div>
		<div><img className="ver" src={Ver} alt="ver"/><spam className="notaria">850</spam></div>
		</div>
		</li>
	)
}

const Main = () =>{
 return (
	<main>
<section>
									<h1>RAZAS DE PERRO</h1>
												<ul className="padre">
																	<Perros nombreDeRaza="hola1" Foto={Fotoperro}/>
																	<Perros nombreDeRaza="hola2" Foto={Fotoperro2}/>
	</ul>
</section>

	<section></section>
</main>
);

};


function App() {
  return <div className="App">
		<Header />
			<Main />

		</div>



};







export default App;
