import '../css/css_home.css'
import React from 'react';
import { format } from 'date-fns';
import ptLocale from 'date-fns/locale/pt'; // Importe o pacote de localização para o português

interface CurrentDateProps {
  // Adicione propriedades conforme necessário
}

const CurrentDate: React.FC<CurrentDateProps> = () => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'EEEE, d MMMM yyyy', { locale: ptLocale });

  return (
    <p className='date'>
      {formattedDate}
    </p>
  );
};

export default CurrentDate;
