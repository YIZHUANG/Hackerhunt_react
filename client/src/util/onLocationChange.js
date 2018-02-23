import React from 'react';

const OnLocationChanged=(currentLocation,nextLocation)=>{
  //if the localtion changes

  let currentpath=currentLocation==="/"?"/pages/0":currentLocation;

  let originPath = currentpath.split("/"); //current page number

  let originPageNumber = Number(originPath[originPath.length - 1]); //to isolate the number from the path

  let changedpath=nextLocation==="/"?"/pages/0":nextLocation;

  let nextPath = changedpath.split("/"); //updated page path
  let nextPageNumber = Number(nextPath[nextPath.length - 1]); //to isolate the number from the path

  if ((originPath[2]==nextPath[2]&&originPageNumber !== nextPageNumber)||(originPath[1]="pages"===nextPath[1]&&originPath[2]!== nextPath[2])) {
    //only want this function to run if page number changes instead of the overall path.
    return true;
  }

    return false;
  //if (this.props.location.pathname !== nextProps.location.pathname) {
  //  this.fetchPosts(nextProps.location.pathname);   //this is also ok, but it slows down the performance of the website,and cause bugs.
  //}
}


export default OnLocationChanged;
