import React from "react";
import Layout from "../Components/Layout/Layout";

export default function ListScreen(props) {
  return (
    <>
      <Layout id={props.id} username={props.username}>
        <div className="grid w-screen justify-items-center pt-10">
          <div className="w-full max-w-lg">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-7">
              <div className="grid w-full justify-items-center h-10">
                <label className="text-xl">List</label>
              </div>
              <p>List will go here</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
