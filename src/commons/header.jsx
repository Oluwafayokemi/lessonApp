import React from 'react'
import styled from 'styled-components'

export const Header = () => {
  return (
    <HeadWrapper className="head-wrapper">
      <span className="head-style">
        <span>
          <span></span>
          <span>uLesson</span>
        </span>
        <span>
          <span></span>
          <span>Hassan</span>
        </span>
      </span>
    </HeadWrapper>
  )
}

const HeadWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: max-content;
  left: 0px;
  top: 0px;
  background: #313848;

.head-style{
    padding: 1em;
    color: #fff;
    display: flex;
    justify-content: space-between;
}
  `
