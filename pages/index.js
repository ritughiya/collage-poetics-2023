import 'animate.css';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
// import Typing from "../components/Typing"

function HomePage() {



  return (
    <>
    <div className="week week3">
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
        <div className="head">Collage Poetics</div>
    <div className="subhead">Week 3 - Materializing / Designing + Making</div>
    </div>

    <div className="portal last">
        <a href="/week2">
            Last Week
        </a>
    </div>

    <div className="click">
        <a href="https://docs.google.com/spreadsheets/d/1hBWCRV9fTf0BlN7hTykIjYfiBWIuMQpY7kmop6ilUCs/edit?usp=sharing" target="_blank">
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
            <img src="teeth.jpg"></img>
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
            
            <span class="hidden">Slides: Digital Art Overview</span>
            <div className="card white hidden">
            <a>
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
            <span class="hidden">Technical Demo by Alvin</span>
            <div className="card white hidden">
            <a>
            <div className="link">

                    <div className="dot"></div>
                <div className="point">

                </div>

            </div>
</a>


            </div>
        </div>

        <div className="group">
            Mommy by Maggie Lee
            <div className="card black">
            <a target="_blank" href="https://www.dropbox.com/s/9pt3ug1uz48vp5h/Maggie%20Lee%20-%20Mommy.mp4?dl=0">
            <div className="link">


            </div>
</a>


            </div>
        </div>



        </div>

    </div>
    {/* <Typing /> */}
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

export default HomePage