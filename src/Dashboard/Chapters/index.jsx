import React, { useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { VideoPage } from './videoPage'

const courses = [
  {
    id: 1,
    name: 'Rational Numbers',
    lessons: [
      {
        id: '1',
        subject: 'Mathematics',
        name: 'Rational numbers',
        icon:
          'https://ulesson-staging.s3.eu-west-2.amazonaws.com/subject_icons/icons/2/thumb/thumb.jpeg',
        media_url:
          'https://d2zjjckqo1cait.cloudfront.net/free_videos/1/original/stapler-FuXgvD.mp4'
      },
      {
        id: '2',
        subject: 'Mathematics',
        name: 'Rational numbers',
        icon:
          'https://ulesson-staging.s3.eu-west-2.amazonaws.com/subject_icons/icons/2/thumb/thumb.jpeg',
        media_url:
          'https://d2zjjckqo1cait.cloudfront.net/free_videos/1/original/stapler-FuXgvD.mp4'
      },
      {
        id: '3',
        subject: 'Mathematics',
        name: 'Rational numbers',
        icon:
          'https://ulesson-staging.s3.eu-west-2.amazonaws.com/subject_icons/icons/2/thumb/thumb.jpeg',
        media_url:
          'https://d2zjjckqo1cait.cloudfront.net/free_videos/1/original/stapler-FuXgvD.mp4'
      },
      {
        id: '4',
        subject: 'Mathematics',
        name: 'Rational numbers',
        icon:
          'https://ulesson-staging.s3.eu-west-2.amazonaws.com/subject_icons/icons/2/thumb/thumb.jpeg',
        media_url:
          'https://d2zjjckqo1cait.cloudfront.net/free_videos/1/original/stapler-FuXgvD.mp4'
      },
      {
        id: '5',
        subject: 'Mathematics',
        name: 'Rational numbers',
        icon:
          'https://ulesson-staging.s3.eu-west-2.amazonaws.com/subject_icons/icons/2/thumb/thumb.jpeg',
        media_url:
          'https://d2zjjckqo1cait.cloudfront.net/free_videos/1/original/stapler-FuXgvD.mp4'
      }
    ]
  },
  {
    id: 2,
    name: 'Linear Equation',
    lessons: [
      {
        id: '6',
        subject: 'Mathematics',
        name: 'Rational numbers',
        icon:
          'https://ulesson-staging.s3.eu-west-2.amazonaws.com/subject_icons/icons/2/thumb/thumb.jpeg',
        media_url:
          'https://d2zjjckqo1cait.cloudfront.net/free_videos/1/original/stapler-FuXgvD.mp4'
      },
      {
        id: '7',
        subject: 'Mathematics',
        name: 'Rational numbers',
        icon:
          'https://ulesson-staging.s3.eu-west-2.amazonaws.com/subject_icons/icons/2/thumb/thumb.jpeg',
        media_url:
          'https://d2zjjckqo1cait.cloudfront.net/free_videos/1/original/stapler-FuXgvD.mp4'
      },
      {
        id: '8',
        subject: 'Mathematics',
        name: 'Rational numbers',
        icon:
          'https://ulesson-staging.s3.eu-west-2.amazonaws.com/subject_icons/icons/2/thumb/thumb.jpeg',
        media_url:
          'https://d2zjjckqo1cait.cloudfront.net/free_videos/1/original/stapler-FuXgvD.mp4'
      },
      {
        id: '9',
        subject: 'Mathematics',
        name: 'Rational numbers',
        icon:
          'https://ulesson-staging.s3.eu-west-2.amazonaws.com/subject_icons/icons/2/thumb/thumb.jpeg',
        media_url:
          'https://d2zjjckqo1cait.cloudfront.net/free_videos/1/original/stapler-FuXgvD.mp4'
      },
      {
        id: '10',
        subject: 'Mathematics',
        name: 'Rational numbers',
        icon:
          'https://ulesson-staging.s3.eu-west-2.amazonaws.com/subject_icons/icons/2/thumb/thumb.jpeg',
        media_url:
          'https://d2zjjckqo1cait.cloudfront.net/free_videos/1/original/stapler-FuXgvD.mp4'
      }
    ]
  }
]

export const Chapters = () => {
  const [selectedCourse, setSelectedCourse] = useState({})
  const [isCourseSelected, setIsCourseSelected] = useState(false)

  const openLessonVideo = (lessonId, lessonVideo, lessonName, courseTitle) => {
    setIsCourseSelected(!isCourseSelected)
    setSelectedCourse({ lessonId, lessonVideo, lessonName, courseTitle })
  }

  let { id } = useParams()
  console.log(id, '@@@@@@@@@@@@2')
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
    margin: 0 auto;
    width: 100%;
  }

  .course-header {
    font-family: Itim;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 114.21%;
    letter-spacing: -1px;
    color: #313848;
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
    flex-flow: rowwrap;
    margin-right: 26px;
    margin-bottom: 26px;
    justify-content: center;
    border: 1px solid #fff;
    transition: 0.3s;
    background: #ffffff;
    border-radius: 17.2574px;
    position: relative;
    max-width: 270px;
    max-height: 270px;
    perspective: 500px;
  }

  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  .card-wrapper {
    display: grid;
    align-content: center;
  }
  .card img {
    width: 40%;
    padding: 1em;
    border-radius: 16.575px;
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
  }
`
