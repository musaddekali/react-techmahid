 
##  Simple Ligntbox for image and video 

### This function target `<a/>`  tag `href` , `class` and `data-simplelightbox="video` 

This is totaly free lightbox for image and video. Very light weigh and user friedly. (`Super fast`)

#### Insert same class name in all light box link

### For image.
```js
<a class/className="simplelightbox" href="this_link_will_open_when_img_trigger">
    <img src="image_link" alt="simple-lightbox">
</a>
```

### For Video.

```js
<a class/className="simplelightbox" data-simplelightbox="video" href="https://www.youtube.com/embed/Tuw8hxrFBH8" >
    Watch Vidoe
</a>
```

Your have to insert extra (`data-simplelightbox="video"`) for video lightbox. So that the function can understand this is `video link`

> Always use main link in `<a href=""></a>` tag

# How To Apply.

```js
//in react js
import simpleLightBox from 'simpleLightBox/simpleLightBox';
import 'simpleLightBox/simpleLightBox.css';

   useEffect(() => {
        simpleLightBox();
    }, []);


    // in venila js project
    simpleLightBox();
```

# Summary
React.js
-------

```js
import React from 'react';
import portfolioData from './component/Home/Portfolio/portfolioData';
import simpleLightBox from './simpleLightBox/simpleLightBox';
import './simpleLightBox/simpleLightBox.css';


export default function  LightBox() {

    useEffect(() => {
        simpleLightBox();
    }, []);


    return (
        <>
            <div>
                {
                    portfolioData.map((pd) => {
                        return (
                            <div key={pd.id}>
                                <a className='simplelightbox' href={pd.image}>
                                    <img src={pd.image} alt={pd.title} />
                                </a>
                            </div>

                        )
                    })
                }

                <a className="simplelightbox" data-simplelightbox="video" href="https://www.youtube.com/embed/Tuw8hxrFBH8">
                    <h1> Watch video</h1>
                </a>

            </div>
        </>

    )
}

```

> Fell free to customize.
