const ReviewCard = ({ review }) => {
    const { studentName, imgUrl, courseName, description } = review;
    return (
        <div className='p-6 border rounded-lg dark:border-white/10 dark:bg-slate-800/[.5] dark:text-white/90 space-y-4'>
            <div className='flex gap-4 items-center'>
                <img alt={studentName} src={imgUrl} className='w-12 object-top rounded-full' />
                <div className=''>
                    <h6 className='text-lg'>{studentName}</h6>
                    <p className='text-sm'>{courseName}</p>
                </div>
            </div>
            <p className='ps-16 text-base'>{description}</p>
        </div>
    );
};

export default ReviewCard;
