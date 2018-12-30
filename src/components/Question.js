import React, { memo } from 'react'
import styled from 'styled-components'
import AgreementScale from './AgreementScale'
import { MEDIA } from './Framework'

const QuestionStyled = styled.div`
  position: relative;
  padding: 20px 15px;
  border: 1px solid
    ${props =>
      props.isHighlighted ? props.theme.red : props.theme.borderColor};
  border-radius: 4px;
  background-color: ${props => props.theme.background};
  transition-property: background, border;

  &:last-child {
    margin-bottom: 15px;
  }

  &::before {
    content: 'Unanswered';
    position: absolute;
    display: ${props => (props.isHighlighted ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    background: #ff1964;
    color: white;
    font-size: 12px;
    padding: 0 5px;
    text-transform: uppercase;
    top: 0;
    left: 0;
    font-weight: bold;
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

const Title = styled.h2`
  margin-top: 0;
  text-align: center;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 500;

  ${MEDIA.md} {
    margin-bottom: 15px;
  }
`

function Question({ index, agreementIndex, title, isHighlighted, dispatch }) {
  return (
    <QuestionStyled
      isHighlighted={isHighlighted}
      aria-label={isHighlighted ? 'Unanswered' : undefined}
    >
      <Title>{title}</Title>
      <AgreementScale
        questionIndex={index}
        agreementIndex={agreementIndex}
        dispatch={dispatch}
      />
    </QuestionStyled>
  )
}

export default memo(Question)
