import { Link } from 'react-router-dom';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import CourseCard from './CourseCard/CourseCard';
import LinkButton from '../../Shared/LinkButton/LinkButton';

const PopularCourses = () => {
    return (
        <div className='py-16 dark:bg-slate-900 border-b-2 border-gray-300 dark:border-white/10 bg-slate-100'>
            <div className='container'>
                <div className='lg:w-11/12 mx-auto'>
                    <SectionTitle title='Classes' />
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-10'>
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                        <CourseCard />
                    </div>
                    <div className='flex justify-center mt-2'>
                        <Link to='/classes'>
                            <LinkButton text='All Classes' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCourses;
