import { useState } from 'react';

export default function CopyButton({ value }) {
  const [label, setLabel] = useState('Copy');

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setLabel('Copied');
    } catch {
      setLabel('Press Ctrl/Cmd+C');
    }
    setTimeout(() => setLabel('Copy'), 1800);
  }

  return <button type="button" className="copy" onClick={copy}>{label}</button>;
}
