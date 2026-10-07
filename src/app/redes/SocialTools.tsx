'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Check, Copy, Download, QrCode, Share2, X } from 'lucide-react';
import styles from './redes.module.css';

const url = 'https://apen.mx/redes';

export default function SocialTools() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [message, setMessage] = useState('');
  const [manualCopy, setManualCopy] = useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setManualCopy(false);
      setMessage('Enlace copiado.');
    } catch {
      setManualCopy(true);
      setMessage('Selecciona el enlace para copiarlo.');
    }
  }

  async function shareLink() {
    if (!navigator.share) return copyLink();
    try {
      await navigator.share({ title: 'Conecta con APEN', url });
      setMessage('Enlace compartido.');
    } catch (error) {
      if (!(error instanceof DOMException && error.name === 'AbortError')) await copyLink();
    }
  }

  return <div className={styles.toolsArea}>
    <div className={styles.tools} aria-label="Compartir redes de APEN">
      <button type="button" onClick={shareLink}><Share2 size={17} aria-hidden />Compartir</button>
      <button type="button" onClick={copyLink} aria-label="Copiar enlace" title="Copiar enlace">
        {message === 'Enlace copiado.' ? <Check size={18} aria-hidden /> : <Copy size={18} aria-hidden />}
      </button>
      <button type="button" onClick={() => dialog.current?.showModal()}><QrCode size={18} aria-hidden />QR</button>
    </div>
    <p className={styles.toolStatus} role="status">{message}</p>
    {manualCopy && <input className={styles.copyInput} aria-label="Enlace de redes de APEN" value={url} readOnly onFocus={event => event.currentTarget.select()} />}
    <dialog ref={dialog} className={styles.qrDialog} aria-labelledby="redes-qr-title"
      onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className={styles.qrContent}>
        <button type="button" className={styles.closeDialog} onClick={() => dialog.current?.close()} aria-label="Cerrar" title="Cerrar"><X size={22} aria-hidden /></button>
        <span className={styles.eyebrow}>APEN en tus manos</span>
        <h2 id="redes-qr-title">Escanea y conecta.</h2>
        <Image className={styles.qrImage} src="/visual/qr/APEN-redes.png" alt="Código QR para abrir https://apen.mx/redes" width={1184} height={1184} sizes="(max-width: 600px) 280px, 340px" />
        <p>apen.mx/redes</p>
        <a className={styles.downloadQr} href="/visual/qr/APEN-redes.png" download="APEN-redes-QR.png"><Download size={18} aria-hidden />Descargar QR</a>
      </div>
    </dialog>
  </div>;
}
