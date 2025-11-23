import React from 'react'

export default function Modal({ open, onClose, children }) {
  if (!open) return null

  return (
    <div className="modal open" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-inner" onClick={(e)=> e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <div>{children}</div>
      </div>
    </div>
  )
}
