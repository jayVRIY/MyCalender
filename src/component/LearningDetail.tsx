import styled from "styled-components";

export default (props: { content: Content }) => {
    return <LearningDetail>
        <div className="learningThing">
            {props.content.title}
        </div>
        <div className="time">
            {props.content.time}分钟
        </div>
    </LearningDetail>
}
const LearningDetail = styled.div`
  text-align: center;
  margin: 0 auto;
  align-self: center;
  flex: auto;

  .learningThing {
    font-weight: 600;
    font-size: 13px;
  }

  .time {
    margin-top: 6px;
    font-weight: 600;
    font-size: 13px;
    color: #077580;
  }
`