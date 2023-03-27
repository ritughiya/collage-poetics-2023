import 'animate.css';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Typing4 from "../components/Typing4"

function HomePage() {



  return (
    <>
    <div className="week week7">
    <Head>
    <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
    <title>collage poetics 2023</title>
    </Head>
  <div className="text">
  <div className="sunheader">

<img src="/sunflare.png" layout="fill"></img>

</div>
    <div className="header">
        <div className="head"><a href="https://collage-poetics.com/">Collage Poetics</a></div>
    <div className="subhead">Part 2: Studio </div>

    </div>



    {/* <div className="portal journal">
        <a href="https://docs.google.com/document/d/17thFROeYoqlPC47DXvapOj9uYkCKLvwbkHZBQEZFyVk/edit?usp=sharing" target="_blank">
            Journal Prompts
        </a>
    </div> */}

    {/* <div className="portal inspiration">
        <a href="https://www.are.na/collage-poetics" target="_blank">
            Class Inspiration
        </a>
    </div> */}

    <div className="portal last">
        <a href="/week1">
            Part 1
        </a>
    </div>

    <div className="click">
        <a href="https://docs.google.com/spreadsheets/d/1hBWCRV9fTf0BlN7hTykIjYfiBWIuMQpY7kmop6ilUCs/edit#gid=0" target="_blank">
            office hours
        </a>
    </div>

    <div className="container">
    <div className="row">
        <div className="group animate__animated animate__bounceInDown">
            Syllabus
            <a className="pdf" target="_blank" href="https://docs.google.com/document/d/1FAHL7zy8U_gcXnkgR9roEQUo_wpfH9uXnH4tzgRgv_M/edit?usp=sharing">
            <img src="/pdf.png" layout="fill"></img>
</a>
            
        </div>


        <div className="group jen">
            
            P2 Slides
            <a target="_blank" href="https://collage-poetics.com/Collage-Poetics-P2.pdf">
            <img src="/jen.png" layout="fit"></img>


</a>


        </div>
        </div>
        <div className="desc">
    Part 1 of this course was to tease out the conceptual nature of your project; Part 2 is to work on the technical nature of your project . . .<br></br> 
    Making a web piece? It’s time to code. if you’re making an installation it’s time to make the parts – The class time is yours to use<br></br>
    
    </div>
        <div className="row">

        <div className="group">
        1:1 Meeting Schedule
            <div className="cardcontainer">
            <div className="card bubble journal2">
            <a href="https://docs.google.com/spreadsheets/d/1hBWCRV9fTf0BlN7hTykIjYfiBWIuMQpY7kmop6ilUCs/edit?usp=sharing" target="_blank">
            <div className="link"></div>

            
            </a>

            </div>            

            </div>
        </div>


        </div>



        <div className="h2">References from the Past</div>

        <div className="row past">

<div className="group">
    
Day 1 Lecture - On Collage
    <div className="card white">
    <a target="_blank" href="/Collage-Poetics-2023-Day-1.pdf">
    <div className="link"></div>

</a>


    </div>
</div>

<div className="group">
Digital Art Projects Overview
    <div className="card white">
    
    <a target="_blank" href="/Collage-Poetics-2023-Week-3.pdf">
    <div className="link"></div>

</a>


    </div>
</div>

<div className="group">
Class Are.na / Inspiration
    <div className="card white">
    
    <a href="https://www.are.na/collage-poetics" target="_blank">
    <div className="link"></div>

</a>


    </div>
</div>

<div className="group">
Journal Prompts
    <div className="card white">
    
    <a href="https://docs.google.com/document/d/17thFROeYoqlPC47DXvapOj9uYkCKLvwbkHZBQEZFyVk/edit?usp=sharing" target="_blank">
    <div className="link"></div>

</a>


    </div>
</div>





</div>

<div className="h2">Demos</div>

<div className="row past">

<div className="group">

Into to DevTools
<div className="card white">
<a target="_blank" href="https://github.com/alvinashiatey/Dev-tools-workshop">
<div className="link"></div>

</a>


</div>
</div>

<div className="group">
Into to CDN

<div className="card white">

<a target="_blank" href="https://docs.google.com/document/d/1AnTAo7yiCFlsk7ayN8xkUmn1JqWsuidoht5hOOhMDBg/edit?usp=sharing">
<div className="link"></div>

</a>


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

export default HomePage