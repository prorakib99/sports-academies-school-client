import { Link } from 'react-router-dom';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

import LinkButton from '../../Shared/LinkButton/LinkButton';
import InstructorCard from '../../Shared/InstructorCard/InstructorCard';

const PopularInstructors = () => {
    return (
        <div className='py-16 dark:bg-slate-900 bg-gray-200'>
            <div className='container'>
                <div className='lg:w-11/12 mx-auto'>
                    <SectionTitle title='Instructors' />
                    <div className='grid lg:grid-cols-3 gap-10 py-10'>
                        <InstructorCard />
                        <InstructorCard />
                        <InstructorCard />
                        <InstructorCard />
                        <InstructorCard />
                        <InstructorCard />
                    </div>
                    <div className='flex justify-center mt-2'>
                        <Link to='/instructors'>
                            <LinkButton text='All Instructors' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularInstructors;
