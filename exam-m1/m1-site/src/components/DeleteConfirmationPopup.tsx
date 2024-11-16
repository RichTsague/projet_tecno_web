import React from 'react';
import styles from './DeleteConfirmationPopup.module.css';  // Vous pouvez personnaliser le style

interface DeleteConfirmationPopupProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteConfirmationPopup: React.FC<DeleteConfirmationPopupProps> = ({ onConfirm, onCancel }) => {
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <h3>Êtes-vous sûr de vouloir supprimer ce livre ?</h3>
        <div className={styles.popupButtons}>
          <button onClick={onConfirm} className={styles.confirmButton}>Confirmer</button>
          <button onClick={onCancel} className={styles.cancelButton}>Annuler</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationPopup;
