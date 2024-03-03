import Hero from '../Hero/Hero';
import PopularCourses from '../PopularCourses/PopularCourses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import StudentReview from '../StudentReview/StudentReview';

const Home = () => {
    return (
        <div className='dark:bg-[#0B1120]/80 duration-500'>
            <Hero />
            <PopularCourses />
            <PopularInstructors />
            <StudentReview />
        </div>
    );
};

export default Home;
