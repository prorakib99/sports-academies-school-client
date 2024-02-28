import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

import { Autoplay, EffectCards } from 'swiper/modules';
import instructors from '../../../demoData/instractors';
import { Link } from 'react-router-dom';
import LinkButton from '../../Shared/LinkButton/LinkButton';
const Hero = () => {
    return (
        <div className='dark:bg-[#0B1120]/60 border-b-2 border-gray-300 dark:border-white/10 bg-gray-200'>
            <div className='container'>
                <div className='py-20 lg:py-40 grid lg:grid-cols-2 items-center'>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards, Autoplay]}
                        className='mySwiper w-[250px] h-[350px] md:!w-[300px] md:!h-[400px]'
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false
                        }}
                    >
                        {instructors.map((person, index) => (
                            <SwiperSlide
                                key={index}
                                className='relative before:absolute before:w-full before:h-full before:bg-gradient-to-t before:from-gray-800'
                            >
                                <img
                                    className='object-cover max-w-full w-full h-full'
                                    src={person.img}
                                    alt=''
                                />
                                <div className='absolute bottom-0 -translate-x-1/2 left-1/2 w-full mb-2'>
                                    <h4 className='text-center'>{person.name}</h4>
                                    <p className='text-lg text-center'>{person.expertise}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='w-full self-center p-6 lg:border-l-2 lg:border-slate-700 dark:lg:border-yellow-400'>
                        <h1 className='text-4xl mb-4 font-bold dark:text-white'>
                            Our <span className='dark:text-sky-600'>Instructors</span>
                        </h1>
                        <p className='text-normal text-lg text-slate-700 dark:text-slate-400'>
                            The Sports Academy Summer School is an exciting and dynamic program
                            designed to provide young athletes with a unique and enriching summer
                            experience. Tailored for students passionate about sports, this academy
                            combines expert coaching, skill development, and a holistic approach to
                            foster physical and mental well-being. The program emphasizes not only
                            skill acquisition but also teamwork, sportsmanship, and leadership.
                        </p>
                        <p className='text-normal mt-2 text-lg text-slate-700 dark:text-slate-400'>
                            With state-of-the-art facilities, experienced coaches, and a supportive
                            environment, the Sports Academy Summer School aims to inspire young
                            athletes to reach their full potential while creating lasting memories
                            and friendships in a fun and active summer setting.
                        </p>
                        <div className='mt-6'>
                            <Link to='/classes'>
                                <LinkButton text='All Classes' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
