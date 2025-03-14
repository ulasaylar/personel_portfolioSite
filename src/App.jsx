import "./App.css";
import { Btn_primary } from "./components/button";
import { Label } from "./components/label";

export default function App() {
  return (
    <>
      <h1>Selam</h1>
      <Btn_primary text="Gülce" color="red" size="2.5rem" />
      <Btn_primary text="Aylar" color="orange" size="2.1rem" />
      <Btn_primary text="Sağlam" color="yellow" size="1.7rem" />
      <Btn_primary text="Ulaş." size="1.3rem" />
      <Label size={"1rem"}>sa</Label>
    </>
  );
}
