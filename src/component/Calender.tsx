import styled from "styled-components";
import {useState} from "react";

const Calender = styled.div`
  width: 52px;
  height: 52px;

  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 1px 1.5px 5px rgba(18, 103, 77, 0.62);

  .month {
    height: 20px;
    width: 100%;
    background-color: #077580;
    border-radius: 10px 10px 0 0;
    font-size: 10px;
    font-weight: 600;
    color: #fff;
    line-height: 20px;
  }

  .day {
    font-size: 23px;
    font-weight: 600;
  }
`

export default (props: { date: DateTime }) => {
    const [month] = useState();
    return <Calender>
        <div className="month">
            {props.date.month}
        </div>
        <div className="day">
            {props.date.day}
        </div>
    </Calender>
}