import React from 'react';
import styled from "styled-components";
import Tag from './component/Tag';

const App = styled.div`
      width: 450px;
      margin: 0 auto;
`;

export default function (): JSX.Element {
    return <div>
        <App className={'container'}>
            <Tag content={{time: 70, title: "学习React"}} date={{month: "三月", day: 4}}/>
            <Tag content={{time: 35, title: "学习JavaScript"}} date={{month: "AUG", day: 12}}/>
            <Tag content={{time: 23, title: "学习Vue"}} date={{month: "SEP", day: 3}}/>
            <Tag content={{time: 125, title: "TypeScript Learning"}} date={{month: "十月", day: 23}}/>
        </App>
    </div>;
};