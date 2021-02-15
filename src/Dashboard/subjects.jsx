import React from 'react'
import styled from 'styled-components'

export const Subjects = ({ courses, linkToChapter }) => {
  return (
    <Container>
      {courses[0] &&
        courses.map(course => {
          const { id, name, icon } = course
          return (
            <span
              key={id}
              className='course-style'
              onClick={() => linkToChapter(id)}
            >
              <div className='image'>
                <img src={icon} alt={name} />
              </div>
              <div className='title'>
                <span className='name'>{name}</span>
              </div>
            </span>
          )
        })}
    </Container>
  )
}

const Container = styled.div`


  .course-style {
    grid-template-columns: 100px 50px 100px;
    grid-template-rows: 80px auto 80px;
    column-gap: 10px;
    row-gap: 15px;
    position: relative;
    padding: 0 2.8em;
    cursor: pointer;
  }
  .course-style .image,
  .course-style .title {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .course-style img {
    max-width: 250px;
    min-width: 250px;
    max-height: 100px;
    min-height: 100px;
    object-fit: cover;
    border-radius: 16.575px;
    background: #ffffff;
    opacity: 0.5;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    z-index: 10;
  }

  .name {
    font-family: Muli;
    font-size: 15.3px;
    margin-right: 2em;
    margin-top: 3em;
    float: right;
    letter-spacing: 2.55px;
    text-transform: uppercase;
    color: #fff;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    max-height: 10px;
  }
`
