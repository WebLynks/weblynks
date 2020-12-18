var x = window.matchMedia("(max-width: 800px)");

function openNav() {
  document.getElementById("myNav").style.height = "100%";
  document.getElementById("navbar_btn").style.display = "none";
  document.getElementById("heading").style.zIndex = "-1";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  if(x.matches)
  {
    document.getElementById("navbar_btn").style.display = "block";
    document.getElementById("heading").style.zIndex = "0";
  } 
}

window.onscroll = function()
{
    if(window.pageYOffset == 0)
    {
        document.querySelector(".nav_div").classList.remove("navbar_row");
        document.querySelector(".header_block").style.color = "RGB(243, 244, 246)";
        if(x.matches)
        {
            var c = document.querySelector("#navbar_btn").children;
            var i;
            for(i=0;i<3;i++)
            {
                c[i].style.backgroundColor = "white";
            }
        }
        else
        {
            var c = document.querySelector(".navbar_custom").children;
            var i;
            for(i=0;i<c.length;i++)
            {
                c[i].style.color = "white";
                c[i].style.textShadow = "1px 1px 4px black";
            }
        }
    }
    else
    {
        document.querySelector(".nav_div").classList.add("navbar_row");
        document.querySelector(".header_block").style.color = "RGB(60, 75, 105)";
        if(x.matches)
        {
            var c = document.getElementsByClassName("bar");
            var i;
            for(i=0;i<3;i++)
            {
                c[i].style.backgroundColor = "RGB(60, 75, 105)";
            }
        }
        else
        {
            var c = document.querySelector(".navbar_custom").children;
            var i;
            for(i=0;i<c.length;i++)
            {
                c[i].style.color = "RGB(60, 75, 105)";
                c[i].style.textShadow = "0 0 black";
            }
        }
    }
}