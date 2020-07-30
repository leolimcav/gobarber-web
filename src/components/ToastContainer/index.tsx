import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast>
        <FiAlertCircle />
      </Toast>
    </Container>
  );
};

export default ToastContainer;
