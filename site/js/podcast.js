document.addEventListener(
  "DOMContentLoaded",
  function() {
    // Create a popcporn instance by calling Popcorn("#id-of-my-video")
    var pop = Popcorn("#podcast")
    console.log(pop)

    pop.footnote({
      start: 2,
      end: 5,
      target: "footnote-container",
      text: "Pop!"
    })
  },
  false
)
