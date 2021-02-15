import React from 'react'
import styled from 'styled-components'

export const EmbedVideo = ({ mediaUrl, style, wide = '' }) => {
  return (
    <MediaFrame
      className={wide ? style : ''}
      scrolling='yes'
      src={mediaUrl}
      frameBorder='0'
      allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      title='Embedded cloudfront'
    />
  )
}

const MediaFrame = styled.iframe`
  padding: 0;
  margin: 0;
  border-radius: 8px;
  opacity: 0.8;
`
