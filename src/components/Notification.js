import React, { useContext } from 'react';
import { Context } from '../context';
import styled from 'styled-components';

const NotificationMessage = styled.p`
  margin-bottom: 3rem;
`;

const Notification = () => {
  const { notification } = useContext(Context);
  return <NotificationMessage>{notification}</NotificationMessage>;
};

export default Notification;
