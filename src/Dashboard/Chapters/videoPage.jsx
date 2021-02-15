import React from 'react'
import styled from 'styled-components'
import { EmbedVideo } from '../../commons/embedVideo'

export const VideoPage = ({ selectedCourse }) => {
  const { lessonName, courseTitle, lessonVideo } = selectedCourse
  const currentPage = 3
  const totalPage = 3
  return (
    <Container>
      <div className='wrapper'>
        <div>
          <EmbedVideo mediaUrl={lessonVideo} style='video-style' wide />
        </div>
        <div className='description'>
          <p className='name'>{lessonName}</p>
          <p className='title'>{courseTitle}</p>
          <div className='btn-next'>Next</div>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  background-color: #e5e5e5;
  margin: 0 auto;
  padding: 5em;
  .description {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .description .name {
    font-family: Muli;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.4px;
    color: #313848;
  }
  .title {
    font-family: Muli;
    font-size: 18px;
    line-height: 134.29%;
    letter-spacing: 0.4px;
    color: #313848;
    opacity: 0.5;
  }
  .btn-next {
    width: 250px;
    background-color: #ea7052;
    padding: 4px;
    float: center;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #ffffff;
    cursor: pointer;
  }
  .video-style {
    width: 1000px;
    height: 700px;
  }
`
