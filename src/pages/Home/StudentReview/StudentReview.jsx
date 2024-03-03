import { useState } from 'react';
import commentImage from '../../../assets/comment.svg';
import ReviewCard from './ReviewCard/ReviewCard';
import { studentReviews } from '../../../demoData/reviews';
const StudentReview = () => {
    const [isShowAll, setIsShowAll] = useState(false);
    const [reviews, setReviews] = useState(studentReviews);

    const reviewIndex = Math.ceil(reviews.length / 3);

    const chunkedReviews = Array.from({ length: 3 }, (_, index) =>
        reviews.slice(index * reviewIndex, index * reviewIndex + reviewIndex)
    );

    return (
        <section className='py-16 scroll-mt-16 z-20 relative border-t-2 border-black/[0.15] dark:border-slate-700 dark:bg-slate-900'>
            <div className='container space-y-10'>
                <div className='text-center space-y-4'>
                    <img className='w-20 mx-auto' src={commentImage} alt='Comment Image' />
                    <h4 className='text-3xl font-bold text-black/80 dark:text-white/90'>
                        <span className='dark:text-sky-500'>Student</span> Reviews
                    </h4>
                </div>
                <div>
                    <div
                        className={`grid lg:grid-cols-3 gap-5 ${
                            isShowAll ? '' : 'h-[900px]'
                        } overflow-y-hidden`}
                    >
                        {chunkedReviews.map((group, index) => (
                            <div key={index} className='space-y-6'>
                                {group.map((review, index) => (
                                    <ReviewCard key={review._id || index} review={review} />
                                ))}
                            </div>
                        ))}
                    </div>
                    {reviews.length && (
                        <div
                            className={`absolute inset-x-0 bottom-12 flex justify-center bg-gradient-to-t from-white  pt-80 pb-10 dark:from-slate-900 ${
                                isShowAll ? 'hidden' : ''
                            }`}
                        >
                            <button
                                onClick={() => setIsShowAll(true)}
                                className='dark:bg-secondary2 px-10 flex border-none justify-between gap-2 btn bg-slate-900 text-xl hover:bg-slate-700 dark:hover:bg-sky-700 dark:bg-sky-600 rounded-full text-white'
                                type='button'
                            >
                                See More
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default StudentReview;
