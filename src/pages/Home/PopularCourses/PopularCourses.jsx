import CourseCard from './CourseCard/CourseCard';

const PopularCourses = () => {
    return (
        <div className='py-10 pt-20 dark:bg-slate-800'>
            <div className='container'>
                <h4 className='font-bold text-3xl dark:text-white'>
                    Our <span className='dark:text-sky-600'>Popular</span> Classes
                </h4>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-10'>
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                </div>
            </div>
        </div>
    );
};

export default PopularCourses;
