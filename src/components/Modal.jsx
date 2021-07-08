import Loading from './Loading';
import './Modal.css';

function Modal({ modalState, closeModal, children }) {
  if (modalState === 'none') return null;
  const isOtherMsg = !['none', 'loading', 'custome'].includes(modalState);

  return (
    <div className="rpgui-content fullScreen">
      <div className="shadow" />
      <div className={`rpgui-container framed modal ${modalState !== 'custome' ? 'alignCenter' : ''}`}>
        {modalState === 'loading' && <Loading />}
        {modalState === 'custome' && children}
        {isOtherMsg && (
          <>
            <p>{modalState}</p>
            <button className="rpgui-button autoHeight" type="button" onClick={closeModal}>
              <p>確定</p>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
