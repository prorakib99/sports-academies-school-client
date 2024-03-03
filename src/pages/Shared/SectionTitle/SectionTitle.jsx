const SectionTitle = ({ title }) => {
    return (
        <h4 className='font-bold text-3xl dark:text-white/90'>
            Our <span className='dark:text-sky-500'>Popular</span> {title}
        </h4>
    );
};

export default SectionTitle;
