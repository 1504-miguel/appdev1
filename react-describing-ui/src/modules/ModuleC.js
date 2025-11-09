import { greetD } from "./ModuleD";


export  function greetC() {
  console.log('Hello from ModuleC');
  greetD();
}