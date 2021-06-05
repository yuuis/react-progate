import React, {Dispatch, FunctionComponent, SetStateAction, useState} from 'react';
import {LessonModal} from './LessonModal';

interface LessonProps {
    name: string;
    image: string;
    introduction: string;
}

export const Lesson: FunctionComponent<LessonProps> = ({name, image, introduction}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className='lesson-card'>
            <div className='lesson-item'>
                <p>{name}</p>
                <img src={image} onClick={() => setIsModalOpen(true)} alt=""/>
            </div>
            { isModalOpen && <LessonModal
              name={name}
              introduction={introduction}
              setIsModalOpen={setIsModalOpen}
            /> }
        </div>
    );
}
