import ReactDOM from "react-dom";
import { Fragment, useEffect, useRef, useState } from "react";
import classes from "./Modal.module.css";

const Backdrop = ({ onClose }: { onClose: () => void }) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

type ModalOverlayProps = {
  className: string;
  children: React.ReactNode;
};
const ModalOverlay = ({ className, children }: ModalOverlayProps) => {
  return (
    <div className={className || classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

type ModelProps = {
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ onClose, children }: ModelProps) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const portalElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    portalElement.current = document.getElementById(
      "overlays"
    )! as HTMLDivElement;
  }

  return (
    <Fragment>
      {portalElement.current &&
        ReactDOM.createPortal(
          <Backdrop onClose={onClose} />,
          portalElement.current
        )}
      {portalElement.current &&
        ReactDOM.createPortal(
          <ModalOverlay className={classes.className}>{children}</ModalOverlay>,
          portalElement.current
        )}
    </Fragment>
  );
};

export default Modal;
