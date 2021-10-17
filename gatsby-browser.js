exports.onPreRouteUpdate = () => {
  setTimeout(() => {
    document.getElementById("loader-wrapper").style.top = "-100vh"
  }, 2000)
}
