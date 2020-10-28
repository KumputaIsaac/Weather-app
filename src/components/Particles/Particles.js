import React from 'react'; 
import Particles from 'react-particles-js'; 
import './Particles.css';

function Particle() { 
return ( 
	<div className="particles"> 
	<Particles 
		params={{ 
		particles: { 
			number: { 
			value: 200, 
			density: { 
				enable: true, 
				value_area: 1000, 
			} 
			}, 
		}, 
		}} 
	/> 

	</div> 
); 
} 




export default Particle; 
