import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
        </div>
        Are you sure you want to this?
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jam"
          timeAgo="Today at 3:59AM"
          content="Nice work mate!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Ben"
          timeAgo="Today at 3:22PM"
          content="Well done!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>{" "}
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Yesterday at 11:20PM"
          content="Amazing!!!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
