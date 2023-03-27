import 'animate.css';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

function Week2() {


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
    <div className="week week2">
    <Head>
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
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
    <div className="head"><a href="https://collage-poetics.com/">Collage Poetics</a></div>
    <div className="subhead">Week 2 - Sketching</div>
    </div>

    <div className="portal next">
        <a href="/week3">
            Next Week
        </a>
    </div>

    <div className="portal last">
        <a href="/week1">
            Last Week
        </a>
    </div>

    <div className="click">
        <a href="https://docs.google.com/spreadsheets/d/1hBWCRV9fTf0BlN7hTykIjYfiBWIuMQpY7kmop6ilUCs/edit?usp=sharing"  target="_blank">
            office hours
        </a>
    </div>

    <div className="container">
    <div className="row">
        <div className="group animate__animated animate__bounceInDown">
            Syllabus
            <div className="card default">
            <a target="_blank" href="https://docs.google.com/document/d/1FAHL7zy8U_gcXnkgR9roEQUo_wpfH9uXnH4tzgRgv_M/edit?usp=sharing">
            <div className="link"></div>
</a>
            </div>
            
        </div>
        <div className="group">
        Journal Prompts
            <div className="cardcontainer">
            <div className="card journal2">
            <a href="https://docs.google.com/document/d/17thFROeYoqlPC47DXvapOj9uYkCKLvwbkHZBQEZFyVk/edit?usp=sharing" target="_blank">
            <img src="mm6.jpeg"></img>
            </a>

            </div>            

            </div>
        </div>
        <div className="group">
        Invite to our Are.na
            <div className="cardcontainer">
            <div className="card blue">
            <a target="_blank" href="https://www.are.na/group/collage-poetics/invite/v4ZqObrOr7Fbde7By4dPLA">
            <div className="link">
                </div>
                </a>
            </div>            
            </div>
        </div>
        </div>

        <div className="row">

        <div className="group">
            Hackers and Painters
            <div className="card black">
            <a target="_blank" href="http://www.paulgraham.com/hp.html">
            <div className="link">


            </div>
</a>


            </div>
        </div>

        <div className="group">
        Audiobook by <a class="underline" href="https://youtu.be/FqNDYvsOZkc?t=197">Rick Rubin</a>
            <div className="cardcontainer">
            <div className="card black">
            <a href="CreativeActWayofBeing.mp3" target="_blank">
                <div className="link">
                ► Excerpt from “The Creative Act: A Way of Being” <br></br><br></br><br></br>
                Chapters<br></br><br></br>
                Collaboration<br></br>
                Intention <br></br>
                Rules
                </div>
            </a>

            </div>            

            </div>
        </div>




        <div className="group">
        Surveys from Week One
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
  </div>
  </>
  )
}

export default Week2