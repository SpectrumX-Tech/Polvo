import Card from './Card';
import styles from '@/styles/services.module.css';

const Services = () => {
  return (
    <div className={styles.container}>
      <Card image="/icons/zap.svg" title="Tecnologias atuais (Uber, iFood e Nubank utilizam)" />
      <Card image="/icons/square.svg" title="Escalabilidade (pronto para grandes projetos)" />
      <Card image="/icons/talk.svg" title="Alinhamento (Reuniões frequentes para acompanhamento)" />
      <Card image="/icons/circle.svg" title="UX Designing (Equipe profissional e reconhecida)" />
    </div>
  );
};

export default Services;