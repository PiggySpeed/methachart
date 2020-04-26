export default function splitData(data, chunksize) {
  /**
   * Returns a new array of data split into smaller chunks with a max size of chunksize.
   *
   * data (arr): an array of data to be split up
   * chunksize (int): the maximum size of chunks
   * **/
  console.log('data 2 is ', data);
  var feed = data.slice(); // copy the original array
  var arrLength = Math.ceil(feed.length/chunksize);
  var arr = new Array(arrLength);

  for(var i = 0; i<arrLength-1; ++i){
    arr[i] = feed.splice(0, chunksize)
  }
  arr[arr.length-1] = feed.slice(); // add the remainder
  return arr;
}
