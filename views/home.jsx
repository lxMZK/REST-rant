const React = require('react')
const Def = require('./default')

function home(){
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/account.png" alt="Placeholder" />
                    <div>
                        Photo by <a href="https://youtube.com">YouTube</a>
                    </div>
                </div>
                <a href="/places">
                    <button className='btn-primary'>Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home