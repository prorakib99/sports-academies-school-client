import Hero from '../Hero/Hero';
import PopularCourses from '../PopularCourses/PopularCourses';

const Home = () => {
    return (
        <div className='dark:bg-[#0B1120]/80 duration-500'>
            <Hero />
            <PopularCourses />
        </div>
    );
};

export default Home;
