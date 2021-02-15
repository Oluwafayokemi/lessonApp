import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Subjects } from './subjects'
import { RecentlyWatched } from './recently_watched'
import { RecommendedVideos } from './recommended_videos'
import { Chapters } from './Chapters'

const url = 'https://jackiechanbruteforce.ulesson.com/3p/api/content/grade'

export const Dashboard = () => {
  const [courses, setCourses] = useState('')
  const [openCourse, setOpenCourse] = useState(false)

  useEffect(() => {
    if (!courses) {
      getSubject()
    }
  }, [courses])

  const getSubject = async () => {
    try {
      const subject = await fetch(url)
      const { data } = await subject.json()
      setCourses(data.subjects)
    } catch (error) {
      throw Error(error)
    }
  }
  const recentlyPlayedVideos = [
    {
      id: 1,
      url:
        'https://d2zjjckqo1cait.cloudfront.net/free_videos/1/original/stapler-FuXgvD.mp4',
      name: 'Understanding Motion',
      subject: 'Mathematics'
    },
    {
      id: 2,
      url:
        'https://d2zjjckqo1cait.cloudfront.net/free_videos/1/original/stapler-FuXgvD.mp4',
      name: 'Light',
      subject: 'Physics'
    },
    {
      id: 3,
      url:
        'https://d2zjjckqo1cait.cloudfront.net/free_videos/1/original/stapler-FuXgvD.mp4',
      name: 'Water Pollution',
      subject: 'Chemistry'
    },
    {
      id: 4,
      url:
        'https://d2zjjckqo1cait.cloudfront.net/free_videos/1/original/stapler-FuXgvD.mp4',
      name: 'Microorganism',
      subject: 'Biology'
    }
  ]

  const linkToChapter = id => {
    console.log(id, '###############')
    setOpenCourse(!openCourse)
  }

  return (
    <Container>
      {!openCourse ? (
        <div className='wrapper'>
          <div className='course'>
            <p className='user-name'>Hello Hassan,</p>
            <Subjects courses={courses} linkToChapter={linkToChapter} />
          </div>

          <div>
            <div className='watched'>
              <p className='topic'>Recently Watched Topics</p>
              <div className='see-btn'>
                <p>See All</p>
              </div>
            </div>
            <RecentlyWatched recentlyPlayedVideos={recentlyPlayedVideos} />
          </div>

          <div>
            <div className='watched'>
              <p className='topic'>Recommmended Videos</p>
              <div className='see-btn'>
                <p>See All</p>
              </div>
            </div>
            <RecommendedVideos recommendedVideos={recentlyPlayedVideos} />
          </div>
        </div>
      ) : (
        <Chapters />
      )}
    </Container>
  )
}

const Container = styled.div`
  background-color: #e5e5e5;

  .wrapper {
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
  }

  .user-name {
    font-family: Itim;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 114.21%;
    letter-spacing: -1px;
    color: #313848;
  }

  .watched {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 1em 10px 15px;
  }

  .topic {
    font-family: Itim;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #313848;
  }

  .see-btn p {
    background: #ea7052;
    border-radius: 6.90722px;
    color: #fff;
    cursor: pointer;
    text-align: center;
    line-height: 35px;
    margin: 0 auto;
    width: 98.08px;
    height: 33.15px;
    font-family: Muli;
    font-size: 13.8144px;
    text-align: center;
    letter-spacing: 1.38144px;
    text-transform: uppercase;
    color: #ffffff;
  }
`
