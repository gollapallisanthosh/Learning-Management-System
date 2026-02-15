import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import Coursecard from './Coursecard'

const CoursesSection = () => {

  const {allCourses} = useContext(AppContext)
  return (
    <div className='py-16 md:px-40 px-8 text-center flex flex-col items-center'>
      <h2 className='text-3xl font-medium text-gray-800'>Learn from the best</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3 max-w-2xl'>
        Discover our top-rated courses across various categories. From coding and design to  <br/> business and wellness, our courses are crafted to deliver results.
      </p>

      <div className='grid grid-cols-auto px-4 md:px-0 md:my-16 my-10 gap-4'>
        {allCourses.slice(0,4).map((course, index)=> <Coursecard key={index} course={course}/>)}
      </div>

      <Link
        to={'/course-list'}
        onClick={() => scrollTo(0, 0)}
        className='mt-5 text-gray-500 border border-gray-500/30 px-10 py-3 rounded hover:shadow-md transition'
      >
        Show all courses
      </Link>
    </div>
  )
}

export default CoursesSection
