const getImagesByDate = () => {
  //need to convert the paramete date into (2022-12-02) format that is not a string. 
  return (
    fetch(``)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error();
      }
    })
  )
}

export { getImagesByDate }

// `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${}`