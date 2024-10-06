'use client';

import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';
import styles from '../styles/Login.module.css'; // Asegúrate de que esta ruta sea correcta
import Image from 'next/image'; // Importar el componente Image de Next.js

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    // Simulación de autenticación simple
    if (email === 'admin@refugio.com' && password === 'admin') {
      router.push('/Home'); // Redirigir a la ruta /Home
    } else {
      alert('Credenciales incorrectas. Use admin/admin');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <Image 
        className={styles.logo} 
        src="https://i.postimg.cc/RCD5XWFR/Logo-Secundario.png" // Asegúrate de cambiar esta ruta por la ruta correcta de tu logo
        alt="Logo"
        width={120} // Ajusta el ancho según sea necesario
        height={120} // Ajusta la altura según sea necesario
      />
      <h2 className={styles.loginTitle}>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          className={styles.loginInput} // Clase local para input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className={styles.loginInput} // Clase local para input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className={styles.loginButton} type="submit">Login</button> {/* Clase local para el botón */}
      </form>
    </div>
  );
}
