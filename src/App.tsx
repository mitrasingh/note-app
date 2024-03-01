import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
	return (
		<Container className="py-4">
			<Routes>
				<Route path="/" element={<h1>Home</h1>}></Route>
				<Route path="/new" element={<h1>New</h1>}></Route>
				<Route path="/path:id">
					<Route index element={<h1>Show</h1>} />
					<Route path="edit" element={<h1>Edit</h1>} />
				</Route>
				<Route path="*" element={<Navigate to="/" />}></Route>
			</Routes>
		</Container>
	);
}

export default App;
