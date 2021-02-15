import React from 'react'
import styled from 'styled-components'
import { EmbedVideo } from '../commons/embedVideo'

let color = ''

const getColor = subject => {
  switch (subject) {
    case 'Mathematics':
      color = '#EA7052'
      break
    case 'Physics':
      color = '#7B7FDA'
      break
    case 'Biology':
      color = '#4DA47E'
      break
    case 'Chemistry':
      color = '#E48E45'
      break
    default:
      color = '#EA7052'
  }
}
export const RecommendedVideos = ({ recommendedVideos }) => {
  return (
    <Container>
      {recommendedVideos[0] &&
        recommendedVideos.map(recentlyPlayed => {
          const { id, url, name, subject } = recentlyPlayed
          getColor(subject)
          return (
            <span className='video-style' key={id}>
              <div>
                <div className='frame'>
                  <EmbedVideo mediaUrl={url} />
                </div>
                <span className='font'>
                  <p className='subject' style={{ color }}>
                    {subject}
                  </p>
                  <p className='name'>{name}</p>
                </span>
              </div>
            </span>
          )
        })}
    </Container>
  )
}

const Container = styled.div`
  .video-style {
    display: inline-flex;
    justify-content: space-between;
    padding: 15px;
  }

  .subject {
    font-family: Muli;
    font-size: 16.5773px;
    letter-spacing: 0.552577px;
  }

  .font {
    line-height: 5px;
  }

  .name {
    font-family: Muli;
    font-size: 22.1031px;
    letter-spacing: 0.552577px;
    text-transform: capitalize;
    color: #313848;
    white-space: pre-wrap;
    line-height: 28px;
  }
`
