import { AiOutlineCloseCircle, AiOutlineInfoCircle } from "react-icons/ai";
import "./modal.scss";

export const Modal = ({ onCloseModal }) => {
  return (
    <div className="modal closeModal" onClick={onCloseModal}>
      <section className="modal-content">
        <section className="modal-header">
          <section className="header-title">
            <AiOutlineInfoCircle className="info-icon" color="red" size={18} />

            <h3>Do you want to continue?</h3>
          </section>
          <section>
            <AiOutlineCloseCircle
              className="close-icon closeModal"
              size={18}
              onClick={onCloseModal}
            />
          </section>
        </section>
        <section className="modal-body">
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available
          </p>
        </section>
        <section className="modal-footer">
          <button className="closeModal" onClick={onCloseModal}>
            Cancel
          </button>
          <button>Procced</button>
        </section>
      </section>
    </div>
  );
};
