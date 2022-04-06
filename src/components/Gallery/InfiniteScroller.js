import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "../Style.css"

function InfiniteScroller({ items, hasmore, children, loadmore }) {
  return (
    <InfiniteScroll className="scroller-style"
      dataLength={items.length} //This is important field to render the next data
      next={loadmore}
      hasMore={hasmore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {children}
    </InfiniteScroll>
  )
}
export default InfiniteScroller;