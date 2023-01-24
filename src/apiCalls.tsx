const getImageByDate = (date:string) => {
  return (
    fetch(`https://api.nasa.gov/planetary/apod?api_key=m5I8olTgrZThXai6adDlgLeX8cUOlJ69IzMVpT7w&date=${date}`)
  )
}

export { getImageByDate }
