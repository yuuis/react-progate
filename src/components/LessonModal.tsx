import React, {Dispatch, FunctionComponent, SetStateAction} from 'react';

interface LessonModalProps {
    name: string;
    introduction: string;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>
}

export const LessonModal: FunctionComponent<LessonModalProps> = ({name, introduction, setIsModalOpen}) =>
    <div className='modal'>
        <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-introduction'>
                <h2>{name}</h2>
                <p>{introduction}</p>
            </div>
            <button className='modal-close-btn' onClick={() => setIsModalOpen(false)}>
                とじる
            </button>
        </div>
    </div>
