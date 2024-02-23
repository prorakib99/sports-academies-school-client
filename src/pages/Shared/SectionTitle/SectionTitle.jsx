const SectionTitle = ({ title }) => {
    return (
        <h4 className='font-bold text-3xl dark:text-white'>
            Our <span className='dark:text-sky-600'>Popular</span> {title}
        </h4>
    );
};

export default SectionTitle;
