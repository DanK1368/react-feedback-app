import SpinnerGif from "../assets/spinner.gif";

function Spinner() {
  return (
    <img
      src={SpinnerGif}
      alt="loading..."
      style={{ width: "100px", margin: "auto", display: "block" }}
    ></img>
  );
}
export default Spinner;
