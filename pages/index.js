import 'animate.css';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

function HomePage() {


  // Random Region

//   var randomImg = [
//     '<img src="/pic.png"></img>',
// '<img src="/pic1.jpg"></img>',
// '<img src="/pic2.png"></img>',
// '<img src="/pic3.png"></img>',
// '<img src="/pic4.png"></img>',
// '<img src="/pic5.png"></img>',

//   ]
//   const out = []

//   for (let i = 0; i < randomImg.length; i++) {
//     out.push(randomImg.splice(Math.floor(Math.random() * randomImg.length), 1))
//   }

  return (
    <>
    <Head>
    <title>collage poetics 2023</title>
    </Head>
  <div className="text">
  <div className="cloudheader">
    {/* <div className="cloudh1">
        <div className="">
            <a href="#">
            Resources
            </a>
        </div>
        <div className="">
        <a href="#">
            Inspiration
            </a>
        </div>
    </div> */}
<img src="/cloud.png" layout="fill"></img>

</div>
    <div className="header">
    <img src="/CollagePoetics.png" layout="fill" draggable="false" onDragStart="return false;" onContextMenu="return false;" ></img>
    </div>

    <div className="container">

        <div className="group animate__animated animate__bounceInDown">
            Syllabus
            <div className="card default">
            <a target="_blank" href="https://docs.google.com/document/d/1FAHL7zy8U_gcXnkgR9roEQUo_wpfH9uXnH4tzgRgv_M/edit?usp=sharing">
            <div className="link"></div>
</a>
            </div>
        </div>
        <div className="row">

        <div className="group">
            Lecture: On Collage
            <div className="card transparent">
            <a target="_blank" href="/Collage-Poetics-2023-Day-1.pdf">
            <div className="link">

            <div className="nodal">
                    <div className="dot"></div>
                </div>
                <div className="point">

                </div>

            </div>
</a>


            </div>
        </div>
        <div className="group">
        Orientations of a Queer Phenomenology by Sara Ahmed
            <div className="cardcontainer">
            <div className="card sara">
            <a href="/Excerpt-Orientations+Toward+a+Queer+Phenomenology.pdf" target="_blank">
            <img src="sweatshirt.jpg"></img>
            </a>

            </div>            

            </div>
        </div>
        </div>
        <div className="row">

<div className="group">
 Journal Prompts
    <div className="cardcontainer">
    <div className="card amiri">
        <a href="https://docs.google.com/document/d/17thFROeYoqlPC47DXvapOj9uYkCKLvwbkHZBQEZFyVk/edit?usp=sharing" target="_blank">
    <img src="fashion.jpg"></img>
    </a>
    </div>            
    </div>
</div>
<div className="group">
        Surveys
            <div className="cardcontainer">
            <div className="card orange">
            <a target="_blank" href="https://forms.gle/xZvHGd5wWM2w4nVy8">
            <div className="link">
                </div>
                </a>
            </div>            
            <div className="card purple">
            <a target="_blank" href="https://forms.gle/9rCxvDbrYqHBepnL8">
            <div className="link">
                </div>
                </a>
            </div>
            </div>
        </div>
</div>
    </div>
    <footer>
        <div className="websitewiki">
        This website is made to house the syllabus and the archive of Yale MFA course Collage Poetics’ spring 2023 semester. It launched the first day of the course 1/23/23 and will reveal itself fully through 4/24/23 the final day of the course.
        </div>
        <div>

        </div>
    </footer>
  </div>
  </>
  )
}

export default HomePage