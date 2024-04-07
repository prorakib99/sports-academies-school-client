import InstructorCard from '../../Shared/InstructorCard/InstructorCard';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Instructors = () => {
    return (
        <div
            id='instructors'
            className='py-16 dark:bg-slate-900 border-b-2 border-gray-300 dark:border-white/10 bg-gray-100'
        >
            <div className='container'>
                <div className='lg:w-11/12 mx-auto'>
                    <PageTitle title='Instructors' />
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-10'>
                        <InstructorCard />
                        <InstructorCard />
                        <InstructorCard />
                        <InstructorCard />
                        <InstructorCard />
                        <InstructorCard />
                        <InstructorCard />
                        <InstructorCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructors;
