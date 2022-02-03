// this js file is to use component from one file and navigate to another basically i am trying to implement server side rendering with minimum frameworks so that i can understand how things works behind the hood
import Navbar from './components/Navbar'; 
const rootNode = document.querySelector("#root");
rootNode.appendChild(Navbar());
