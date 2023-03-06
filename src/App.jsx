import RegisterFormik from "./components/form/RegisterFormik";
import RegisterHook from "./components/form/RegisterHook";

function App() {
  return (
    <div className="App">
      {/* Nên chọn react-hook-form viết dễ hơn, hạn chế việc render so với Formik */}
      <RegisterHook />
      {/* <RegisterFormik /> */}
    </div>
  );
}

export default App;
