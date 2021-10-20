const loadCoinImages = (objectsImg) => {
  const coinImages = Array.from({length:6}, (el, i) => {
    return objectsImg.get(i*84,0,84,84)
  })
  return coinImages
}

const loadBlobImages = (runImg) => {
  console.log(runImg)
  const runImages = Array.from({length:8}, (el, i) => {
    console.log(i, runImg)
    return runImg.get(i * 555, 12, 600, 600)
  })
  return runImages
}

