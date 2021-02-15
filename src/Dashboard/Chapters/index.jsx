import React, { useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { VideoPage } from './videoPage'

export const Chapters = ({ courses }) => {
  const [selectedCourse, setSelectedCourse] = useState({})
  const [isCourseSelected, setIsCourseSelected] = useState(false)

  const openLessonVideo = (lessonId, lessonVideo, lessonName, courseTitle) => {
    setIsCourseSelected(!isCourseSelected)
    setSelectedCourse({ lessonId, lessonVideo, lessonName, courseTitle })
  }

  return (
    <Container>
      {!isCourseSelected ? (
        <div className='course-wrapper'>
          <p className='course-header'>Mathematics</p>
          <ol>
            {courses[0] &&
              courses.map(course => {
                const { id, name: courseTitle, lessons } = course
                return (
                  <div className='wrapper' key={id}>
                    <li>
                      <p>{courseTitle}</p>
                      {lessons[0] &&
                        lessons.map(lesson => {
                          const {
                            id: lessonId,
                            icon: lessonIcon,
                            media_url: lessonVideo,
                            name: lessonName
                          } = lesson
                          return (
                            <div
                              key={lessonId}
                              className='card'
                              onClick={() => {
                                openLessonVideo(
                                  lessonId,
                                  lessonVideo,
                                  lessonName,
                                  courseTitle
                                )
                              }}
                            >
                              <div className='card-wrapper'>
                                <img src={lessonIcon} alt={lessonName} />
                                <div className='label'>
                                  <p>{lessonName}</p>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                    </li>
                  </div>
                )
              })}
          </ol>
        </div>
      ) : (
        <VideoPage selectedCourse={selectedCourse} />
      )}
    </Container>
  )
}

const Container = styled.div`
  background-color: #e5e5e5;
  display: flex;
  
  .course-wrapper {
    padding: 1em;
    font-family: Itim;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 114.21%;
    letter-spacing: -1px;
    color: #313848;
    max-width: max-content;
  }

  .course-header {
    font-family: Itim;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 114.21%;
    letter-spacing: -1px;
    color: #313848;
    padding-left: 4em;

  }

  .subject {
    font-family: Itim;
    font-style: normal;
    font-weight: normal;
    font-size: 33.1525px;
    line-height: 36px;
    letter-spacing: 0.276271px;
    color: #313848;
  }

  .card {
    display: inline-flex;
    cursor: pointer;
    margin-right: 26px;
    margin-bottom: 26px;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
    transition: 0.3s;
    background: #ffffff;
    border-radius: 17.2574px;
    position: relative;
    max-width: 270px;
    max-height: 270px;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  .card-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 12px;
    max-height: 250px;
  }
  .card img {
    max-width: 30%;
    padding: 1em;
    background: #ffffff;
    z-index: 10;
  }

  .label {
    font-family: Mulish;
    font-style: normal;
    font-weight: bold;
    font-size: 19.9124px;
    text-align: center;
    letter-spacing: 0.530996px;
    color: #313848;
    word-wrap: break-word;
    max-width: 250px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
