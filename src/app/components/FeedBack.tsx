import React from "react";

type Props = {};

function FeedBack({}: Props) {
  return (
    <div>
      <h1>What Features should i add or improve ?</h1>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-warning w-full max-w-xs"
      />
    </div>
  );
}

export default FeedBack;
