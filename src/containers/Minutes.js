import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import MinutesCounter from '../components/MinutesCounter';
import SquareGrid from '../components/SquareGrid';
import Header from '../components/Header';
import useInterval from '../resources/hooks/useInteval';
import { updateTime } from '../actions/index';
import selectRemainingTime from '../selectors/selectRemainingTime';

const MinutesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  color: ${p => p.theme.fullWhite};
  max-width: 76rem;
  width: 100%;
  min-height: 100%;
`;

const Wrapper = () => {
  const {
    remainingMinutes,
    remainingSeconds
  } = selectRemainingTime();

  const dispatch = useDispatch();

  useInterval(() => {
    dispatch(updateTime());
  }, 1000);

  return (
    <MinutesContainer>
      <SquareGrid
        remainingMinutes={remainingMinutes}
        remainingSeconds={remainingSeconds}
      />
      <Header text={<FormattedMessage id="app.title" />} />
      <MinutesCounter remainingMinutes={remainingMinutes} />
    </MinutesContainer>
  );
};

Wrapper.displayName = 'MinutesContainer';

export default Wrapper;
