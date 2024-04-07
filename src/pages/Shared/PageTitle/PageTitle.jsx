const PageTitle = ({ title }) => {
    return (
        <h4 className='font-bold text-3xl dark:text-white/90'>
            Our All <span className='dark:text-sky-500'>{title}</span>
        </h4>
    );
};

export default PageTitle;
