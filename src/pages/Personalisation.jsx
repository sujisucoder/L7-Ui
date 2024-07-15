import React, { useState } from 'react';

const Search = () => {
    return (
        <div className='p-20 grid justify-center items-center'>
            <div className='pb-8'>
                <h1 className='text-3xl font-bold'>
                    Select 3 or more interested <span className='text-primaryBlue'>Jobs</span>
                </h1>
            </div>
            <div className='relative'>
                <input
                    className='border-4 border-primaryBlue rounded-full w-[413px] h-[36px] pl-10 pr-4'
                    type='text'
                    placeholder='Search'
                />
                <svg
                    className='absolute top-2 left-3 text-primaryBlue'
                    width='15'
                    height='16'
                    viewBox='0 0 15 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M14.3785 14.4141L11.6219 11.4348C12.5113 10.2066 12.9939 8.68987 12.9921 7.12846C12.9921 5.7379 12.6117 4.37857 11.8989 3.22236C11.1862 2.06615 10.1732 1.16499 8.988 0.632847C7.80279 0.100703 6.49861 -0.0385307 5.2404 0.232754C3.98219 0.504039 2.82644 1.17366 1.91932 2.15693C1.0122 3.14021 0.39444 4.39298 0.144166 5.75682C-0.106108 7.12066 0.0223416 8.53432 0.513272 9.81903C1.0042 11.1037 1.83557 12.2018 2.90223 12.9744C3.96889 13.7469 5.22294 14.1593 6.50581 14.1593C7.94629 14.1612 9.34554 13.6381 10.4787 12.674L13.2272 15.6621C13.3026 15.7445 13.3923 15.8099 13.4911 15.8545C13.5899 15.8991 13.6958 15.9221 13.8029 15.9221C13.9099 15.9221 14.0159 15.8991 14.1147 15.8545C14.2135 15.8099 14.3032 15.7445 14.3785 15.6621C14.4545 15.5804 14.5148 15.4832 14.556 15.3761C14.5972 15.269 14.6184 15.1541 14.6184 15.0381C14.6184 14.9221 14.5972 14.8072 14.556 14.7001C14.5148 14.593 14.4545 14.4958 14.3785 14.4141ZM1.6411 7.12846C1.6411 6.08554 1.92641 5.06604 2.46095 4.19888C2.99549 3.33173 3.75526 2.65586 4.64417 2.25675C5.53307 1.85764 6.5112 1.75322 7.45487 1.95668C8.39853 2.16014 9.26533 2.66236 9.94567 3.39982C10.626 4.13727 11.0893 5.07685 11.277 6.09973C11.4647 7.12261 11.3684 8.18286 11.0002 9.14639C10.632 10.1099 10.0085 10.9335 9.20849 11.5129C8.4085 12.0923 7.46796 12.4016 6.50581 12.4016C5.21561 12.4016 3.97825 11.846 3.06594 10.8571C2.15363 9.86821 1.6411 8.52697 1.6411 7.12846Z'
                        fill='#2A8BF2'
                    />
                </svg>
            </div>
        </div>
    );
};

const CustomCheckbox = () => {
    const checkboxes = [
        'Checkbox 1', 'Checkbox 2', 'Checkbox 3', 'Checkbox 4',
        'Checkbox 5', 'Checkbox 6', 'Checkbox 7', 'Checkbox 8',
        'Checkbox 9', 'Checkbox 10', 'Checkbox 11', 'Checkbox 12',
        'Checkbox 13', 'Checkbox 14', 'Checkbox 15', 'Checkbox 16',
        'Checkbox 17', 'Checkbox 18', 'Checkbox 19', 'Checkbox 20'
    ];

    const [checkedItems, setCheckedItems] = useState({});

    const handleCheckboxChange = (index) => {
        setCheckedItems({
            ...checkedItems,
            [index]: !checkedItems[index]
        });
    };

    return (
        <div className='p-4'>
            <form>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-20'>
                    {checkboxes.map((checkbox, index) => (
                        <label
                            key={index}
                            className={`inline-block border-2 ${checkedItems[index] ? 'text-white bg-blue-500 opacity-100' : 'text-blue-500 bg-transparent opacity-50'} p-2 rounded-full cursor-pointer font-bold`}
                            onMouseEnter={() => {
                                if (!checkedItems[index]) {
                                    setCheckedItems({
                                        ...checkedItems,
                                        hoverIndex: index
                                    });
                                }
                            }}
                            onMouseLeave={() => {
                                if (!checkedItems[index]) {
                                    setCheckedItems({
                                        ...checkedItems,
                                        hoverIndex: null
                                    });
                                }
                            }}
                        >
                            <input
                                type='checkbox'
                                className='appearance-none mr-2'
                                checked={checkedItems[index] || false}
                                onChange={() => handleCheckboxChange(index)}
                            />
                            {checkbox}
                        </label>
                    ))}
                </div>
            </form>
        </div>
    );
};

const Personalisation = () => {
    return (
        <div className='relative'>
            <div className=''>
                <button className='border-2 border-primaryBlue px-3 m-10 text-primaryBlue rounded-2xl'>Skip</button>
            </div>
            <div className='absolute top-0 right-0 overflow-hidden'>
                <svg width='332' height='368' viewBox='0 0 332 368' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M449.285 236.424C460.099 220.016 468.167 202.509 473.402 184.452L516.142 176.994L516.571 133.737L517 90.4805L474.517 82.2374C469.626 64.1024 461.901 46.4385 451.431 29.8737L475.805 -3.02039L442.677 -33.8734L409.635 -64.7263L373.246 -43.0586C355.309 -52.9504 336.17 -60.33 316.431 -65.1188L308.278 -104.215L260.989 -104.607L213.7 -105L204.689 -66.0609C184.864 -61.5861 165.553 -54.5205 147.445 -44.9427L111.485 -67.2385L77.756 -36.9351L44.0274 -6.7102L67.7147 26.5764C56.9009 42.9842 48.8335 60.4911 43.5983 78.5475L0.858234 86.0056L0.429117 129.263L0 172.52L42.5684 180.763C47.4603 198.898 55.1844 216.562 65.6549 233.126L41.2811 266.02L74.4089 296.873L107.537 327.726L143.926 306.059C161.863 315.95 181.002 323.33 200.741 328.119L208.894 367.215L256.183 367.607L303.471 368L312.483 329.061C332.308 324.586 351.618 317.521 369.727 307.943L405.687 330.239L439.416 299.935L473.144 269.632L449.285 236.424ZM175.852 205.728C131.052 163.962 131.739 96.8395 177.397 55.8593C223.055 14.879 296.434 15.5071 341.234 57.2724C386.034 99.0377 385.347 166.16 339.689 207.141C294.031 248.121 220.652 247.493 175.852 205.728Z' fill='#2A8BF2' />
                </svg>
            </div>
            <div>
                <Search />
            </div>
            <div>
                <CustomCheckbox />
            </div>
            <div className='absolute bottom-[-460px]'>
                <svg width='200' height='187' viewBox='0 0 200 187' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M159.659 204.999C166.102 195.147 170.908 184.635 174.027 173.794L199.489 169.316L199.744 143.343L200 117.371L174.691 112.422C171.777 101.533 167.175 90.9271 160.938 80.9812L175.458 61.2309L155.722 42.706L136.038 24.1812L114.359 37.191C103.673 31.2518 92.2716 26.8209 80.512 23.9456L75.6547 0.471369L47.4827 0.235685L19.3108 0L13.9423 23.3799C2.13149 26.0667 -9.3725 30.309 -20.1607 36.0597L-41.5837 22.6729L-61.6773 40.8677L-81.7709 59.0154L-67.6594 79.0015C-74.1016 88.8531 -78.9077 99.3646 -82.0266 110.206L-107.489 114.684L-107.744 140.657L-108 166.629L-82.6401 171.578C-79.7258 182.467 -75.1242 193.073 -68.8865 203.019L-83.407 222.769L-63.6713 241.294L-43.9356 259.819L-22.257 246.809C-11.571 252.748 -0.169312 257.179 11.5903 260.054L16.4476 283.529L44.6195 283.764L72.7915 284L78.16 260.62C89.9708 257.933 101.475 253.691 112.263 247.94L133.686 261.327L153.78 243.132L173.873 224.937L159.659 204.999ZM-3.23704 186.568C-29.9263 161.491 -29.5173 121.189 -2.31673 96.5836C24.8838 71.9781 68.5989 72.3552 95.2882 97.432C121.977 122.509 121.568 162.811 94.3679 187.416C67.1673 212.022 23.4522 211.645 -3.23704 186.568Z' fill='#FFBE55' />
                </svg>
            </div>
        </div>
    );
};

export default Personalisation;
