import React from "react";
import Layout from "../Components/Layout/Layout";

export default function Account(props) {
  return (
    <div>
      <Layout id={props.id} username={props.username}>
        <div className="grid w-screen justify-items-center pt-10">
          <div className="w-full max-w-[750px]">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-7">
              <div className="grid w-full justify-items-center h-10">
                <h3 className="text-xl">Account</h3>
              </div>
              <p>This needs:</p>
              <p>edit username -{`>`} no special restrictions </p>
              <p>edit password -{`>`} user must provide current password </p>
              <p>delete user -{`>`} user must provide current password </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
