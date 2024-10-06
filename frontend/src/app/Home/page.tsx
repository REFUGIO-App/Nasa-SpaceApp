'use client'; // Esta línea es necesaria para habilitar el uso de hooks de React

import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { FaDonate, FaUserShield, FaCheckCircle, FaHandsHelping, FaGlobeAmericas, FaWallet } from 'react-icons/fa';
import Chart from '../Chart/Page';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Encabezado */}
      <header className={styles.header}>
        <Image
          src="https://i.postimg.cc/nVwzRtMm/Isotipo1.png"
          alt="Logo"
          className={styles.logo}
          width={120}
          height={120}
        />
        <h1>Kit de Herramientas</h1>
      </header>

      {/* Gráfico en la parte superior */}
      <div className={styles.chartContainer}>
        <Chart />
        <h2>PANEL DE USUARIO</h2>
      </div>

      {/* Secciones del Dashboard */}
      <div className={styles.grid}>

        {/* Recolección de Donaciones */}
        <section className={styles.entities}>
          <h2 className={styles.sectionHeader}>Recolección de Donaciones</h2>
          <div className={styles.entityBox}>
            <Link href="/donaciones" className={styles.link}>
              <div className={styles.entityCard}>
                <FaDonate size={30} color="#cb6ce5" />
                <h3>Donaciones Descentralizadas</h3>
                <p>
                  Automatiza la recepción de donaciones en criptomonedas evitando la
                  comisión por intermediarios y garantizando integridad de recursos.
                </p>
                <p>Tecnologías: OpenZeppelin's ERC 721, Hardhat, Base Sepolia</p>
              </div>
            </Link>
            <Link href="/auditoria" className={styles.link}>
              <div className={styles.entityCard}>
                <FaUserShield size={30} color="#cb6ce5" />
                <h3>Auditoría Descentralizada</h3>
                <p>
                  Dashboard que permite visualizar de forma sencilla las donaciones
                  recibidas por una entidad, uso de recursos y transparencia financiera.
                </p>
                <p>Tecnologías: The Graph, IPFS</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Verificación y Validación */}
        <section className={styles.validation}>
          <h2 className={styles.sectionHeader}>Verificación y Validación</h2>
          <div className={styles.validationBox}>
            <Link href="/atestaciones" className={styles.link}>
              <div className={styles.validationCard}>
                <FaCheckCircle size={30} color="#cb6ce5" />
                <h3>Sistema de Atestaciones</h3>
                <p>
                  Control y registro de la cadena de suministros de donativos o
                  transacciones de recursos a través de validación de contenido con
                  códigos QR.
                </p>
                <p>Tecnologías: Ethereum Attestation Service, códigos QR</p>
              </div>
            </Link>
            <Link href="/reputacion" className={styles.link}>
              <div className={styles.validationCard}>
                <FaHandsHelping size={30} color="#cb6ce5" />
                <h3>Sistema de Reputación</h3>
                <p>
                  Genera una red de confianza entre los participantes de la plataforma
                  mediante atestaciones basadas en la reputación.
                </p>
                <p>Tecnologías: ERC-1155, Ethereum Attestation Services</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Gestión de Emergencias */}
        <section className={styles.resources}>
          <h2 className={styles.sectionHeader}>Gestión de Emergencias</h2>
          <div className={styles.resourceBox}>
            <Link href="/alertas" className={styles.link}>
              <div className={styles.resourceCard}>
                <FaGlobeAmericas size={30} color="#cb6ce5" />
                <h3>EONET - Alertas de Desastres Naturales</h3>
                <p>
                  Utiliza datos en tiempo real de la NASA para enviar alertas a las fundaciones y ONGs de la red.
                </p>
                <p>Tecnologías: EONET API, JavaScript, NASA</p>
              </div>
            </Link>
            <Link href="/redistribucion" className={styles.link}>
              <div className={styles.resourceCard}>
                <FaWallet size={30} color="#cb6ce5" />
                <h3>Redistribución de Fondos de Emergencia</h3>
                <p>
                  Automatiza la asignación de fondos a las comunidades afectadas por desastres.
                </p>
                <p>Tecnologías: Smart Contracts, Chainlink Keepers</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Gestión de la Red y Colaboración */}
        <section className={styles.collaboration}>
          <h2 className={styles.sectionHeader}>Gestión de la Red y Colaboración</h2>
          <div className={styles.collaborationBox}>
            <Link href="/coordinacion" className={styles.link}>
              <div className={styles.collaborationCard}>
                <FaHandsHelping size={30} color="#cb6ce5" />
                <h3>Plataforma de Coordinación</h3>
                <p>
                  Facilita la coordinación entre fundaciones, ONGs, y colaboradores de la red.
                </p>
                <p>Tecnologías: Descentralized Autonomous Organization (DAO)</p>
              </div>
            </Link>
            <Link href="/beneficios" className={styles.link}>
              <div className={styles.collaborationCard}>
                <FaCheckCircle size={30} color="#cb6ce5" />
                <h3>Sistema de Beneficios Fiscales</h3>
                <p>
                  Proporciona beneficios fiscales mediante tokens NFT.
                </p>
                <p>Tecnologías: ERC-721, NFT Metadata</p>
              </div>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
