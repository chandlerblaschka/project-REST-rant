const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div className="image404">
                <img src="/images/searching-not-found.jpg" alt="Image of hand holding a compass - page not found"/>
              </div>
              <div>
              Photo by <a href="https://unsplash.com/@e_sykes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ethan Sykes</a> on <a href="https://unsplash.com/s/photos/not-found?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </div>
          </main>
      </Def>
    )
  }

module.exports = error404