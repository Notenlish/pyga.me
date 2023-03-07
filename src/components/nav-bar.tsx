import React, { useState } from 'react';
import styles from '@/styles/nav-bar.module.css';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setOpen] = useState(true);

  function handleMenuClick() {
    setOpen(!isOpen);
  }

  return (
    <div className="flex items-center justify-between text-white h-1/5 px-7">
      <div className="hidden text-2xl font-bold sm:block">
        <Link href="/">pygame</Link>
      </div>
      <div className="block sm:none" onClick={handleMenuClick}>
        <span className="material-symbols-outlined">menu</span>
      </div>
      <div className={isOpen ? styles.routes : styles.mobileroutes}>
        <ul>
          <li>
            <a href="docs">Documentation</a>
          </li>
          <li>
            <a href="tutorials">Tutorials</a>
          </li>
          <li>
            <a href="https://github.com/pygame-community/pygame-ce">Contribute</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
