import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { 
  AiFillBook, 
  AiFillAmazonSquare,
  AiFillAndroid,
  AiFillApple,
  AiFillBank,
  AiFillBackward,
  AiFillChrome,
  AiFillFacebook,
  AiFillSkype
} from "react-icons/ai";
import './index.css';

const menuOptions = [
  { label: "Dashboard", icon: AiFillAmazonSquare },
  { label: "Settings", icon: AiFillBook },
  { label: "Dashboard", icon: AiFillAndroid },
  { label: "Settings", icon: AiFillApple },
  { label: "Dashboard", icon: AiFillBank },
  { label: "Settings", icon: AiFillBackward },
  { label: "Dashboard", icon: AiFillChrome },
  { label: "Settings", icon: AiFillFacebook },
  { label: "Dashboard", icon: AiFillSkype }
];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App menuOptions={menuOptions} />
  </React.StrictMode>,
)
