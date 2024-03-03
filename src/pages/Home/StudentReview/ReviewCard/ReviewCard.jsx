const ReviewCard = () => {
    return (
        <div className='p-6 border rounded-lg dark:border-white/10 dark:bg-slate-900/[0.4] dark:text-white/90 space-y-4'>
            <div className='flex gap-4 items-center'>
                <img
                    alt='Md Rakibul Islam'
                    src='https://i.ibb.co/b3YnqXV/rakib-without-bg-shot-removebg-preview.jpg'
                    className='w-12 rounded-full'
                />
                <div className=''>
                    <h6 className='text-lg'>Md Rakibul Islam</h6>
                    <p className='text-sm'>Digital Marketing</p>
                </div>
            </div>
            <p className='ps-16 text-base'>
                Dada bangladesh e emon creator ache ami jantam nah. vabtam traversy media,
                academind, neso academy, etc ei gular moto better quality keu dite parbe nah
                bangladesh e kintu dada aponar video
            </p>
        </div>
    );
};

export default ReviewCard;
