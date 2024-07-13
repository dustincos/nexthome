import "./listPage.scss";
import Filter from "../../components/filter/Filter";
import List from "../../components/list/List"; // Import List instead of Card
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

function ListPage({ currentUser }) {
  const data = useLoaderData();

  return (
    <div className="listPage">
      <div className="filterContainer">
        <Filter />
      </div>
      <div className="lis_font">
        <h2 className="list h1">Popular</h2>
        <p className="list p">Available Nearby</p>
      </div>
      <div className="listContainer">
        <div className="wrapper">
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => (
                <List posts={postResponse.data} currentUser={currentUser} />
              )}
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default ListPage;