const getImageByDate = (date:string) => {
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
