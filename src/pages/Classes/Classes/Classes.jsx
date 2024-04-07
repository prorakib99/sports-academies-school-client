import CourseCard from '../../Home/PopularCourses/CourseCard/CourseCard';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Classes = () => {
    return (
        <div className='py-16 dark:bg-slate-900 border-b-2 border-gray-300 dark:border-white/10 bg-gray-100'>
            <div className='container'>
                <PageTitle title='Classes' />
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-10'>
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                </div>
            </div>
        </div>
    );
};

export default Classes;
