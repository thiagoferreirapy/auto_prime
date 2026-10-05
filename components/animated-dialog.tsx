'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export function AnimatedDialog({ open, onClose, label, variant = 'gallery', children }: {
  open: boolean; onClose: () => void; label: string; variant?: 'drawer' | 'gallery'; children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const previousOverflow = useRef<string | null>(null);
  const unlock = () => {
    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current;
      previousOverflow.current = null;
    }
  };

  useEffect(() => {
    if (open && ref.current && !ref.current.open) {
      previousOverflow.current = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      ref.current.showModal();
    }
  }, [open]);
  useEffect(() => () => unlock(), []);

  return (
    <dialog ref={ref} aria-label={label} className={`app-dialog ${variant}`} data-state={open ? 'opening' : 'closing'}
      onCancel={event => { event.preventDefault(); onClose(); }}
      onClose={unlock}
      onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="dialog-panel" onAnimationEnd={event => {
        if (event.target === event.currentTarget && !open) { ref.current?.close(); unlock(); }
      }}>{children}</div>
    </dialog>
  );
}
