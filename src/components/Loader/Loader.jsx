import { Overlay } from 'App.styled';
// import { createPortal } from 'react-dom';
import './Loader.modules.css';
// const loaderRoot = document.querySelector('#loader-root');

export function Loader() {
  return (
    <Overlay>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Overlay>
  );
  // loaderRoot
}
