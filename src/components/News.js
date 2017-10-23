import React from 'react';


const News = ({news}) => (
    <div id="second-block">
        <div className="line">
            <div className="margin-bottom">
                <div className="margin">
                    <article className="s-12 l-8 center">
                        <h1>News</h1>
                        {news.map(newtitle => (
                            <p key={newtitle.title} className="margin-bottom">
                                {newtitle.title}
                                {console.log("8-> News component renders result from New Container(Parent)")}
                            </p>

                        ))}



                        <a className="button s-12 l-4 center" href="product.html">Read more</a>
                    </article>
                </div>
            </div>
        </div>
    </div>
)

export default News;