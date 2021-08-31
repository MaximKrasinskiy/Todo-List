import React from 'react';
import "./scss/style.scss";
import List from './List-1/TaskList'; 
// Он ищет файл List.js , но если не находит, то ищет папку с таким именем и в ней ищет файл index.js

function App() {

    return (
		<div>
			<List
			
			/>
			
		</div>
    )
}





export default App;

