import styled from "styled-components";
import Calender from "./Calender";
import LearningDetail from "./LearningDetail";

const Tag = styled.div`
  text-align: center;
  padding: 4px;
  margin: 10px auto;
  background-color: #78e8cf;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;
export default (props: { date: DateTime, content: Content }) => {
    return <Tag>
        <Calender date={props.date}/>
        <LearningDetail content={props.content}></LearningDetail>
    </Tag>
}
