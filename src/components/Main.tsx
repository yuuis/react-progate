import * as React from 'react';
import {Lesson} from './Lesson';

export const Main = () => {
    const lessonList: LessonItem[] = [
        {
            name: 'HTML & CSS',
            image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg',
            introduction: 'WEBページはHTML、CSSという言語によってその見た目が作られています。 実際にWEBページを作りながら学んでみましょう！',
        },
        {
            name: 'Sass',
            image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/sass.svg',
            introduction: 'SassはCSSをより便利に効率的にするための言語です。',
        },
        {
            name: 'JavaScript',
            image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg',
            introduction: 'JavaScriptはフロントエンドだけでなく、サーバーサイドまで広い可能性を持つプログラミング言語です。',
        },
        {
            name: 'React',
            image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg',
            introduction: 'ReactはHTMLのように、サイトの見た目をつくることができるJavaScriptのライブラリです。',
        },
    ];

    return (
        <div className='main-wrapper'>
            <div className='main'>
                <div className='copy-container'>
                    <h1>Hello, World.</h1>
                    <h2>プログラミングの世界へようこそ！</h2>
                </div>
                <div className='lesson-container'>
                    <h3 className='section-title'>学べるレッスン</h3>
                    {lessonList.map((lesson) => {
                        return(
                            <Lesson
                                // Lessonコンポーネントを呼び出し
                                // 3つのpropsを渡している
                                name={lesson.name}
                                image={lesson.image}
                                introduction={lesson.introduction}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

interface LessonItem {
    name: string;
    image: string;
    introduction: string;
}
