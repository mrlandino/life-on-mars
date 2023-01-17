const getImageByDate = (date:string) => {
  //need to convert the paramete date into (2022-12-02) format that is not a string. 
  return (
    fetch(`https://api.nasa.gov/planetary/apod?api_key=m5I8olTgrZThXai6adDlgLeX8cUOlJ69IzMVpT7w&date=${date}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error();
      }
    })
  )
}

export { getImageByDate }
