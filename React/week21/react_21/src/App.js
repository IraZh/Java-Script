import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Work", 8],
  ["Eat", 2],
  ["Hobby", 3],
  ["Programming", 2],
  ["Sleep", 9],
];

const options = {
  title: "My daily routine",
};

function App() {
  return (
    <div className="First App">
        <div>
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
          />
        </div>
    </div>
  );
}

export default App;
